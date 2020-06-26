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

import { PutRecalculateProjectRequest, PostTaskRequest, GetTaskRequest, PutTaskRequest, CalculationMode, ProjectValidationState, PutRecalculateProjectResourceFieldsRequest, PutRecalculateProjectWorkAsCompleteRequest, PutRecalculateProjectUncompleteWorkToStartAfterRequest } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("putRecalculateProject function", () => {
    it("should return response with code 200 and validation result", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "sample.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const postTaskRequest = new PostTaskRequest();
        postTaskRequest.name = fileName;
        postTaskRequest.folder = remotePath;
        postTaskRequest.taskName = "NewTaskName";

        const postTaskResult = await tasksApi.postTask(postTaskRequest);
        expect(postTaskResult.body.code).to.equal(201);

        const taskUid = postTaskResult.body.taskItem.uid;
        const getTaskRequest = new GetTaskRequest();
        getTaskRequest.name = fileName;
        getTaskRequest.folder = remotePath;
        getTaskRequest.taskUid = taskUid;

        const getTaskResult = await tasksApi.getTask(getTaskRequest)
        expect(getTaskResult.body.code).to.equal(200);
        expect(getTaskResult.body.task).not.undefined.and.not.null;

        const task = getTaskResult.body.task;
        task.name = "New task Name";
        task.actualStart = new Date(2000, 9, 20);
        task.actualFinish = new Date(2000, 9, 9);
        task.cost = 100;
        const putTaskRequest = new PutTaskRequest();
        putTaskRequest.task = task;
        putTaskRequest.taskUid = taskUid;
        putTaskRequest.name = fileName;
        putTaskRequest.folder = remotePath;
        putTaskRequest.recalculate = false;
        const putTaskResult = await tasksApi.putTask(putTaskRequest);
        expect(putTaskResult.body.code).to.equal(200);

        const putRecalculateProjectRequest = new PutRecalculateProjectRequest();
        putRecalculateProjectRequest.name = fileName;
        putRecalculateProjectRequest.fileName = fileName;
        putRecalculateProjectRequest.folder = remotePath;
        putRecalculateProjectRequest.mode = CalculationMode.None;
        putRecalculateProjectRequest.validate = true;
        const putRecalculateProjectResult = await tasksApi.putRecalculateProject(putRecalculateProjectRequest);
        expect(putRecalculateProjectResult.body.code).to.equal(200);
        expect(putRecalculateProjectResult.body.result.validationState).to.equal(ProjectValidationState.Valid);
    });
});

describe("putRecalculateProjectResourceFields function", () => {
    it("should return response with code 200", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new PutRecalculateProjectResourceFieldsRequest();
        request.name = fileName;
        request.folder = remotePath;

        const result = await tasksApi.putRecalculateProjectResourceFields(request);

        expect(result.response.statusCode).to.equal(200);
    });
});

describe("putRecalculateProjectUncompleteWorkToStartAfter function", () => {
    it("should return response with code 200", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new PutRecalculateProjectUncompleteWorkToStartAfterRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.after = new Date(2010, 9, 10);

        const result = await tasksApi.putRecalculateProjectUncompleteWorkToStartAfter(request);

        expect(result.response.statusCode).to.equal(200);
    });
});

describe("putRecalculateProjectWorkAsComplete function", () => {
    it("should return response with code 200", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new PutRecalculateProjectWorkAsCompleteRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.completeThrough = new Date(2010, 9, 10);

        const result = await tasksApi.putRecalculateProjectWorkAsComplete(request);

        expect(result.response.statusCode).to.equal(200);
    });
});