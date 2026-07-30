/*
* MIT License

* Copyright (c) 2026 Aspose Pty Ltd

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

import {
    GetResourceGroupsRequest,
    GetResourceGroupRequest,
    GetGroupedResourcesRequest,
    GetTaskGroupsRequest,
    GetTaskGroupRequest,
    GetGroupedTasksRequest,
} from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getResourceGroups function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "ProjectWithGroups.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetResourceGroupsRequest();
        request.name = fileName;
        request.folder = remotePath;

        const result = await tasksApi.getResourceGroups(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.groups).is.not.undefined.and.not.null;
        expect(result.body.groups.list).is.not.undefined.and.not.null;
        expect(result.body.groups.list.length).to.be.greaterThan(0);
    });
});

describe("getResourceGroup function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "ProjectWithGroups.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const listRequest = new GetResourceGroupsRequest();
        listRequest.name = fileName;
        listRequest.folder = remotePath;

        const listResult = await tasksApi.getResourceGroups(listRequest);

        expect(listResult.response.statusCode).to.equal(200);
        expect(listResult.body.groups.list.length).to.be.greaterThan(0);

        const groupUid = listResult.body.groups.list[0].uid;

        const request = new GetResourceGroupRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.groupUid = groupUid;

        const result = await tasksApi.getResourceGroup(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.group).is.not.undefined.and.not.null;
        expect(result.body.group.uid).to.equal(groupUid);
        expect(result.body.group.name).is.not.undefined.and.not.null;
    });
});

describe("getGroupedResources function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "ProjectWithGroups.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const listRequest = new GetResourceGroupsRequest();
        listRequest.name = fileName;
        listRequest.folder = remotePath;

        const listResult = await tasksApi.getResourceGroups(listRequest);

        expect(listResult.response.statusCode).to.equal(200);
        expect(listResult.body.groups.list.length).to.be.greaterThan(1);

        const groupUid = listResult.body.groups.list[1].uid;

        const request = new GetGroupedResourcesRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.groupUid = groupUid;

        const result = await tasksApi.getGroupedResources(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.buckets).is.not.undefined.and.not.null;
        expect(result.body.buckets.length).to.be.greaterThan(0);

        for (const bucket of result.body.buckets) {
            expect(bucket.key).is.not.undefined.and.not.null;
            expect(bucket.resources).is.not.undefined.and.not.null;
        }
    });
});

describe("getTaskGroups function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "ProjectWithGroups.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetTaskGroupsRequest();
        request.name = fileName;
        request.folder = remotePath;

        const result = await tasksApi.getTaskGroups(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.groups).is.not.undefined.and.not.null;
        expect(result.body.groups.list).is.not.undefined.and.not.null;
        expect(result.body.groups.list.length).to.be.greaterThan(1);
    });
});

describe("getTaskGroup function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "ProjectWithGroups.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const listRequest = new GetTaskGroupsRequest();
        listRequest.name = fileName;
        listRequest.folder = remotePath;

        const listResult = await tasksApi.getTaskGroups(listRequest);

        expect(listResult.response.statusCode).to.equal(200);
        expect(listResult.body.groups.list.length).to.be.greaterThan(1);

        const groupUid = listResult.body.groups.list[0].uid;

        const request = new GetTaskGroupRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.groupUid = groupUid;

        const result = await tasksApi.getTaskGroup(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.group).is.not.undefined.and.not.null;
        expect(result.body.group.uid).to.equal(groupUid);
        expect(result.body.group.name).to.equal("Percent complete");
        expect(result.body.group.groupCriteria).is.not.undefined.and.not.null;
        expect(result.body.group.groupCriteria.length).to.be.greaterThan(0);
    });
});

describe("getGroupedTasks function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "ProjectWithGroups.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const listRequest = new GetTaskGroupsRequest();
        listRequest.name = fileName;
        listRequest.folder = remotePath;

        const listResult = await tasksApi.getTaskGroups(listRequest);

        expect(listResult.response.statusCode).to.equal(200);
        expect(listResult.body.groups.list.length).to.be.greaterThan(1);

        const groupUid = listResult.body.groups.list[0].uid;

        const request = new GetGroupedTasksRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.groupUid = groupUid;

        const result = await tasksApi.getGroupedTasks(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.buckets).is.not.undefined.and.not.null;
        expect(result.body.buckets.length).to.be.greaterThan(0);

        for (const bucket of result.body.buckets) {
            expect(bucket.key).is.not.undefined.and.not.null;
            expect(bucket.tasks).is.not.undefined.and.not.null;
        }
    });
});
