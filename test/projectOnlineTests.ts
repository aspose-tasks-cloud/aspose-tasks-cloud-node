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

import { GetProjectListRequest, CreateNewProjectRequest, UpdateProjectRequest } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe.skip("Ignored because real credentials is required", () => {    
    describe("getProjectList function", () => {
        it("should return response with code 200 and correct data by token credentials", async () => {

            const tasksApi = BaseTest.initializeTasksApi();
            const request = new GetProjectListRequest();
            request.xProjectOnlineToken = "SOMESECRETTOKEN";
            request.siteUrl = "your_company_name.sharepoint.com";

            const result = await tasksApi.getProjectList(request);

            expect(result.response.statusCode).to.equal(200);
            expect(result.body.projects).not.null.and.not.undefined;
            expect(result.body.projects.projectInfo.length).to.be.at.least(1);
        });
        it("should return response with code 200 and correct data by login and password credentials", async () => {

            const tasksApi = BaseTest.initializeTasksApi();
            const request = new GetProjectListRequest();
            request.userName = "SomeLogin";
            request.xSharepointPassword = "SomePassword";
            request.siteUrl = "your_company_name.sharepoint.com";

            const result = await tasksApi.getProjectList(request);

            expect(result.response.statusCode).to.equal(200);
            expect(result.body.projects).not.null.and.not.undefined;
            expect(result.body.projects.projectInfo.length).to.be.at.least(1);
        });
    });
    
    describe("createNewProject function", () => {
        it("should return response with code 200 and correct data by token credentials", async () => {

            const tasksApi = BaseTest.initializeTasksApi();
            
            const fileName = "NewProductDev.mpp";
            const localPath = BaseTest.localBaseTestDataFolder + fileName;
            await tasksApi.uploadFileToStorage(fileName, localPath);

            const request = new CreateNewProjectRequest();
            request.name = fileName
            request.xProjectOnlineToken = "SOMESECRETTOKEN";
            request.siteUrl = "your_company_name.sharepoint.com";

            const result = await tasksApi.createNewProject(request);

            expect(result.response.statusCode).to.equal(200);
        });
        it("should return response with code 200 and correct data by login and password credentials", async () => {

            const tasksApi = BaseTest.initializeTasksApi();
            
            const fileName = "NewProductDev.mpp";
            const localPath = BaseTest.localBaseTestDataFolder + fileName;
            await tasksApi.uploadFileToStorage(fileName, localPath);

            const request = new CreateNewProjectRequest();
            request.name = fileName
            request.userName = "SomeLogin";
            request.xSharepointPassword = "SomePassword";
            request.siteUrl = "your_company_name.sharepoint.com";

            const result = await tasksApi.createNewProject(request);

            expect(result.response.statusCode).to.equal(200);
        });
    });
    
    describe("updateProject function", () => {
        it("should return response with code 200 and correct data by token credentials", async () => {

            const tasksApi = BaseTest.initializeTasksApi();
            
            const fileName = "NewProductDev.mpp";
            const localPath = BaseTest.localBaseTestDataFolder + fileName;
            await tasksApi.uploadFileToStorage(fileName, localPath);

            const request = new UpdateProjectRequest();
            request.name = fileName
            request.xProjectOnlineToken = "SOMESECRETTOKEN";
            request.siteUrl = "your_company_name.sharepoint.com";

            const result = await tasksApi.updateProject(request);

            expect(result.response.statusCode).to.equal(200);
        });
        it("should return response with code 200 and correct data by login and password credentials", async () => {

            const tasksApi = BaseTest.initializeTasksApi();
            
            const fileName = "NewProductDev.mpp";
            const localPath = BaseTest.localBaseTestDataFolder + fileName;
            await tasksApi.uploadFileToStorage(fileName, localPath);

            const request = new UpdateProjectRequest();
            request.name = fileName
            request.userName = "SomeLogin";
            request.xSharepointPassword = "SomePassword";
            request.siteUrl = "your_company_name.sharepoint.com";

            const result = await tasksApi.updateProject(request);

            expect(result.response.statusCode).to.equal(200);
        });
    });
});