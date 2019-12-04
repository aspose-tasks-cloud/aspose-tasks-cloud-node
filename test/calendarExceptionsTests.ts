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

import { GetCalendarExceptionsRequest, DayType, Month, MonthItemType, MonthPosition, CalendarExceptionType, PostCalendarExceptionRequest, CalendarException, WorkingTime, PutCalendarExceptionRequest, DeleteCalendarExceptionRequest } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getCalendarExceptions function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Calenar_with_exception.mpp";            
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetCalendarExceptionsRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.calendarUid = 1;

        const result = await tasksApi.getCalendarExceptions(request);
        expect(result.response.statusCode).to.equal(200);
        expect(result.body.calendarExceptions).is.not.undefined.and.not.null    ;
        expect(result.body.calendarExceptions.length).to.equal(1);

        const calendarException = result.body.calendarExceptions[0];
        expect(calendarException.dayWorking).is.true; 
        expect(calendarException.daysOfWeek).to.eql( [DayType.Monday]); 
        expect(calendarException.fromDate).to.eql(new Date(2018, 1, 13)); 
        expect(calendarException.toDate).to.eql(new Date(2018, 3, 9, 23, 59)); 
        expect(calendarException.month).to.eql(Month.Undefined); 
        expect(calendarException.monthItem).to.eql(MonthItemType.Undefined); 
        expect(calendarException.monthPosition).to.eql(MonthPosition.Undefined); 
        expect(calendarException.type).to.eql(CalendarExceptionType.Weekly); 
        expect(calendarException.occurrences).to.eql(8); 
        expect(calendarException.period).to.eql(1); 
        expect(calendarException.workingTimes.length).to.eql(2); 
        expect(calendarException.workingTimes[0].fromTime).to.eql(new Date(-61851567600000)); 
        expect(calendarException.workingTimes[0].toTime).to.eql(new Date(-61851554760000)); 
        expect(calendarException.workingTimes[1].fromTime).to.eql(new Date(-61851545340000)); 
        expect(calendarException.workingTimes[1].toTime).to.eql(new Date(-61851537000000)); 
    });
});

describe("postCalendarException function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "New_project_2013.mpp";            
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const exception = new CalendarException();
        exception.workingTimes = [];
        exception.daysOfWeek = [];
        exception.name = "Non-working day exception";
        exception.dayWorking = false;
        exception.fromDate = new Date(Date.UTC(2014, 9, 27, 8));
        exception.toDate = new Date(Date.UTC(2015, 7, 5, 8));
        exception.occurrences = 10;
        exception.type = CalendarExceptionType.MonthlyByDay;
        exception.enteredByOccurrences = true;
        exception.monthDay = 5;
        exception.period = 1;
        const request1 = new PostCalendarExceptionRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.calendarUid = 1;
        request1.calendarException = exception;

        const result1 = await tasksApi.postCalendarException(request1);
        expect(result1.body.code).to.equal(201);       

        const request2 = new GetCalendarExceptionsRequest();
        request2.name = fileName;
        request2.folder = remotePath;
        request2.calendarUid = 1;

        const result2 = await tasksApi.getCalendarExceptions(request2);
        expect(result2.response.statusCode).to.equal(200);
        expect(result2.body.calendarExceptions).is.not.undefined.and.not.null;
        expect(result2.body.calendarExceptions.length).to.equal(1);
        assertCalendarExceptionsAreEqual(exception, result2.body.calendarExceptions[0]);
    });
});

describe("putCalendarException function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Calenar_with_exception.mpp";   
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);        

        const request1 = new GetCalendarExceptionsRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.calendarUid = 1;

        let result1 = await tasksApi.getCalendarExceptions(request1);
        expect(result1.response.statusCode).to.equal(200);

        const exception = result1.body.calendarExceptions[0];   
        const workingTime = new WorkingTime()
        workingTime.fromTime = new Date(Date.UTC(10, 0, 1, 9, 8));
        workingTime.toTime = new Date(Date.UTC(10, 0, 1, 17, 8));   
        exception.daysOfWeek = [ DayType.Thursday, DayType.Friday ];
        exception.workingTimes = [workingTime];
        exception.occurrences = 10;
        exception.enteredByOccurrences = true;
        exception.period = 1;
        exception.name = "Non-working day exception";
        exception.dayWorking = true;
        exception.fromDate = new Date(Date.UTC(2014, 9, 27, 8));
        exception.toDate = new Date(Date.UTC(2015, 7, 5, 8));
        
        const request2 = new PutCalendarExceptionRequest();
        request2.name = fileName;
        request2.folder = remotePath;
        request2.calendarUid = 1;
        request2.index = exception.index;
        request2.calendarException = exception;

        const result2 = await tasksApi.putCalendarException(request2);
        expect(result2.body.code).to.equal(200);

        result1 = await tasksApi.getCalendarExceptions(request1);
        expect(result1.body.code).to.equal(200);       

        expect(result1.body.calendarExceptions).is.not.undefined.and.not.null;
        expect(result1.body.calendarExceptions.length).to.equal(1);
        assertCalendarExceptionsAreEqual(exception, result1.body.calendarExceptions[0]);
    });
});

describe("deleteCalendarExceptions function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Calenar_with_exception.mpp";            
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request1 = new DeleteCalendarExceptionRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.calendarUid = 1;
        request1.index = 1

        const result1 = await tasksApi.deleteCalendarException(request1);
        expect(result1.response.statusCode).to.equal(200);

        const request2 = new GetCalendarExceptionsRequest();
        request2.name = fileName;
        request2.folder = remotePath;
        request2.calendarUid = 1;

        const result2 = await tasksApi.getCalendarExceptions(request2);
        expect(result2.response.statusCode).to.equal(200);
        expect(result2.body.calendarExceptions).is.not.undefined.and.not.null    ;
        expect(result2.body.calendarExceptions.length).to.equal(0);
    });
});

function assertCalendarExceptionsAreEqual(actual :CalendarException, expected :CalendarException) {
    expect(actual.name).to.equal(expected.name);
    expect(actual.dayWorking).to.equal(expected.dayWorking);
    expect(actual.enteredByOccurrences).to.equal(expected.enteredByOccurrences);
    expect(BaseTest.getDateOnly(actual.fromDate)).to.eql(BaseTest.getDateOnly(expected.fromDate));

    expect(actual.monthDay).to.equal(expected.monthDay);
    expect(actual.occurrences).to.equal(expected.occurrences);
    expect(actual.period).to.equal(expected.period);
    expect(BaseTest.getDateOnly(actual.toDate)).to.eql(BaseTest.getDateOnly(expected.toDate));
    expect(actual.type).to.equal(expected.type);
    expect(actual.workingTimes.length).to.equal(expected.workingTimes.length);
    for(let i = 0; i < actual.workingTimes.length; i++)
    {
        expect(BaseTest.getDateOnly(actual.workingTimes[i].fromTime)).to.eql(BaseTest.getDateOnly(expected.workingTimes[i].fromTime));
        expect(BaseTest.getDateOnly(actual.workingTimes[i].toTime)).to.eql(BaseTest.getDateOnly(expected.workingTimes[i].toTime));
    }
    expect(actual.daysOfWeek.length).to.equal(expected.daysOfWeek.length);
    for(let i = 0; i < actual.daysOfWeek.length; i++)
    {
        expect(actual.daysOfWeek[i]).to.equal(expected.daysOfWeek[i]);
    }
}