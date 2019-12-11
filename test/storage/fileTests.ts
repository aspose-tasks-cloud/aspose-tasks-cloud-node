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

import fs = require("fs");
import "mocha";

import { expect } from "chai";
import { CopyFileRequest, DeleteFileRequest, DownloadFileRequest, MoveFileRequest, UploadFileRequest } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const testFolder = "project";

describe("Storage file operations", () => {
    describe("Test for uploading file", () => {
        it("should return response with code 200 and name of uploaded file", async () => {

            const tasksApi = BaseTest.initializeTasksApi();

            const fileName = "Home_move_plan.mpp";
            const localPath = BaseTest.localBaseTestDataFolder + fileName;
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            const request: UploadFileRequest = {
                file: fs.readFileSync(localPath),
                path: remotePath + "/" + fileName,
                storageName: undefined,
            };

            return tasksApi.uploadFile(request)
                .then((result) => {
                    expect(result.response.statusCode).to.equal(200);
                    expect(result.body.uploaded.length).to.equal(1);
                });
        });
    });

    describe("Test for copy file", () => {
        it("should return response with code 200 and exist in both src and dest", async () => {

            const tasksApi = BaseTest.initializeTasksApi();

            const fileName = "Home_move_plan.mpp";
            const newFileName = "Home_move_plan_copied.mpp";
            const localPath = BaseTest.localBaseTestDataFolder + fileName;
            const remoteBasePathSrc = BaseTest.remoteBaseTestDataFolder + fileName;
            const remoteBasePathDest = BaseTest.remoteBaseTestDataFolder + newFileName;

            return tasksApi.uploadFileToStorage(remoteBasePathSrc, localPath)
                .then((result) => {
                    expect(result.response.statusCode).to.equal(200);

                    const request: CopyFileRequest = {
                        destPath: remoteBasePathDest,
                        destStorageName: undefined,
                        srcPath: remoteBasePathSrc,
                        srcStorageName: undefined,
                        versionId: undefined,
                    };

                    return tasksApi.copyFile(request)
                        .then((result1) => {
                            expect(result1.statusCode).to.equal(200);

                            const downloadRequest: DownloadFileRequest = {
                                path: remoteBasePathDest,
                                storageName: undefined,
                                versionId: undefined,
                            };

                            return tasksApi.downloadFile(downloadRequest)
                                .then((result2) => {
                                    expect(result2.response.statusCode).to.equals(200);
                                    expect(result2.body.length).to.greaterThan(0);

                                    downloadRequest.path = remoteBasePathSrc;

                                    return tasksApi.downloadFile(downloadRequest)
                                        .then((result3) => {
                                            expect(result3.response.statusCode).to.equals(200);
                                            expect(result3.body.length).to.be.greaterThan(0);
                                        });
                                });
                        });
                });
        });
    });

    describe("Test for move file", () => {
        it("should return response with code 200 and exists on dest only", async () => {

            const tasksApi = BaseTest.initializeTasksApi();

            const fileName = "Home_move_plan.mpp";
            const newFileName = "Home_move_plan_copied.mpp";
            const localPath = BaseTest.localBaseTestDataFolder + fileName;
            const remoteBasePathSrc = BaseTest.remoteBaseTestDataFolder + fileName;
            const remoteBasePathDest = BaseTest.remoteBaseTestDataFolder + newFileName;

            return tasksApi.uploadFileToStorage(remoteBasePathSrc, localPath)
                .then((result) => {
                    expect(result.response.statusCode).to.equal(200);

                    const request: MoveFileRequest = {
                        destPath: remoteBasePathDest,
                        destStorageName: undefined,
                        srcPath: remoteBasePathSrc,
                        srcStorageName: undefined,
                        versionId: undefined,
                    };

                    return tasksApi.moveFile(request)
                        .then((result1) => {
                            expect(result1.statusCode).to.equal(200);

                            const downloadRequest: DownloadFileRequest = {
                                path: remoteBasePathDest,
                                storageName: undefined,
                                versionId: undefined,
                            };

                            return tasksApi.downloadFile(downloadRequest)
                                .then((result2) => {
                                    expect(result2.response.statusCode).to.equal(200);

                                    downloadRequest.path = remoteBasePathSrc;

                                    return tasksApi.downloadFile(downloadRequest)
                                        .catch((error) => {
                                            expect(error.response.statusCode).to.equal(404);
                                        });
                                });
                        });
                });
        });
    });

    describe("Test for deleting file", () => {
        it("should return response with code 200 and name of uploaded file", async () => {

            const tasksApi = BaseTest.initializeTasksApi();

            const fileName = "CalendarWorkWeeks.mpp";
            const localPath = BaseTest.localBaseTestDataFolder + fileName;
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            const request: UploadFileRequest = {
                file: fs.readFileSync(localPath),
                path: remotePath + "/" + fileName,
                storageName: undefined,
            };

            return tasksApi.uploadFile(request)
                .then((result) => {
                    expect(result.response.statusCode).to.equal(200);

                    const deleteRequest: DeleteFileRequest = {
                        path: remotePath + "/" + fileName,
                        storageName: undefined,
                        versionId: undefined,
                    };

                    return tasksApi.deleteFile(deleteRequest)
                        .then((result1) => {
                            expect(result1.statusCode).to.equals(200);
                        });
                });
        });
    });    
});
