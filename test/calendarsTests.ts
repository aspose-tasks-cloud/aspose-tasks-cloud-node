/*
* MIT License

* Copyright (c) 2019 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import { expect } from "chai";
import "mocha";

import { GetCalendarsRequest, GetCalendarRequest, PostCalendarRequest, Calendar, WeekDay, DayType, WorkingTime, PutCalendarRequest, DeleteCalendarRequest } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getCalendars function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";            
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetCalendarsRequest();
        request.name = fileName;
        request.folder = remotePath;
        const result = await tasksApi.getCalendars(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.calendars.list.length).to.equal(1); 
        expect(result.body.calendars.list[0].name).to.equal("Standard"); 
        expect(result.body.calendars.list[0].uid).to.equal(1);  
    });
})

describe("getCalendar function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";            
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetCalendarRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.calendarUid = 1;
        const result = await tasksApi.getCalendar(request);    

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.calendar.name).to.equal("Standard"); 
        expect(result.body.calendar.uid).to.equal(1);   
        expect(result.body.calendar.isBaseCalendar).is.true  
        expect(result.body.calendar.isBaselineCalendar).is.false   
        expect(result.body.calendar.days.length).to.equal(7);  
    });
});

describe("postCalendar function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";            
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request1 = new PostCalendarRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.calendar = new Calendar();
        request1.calendar.name = "My new calendar";
        const firstDay = new WeekDay();
        firstDay.dayType = DayType.Sunday;
        firstDay.dayWorking = false;
        const secondDay = new WeekDay();
        secondDay.dayType = DayType.Monday;
        secondDay.dayWorking = true;
        secondDay.fromDate = new Date(0, 0, 0, 8);
        secondDay.toDate = new Date(0, 0, 0, 17);
        const firstWorkingTime = new WorkingTime()
        firstWorkingTime.fromTime = new Date(Date.UTC(0, 0, 0, 8));
        firstWorkingTime.toTime = new Date(Date.UTC(0, 0, 0, 13));
        const secondWorkingTime = new WorkingTime()
        secondWorkingTime.fromTime = new Date(Date.UTC(0, 0, 0, 14));
        secondWorkingTime.toTime = new Date(Date.UTC(0, 0, 0, 17));
        secondDay.workingTimes = [firstWorkingTime, secondWorkingTime];
        request1.calendar.days = [firstDay, secondDay];
        request1.calendar.isBaseCalendar = false;
        request1.calendar.isBaselineCalendar = false;

        const result1 = await tasksApi.postCalendar(request1);
        expect(result1.body.code).to.equal(201);

        const createdCalendarUid = result1.body.calendarItem.uid;
        const request2 = new GetCalendarRequest();
        request2.name = fileName;
        request2.folder = remotePath;
        request2.calendarUid = createdCalendarUid;

        const result2 = await tasksApi.getCalendar(request2);   
        expect(result2.response.statusCode).to.equal(200);
        expect(result2.body.calendar).is.not.null.and.not.undefined; 
        expect(result2.body.calendar.name).to.equal("My new calendar");  
        expect(result2.body.calendar.days.length).to.equal(7); 

        const monday = result2.body.calendar.days.find(d => d.dayType === DayType.Monday);
        expect(monday).is.not.null.and.not.undefined; 
        expect(monday.workingTimes.length).to.equal(2);  
        expect(BaseTest.getTimeOnly(monday.workingTimes[0].fromTime)).to.eql(BaseTest.getTimeOnly(firstWorkingTime.fromTime));  
        expect(BaseTest.getTimeOnly(monday.workingTimes[0].toTime)).to.eql(BaseTest.getTimeOnly(firstWorkingTime.toTime));  
        expect(BaseTest.getTimeOnly(monday.workingTimes[1].fromTime)).to.eql(BaseTest.getTimeOnly(secondWorkingTime.fromTime));  
        expect(BaseTest.getTimeOnly(monday.workingTimes[1].toTime)).to.eql(BaseTest.getTimeOnly(secondWorkingTime.toTime));  
    });

    it("should return response with code 400 if workingTimes is empty for any working day", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";            
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new PostCalendarRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.calendar = new Calendar();
        request.calendar.name = "My new calendar";
        const firstDay = new WeekDay();
        firstDay.dayType = DayType.Sunday;
        firstDay.dayWorking = false;
        const secondDay = new WeekDay();
        secondDay.dayType = DayType.Monday;
        secondDay.dayWorking = true;
        secondDay.fromDate = new Date(0, 0, 0, 8);
        secondDay.toDate = new Date(0, 0, 0, 17);
        secondDay.workingTimes = [];
        request.calendar.days = [firstDay, secondDay];
        request.calendar.isBaseCalendar = false;
        request.calendar.isBaselineCalendar = false;

        try{
            expect(await tasksApi.postCalendar(request)).throw();
        } catch (e) { 
            expect(e.message).to.equal("Bad Request");
            expect(e.response.body.Error.Code).to.equal("InvalidParameters");
            expect(e.response.body.Error.Message).to.equal("Calendar should have at least one working time defined");
        }
    });
});

describe("putCalendar function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";            
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request1 = new PutCalendarRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.calendarUid = 1;
        request1.calendar = new Calendar();
        request1.calendar.uid = 1;
        request1.calendar.name = "Modified calendar";
        const firstDay = new WeekDay();
        firstDay.dayType = DayType.Sunday;
        firstDay.dayWorking = false;
        const secondDay = new WeekDay();
        secondDay.dayType = DayType.Monday;
        secondDay.dayWorking = true;
        secondDay.fromDate = new Date(Date.UTC(0, 0, 0, 8));
        secondDay.toDate = new Date(Date.UTC(0, 0, 0, 17));
        const firstWorkingTime = new WorkingTime()
        firstWorkingTime.fromTime = new Date(Date.UTC(0, 0, 0, 8));
        firstWorkingTime.toTime = new Date(Date.UTC(0, 0, 0, 13));
        const secondWorkingTime = new WorkingTime()
        secondWorkingTime.fromTime = new Date(Date.UTC(0, 0, 0, 14));
        secondWorkingTime.toTime = new Date(Date.UTC(0, 0, 0, 17));
        secondDay.workingTimes = [firstWorkingTime, secondWorkingTime];
        request1.calendar.days = [firstDay, secondDay];
        request1.calendar.isBaseCalendar = false;
        request1.calendar.isBaselineCalendar = false;

        const result1 = await tasksApi.putCalendar(request1);
        expect(result1.response.statusCode).to.equal(200);

        const request2 = new GetCalendarRequest();
        request2.name = fileName;
        request2.folder = remotePath;
        request2.calendarUid = 1;

        const result2 = await tasksApi.getCalendar(request2);   
        expect(result2.response.statusCode).to.equal(200);
        expect(result2.body.calendar).is.not.null.and.not.undefined; 
        expect(result2.body.calendar.name).to.equal("Modified calendar");  
        expect(result2.body.calendar.days.length).to.equal(7); 

        const monday = result2.body.calendar.days.find(d => d.dayType === DayType.Monday);
        expect(monday).is.not.null.and.not.undefined; 
        expect(monday.workingTimes.length).to.equal(2);  
        expect(BaseTest.getTimeOnly(monday.workingTimes[0].fromTime)).to.eql(BaseTest.getTimeOnly(firstWorkingTime.fromTime));  
        expect(BaseTest.getTimeOnly(monday.workingTimes[0].toTime)).to.eql(BaseTest.getTimeOnly(firstWorkingTime.toTime));  
        expect(BaseTest.getTimeOnly(monday.workingTimes[1].fromTime)).to.eql(BaseTest.getTimeOnly(secondWorkingTime.fromTime));  
        expect(BaseTest.getTimeOnly(monday.workingTimes[1].toTime)).to.eql(BaseTest.getTimeOnly(secondWorkingTime.toTime));    
    });
});

describe("deleteCalendar function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "CalendarWorkWeeks.mpp";            
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request1 = new DeleteCalendarRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.calendarUid = 3;

        const result1 = await tasksApi.deleteCalendar(request1);
        expect(result1.response.statusCode).to.equal(200);

        const request2 = new GetCalendarsRequest();
        request2.name = fileName;
        request2.folder = remotePath;

        const result2 = await tasksApi.getCalendars(request2);   
        expect(result2.response.statusCode).to.equal(200); 
        expect(result2.body.calendars.list).is.not.null.and.not.undefined;
        expect(result2.body.calendars.list.length).to.equal(1); 
        expect(result2.body.calendars.list[0].uid).to.equal(1); 
    });
});