/*
* MIT License
*
* Copyright (c) 2019 Aspose Pty Ltd
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
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
    GetVbaProjectRequest,
    GetVbaModuleRequest,
    PostVbaModuleRequest,
    PutVbaModuleRequest,
    DeleteVbaModuleRequest,
    ClearVbaRequest,
    CreateVbaModuleRequest,
    VbaModuleType,
    UpdateVbaModuleRequest,
} from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getVbaProject function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "VbaProject3.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetVbaProjectRequest();
        request.name = fileName;
        request.folder = remotePath;

        const result = await tasksApi.getVbaProject(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.vbaProject).is.not.undefined.and.not.null;
        expect(result.body.vbaProject.modules).is.not.undefined.and.not.null;
        expect(result.body.vbaProject.modules.length).to.equal(8);
        expect(result.body.vbaProject.modules[1].name).to.equal("Module1");
        expect(result.body.vbaProject.modules[1].sourceCode).to.satisfy(c => c.startsWith("Type MEMORYSTATUS"));
    });
});

describe("getVbaModule function", () => {
    it("should return response with code 200 and correct module data by index", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "VbaProject3.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetVbaModuleRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.module = "1";

        const result = await tasksApi.getVbaModule(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.module).is.not.undefined.and.not.null;
        expect(result.body.module.name).to.equal("Module1");
        expect(result.body.module.sourceCode).is.not.undefined.and.not.null;
        expect(result.body.module.sourceCode).to.satisfy(c => c.startsWith("Type MEMORYSTATUS"));
    });

    it("should return response with code 200 and correct module data by name", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "VbaProject3.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetVbaModuleRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.module = "Module1";

        const result = await tasksApi.getVbaModule(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.module).is.not.undefined.and.not.null;
        expect(result.body.module.name).to.equal("Module1");
    });
});

describe("postVbaModule function", () => {
    it("should create a new VBA module and return response with code 200", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "VbaProject3.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const createRequest = new CreateVbaModuleRequest();
        createRequest.name = "NewTestModule";
        createRequest.type = VbaModuleType.ProceduralModule;
        createRequest.sourceCode = "Sub TestProc()\n    MsgBox \"Hello\"\nEnd Sub";

        const request = new PostVbaModuleRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.module = createRequest;

        const result = await tasksApi.postVbaModule(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.module).is.not.undefined.and.not.null;
        expect(result.body.module.name).to.equal("NewTestModule");
        expect(result.body.module.sourceCode).to.equal("Sub TestProc()\n    MsgBox \"Hello\"\nEnd Sub");

        const getRequest = new GetVbaModuleRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;
        getRequest.module = "NewTestModule";

        const getResult = await tasksApi.getVbaModule(getRequest);

        expect(getResult.response.statusCode).to.equal(200);
        expect(getResult.body.module).is.not.undefined.and.not.null;
        expect(getResult.body.module.name).to.equal("NewTestModule");
        expect(getResult.body.module.sourceCode).to.equal("Sub TestProc()\n    MsgBox \"Hello\"\nEnd Sub");
        expect(getResult.body.module.type).to.equal(VbaModuleType.ProceduralModule);
    });
});

describe("putVbaModule function", () => {
    it("should update an existing VBA module source code and return response with code 200", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "VbaProject3.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const newSourceCode = "Sub UpdatedProc()\n    MsgBox \"Updated\"\nEnd Sub";

        const request = new PutVbaModuleRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.module = "Module1";


        const updateRequest: UpdateVbaModuleRequest = { sourceCode: newSourceCode };
        request.updateRequest = updateRequest;

        const result = await tasksApi.putVbaModule(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.module).is.not.undefined.and.not.null;
        expect(result.body.module.name).to.equal("Module1");
        expect(result.body.module.sourceCode).to.equal(newSourceCode);

        const getRequest = new GetVbaModuleRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;
        getRequest.module = "Module1";

        const getResult = await tasksApi.getVbaModule(getRequest);

        expect(getResult.response.statusCode).to.equal(200);
        expect(getResult.body.module).is.not.undefined.and.not.null;
        expect(getResult.body.module.name).to.equal("Module1");
        expect(getResult.body.module.sourceCode).to.equal(newSourceCode);
    });
});

describe("deleteVbaModule function", () => {
    it("should delete a VBA module and return response with code 200", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "VbaProject3.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const getBeforeRequest = new GetVbaModuleRequest();
        getBeforeRequest.name = fileName;
        getBeforeRequest.folder = remotePath;
        getBeforeRequest.module = "Module1";

        const getBeforeResult = await tasksApi.getVbaModule(getBeforeRequest);
        expect(getBeforeResult.response.statusCode).to.equal(200);
        expect(getBeforeResult.body.module.name).to.equal("Module1");

        const deleteRequest = new DeleteVbaModuleRequest();
        deleteRequest.name = fileName;
        deleteRequest.folder = remotePath;
        deleteRequest.module = "Module1";

        const deleteResult = await tasksApi.deleteVbaModule(deleteRequest);
        expect(deleteResult.response.statusCode).to.equal(200);

        const getProjectRequest = new GetVbaProjectRequest();
        getProjectRequest.name = fileName;
        getProjectRequest.folder = remotePath;

        const getProjectResult = await tasksApi.getVbaProject(getProjectRequest);
        expect(getProjectResult.response.statusCode).to.equal(200);
        const moduleNames = getProjectResult.body.vbaProject.modules.map(m => m.name);
        expect(moduleNames).to.not.include("Module1");
    });
});

describe("clearVba function", () => {
    it("should clear all VBA macros from the project and return response with code 200", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "VbaProject3.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const getBeforeRequest = new GetVbaProjectRequest();
        getBeforeRequest.name = fileName;
        getBeforeRequest.folder = remotePath;

        const getBeforeResult = await tasksApi.getVbaProject(getBeforeRequest);
        expect(getBeforeResult.response.statusCode).to.equal(200);
        expect(getBeforeResult.body.vbaProject.modules.length).to.be.greaterThan(0);

        const clearRequest = new ClearVbaRequest();
        clearRequest.name = fileName;
        clearRequest.folder = remotePath;

        const clearResult = await tasksApi.clearVba(clearRequest);
        expect(clearResult.response.statusCode).to.equal(200);

        const getAfterRequest = new GetVbaProjectRequest();
        getAfterRequest.name = fileName;
        getAfterRequest.folder = remotePath;

        const getAfterResult = await tasksApi.getVbaProject(getAfterRequest);
        expect(getAfterResult.response.statusCode).to.equal(200);
        expect(getAfterResult.body.vbaProject.modules.length).to.equal(0);
    });
});
