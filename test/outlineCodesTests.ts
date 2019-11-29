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

import { GetOutlineCodesRequest, GetOutlineCodeByIndexRequest, DeleteOutlineCodeByIndexRequest } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getOutlineCodes function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetOutlineCodesRequest();
        request.name = fileName;
        request.folder = remotePath;

        const result = await tasksApi.getOutlineCodes(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.outlineCodes).not.undefined.and.not.null;
        expect(result.body.outlineCodes.list.length).to.equal(2);
    });
});

describe("getOutlineCodeByIndex function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetOutlineCodeByIndexRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.index = 1;

        const result = await tasksApi.getOutlineCodeByIndex(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.outlineCode).not.undefined.and.not.null;
        expect(result.body.outlineCode.guid).to.equal("F45D601B-70C5-E311-A5BA-D43D7E937F92");
    });
});

describe("deleteOutlineCodeByIndex function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request1 = new DeleteOutlineCodeByIndexRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.index = 1;

        const result1 = await tasksApi.deleteOutlineCodeByIndex(request1);

        expect(result1.response.statusCode).to.equal(200);

        const request2 = new GetOutlineCodesRequest();
        request2.name = fileName;
        request2.folder = remotePath;

        const result2 = await tasksApi.getOutlineCodes(request2);

        expect(result2.response.statusCode).to.equal(200);
        expect(result2.body.outlineCodes).not.undefined.and.not.null;
        expect(result2.body.outlineCodes.list.length).to.equal(1);
        expect(result2.body.outlineCodes.list[0].index).to.equal(1);
    });
});