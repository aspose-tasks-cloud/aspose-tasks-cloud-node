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

import { GetTaskRecurringInfoRequest, RecurrencePattern, WeekDayType, OrdinalNumber, PutTaskRecurringInfoRequest, PostTaskRecurringInfoRequest, RecurringInfo, GetTaskRequest } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getTaskRecurringInfo function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "sample.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetTaskRecurringInfoRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.taskUid = 6;

        const result = await tasksApi.getTaskRecurringInfo(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.recurringInfo).is.not.undefined.and.not.null;

        const entity  = result.body.recurringInfo;
        expect(entity.occurrences).to.equal(2);
        expect(entity.recurrencePattern).to.equal(RecurrencePattern.Monthly);
        expect(entity.useEndDate).to.equal(true);
        expect(entity.monthlyUseOrdinalDay).to.equal(false);
        expect(entity.monthlyDay).to.equal(1);
        expect(entity.weeklyDays).to.equal(WeekDayType.None);
        expect(entity.yearlyOrdinalNumber).to.equal(OrdinalNumber.Second);
    });
});

describe("putTaskRecurringInfo function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "sample.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const getRequest = new GetTaskRecurringInfoRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;
        getRequest.taskUid = 6;

        let getResult = await tasksApi.getTaskRecurringInfo(getRequest);

        expect(getResult.response.statusCode).to.equal(200);
        expect(getResult.body.recurringInfo).is.not.undefined.and.not.null;        

        const recurringInfo = getResult.body.recurringInfo;
        recurringInfo.occurrences = 10;
        const putRequest = new PutTaskRecurringInfoRequest();
        putRequest.name = fileName;
        putRequest.folder = remotePath;
        putRequest.taskUid = 6;
        putRequest.recurringInfo = recurringInfo;

        const putResult = await tasksApi.putTaskRecurringInfo(putRequest);

        expect(putResult.response.statusCode).to.equal(200);

        getResult = await tasksApi.getTaskRecurringInfo(getRequest);

        const entity  = getResult.body.recurringInfo;
        expect(entity.occurrences).to.equal(10);
        expect(entity.recurrencePattern).to.equal(RecurrencePattern.Monthly);
        expect(entity.useEndDate).to.equal(true);
        expect(entity.monthlyUseOrdinalDay).to.equal(false);
        expect(entity.monthlyDay).to.equal(1);
        expect(entity.weeklyDays).to.equal(WeekDayType.None);
        expect(entity.yearlyOrdinalNumber).to.equal(OrdinalNumber.Second);
    });
});

describe("postTaskRecurringInfo function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "sample.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const recurringInfo = new RecurringInfo();
        recurringInfo.recurrencePattern = RecurrencePattern.Weekly;
        recurringInfo.occurrences = 4;
        recurringInfo.weeklyRepetitions = 3;
        recurringInfo.weeklyDays = WeekDayType.Thursday;
        recurringInfo.startDate = new Date(Date.UTC(2018, 0, 1, 8, 0, 0));
        recurringInfo.endDate = new Date(Date.UTC(2018, 11, 31));
        recurringInfo.useEndDate = true;
        const postRequest = new PostTaskRecurringInfoRequest();
        postRequest.name = fileName;
        postRequest.folder = remotePath;
        postRequest.recurringInfo = recurringInfo;
        postRequest.parentTaskUid = 0;
        postRequest.taskName = "New recurring task";
        postRequest.calendarName = "Standard";

        const postResult = await tasksApi.postTaskRecurringInfo(postRequest);

        expect(postResult.body.code).to.equal(201);
        expect(postResult.body.taskItem).is.not.undefined.and.not.null;       

        let getRequest = new GetTaskRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;
        getRequest.taskUid = postResult.body.taskItem.uid;

        let getResult = await tasksApi.getTask(getRequest);

        expect(getResult.response.statusCode).to.equal(200);
        expect(getResult.body.task.subtasksUids.length).to.equal(18);

        getRequest = new GetTaskRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;
        getRequest.taskUid = Math.max(...getResult.body.task.subtasksUids);

        getResult = await tasksApi.getTask(getRequest);

        expect(getResult.body.task.start).to.eql(new Date(2018, 11, 27, 8, 0, 0));
    });
});