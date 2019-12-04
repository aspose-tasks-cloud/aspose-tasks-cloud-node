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

import { GetReportPdfRequest, ReportType, GetCriticalPathRequest, GetRiskAnalysisReportRequest, ProbabilityDistributionType, ConfidenceLevel } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getReportPdf function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetReportPdfRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.type = ReportType.Milestones;

        const result = await tasksApi.getReportPdf(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.buffer).is.not.undefined.and.not.null;

        const strings  = BaseTest.convertArrayBufferToStrings(result.body.buffer);
        expect(strings[0]).to.equal("%PDF-1.5");
    });
});

describe("getCriticalPath function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetCriticalPathRequest();
        request.name = fileName;
        request.folder = remotePath;

        const result = await tasksApi.getCriticalPath(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.tasks.taskItem.length).to.equal(76);
    });
});

describe("getRiskAnalysisReport function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetRiskAnalysisReportRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.distributionType = ProbabilityDistributionType.Normal;
        request.confidenceLevel = ConfidenceLevel.CL85;
        request.optimistic = 80;
        request.pessimistic = 130;
        request.iterations = 200;
        request.taskUid = 1;

        const result = await tasksApi.getRiskAnalysisReport(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.buffer).is.not.undefined.and.not.null;

        const strings  = BaseTest.convertArrayBufferToStrings(result.body.buffer);
        expect(strings[0]).to.equal("%PDF-1.5");
    });
});