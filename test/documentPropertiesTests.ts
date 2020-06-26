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

import { GetDocumentPropertiesRequest, GetDocumentPropertyRequest, PutDocumentPropertyRequest, DocumentProperty, PostDocumentPropertyRequest } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getDocumentProperties function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";            
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetDocumentPropertiesRequest();
        request.name = fileName;
        request.folder = remotePath;

        const result = await tasksApi.getDocumentProperties(request);
        expect(result.response.statusCode).to.equal(200);
        expect(result.body.properties.list.length).to.equal(52);
        expect(result.body.properties.list[0].name).to.equal("Title");
        expect(result.body.properties.list[0].value).to.equal("Home Move");
    });
});

describe("getDocumentProperty function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";            
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetDocumentPropertyRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.propertyName = "Title";

        const result = await tasksApi.getDocumentProperty(request);
        expect(result.response.statusCode).to.equal(200);
        expect(result.body.property).is.not.null.and.not.undefined;
        expect(result.body.property.name).to.equal("Title");
        expect(result.body.property.value).to.equal("Home Move");
    });
});

describe("putDocumentProperty function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";            
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const property = new DocumentProperty();
        property.name = "Title";
        property.value = "New title value";
        const request1 = new PutDocumentPropertyRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.propertyName = "Title";
        request1.property = property;

        await tasksApi.putDocumentProperty(request1);

        const request2 = new GetDocumentPropertyRequest();
        request2.name = fileName;
        request2.folder = remotePath;
        request2.propertyName = "Title";

        const result = await tasksApi.getDocumentProperty(request2);
        expect(result.body.property.value).to.equal("New title value");
    });
    it("should return response with code 200 and ignore changes of nonexistent property", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";            
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const property = new DocumentProperty();
        property.name = "new property";
        property.value = "new property value";
        const request1 = new PutDocumentPropertyRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.propertyName = "new property";
        request1.property = property;

        await tasksApi.putDocumentProperty(request1);

        const request2 = new GetDocumentPropertyRequest();
        request2.name = fileName;
        request2.folder = remotePath;
        request2.propertyName = "new property";

        const result = await tasksApi.getDocumentProperty(request2);
        expect(result.body.property).is.null;
    });
});

describe("postDocumentProperty function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";            
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const property = new DocumentProperty();
        property.name = "Title";
        property.value = "New title value";
        const request1 = new PostDocumentPropertyRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.propertyName = "Title";
        request1.property = property;

        await tasksApi.postDocumentProperty(request1);

        const request2 = new GetDocumentPropertyRequest();
        request2.name = fileName;
        request2.folder = remotePath;
        request2.propertyName = "Title";

        const result = await tasksApi.getDocumentProperty(request2);
        expect(result.body.property.value).to.equal("New title value");
    });
    it("should return response with code 200 and ignore changes of nonexistent property", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";            
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const property = new DocumentProperty();
        property.name = "new property";
        property.value = "new property value";
        const request1 = new PostDocumentPropertyRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.propertyName = "new property";
        request1.property = property;

        await tasksApi.postDocumentProperty(request1);

        const request2 = new GetDocumentPropertyRequest();
        request2.name = fileName;
        request2.folder = remotePath;
        request2.propertyName = "new property";

        const result = await tasksApi.getDocumentProperty(request2);
        expect(result.body.property).is.null;
    });
});