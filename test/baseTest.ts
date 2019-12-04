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

import { TasksApi } from "../src/api";
import { FilesUploadResult, UploadFileRequest, TasksIncomingMessage } from "../src/model/model";
import fs = require('fs');

let apiInstance : TestTasksApi;
const uploadedFiles = new Set<string>();

after(async function () {
        for (const uploadedFile of uploadedFiles) {
           await apiInstance.deleteFile({path: uploadedFile, storageName: undefined, versionId: undefined}); 
        }
})

/**
 * Initialize TasksApi
 */
export function initializeTasksApi(debugMode?: boolean) {
    const config = require("../../testConfig.json");
    const tasksApi = new TestTasksApi(config.AppSid, config.AppKey, config.BaseUrl, debugMode);
    apiInstance = tasksApi;
    return tasksApi;
}

export function getDateOnly(arg :Date): Date {
    return new Date(arg.getFullYear(), arg.getMonth(), arg.getDate());
}

export function getTimeOnly(arg :Date): Date {
    return new Date(0, 0, 0, arg.getHours(), arg.getMinutes(), arg.getSeconds());
}

export function convertArrayBufferToStrings(buffer: ArrayBuffer): string[] {
    const uintArray = new Uint8Array(buffer);
    const string = String.fromCharCode.apply(this, uintArray);    
    return string.split("\r\n")
  }

/**
 * TasksApi class with simplified file uploading
 */
export class TestTasksApi extends TasksApi {
    /**
     * @param appSID App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        super(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Uploads file to storage.
     * @param remotePath Path in storage.
     * @param localPath Path to file
     */
    public async uploadFileToStorage(remotePath: string, localPath: string): Promise<TasksIncomingMessage<FilesUploadResult>> {

        const request = new UploadFileRequest();
        request.path = remotePath;
        request.file = fs.readFileSync(localPath);;
        uploadedFiles.add(remotePath);
        return super.uploadFile(request);
    }
}

export const remoteBaseFolder = "Temp/SdkTests/node/";
export const remoteBaseTestDataFolder = "Temp/SdkTests/node/TestData/";
export const remoteBaseTestOutFolder = "Temp/SdkTests/node/TestOut/";
export const localBaseTestDataFolder = "./testData/";
