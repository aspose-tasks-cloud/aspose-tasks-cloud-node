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

import { GetTasksRequest, GetTaskRequest, DeleteTaskRequest, PostTaskRequest, PutTaskRequest, CalculationMode, GetTaskAssignmentsRequest, PutMoveTaskRequest, PutMoveTaskToSiblingRequest } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getTasks function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Project2016.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetTasksRequest();
        request.name = fileName;
        request.folder = remotePath;

        const result = await tasksApi.getTasks(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.tasks).is.not.undefined.and.not.null;
        expect(result.body.tasks.taskItem.length).to.equal(6);

        const firstTask  = result.body.tasks.taskItem.find(t => t.uid == 5);
        expect(firstTask).is.not.undefined.and.not.null;
        expect(firstTask.name).to.equal("Summary Task 1");
        expect(firstTask.start).to.eql(new Date(2015, 7, 3, 8, 0, 0));
        expect(firstTask.finish).to.eql(new Date(2015, 7, 6, 17, 0, 0));
        expect(firstTask.link.href).to.eql("/5");
    });
});

describe("getTask function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Project2016.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetTaskRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.taskUid = 5;

        const result = await tasksApi.getTask(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.task).is.not.undefined.and.not.null;
        expect(result.body.task.uid).to.equal(5);
        expect(result.body.task.subtasksUids).to.eql([1, 2, 3, 4]);
        expect(result.body.task.name).to.equal("Summary Task 1");
        expect(result.body.task.start).to.eql(new Date(2015, 7, 3, 8, 0, 0));
        expect(result.body.task.finish).to.eql(new Date(2015, 7, 6, 17, 0, 0));
        expect(result.body.task.remainingWork).to.equal("1.08:00:00");
        expect(result.body.task.workVariance).to.equal(1920);
    });
});

describe("deleteTask function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Project2016.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const deleteRequest = new DeleteTaskRequest();
        deleteRequest.name = fileName;
        deleteRequest.folder = remotePath;
        deleteRequest.taskUid = 4;

        const deleteResult = await tasksApi.deleteTask(deleteRequest);

        expect(deleteResult.response.statusCode).to.equal(200);

        const getRequest = new GetTasksRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;

        const getResult = await tasksApi.getTasks(getRequest);

        expect(getResult.response.statusCode).to.equal(200);
        expect(getResult.body.tasks).is.not.undefined.and.not.null;
        expect(getResult.body.tasks.taskItem.length).to.equal(5);

        const task  = getResult.body.tasks.taskItem.find(t => t.uid == 4);
        expect(task).is.undefined;
    });
});

describe("postTask function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Project2016.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const postRequest = new PostTaskRequest();
        postRequest.name = fileName;
        postRequest.folder = remotePath;
        postRequest.beforeTaskId = 4;
        postRequest.taskName = "New task name";

        const postResult = await tasksApi.postTask(postRequest);

        expect(postResult.body.code).to.equal(201);
        expect(postResult.body.taskItem).is.not.undefined.and.not.null;

        const getRequest = new GetTaskRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;
        getRequest.taskUid = postResult.body.taskItem.uid;

        const getResult = await tasksApi.getTask(getRequest);

        expect(getResult.response.statusCode).to.equal(200);
        expect(getResult.body.task).is.not.undefined.and.not.null;
    });
});

describe("putTask function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Project2016.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);        

        const getRequest = new GetTaskRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;
        getRequest.taskUid = 4;

        let getResult = await tasksApi.getTask(getRequest);

        const task = getResult.body.task;
        task.name = "Modified task name";
        task.isManual = true;
        task.manualStart = new Date(Date.UTC(2015, 9, 1, 9, 15, 0));
        task.manualFinish = new Date(Date.UTC(2015, 9, 1, 17, 15, 0));

        const putRequest = new PutTaskRequest();
        putRequest.name = fileName;
        putRequest.folder = remotePath;
        putRequest.taskUid = 4;
        putRequest.recalculate = false;
        putRequest.mode = CalculationMode.None;
        putRequest.task = task;

        const putResult = await tasksApi.putTask(putRequest);

        expect(putResult.body.code).to.equal(200);

        getResult = await tasksApi.getTask(getRequest);

        expect(getResult.response.statusCode).to.equal(200);
        expect(getResult.body.task).is.not.undefined.and.not.null;
        expect(getResult.body.task.name).to.equal("Modified task name");
        expect(getResult.body.task.isManual).is.true;
        expect(getResult.body.task.manualStart).to.eql(new Date(2015, 9, 1, 9, 15, 0));
        expect(getResult.body.task.manualFinish).to.eql(new Date(2015, 9, 1, 17, 15, 0));
    });
});

describe("getTaskAssignments function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetTaskAssignmentsRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.taskUid = 1;

        const result = await tasksApi.getTaskAssignments(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.assignments).is.not.undefined.and.not.null;
    });
});

describe("putMoveTask function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "sample.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);        

        const getRequest = new GetTaskRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;
        getRequest.taskUid = 6;

        let getResult = await tasksApi.getTask(getRequest);

        expect(getResult.response.statusCode).to.equal(200);
        expect(getResult.body.task.subtasksUids.find(t => t == 10)).is.undefined;

        const putMoveRequest = new PutMoveTaskRequest();
        putMoveRequest.name = fileName;
        putMoveRequest.folder = remotePath;
        putMoveRequest.parentTaskUid = 6;
        putMoveRequest.taskUid = 10;

        const putMoveResult = await tasksApi.putMoveTask(putMoveRequest);

        expect(putMoveResult.body.code).to.equal(200);

        getResult = await tasksApi.getTask(getRequest);

        expect(getResult.response.statusCode).to.equal(200);
        expect(getResult.body.task.subtasksUids.find(t => t == 10)).is.not.undefined.and.not.null;
    });
});

describe("putMoveTaskToSibling function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath); 

        const putMoveToSiblingRequest = new PutMoveTaskToSiblingRequest();
        putMoveToSiblingRequest.name = fileName;
        putMoveToSiblingRequest.folder = remotePath;
        putMoveToSiblingRequest.beforeTaskUid = 41;
        putMoveToSiblingRequest.taskUid = 40;

        const putMoveToSiblingResult = await tasksApi.putMoveTaskToSibling(putMoveToSiblingRequest);

        expect(putMoveToSiblingResult.body.code).to.equal(200);       

        const getRequest = new GetTaskRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;
        getRequest.taskUid = 38;

        const getResult = await tasksApi.getTask(getRequest);

        expect(getResult.response.statusCode).to.equal(200);
        expect(getResult.body.task.subtasksUids).to.eql([39, 40, 41]);;
    });
    it("should return response with code 404 if input uid is not found", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath); 

        const putMoveToSiblingRequest = new PutMoveTaskToSiblingRequest();
        putMoveToSiblingRequest.name = fileName;
        putMoveToSiblingRequest.folder = remotePath;
        putMoveToSiblingRequest.beforeTaskUid = -1;
        putMoveToSiblingRequest.taskUid = 99999;

        try{
            expect(await tasksApi.putMoveTaskToSibling(putMoveToSiblingRequest)).throw();
        } catch (e) { 
            expect(e.message).to.equal("Not Found");
            expect(e.response.body.Error.Code).to.equal("TaskDoesntExist");
            expect(e.response.body.Error.Message).to.equal("Task with 99999 Uid doesn't exist");
        }
    });
});