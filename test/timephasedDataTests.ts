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

import { GetTaskTimephasedDataRequest, TimephasedDataType, GetResourceTimephasedDataRequest, GetAssignmentTimephasedDataRequest } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getTaskTimephasedData function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetTaskTimephasedDataRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.taskUid = 27;
        request.type = TimephasedDataType.TaskWork;

        const result = await tasksApi.getTaskTimephasedData(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.items).is.not.undefined.and.not.null;
        expect(result.body.items.length).at.least(1);
        
        for (let i = 0; i < result.body.items.length; i++)
        {
            expect(result.body.items[i].timephasedDataType).to.equal(TimephasedDataType.TaskWork);
            expect(result.body.items[i].uid).to.equal(27);
        }
    });
});

describe("getResourceTimephasedData function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetResourceTimephasedDataRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.resourceUid = 1;
        request.type = TimephasedDataType.ResourceWork;

        const result = await tasksApi.getResourceTimephasedData(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.items).is.not.undefined.and.not.null;
        expect(result.body.items.length).at.least(1);
        
        for (let i = 0; i < result.body.items.length; i++)
        {
            expect(result.body.items[i].timephasedDataType).to.equal(TimephasedDataType.ResourceWork);
            expect(result.body.items[i].uid).to.equal(1);
        }
    });
});

describe("getAssignmentTimephasedData function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetAssignmentTimephasedDataRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.assignmentUid = 66;
        request.type = TimephasedDataType.AssignmentWork;

        const result = await tasksApi.getAssignmentTimephasedData(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.items).is.not.undefined.and.not.null;
        expect(result.body.items.length).at.least(1);
        
        for (let i = 0; i < result.body.items.length; i++)
        {
            expect(result.body.items[i].timephasedDataType).to.equal(TimephasedDataType.AssignmentWork);
            expect(result.body.items[i].uid).to.equal(66);
        }
    });
});