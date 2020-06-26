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

import { GetPageCountRequest, PresentationFormat, Timescale } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getPageCount function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetPageCountRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.presentationFormat = PresentationFormat.TaskUsage;
        request.timescale = Timescale.Months;

        const result = await tasksApi.getPageCount(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.pageCount).to.equal(4);
    });
    it("should return response with code 200 and correct data with specified presentation format and date interval", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetPageCountRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.presentationFormat = PresentationFormat.TaskUsage;
        request.timescale = Timescale.Months;
        request.startDate = new Date(2004, 0, 1);
        request.endDate = new Date(2004, 1, 28);

        const result = await tasksApi.getPageCount(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.pageCount).to.equal(4);
    });
});