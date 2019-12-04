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

import { GetCalendarsRequest, GetCalendarWorkWeeksRequest, DayType } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getCalendarWorkWeeks function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "CalendarWorkWeeks.mpp";            
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request1 = new GetCalendarsRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        const result1 = await tasksApi.getCalendars(request1);
        expect(result1.response.statusCode).to.equal(200);
        expect(result1.body.calendars.list).is.not.null.and.undefined;  

        const calendarUid = result1.body.calendars.list.find(c => c.name === "Test work weeks").uid;
        const request2 = new GetCalendarWorkWeeksRequest();
        request2.name = fileName;
        request2.folder = remotePath;
        request2.calendarUid = calendarUid;
        const result2 = await tasksApi.getCalendarWorkWeeks(request2);
        expect(result2.response.statusCode).to.equal(200);
        expect(result2.body.calendarWorkWeeks).is.not.null.and.undefined;  
        expect(result2.body.calendarWorkWeeks.length).to.equal(1);  
        const workWeek = result2.body.calendarWorkWeeks[0];
        expect(workWeek.name).to.equal("Work week 1");  
        expect(BaseTest.getDateOnly(workWeek.fromDate)).to.eql(BaseTest.getDateOnly(new Date(2018, 0, 1)));  
        expect(BaseTest.getDateOnly(workWeek.toDate)).to.eql(BaseTest.getDateOnly(new Date(2018, 0, 7, 8)));  

        expect(workWeek.weekDays.length).to.equal(4);  
        expect(workWeek.weekDays[0].dayWorking).is.true;  
        expect(workWeek.weekDays[0].dayType).to.equal(DayType.Monday);
        expect(workWeek.weekDays[0].workingTimes.length).to.equal(1);
        expect(BaseTest.getTimeOnly(workWeek.weekDays[0].workingTimes[0].fromTime)).to.eql(new Date(Date.UTC(0, 0, 0, 11, 30, 0)));  
        expect(BaseTest.getTimeOnly(workWeek.weekDays[0].workingTimes[0].toTime)).to.eql(new Date(Date.UTC(0, 0, 0, 12, 30, 0)));  

        expect(workWeek.weekDays[1].dayWorking).is.false;  
        expect(workWeek.weekDays[1].dayType).to.equal(DayType.Tuesday);
        expect(workWeek.weekDays[1].workingTimes.length).to.equal(0);

        expect(workWeek.weekDays[2].dayWorking).is.true;  
        expect(workWeek.weekDays[2].dayType).to.equal(DayType.Wednesday);
        expect(workWeek.weekDays[2].workingTimes.length).to.equal(2);
        expect(BaseTest.getTimeOnly(workWeek.weekDays[2].workingTimes[0].fromTime)).to.eql(new Date(Date.UTC(0, 0, 0, 9, 30, 0)));  
        expect(BaseTest.getTimeOnly(workWeek.weekDays[2].workingTimes[0].toTime)).to.eql(new Date(Date.UTC(0, 0, 0, 13, 23, 0)));  
        expect(BaseTest.getTimeOnly(workWeek.weekDays[2].workingTimes[1].fromTime)).to.eql(new Date(Date.UTC(0, 0, 0, 14, 45, 0)));  
        expect(BaseTest.getTimeOnly(workWeek.weekDays[2].workingTimes[1].toTime)).to.eql(new Date(Date.UTC(0, 0, 0, 18, 45, 0)));  

        expect(workWeek.weekDays[3].dayWorking).is.true;  
        expect(workWeek.weekDays[3].dayType).to.equal(DayType.Saturday);
        expect(workWeek.weekDays[3].workingTimes.length).to.equal(1);
        expect(BaseTest.getTimeOnly(workWeek.weekDays[3].workingTimes[0].fromTime)).to.eql(new Date(Date.UTC(0, 0, 0, 9, 0, 0)));  
        expect(BaseTest.getTimeOnly(workWeek.weekDays[3].workingTimes[0].toTime)).to.eql(new Date(Date.UTC(0, 0, 0, 10, 0, 0)));  
    });
})