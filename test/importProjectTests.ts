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

import { PutImportProjectFromFileRequest, ImportedProjectType, ProjectFileFormat, GetTasksRequest, PutImportProjectFromDbRequest, ProjectDatabaseType, GetProjectIdsRequest, PutImportProjectFromProjectOnlineRequest, DownloadFileRequest } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("putImportProjectFromFile function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "p6_multiproject.xml";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request1 = new PutImportProjectFromFileRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.filename = "imported_from_primavera.xml";
        request1.projectUid = "111";
        request1.fileType = ImportedProjectType.PrimaveraXml;
        request1.outputFileFormat = ProjectFileFormat.P6xml

        const result1 = await tasksApi.putImportProjectFromFile(request1);

        expect(result1.response.statusCode).to.equal(200);

        const request2 = new GetTasksRequest();
        request2.name = "imported_from_primavera.xml";
        request2.folder = remotePath;

        const result2 = await tasksApi.getTasks(request2);

        expect(result2.response.statusCode).to.equal(200);
        expect(result2.body.tasks.taskItem.length).to.equal(12);
    });
});

describe.skip("Ignored because real credentials is required", () => {
    describe("putImportProjectFromDb function", () => {
        it("should return response with code 200 and correct data", async () => {
    
            const tasksApi = BaseTest.initializeTasksApi(); 
            const request1 = new PutImportProjectFromDbRequest();
            request1.connectionString = "Data Source=db.contoso.com;Initial Catalog=ProjectServer;Persist Security Info=True;User ID=sa;Password=pwd;"
            request1.databaseType = ProjectDatabaseType.Msp;
            request1.filename = "imported_from_db.xml";
            request1.folder = BaseTest.remoteBaseTestDataFolder;
            request1.projectUid = "E6426C44-D6CB-4B9C-AF16-48910ACE0F54";
            request1.databaseSchema = "dbo";
            request1.format = ProjectFileFormat.P6xml;
    
            const result1 = await tasksApi.putImportProjectFromDb(request1);
    
            expect(result1.response.statusCode).to.equal(200);
    
            const request2 = new GetProjectIdsRequest();
            request2.name = "imported_from_db.xml";
            request2.folder = BaseTest.remoteBaseTestDataFolder;
    
            const result2 = await tasksApi.getProjectIds(request2);
    
            expect(result2.response.statusCode).to.equal(200);
            expect(result2.body.projectIds).to.eql(["1"]);
        });
    });
    describe("putImportProjectFromProjectOnline function", () => {
        it("should return response with code 200 and correct data by token credentials", async () => {
    
            const tasksApi = BaseTest.initializeTasksApi(); 
            const request1 = new PutImportProjectFromProjectOnlineRequest();
            request1.name = "NewProductDev.mpp"
            request1.guid = "E6426C44-D6CB-4B9C-AF16-48910ACE0F54";
            request1.xProjectOnlineToken = "SOMESECRETTOKEN";
            request1.folder = BaseTest.remoteBaseTestDataFolder;
            request1.siteUrl = "http://project_server_instance.local/sites/pwa";
            request1.format = ProjectFileFormat.P6xml;
    
            const result1 = await tasksApi.putImportProjectFromProjectOnline(request1);
    
            expect(result1.response.statusCode).to.equal(200);
    
            const request2 = new DownloadFileRequest();
            request2.path = "NewProductDev.mpp";
    
            const result2 = await tasksApi.downloadFile(request2);
    
            expect(result2.response.statusCode).to.equal(200);
            expect(result2.body).is.not.undefined.and.not.null;
            expect(result2.body.length).to.be.at.least(1);
        });
        it("should return response with code 200 and correct data by login and password credentials", async () => {
    
            const tasksApi = BaseTest.initializeTasksApi(); 
            const request1 = new PutImportProjectFromProjectOnlineRequest();
            request1.name = "NewProductDev.mpp"
            request1.guid = "E6426C44-D6CB-4B9C-AF16-48910ACE0F54";
            request1.userName = "SomeLogin";
            request1.xSharepointPassword = "SomePassword";
            request1.folder = BaseTest.remoteBaseTestDataFolder;
            request1.siteUrl = "http://project_server_instance.local/sites/pwa";
            request1.format = ProjectFileFormat.P6xml;
    
            const result1 = await tasksApi.putImportProjectFromProjectOnline(request1);
    
            expect(result1.response.statusCode).to.equal(200);
    
            const request2 = new DownloadFileRequest();
            request2.path = "NewProductDev.mpp";
    
            const result2 = await tasksApi.downloadFile(request2);
    
            expect(result2.response.statusCode).to.equal(200);
            expect(result2.body).is.not.undefined.and.not.null;
            expect(result2.body.length).to.be.at.least(1);
        });
    });
});