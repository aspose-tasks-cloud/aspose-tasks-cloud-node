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

import { GetResourcesRequest, PostResourceRequest, PutResourceRequest, GetResourceRequest, CalculationMode, Baseline, BaselineType, DeleteResourceRequest } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getResources function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetResourcesRequest();
        request.name = fileName;
        request.folder = remotePath;

        const result = await tasksApi.getResources(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.resources).is.not.undefined.and.not.null;
        expect(result.body.resources.resourceItem.length).to.equal(2);
        expect(result.body.resources.resourceItem[1].name).to.equal("Project manager");
        expect(result.body.resources.resourceItem[1].uid).to.equal(1);
        expect(result.body.resources.resourceItem[1].id).to.equal(1);
    });
});

describe("postResource function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const getRequest = new GetResourcesRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;

        let getResult = await tasksApi.getResources(getRequest);

        expect(getResult.body.code).to.equal(200);

        const count = getResult.body.resources.resourceItem.length;

        const postRequest = new PostResourceRequest();
        postRequest.name = fileName;
        postRequest.folder = remotePath;
        postRequest.resourceName = "new resource";

        const postResult = await tasksApi.postResource(postRequest);

        expect(postResult.body.code).to.equal(201);

        getResult = await tasksApi.getResources(getRequest);

        expect(getResult.body.resources.resourceItem.length).to.equal(count + 1);
        const addedResource = getResult.body.resources.resourceItem.find(r => r.uid == postResult.body.resourceItem.uid);
        expect(addedResource.name).to.equal("new resource");
    });
});

describe("putResource function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "sample.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const getRequest = new GetResourceRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;
        getRequest.resourceUid = 1;

        const getResult = await tasksApi.getResource(getRequest);

        expect(getResult.body.code).to.equal(200);
        expect(getResult.body.resource).is.not.undefined.and.not.null;

        const baseline = new Baseline();
        baseline.baselineNumber = BaselineType.Baseline1;
        baseline.cost = 44;
        const resource = getResult.body.resource;
        resource.name = "Modified Resource1";
        resource.cost = 200;
        resource.start = new Date(Date.UTC(2000, 9, 10));
        resource.work = "4.04:10:00";
        resource.finish = new Date(Date.UTC(2000, 9, 10));
        resource.overtimeWork = "4.04:00:00";
        resource.standardRate = 101;
        resource.baselines = [baseline];

        const putRequest = new PutResourceRequest();
        putRequest.name = fileName;
        putRequest.folder = remotePath;
        putRequest.resourceUid = 1;
        putRequest.recalculate = false;
        putRequest.resource = resource;
        putRequest.mode = CalculationMode.None;

        const putResult = await tasksApi.putResource(putRequest);

        expect(putResult.body.code).to.equal(200);

        expect(putResult.body.resource.baselines.length).to.equal(1);
        expect(putResult.body.resource.baselines[0].baselineNumber).to.equal(BaselineType.Baseline1);
        expect(putResult.body.resource.baselines[0].cost).to.equal(44);
        expect(putResult.body.resource.standardRate).to.equal(resource.standardRate);
        expect(BaseTest.getDateOnly(putResult.body.resource.start)).to.eql(BaseTest.getDateOnly(resource.start));
        expect(putResult.body.resource.work).to.equal(resource.work);
        expect(BaseTest.getDateOnly(putResult.body.resource.finish)).to.eql(BaseTest.getDateOnly(resource.finish));
        expect(putResult.body.resource.overtimeWork).to.equal(resource.overtimeWork);
        expect(putResult.body.resource.cost).to.equal(resource.cost);
    });
});

describe("deleteResource function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Plan_with_resource.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);        

        const getRequest = new GetResourcesRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;

        let getResult = await tasksApi.getResources(getRequest);

        expect(getResult.response.statusCode).to.equal(200);
        const resourcesCountBeforeDelete = getResult.body.resources.resourceItem.length

        const deleteRequest = new DeleteResourceRequest();
        deleteRequest.name = fileName;
        deleteRequest.folder = remotePath;
        deleteRequest.resourceUid = 1;

        const deleteResult = await tasksApi.deleteResource(deleteRequest);

        expect(deleteResult.response.statusCode).to.equal(200);

        getResult = await tasksApi.getResources(getRequest);

        expect(getResult.response.statusCode).to.equal(200);
        expect(getResult.body.resources.resourceItem.length).to.lessThan(resourcesCountBeforeDelete);
    });
});