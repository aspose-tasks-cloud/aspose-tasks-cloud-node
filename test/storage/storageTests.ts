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
import "mocha";

import { expect } from "chai";
import { GetDiscUsageRequest, GetFileVersionsRequest, ObjectExistsRequest, StorageExistsRequest } from "../../src/model/model";
import * as BaseTest from "../baseTest";

describe("Test for Get Disc Usage", () => {
    it("should return response with code 200", async () => {
        const tasksApi = BaseTest.initializeTasksApi();
        const request = new GetDiscUsageRequest();
        return tasksApi.getDiscUsage(request)
            .then((result) => {
                expect(result.response.statusCode).to.equal(200);
            });
    });
});

describe("Test for Get File Versions", () => {
    it("should return response with code 200 with valid data", async () => {
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);
        
        const request = new GetFileVersionsRequest();
        request.path = remoteFullPath;
        const result = await tasksApi.getFileVersions(request);
        
        expect(result.response.statusCode).to.equal(200);
        expect(result.body.value).not.undefined.and.not.null;
        expect(result.body.value.some(f => f.name == fileName)).is.true;
    });
});

describe("Test for Object Exists", () => {
    it("should return response with code 200 with valid data", async () => {
        const tasksApi = BaseTest.initializeTasksApi();        
        const request = new ObjectExistsRequest();
        request.path = "SomeNonexistentFileName";
        const result = await tasksApi.objectExists(request);
        
        expect(result.response.statusCode).to.equal(200);
        expect(result.body.exists).is.false;     
    });
});

describe("Test for Storage Exists", () => {
    it("should return response with code 200 with valid data", async () => {
        const tasksApi = BaseTest.initializeTasksApi();        
        const request = new StorageExistsRequest();
        request.storageName = "SomeNonexistentStorageName";
        const result = await tasksApi.storageExists(request);
        
        expect(result.response.statusCode).to.equal(200);
        expect(result.body.exists).is.false;      
    });
});