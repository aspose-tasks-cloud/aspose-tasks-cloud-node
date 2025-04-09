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

import { GetTaskLinksRequest, PostTaskLinkRequest, TaskLink, TaskLinkType, TimeUnitType, PutTaskLinkRequest, DeleteTaskLinkRequest } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getTaskLinks function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetTaskLinksRequest();
        request.name = fileName;
        request.folder = remotePath;

        const result = await tasksApi.getTaskLinks(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.taskLinks).is.not.undefined.and.not.null;
        expect(result.body.taskLinks.length).to.equal(24);
    });
});

describe("postTaskLink function", () => {
    it("should return response with code 200", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const taskLink = new TaskLink()
        taskLink.predecessorUid = 28;
        taskLink.successorUid = 30;
        taskLink.linkType = TaskLinkType.StartToStart;
        taskLink.lag = 9600;
        taskLink.lagFormat = TimeUnitType.Day;
        const request = new PostTaskLinkRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.taskLink = taskLink;

        const result = await tasksApi.postTaskLink(request);

        expect(result.response.statusCode).to.equal(200);
    });
});

describe("putTaskLinks function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const getRequest = new GetTaskLinksRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;

        let getResult = await tasksApi.getTaskLinks(getRequest);
        const taskLinkToEdit = getResult.body.taskLinks[0];

        // Modification of PredecessorUid and SuccessorUid fields is not supported.
        taskLinkToEdit.linkType = TaskLinkType.StartToFinish;
        taskLinkToEdit.lag = 9600;
        taskLinkToEdit.lagFormat = TimeUnitType.Day;

        const putRequest = new PutTaskLinkRequest();
        putRequest.name = fileName;
        putRequest.folder = remotePath;
        putRequest.index = 1;
        putRequest.taskLink = taskLinkToEdit;

        const putResult = await tasksApi.putTaskLink(putRequest);

        expect(putResult.response.statusCode).to.equal(200);

        getResult = await tasksApi.getTaskLinks(getRequest);
        
        expect(getResult.body.taskLinks[0].linkType).to.equal(TaskLinkType.StartToFinish);
        expect(getResult.body.taskLinks[0].lag).to.equal(9600);
        expect(getResult.body.taskLinks[0].lagFormat).to.equal(TimeUnitType.Day);
        expect(getResult.body.taskLinks[0].linkLagTimeSpan).to.equal("16:00:00");
    });
});

describe("deleteTaskLink function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const deleteRequest = new DeleteTaskLinkRequest();
        deleteRequest.name = fileName;
        deleteRequest.folder = remotePath;
        deleteRequest.index = 1;

        const deleteResult = await tasksApi.deleteTaskLink(deleteRequest);

        expect(deleteResult.response.statusCode).to.equal(200);

        const getRequest = new GetTaskLinksRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;

        const getResult = await tasksApi.getTaskLinks(getRequest);

        expect(getResult.response.statusCode).to.equal(200);
        expect(getResult.body.taskLinks).is.not.undefined.and.not.null;
        expect(getResult.body.taskLinks.length).to.equal(23);
    });
});
