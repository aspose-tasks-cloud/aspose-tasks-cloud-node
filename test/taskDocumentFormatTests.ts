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

import { GetTaskDocumentWithFormatRequest, ProjectFileFormat, PostTaskDocumentWithFormatRequest } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getTaskDocumentWithFormat function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetTaskDocumentWithFormatRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.format = ProjectFileFormat.Csv;

        const result = await tasksApi.getTaskDocumentWithFormat(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.buffer).is.not.undefined.and.not.null;

        const strings  = BaseTest.convertArrayBufferToStrings(result.body.buffer);
        expect(strings[0]).to.equal("ID;Task_Name;Outline_Level;Duration;Start_Date;Finish_Date;Percent_Comp;Cost;Work");
        expect(strings[1]).to.equal("1;Five to Eight Weeks Before Moving;1;16 days;Thu 01.01.04 08:00;Thu 22.01.04 17:00;0%;$0;0 hrs");
    });
    it("should return response with code 200 and correct data as zipped html", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetTaskDocumentWithFormatRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.format = ProjectFileFormat.Html;
        request.returnAsZipArchive = true;

        const result = await tasksApi.getTaskDocumentWithFormat(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.buffer).is.not.undefined.and.not.null;
        expect(result.body.length).to.be.at.least(1);
    });
});

describe("postTaskDocumentWithFormat function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        // SaveOptions parameters is a json-serialized representation of 
        // Aspose.Tasks's SaveOptions class or its format-specific inheritors (Like CsvOptions, etc):
        // See Aspose.Tasks reference: https://apireference.aspose.com/net/tasks/aspose.tasks.saving/saveoptions
        const saveOptionsSerialized = "{ \"TextDelimiter\":\"Comma\", \"IncludeHeaders\":false,\"NonExistingTestProperty\":false," +
            "\"View\":{ \"Columns\":[{\"Type\":\"GanttChartColumn\",\"Name\":\"TestColumn1\",\"Property\":\"Name\",\"Width\":120}," +
            "{\"Type\":\"GanttChartColumn\",\"Name\":\"TestColumn2\",\"Property\":\"Duration\",\"Width\":120}]}}";
        const request = new PostTaskDocumentWithFormatRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.format = ProjectFileFormat.Csv;
        request.saveOptions = JSON.parse(saveOptionsSerialized);

        const result = await tasksApi.postTaskDocumentWithFormat(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.buffer).is.not.undefined.and.not.null;

        const strings  = BaseTest.convertArrayBufferToStrings(result.body.buffer);
        expect(strings[0]).to.equal("Five to Eight Weeks Before Moving,16 days");
    });
});