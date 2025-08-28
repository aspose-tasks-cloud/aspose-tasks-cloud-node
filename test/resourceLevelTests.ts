/*
* MIT License

* Copyright (c) 2025 Aspose Pty Ltd

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

import { ClearLevelingRequest, LevelingOptions, LevelingOrder, LevelTasksRequest } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("LevelTasks function", () => {
    it("should return response with code 200 and correct data, without body", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "sample.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new LevelTasksRequest();
        request.name = fileName;
        request.folder = remotePath;

        const result = await tasksApi.levelTasks(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.affectedTaskUids).is.not.undefined.and.not.null;
        expect(result.body.affectedTaskUids.length).to.equal(2);        
    });
    it("should return response with code 200 and correct data, with specified body", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "sample.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new LevelTasksRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.options = new LevelingOptions;
        request.options.levelingOrder = LevelingOrder.Standard;
        request.options.resourceUids = [2, 999];

        const result = await tasksApi.levelTasks(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.affectedTaskUids).is.not.undefined.and.not.null;
        expect(result.body.affectedTaskUids.length).to.equal(1);        
    });
});

describe("ClearLeveling function", () => {
    it("should return response with code 200 and correct data, without body", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "sample.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new ClearLevelingRequest();
        request.name = fileName;
        request.folder = remotePath;

        const result = await tasksApi.clearLeveling(request);

        expect(result.response.statusCode).to.equal(200);     
    });
    it("should return response with code 200 and correct data, with specified task uids", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "sample.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new ClearLevelingRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.taskUids = [24, 9999];

        const result = await tasksApi.clearLeveling(request);

        expect(result.response.statusCode).to.equal(200);       
    });
});
