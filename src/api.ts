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

import http = require("http");
import request = require("request");

import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/objectSerializer";
import { addQueryParameterToUrl, invokeApiMethod } from "./internal/requestHelper";
import * as model from "./model/model";

/**
 * Library for communicating with the Aspose.Tasks Cloud API
 */
export class TasksApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    /**
     * @param appSID App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param authUrl Auth Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, authUrl?: string, debugMode?: boolean) {
        this.configuration = new Configuration(appSID, appKey, baseUrl, authUrl, debugMode);
    }

    /**
     * Copy file
     * @param requestObj contains request parameters
     */
    public async copyFile(requestObj: model.CopyFileRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/storage/file/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFile.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Delete file
     * @param requestObj contains request parameters
     */
    public async deleteFile(requestObj: model.DeleteFileRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Download file
     * @param requestObj contains request parameters
     */
    public async downloadFile(requestObj: model.DownloadFileRequest): Promise<model.TasksIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling downloadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling downloadFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
		const result: model.TasksIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Move file
     * @param requestObj contains request parameters
     */
    public async moveFile(requestObj: model.MoveFileRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/storage/file/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFile.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Upload file
     * @param requestObj contains request parameters
     */
    public async uploadFile(requestObj: model.UploadFileRequest): Promise<model.TasksIncomingMessage<model.FilesUploadResult>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling uploadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling uploadFile.');
        }

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling uploadFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        if (requestObj.file !== undefined) {
            formParams.File = requestObj.file;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration, false, requestObj.file);
        const body =  ObjectSerializer.deserialize(response.body, "FilesUploadResult");
		const result: model.TasksIncomingMessage<model.FilesUploadResult> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Copy folder
     * @param requestObj contains request parameters
     */
    public async copyFolder(requestObj: model.CopyFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/storage/folder/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFolder.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Create the folder
     * @param requestObj contains request parameters
     */
    public async createFolder(requestObj: model.CreateFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling createFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Delete folder
     * @param requestObj contains request parameters
     */
    public async deleteFolder(requestObj: model.DeleteFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "recursive", requestObj.recursive);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Get all files and folders within a folder
     * @param requestObj contains request parameters
     */
    public async getFilesList(requestObj: model.GetFilesListRequest): Promise<model.TasksIncomingMessage<model.FilesList>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFilesList.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFilesList.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FilesList");
		const result: model.TasksIncomingMessage<model.FilesList> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Move folder
     * @param requestObj contains request parameters
     */
    public async moveFolder(requestObj: model.MoveFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/storage/folder/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFolder.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }


    /**
     * Get disc usage
     * @param requestObj contains request parameters
     */
    public async getDiscUsage(requestObj: model.GetDiscUsageRequest): Promise<model.TasksIncomingMessage<model.DiscUsage>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDiscUsage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/storage/disc";
        const queryParameters: any = {};
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DiscUsage");
		const result: model.TasksIncomingMessage<model.DiscUsage> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get file versions
     * @param requestObj contains request parameters
     */
    public async getFileVersions(requestObj: model.GetFileVersionsRequest): Promise<model.TasksIncomingMessage<model.FileVersions>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFileVersions.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/storage/version/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFileVersions.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FileVersions");
		const result: model.TasksIncomingMessage<model.FileVersions> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Check if file or folder exists
     * @param requestObj contains request parameters
     */
    public async objectExists(requestObj: model.ObjectExistsRequest): Promise<model.TasksIncomingMessage<model.ObjectExist>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling objectExists.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/storage/exist/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling objectExists.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ObjectExist");
		const result: model.TasksIncomingMessage<model.ObjectExist> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Check if storage exists
     * @param requestObj contains request parameters
     */
    public async storageExists(requestObj: model.StorageExistsRequest): Promise<model.TasksIncomingMessage<model.StorageExist>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling storageExists.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/tasks/storage/{storageName}/exist"
            .replace("{" + "storageName" + "}", String(requestObj.storageName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.storageName' is not null or undefined
        if (requestObj.storageName === null || requestObj.storageName === undefined) {
            throw new Error('Required parameter "requestObj.storageName" was null or undefined when calling storageExists.');
        }
        

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "StorageExist");
		const result: model.TasksIncomingMessage<model.StorageExist> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Deletes a project assignment with all references to it.
     * @param requestObj contains request parameters
     */
    public async deleteAssignment(requestObj: model.DeleteAssignmentRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteAssignment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/assignments/{assignmentUid}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "assignmentUid" + "}", String(requestObj.assignmentUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteAssignment.');
        }

        // verify required parameter 'requestObj.assignmentUid' is not null or undefined
        if (requestObj.assignmentUid === null || requestObj.assignmentUid === undefined) {
            throw new Error('Required parameter "requestObj.assignmentUid" was null or undefined when calling deleteAssignment.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Read project assignment with the specified Uid.
     * @param requestObj contains request parameters
     */
    public async getAssignment(requestObj: model.GetAssignmentRequest): Promise<model.TasksIncomingMessage<model.AssignmentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getAssignment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/assignments/{assignmentUid}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "assignmentUid" + "}", String(requestObj.assignmentUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getAssignment.');
        }

        // verify required parameter 'requestObj.assignmentUid' is not null or undefined
        if (requestObj.assignmentUid === null || requestObj.assignmentUid === undefined) {
            throw new Error('Required parameter "requestObj.assignmentUid" was null or undefined when calling getAssignment.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AssignmentResponse");
		const result: model.TasksIncomingMessage<model.AssignmentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get timescaled data for an assignment with the specified Uid.
     * @param requestObj contains request parameters
     */
    public async getAssignmentTimephasedData(requestObj: model.GetAssignmentTimephasedDataRequest): Promise<model.TasksIncomingMessage<model.TimephasedDataResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getAssignmentTimephasedData.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/assignments/{assignmentUid}/timeScaleData"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "assignmentUid" + "}", String(requestObj.assignmentUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getAssignmentTimephasedData.');
        }

        // verify required parameter 'requestObj.assignmentUid' is not null or undefined
        if (requestObj.assignmentUid === null || requestObj.assignmentUid === undefined) {
            throw new Error('Required parameter "requestObj.assignmentUid" was null or undefined when calling getAssignmentTimephasedData.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "type", requestObj.type);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startDate", requestObj.startDate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "endDate", requestObj.endDate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TimephasedDataResponse");
		const result: model.TasksIncomingMessage<model.TimephasedDataResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get project's assignment items.
     * @param requestObj contains request parameters
     */
    public async getAssignments(requestObj: model.GetAssignmentsRequest): Promise<model.TasksIncomingMessage<model.AssignmentItemsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getAssignments.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/assignments"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getAssignments.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AssignmentItemsResponse");
		const result: model.TasksIncomingMessage<model.AssignmentItemsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds a new assignment to a project and returns assignment item in a response.
     * @param requestObj contains request parameters
     */
    public async postAssignment(requestObj: model.PostAssignmentRequest): Promise<model.TasksIncomingMessage<model.AssignmentItemResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAssignment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/assignments"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postAssignment.');
        }

        // verify required parameter 'requestObj.taskUid' is not null or undefined
        if (requestObj.taskUid === null || requestObj.taskUid === undefined) {
            throw new Error('Required parameter "requestObj.taskUid" was null or undefined when calling postAssignment.');
        }

        // verify required parameter 'requestObj.resourceUid' is not null or undefined
        if (requestObj.resourceUid === null || requestObj.resourceUid === undefined) {
            throw new Error('Required parameter "requestObj.resourceUid" was null or undefined when calling postAssignment.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "taskUid", requestObj.taskUid);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resourceUid", requestObj.resourceUid);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "units", requestObj.units);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cost", requestObj.cost);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AssignmentItemResponse");
		const result: model.TasksIncomingMessage<model.AssignmentItemResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates resources assignment with the specified Uid.
     * @param requestObj contains request parameters
     */
    public async putAssignment(requestObj: model.PutAssignmentRequest): Promise<model.TasksIncomingMessage<model.AssignmentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putAssignment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/assignments/{assignmentUid}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "assignmentUid" + "}", String(requestObj.assignmentUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putAssignment.');
        }

        // verify required parameter 'requestObj.assignmentUid' is not null or undefined
        if (requestObj.assignmentUid === null || requestObj.assignmentUid === undefined) {
            throw new Error('Required parameter "requestObj.assignmentUid" was null or undefined when calling putAssignment.');
        }

        // verify required parameter 'requestObj.assignment' is not null or undefined
        if (requestObj.assignment === null || requestObj.assignment === undefined) {
            throw new Error('Required parameter "requestObj.assignment" was null or undefined when calling putAssignment.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "mode", requestObj.mode);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "recalculate", requestObj.recalculate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);

        let requestBody : any;
        if(requestObj.assignment) {
            requestBody = ObjectSerializer.serialize(requestObj.assignment, requestObj.assignment.constructor.name === "Object" ? "ResourceAssignment" : requestObj.assignment.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AssignmentResponse");
		const result: model.TasksIncomingMessage<model.AssignmentResponse> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Deletes a project calendar
     * @param requestObj contains request parameters
     */
    public async deleteCalendar(requestObj: model.DeleteCalendarRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteCalendar.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/calendars/{calendarUid}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "calendarUid" + "}", String(requestObj.calendarUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteCalendar.');
        }

        // verify required parameter 'requestObj.calendarUid' is not null or undefined
        if (requestObj.calendarUid === null || requestObj.calendarUid === undefined) {
            throw new Error('Required parameter "requestObj.calendarUid" was null or undefined when calling deleteCalendar.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Deletes calendar exception from calendar exceptions collection.
     * @param requestObj contains request parameters
     */
    public async deleteCalendarException(requestObj: model.DeleteCalendarExceptionRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteCalendarException.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/calendars/{calendarUid}/calendarExceptions/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "calendarUid" + "}", String(requestObj.calendarUid))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteCalendarException.');
        }

        // verify required parameter 'requestObj.calendarUid' is not null or undefined
        if (requestObj.calendarUid === null || requestObj.calendarUid === undefined) {
            throw new Error('Required parameter "requestObj.calendarUid" was null or undefined when calling deleteCalendarException.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteCalendarException.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get a project's calendar with the specified Uid.
     * @param requestObj contains request parameters
     */
    public async getCalendar(requestObj: model.GetCalendarRequest): Promise<model.TasksIncomingMessage<model.CalendarResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getCalendar.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/calendars/{calendarUid}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "calendarUid" + "}", String(requestObj.calendarUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getCalendar.');
        }

        // verify required parameter 'requestObj.calendarUid' is not null or undefined
        if (requestObj.calendarUid === null || requestObj.calendarUid === undefined) {
            throw new Error('Required parameter "requestObj.calendarUid" was null or undefined when calling getCalendar.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "CalendarResponse");
		const result: model.TasksIncomingMessage<model.CalendarResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get a list of calendar's exceptions.
     * @param requestObj contains request parameters
     */
    public async getCalendarExceptions(requestObj: model.GetCalendarExceptionsRequest): Promise<model.TasksIncomingMessage<model.CalendarExceptionsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getCalendarExceptions.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/calendars/{calendarUid}/calendarExceptions"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "calendarUid" + "}", String(requestObj.calendarUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getCalendarExceptions.');
        }

        // verify required parameter 'requestObj.calendarUid' is not null or undefined
        if (requestObj.calendarUid === null || requestObj.calendarUid === undefined) {
            throw new Error('Required parameter "requestObj.calendarUid" was null or undefined when calling getCalendarExceptions.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "CalendarExceptionsResponse");
		const result: model.TasksIncomingMessage<model.CalendarExceptionsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets the collection of work weeks of the specified calendar.
     * @param requestObj contains request parameters
     */
    public async getCalendarWorkWeeks(requestObj: model.GetCalendarWorkWeeksRequest): Promise<model.TasksIncomingMessage<model.CalendarWorkWeeksResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getCalendarWorkWeeks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/calendars/{calendarUid}/workWeeks"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "calendarUid" + "}", String(requestObj.calendarUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getCalendarWorkWeeks.');
        }

        // verify required parameter 'requestObj.calendarUid' is not null or undefined
        if (requestObj.calendarUid === null || requestObj.calendarUid === undefined) {
            throw new Error('Required parameter "requestObj.calendarUid" was null or undefined when calling getCalendarWorkWeeks.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "CalendarWorkWeeksResponse");
		const result: model.TasksIncomingMessage<model.CalendarWorkWeeksResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Read project calendar items.
     * @param requestObj contains request parameters
     */
    public async getCalendars(requestObj: model.GetCalendarsRequest): Promise<model.TasksIncomingMessage<model.CalendarItemsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getCalendars.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/calendars"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getCalendars.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "CalendarItemsResponse");
		const result: model.TasksIncomingMessage<model.CalendarItemsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds a new calendar to project file.
     * @param requestObj contains request parameters
     */
    public async postCalendar(requestObj: model.PostCalendarRequest): Promise<model.TasksIncomingMessage<model.CalendarItemResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postCalendar.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/calendars"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postCalendar.');
        }

        // verify required parameter 'requestObj.calendar' is not null or undefined
        if (requestObj.calendar === null || requestObj.calendar === undefined) {
            throw new Error('Required parameter "requestObj.calendar" was null or undefined when calling postCalendar.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        let requestBody : any;
        if(requestObj.calendar) {
            requestBody = ObjectSerializer.serialize(requestObj.calendar, requestObj.calendar.constructor.name === "Object" ? "Calendar" : requestObj.calendar.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "CalendarItemResponse");
		const result: model.TasksIncomingMessage<model.CalendarItemResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds a new calendar exception to a calendar.
     * @param requestObj contains request parameters
     */
    public async postCalendarException(requestObj: model.PostCalendarExceptionRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postCalendarException.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/calendars/{calendarUid}/calendarExceptions"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "calendarUid" + "}", String(requestObj.calendarUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postCalendarException.');
        }

        // verify required parameter 'requestObj.calendarUid' is not null or undefined
        if (requestObj.calendarUid === null || requestObj.calendarUid === undefined) {
            throw new Error('Required parameter "requestObj.calendarUid" was null or undefined when calling postCalendarException.');
        }

        // verify required parameter 'requestObj.calendarException' is not null or undefined
        if (requestObj.calendarException === null || requestObj.calendarException === undefined) {
            throw new Error('Required parameter "requestObj.calendarException" was null or undefined when calling postCalendarException.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        let requestBody : any;
        if(requestObj.calendarException) {
            requestBody = ObjectSerializer.serialize(requestObj.calendarException, requestObj.calendarException.constructor.name === "Object" ? "CalendarException" : requestObj.calendarException.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Edits an existing project calendar.
     * @param requestObj contains request parameters
     */
    public async putCalendar(requestObj: model.PutCalendarRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putCalendar.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/calendars"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putCalendar.');
        }

        // verify required parameter 'requestObj.calendarUid' is not null or undefined
        if (requestObj.calendarUid === null || requestObj.calendarUid === undefined) {
            throw new Error('Required parameter "requestObj.calendarUid" was null or undefined when calling putCalendar.');
        }

        // verify required parameter 'requestObj.calendar' is not null or undefined
        if (requestObj.calendar === null || requestObj.calendar === undefined) {
            throw new Error('Required parameter "requestObj.calendar" was null or undefined when calling putCalendar.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "calendarUid", requestObj.calendarUid);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        let requestBody : any;
        if(requestObj.calendar) {
            requestBody = ObjectSerializer.serialize(requestObj.calendar, requestObj.calendar.constructor.name === "Object" ? "Calendar" : requestObj.calendar.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates calendar exception.
     * @param requestObj contains request parameters
     */
    public async putCalendarException(requestObj: model.PutCalendarExceptionRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putCalendarException.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/calendars/{calendarUid}/calendarExceptions/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "calendarUid" + "}", String(requestObj.calendarUid))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putCalendarException.');
        }

        // verify required parameter 'requestObj.calendarUid' is not null or undefined
        if (requestObj.calendarUid === null || requestObj.calendarUid === undefined) {
            throw new Error('Required parameter "requestObj.calendarUid" was null or undefined when calling putCalendarException.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling putCalendarException.');
        }

        // verify required parameter 'requestObj.calendarException' is not null or undefined
        if (requestObj.calendarException === null || requestObj.calendarException === undefined) {
            throw new Error('Required parameter "requestObj.calendarException" was null or undefined when calling putCalendarException.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        let requestBody : any;
        if(requestObj.calendarException) {
            requestBody = ObjectSerializer.serialize(requestObj.calendarException, requestObj.calendarException.constructor.name === "Object" ? "CalendarException" : requestObj.calendarException.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Returns the list of the tasks which must be completed on time for a project to finish on schedule. Each task of the project is represented as a task item here, which is light-weighted task representation of the project task..
     * @param requestObj contains request parameters
     */
    public async getCriticalPath(requestObj: model.GetCriticalPathRequest): Promise<model.TasksIncomingMessage<model.TaskItemsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getCriticalPath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/criticalPath"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getCriticalPath.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TaskItemsResponse");
		const result: model.TasksIncomingMessage<model.TaskItemsResponse> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Returns page count for the project to be rendered using given Timescale and PresentationFormat  or specified PageSize.
     * @param requestObj contains request parameters
     */
    public async getPageCount(requestObj: model.GetPageCountRequest): Promise<model.TasksIncomingMessage<model.PageCountResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getPageCount.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/pagecount"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getPageCount.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageSize", requestObj.pageSize);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "presentationFormat", requestObj.presentationFormat);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "timescale", requestObj.timescale);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startDate", requestObj.startDate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "endDate", requestObj.endDate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "PageCountResponse");
		const result: model.TasksIncomingMessage<model.PageCountResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get Uids of projects contained in the file.
     * @param requestObj contains request parameters
     */
    public async getProjectIds(requestObj: model.GetProjectIdsRequest): Promise<model.TasksIncomingMessage<model.ProjectIdsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getProjectIds.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/projectids"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getProjectIds.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ProjectIdsResponse");
		const result: model.TasksIncomingMessage<model.ProjectIdsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get a project document.
     * @param requestObj contains request parameters
     */
    public async getTaskDocument(requestObj: model.GetTaskDocumentRequest): Promise<model.TasksIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTaskDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTaskDocument.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
		const result: model.TasksIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get a project document in the specified format
     * @param requestObj contains request parameters
     */
    public async getTaskDocumentWithFormat(requestObj: model.GetTaskDocumentWithFormatRequest): Promise<model.TasksIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTaskDocumentWithFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/format"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTaskDocumentWithFormat.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling getTaskDocumentWithFormat.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "returnAsZipArchive", requestObj.returnAsZipArchive);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
		const result: model.TasksIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Imports project from database with the specified connection string and saves it to specified file with the specified format.
     * @param requestObj contains request parameters
     */
    public async putImportProjectFromDb(requestObj: model.PutImportProjectFromDbRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putImportProjectFromDb.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/importfromdb";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.databaseType' is not null or undefined
        if (requestObj.databaseType === null || requestObj.databaseType === undefined) {
            throw new Error('Required parameter "requestObj.databaseType" was null or undefined when calling putImportProjectFromDb.');
        }

        // verify required parameter 'requestObj.connectionString' is not null or undefined
        if (requestObj.connectionString === null || requestObj.connectionString === undefined) {
            throw new Error('Required parameter "requestObj.connectionString" was null or undefined when calling putImportProjectFromDb.');
        }

        // verify required parameter 'requestObj.projectUid' is not null or undefined
        if (requestObj.projectUid === null || requestObj.projectUid === undefined) {
            throw new Error('Required parameter "requestObj.projectUid" was null or undefined when calling putImportProjectFromDb.');
        }

        // verify required parameter 'requestObj.filename' is not null or undefined
        if (requestObj.filename === null || requestObj.filename === undefined) {
            throw new Error('Required parameter "requestObj.filename" was null or undefined when calling putImportProjectFromDb.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "databaseType", requestObj.databaseType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "projectUid", requestObj.projectUid);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "filename", requestObj.filename);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "databaseSchema", requestObj.databaseSchema);

        let requestBody : any;
        if(requestObj.connectionString) {
            requestBody = ObjectSerializer.serialize(requestObj.connectionString, requestObj.connectionString.constructor.name === "Object" ? "string" : requestObj.connectionString.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Imports project from primavera db formats (Primavera SQLite .db or Primavera xml) and saves it to specified file with the specified format.
     * @param requestObj contains request parameters
     */
    public async putImportProjectFromFile(requestObj: model.PutImportProjectFromFileRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putImportProjectFromFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/import"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putImportProjectFromFile.');
        }

        // verify required parameter 'requestObj.projectUid' is not null or undefined
        if (requestObj.projectUid === null || requestObj.projectUid === undefined) {
            throw new Error('Required parameter "requestObj.projectUid" was null or undefined when calling putImportProjectFromFile.');
        }

        // verify required parameter 'requestObj.filename' is not null or undefined
        if (requestObj.filename === null || requestObj.filename === undefined) {
            throw new Error('Required parameter "requestObj.filename" was null or undefined when calling putImportProjectFromFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "projectUid", requestObj.projectUid);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "filename", requestObj.filename);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileType", requestObj.fileType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outputFileFormat", requestObj.outputFileFormat);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Imports project from Project Online and saves it to specified file.
     * @param requestObj contains request parameters
     */
    public async putImportProjectFromProjectOnline(requestObj: model.PutImportProjectFromProjectOnlineRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putImportProjectFromProjectOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/importfromprojectonline"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putImportProjectFromProjectOnline.');
        }

        // verify required parameter 'requestObj.guid' is not null or undefined
        if (requestObj.guid === null || requestObj.guid === undefined) {
            throw new Error('Required parameter "requestObj.guid" was null or undefined when calling putImportProjectFromProjectOnline.');
        }

        // verify required parameter 'requestObj.siteUrl' is not null or undefined
        if (requestObj.siteUrl === null || requestObj.siteUrl === undefined) {
            throw new Error('Required parameter "requestObj.siteUrl" was null or undefined when calling putImportProjectFromProjectOnline.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "siteUrl", requestObj.siteUrl);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "userName", requestObj.userName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        headerParams["x-project-online-token"] = ObjectSerializer.serialize(requestObj.xProjectOnlineToken, "string");
        headerParams["x-sharepoint-password"] = ObjectSerializer.serialize(requestObj.xSharepointPassword, "string");

        let requestBody : any;
        if(requestObj.guid) {
            requestBody = ObjectSerializer.serialize(requestObj.guid, requestObj.guid.constructor.name === "Object" ? "string" : requestObj.guid.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Get a collection of a project's document properties.
     * @param requestObj contains request parameters
     */
    public async getDocumentProperties(requestObj: model.GetDocumentPropertiesRequest): Promise<model.TasksIncomingMessage<model.DocumentPropertiesResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/documentproperties"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentProperties.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentPropertiesResponse");
		const result: model.TasksIncomingMessage<model.DocumentPropertiesResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get a document property by name.
     * @param requestObj contains request parameters
     */
    public async getDocumentProperty(requestObj: model.GetDocumentPropertyRequest): Promise<model.TasksIncomingMessage<model.DocumentPropertyResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentProperty.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/documentproperties/{propertyName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "propertyName" + "}", String(requestObj.propertyName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling getDocumentProperty.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentPropertyResponse");
		const result: model.TasksIncomingMessage<model.DocumentPropertyResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Set/create document property.
     * @param requestObj contains request parameters
     */
    public async postDocumentProperty(requestObj: model.PostDocumentPropertyRequest): Promise<model.TasksIncomingMessage<model.DocumentPropertyResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDocumentProperty.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/documentproperties/{propertyName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "propertyName" + "}", String(requestObj.propertyName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDocumentProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling postDocumentProperty.');
        }

        // verify required parameter 'requestObj.property' is not null or undefined
        if (requestObj.property === null || requestObj.property === undefined) {
            throw new Error('Required parameter "requestObj.property" was null or undefined when calling postDocumentProperty.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "filename", requestObj.filename);

        let requestBody : any;
        if(requestObj.property) {
            requestBody = ObjectSerializer.serialize(requestObj.property, requestObj.property.constructor.name === "Object" ? "DocumentProperty" : requestObj.property.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentPropertyResponse");
		const result: model.TasksIncomingMessage<model.DocumentPropertyResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Set/create document property.
     * @param requestObj contains request parameters
     */
    public async putDocumentProperty(requestObj: model.PutDocumentPropertyRequest): Promise<model.TasksIncomingMessage<model.DocumentPropertyResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDocumentProperty.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/documentproperties/{propertyName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "propertyName" + "}", String(requestObj.propertyName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putDocumentProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling putDocumentProperty.');
        }

        // verify required parameter 'requestObj.property' is not null or undefined
        if (requestObj.property === null || requestObj.property === undefined) {
            throw new Error('Required parameter "requestObj.property" was null or undefined when calling putDocumentProperty.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "filename", requestObj.filename);

        let requestBody : any;
        if(requestObj.property) {
            requestBody = ObjectSerializer.serialize(requestObj.property, requestObj.property.constructor.name === "Object" ? "DocumentProperty" : requestObj.property.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentPropertyResponse");
		const result: model.TasksIncomingMessage<model.DocumentPropertyResponse> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Delete a project extended attribute.
     * @param requestObj contains request parameters
     */
    public async deleteExtendedAttributeByIndex(requestObj: model.DeleteExtendedAttributeByIndexRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteExtendedAttributeByIndex.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/extendedAttributes/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteExtendedAttributeByIndex.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteExtendedAttributeByIndex.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get a project extended attribute definition with the specified index.
     * @param requestObj contains request parameters
     */
    public async getExtendedAttributeByIndex(requestObj: model.GetExtendedAttributeByIndexRequest): Promise<model.TasksIncomingMessage<model.ExtendedAttributeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getExtendedAttributeByIndex.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/extendedAttributes/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getExtendedAttributeByIndex.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getExtendedAttributeByIndex.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ExtendedAttributeResponse");
		const result: model.TasksIncomingMessage<model.ExtendedAttributeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get a project's extended attributes.
     * @param requestObj contains request parameters
     */
    public async getExtendedAttributes(requestObj: model.GetExtendedAttributesRequest): Promise<model.TasksIncomingMessage<model.ExtendedAttributeItemsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getExtendedAttributes.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/extendedAttributes"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getExtendedAttributes.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ExtendedAttributeItemsResponse");
		const result: model.TasksIncomingMessage<model.ExtendedAttributeItemsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Add a new extended attribute definition to a project or  updates existing attribute definition (with the same FieldId).
     * @param requestObj contains request parameters
     */
    public async putExtendedAttribute(requestObj: model.PutExtendedAttributeRequest): Promise<model.TasksIncomingMessage<model.ExtendedAttributeItemResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putExtendedAttribute.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/extendedAttributes"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.extendedAttribute' is not null or undefined
        if (requestObj.extendedAttribute === null || requestObj.extendedAttribute === undefined) {
            throw new Error('Required parameter "requestObj.extendedAttribute" was null or undefined when calling putExtendedAttribute.');
        }

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putExtendedAttribute.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        let requestBody : any;
        if(requestObj.extendedAttribute) {
            requestBody = ObjectSerializer.serialize(requestObj.extendedAttribute, requestObj.extendedAttribute.constructor.name === "Object" ? "ExtendedAttributeDefinition" : requestObj.extendedAttribute.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ExtendedAttributeItemResponse");
		const result: model.TasksIncomingMessage<model.ExtendedAttributeItemResponse> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Deletes a project outline code
     * @param requestObj contains request parameters
     */
    public async deleteOutlineCodeByIndex(requestObj: model.DeleteOutlineCodeByIndexRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteOutlineCodeByIndex.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/outlineCodes/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteOutlineCodeByIndex.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteOutlineCodeByIndex.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get outline code by index.
     * @param requestObj contains request parameters
     */
    public async getOutlineCodeByIndex(requestObj: model.GetOutlineCodeByIndexRequest): Promise<model.TasksIncomingMessage<model.OutlineCodeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOutlineCodeByIndex.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/outlineCodes/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getOutlineCodeByIndex.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getOutlineCodeByIndex.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "OutlineCodeResponse");
		const result: model.TasksIncomingMessage<model.OutlineCodeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get a project's outline codes.
     * @param requestObj contains request parameters
     */
    public async getOutlineCodes(requestObj: model.GetOutlineCodesRequest): Promise<model.TasksIncomingMessage<model.OutlineCodeItemsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOutlineCodes.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/outlineCodes"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getOutlineCodes.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "OutlineCodeItemsResponse");
		const result: model.TasksIncomingMessage<model.OutlineCodeItemsResponse> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Creates new project in Project Server\\Project Online instance.
     * @param requestObj contains request parameters
     */
    public async createNewProject(requestObj: model.CreateNewProjectRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createNewProject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/projectOnline/{siteUrl}/{name}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "siteUrl" + "}", String(requestObj.siteUrl));
        const queryParameters: any = {};
        const headerParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling createNewProject.');
        }

        // verify required parameter 'requestObj.siteUrl' is not null or undefined
        if (requestObj.siteUrl === null || requestObj.siteUrl === undefined) {
            throw new Error('Required parameter "requestObj.siteUrl" was null or undefined when calling createNewProject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "userName", requestObj.userName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        headerParams["x-project-online-token"] = ObjectSerializer.serialize(requestObj.xProjectOnlineToken, "string");
        headerParams["x-sharepoint-password"] = ObjectSerializer.serialize(requestObj.xSharepointPassword, "string");

        let requestBody : any;
        if(requestObj.saveOptions) {
            requestBody = ObjectSerializer.serialize(requestObj.saveOptions, requestObj.saveOptions.constructor.name === "Object" ? "ProjectServerSaveOptionsDTO" : requestObj.saveOptions.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets the list of published projects in the current Project Online account.
     * @param requestObj contains request parameters
     */
    public async getProjectList(requestObj: model.GetProjectListRequest): Promise<model.TasksIncomingMessage<model.ProjectListResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getProjectList.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/projectOnline/projectList";
        const queryParameters: any = {};
        const headerParams: any = {};

        // verify required parameter 'requestObj.siteUrl' is not null or undefined
        if (requestObj.siteUrl === null || requestObj.siteUrl === undefined) {
            throw new Error('Required parameter "requestObj.siteUrl" was null or undefined when calling getProjectList.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "siteUrl", requestObj.siteUrl);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "userName", requestObj.userName);
        headerParams["x-project-online-token"] = ObjectSerializer.serialize(requestObj.xProjectOnlineToken, "string");
        headerParams["x-sharepoint-password"] = ObjectSerializer.serialize(requestObj.xSharepointPassword, "string");

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ProjectListResponse");
		const result: model.TasksIncomingMessage<model.ProjectListResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates existing project in Project Server\\Project Online instance. The existing project will be overwritten.
     * @param requestObj contains request parameters
     */
    public async updateProject(requestObj: model.UpdateProjectRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateProject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/projectOnline/{siteUrl}/{name}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "siteUrl" + "}", String(requestObj.siteUrl));
        const queryParameters: any = {};
        const headerParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateProject.');
        }

        // verify required parameter 'requestObj.siteUrl' is not null or undefined
        if (requestObj.siteUrl === null || requestObj.siteUrl === undefined) {
            throw new Error('Required parameter "requestObj.siteUrl" was null or undefined when calling updateProject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "userName", requestObj.userName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        headerParams["x-project-online-token"] = ObjectSerializer.serialize(requestObj.xProjectOnlineToken, "string");
        headerParams["x-sharepoint-password"] = ObjectSerializer.serialize(requestObj.xSharepointPassword, "string");

        let requestBody : any;
        if(requestObj.saveOptions) {
            requestBody = ObjectSerializer.serialize(requestObj.saveOptions, requestObj.saveOptions.constructor.name === "Object" ? "ProjectServerSaveOptionsDTO" : requestObj.saveOptions.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Reschedules all project tasks ids, outline levels, start/finish dates, sets early/late dates, calculates slacks, work and cost fields.
     * @param requestObj contains request parameters
     */
    public async putRecalculateProject(requestObj: model.PutRecalculateProjectRequest): Promise<model.TasksIncomingMessage<model.ProjectRecalculateResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putRecalculateProject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/recalculate/project"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putRecalculateProject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "mode", requestObj.mode);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "validate", requestObj.validate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ProjectRecalculateResponse");
		const result: model.TasksIncomingMessage<model.ProjectRecalculateResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Recalculate project resource fields
     * @param requestObj contains request parameters
     */
    public async putRecalculateProjectResourceFields(requestObj: model.PutRecalculateProjectResourceFieldsRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putRecalculateProjectResourceFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/recalculate/resourceFields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putRecalculateProjectResourceFields.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Recalculate project uncomplete work
     * @param requestObj contains request parameters
     */
    public async putRecalculateProjectUncompleteWorkToStartAfter(requestObj: model.PutRecalculateProjectUncompleteWorkToStartAfterRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putRecalculateProjectUncompleteWorkToStartAfter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/recalculate/uncompleteWorkToStartAfter"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putRecalculateProjectUncompleteWorkToStartAfter.');
        }

        // verify required parameter 'requestObj.after' is not null or undefined
        if (requestObj.after === null || requestObj.after === undefined) {
            throw new Error('Required parameter "requestObj.after" was null or undefined when calling putRecalculateProjectUncompleteWorkToStartAfter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);

        let requestBody : any;
        if(requestObj.after) {
            requestBody = ObjectSerializer.serialize(requestObj.after, requestObj.after.constructor.name === "Object" ? "Date" : requestObj.after.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Recalculate project work as complete 
     * @param requestObj contains request parameters
     */
    public async putRecalculateProjectWorkAsComplete(requestObj: model.PutRecalculateProjectWorkAsCompleteRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putRecalculateProjectWorkAsComplete.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/recalculate/projectWorkAsComplete"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putRecalculateProjectWorkAsComplete.');
        }

        // verify required parameter 'requestObj.completeThrough' is not null or undefined
        if (requestObj.completeThrough === null || requestObj.completeThrough === undefined) {
            throw new Error('Required parameter "requestObj.completeThrough" was null or undefined when calling putRecalculateProjectWorkAsComplete.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "setZeroOrHundredPercentCompleteOnly", requestObj.setZeroOrHundredPercentCompleteOnly);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);

        let requestBody : any;
        if(requestObj.completeThrough) {
            requestBody = ObjectSerializer.serialize(requestObj.completeThrough, requestObj.completeThrough.constructor.name === "Object" ? "Date" : requestObj.completeThrough.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Returns created report in PDF format.
     * @param requestObj contains request parameters
     */
    public async getReportPdf(requestObj: model.GetReportPdfRequest): Promise<model.TasksIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getReportPdf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/report"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getReportPdf.');
        }

        // verify required parameter 'requestObj.type' is not null or undefined
        if (requestObj.type === null || requestObj.type === undefined) {
            throw new Error('Required parameter "requestObj.type" was null or undefined when calling getReportPdf.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "type", requestObj.type);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
		const result: model.TasksIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Deletes a project resource with all references to it
     * @param requestObj contains request parameters
     */
    public async deleteResource(requestObj: model.DeleteResourceRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteResource.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/resources/{resourceUid}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "resourceUid" + "}", String(requestObj.resourceUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteResource.');
        }

        // verify required parameter 'requestObj.resourceUid' is not null or undefined
        if (requestObj.resourceUid === null || requestObj.resourceUid === undefined) {
            throw new Error('Required parameter "requestObj.resourceUid" was null or undefined when calling deleteResource.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get project resource.
     * @param requestObj contains request parameters
     */
    public async getResource(requestObj: model.GetResourceRequest): Promise<model.TasksIncomingMessage<model.ResourceResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getResource.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/resources/{resourceUid}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "resourceUid" + "}", String(requestObj.resourceUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getResource.');
        }

        // verify required parameter 'requestObj.resourceUid' is not null or undefined
        if (requestObj.resourceUid === null || requestObj.resourceUid === undefined) {
            throw new Error('Required parameter "requestObj.resourceUid" was null or undefined when calling getResource.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ResourceResponse");
		const result: model.TasksIncomingMessage<model.ResourceResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get resource's assignments.
     * @param requestObj contains request parameters
     */
    public async getResourceAssignments(requestObj: model.GetResourceAssignmentsRequest): Promise<model.TasksIncomingMessage<model.AssignmentsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getResourceAssignments.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/resources/{resourceUid}/assignments"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "resourceUid" + "}", String(requestObj.resourceUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getResourceAssignments.');
        }

        // verify required parameter 'requestObj.resourceUid' is not null or undefined
        if (requestObj.resourceUid === null || requestObj.resourceUid === undefined) {
            throw new Error('Required parameter "requestObj.resourceUid" was null or undefined when calling getResourceAssignments.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AssignmentsResponse");
		const result: model.TasksIncomingMessage<model.AssignmentsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get timescaled data for a resource with the specified Uid.
     * @param requestObj contains request parameters
     */
    public async getResourceTimephasedData(requestObj: model.GetResourceTimephasedDataRequest): Promise<model.TasksIncomingMessage<model.TimephasedDataResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getResourceTimephasedData.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/resources/{resourceUid}/timeScaleData"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "resourceUid" + "}", String(requestObj.resourceUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getResourceTimephasedData.');
        }

        // verify required parameter 'requestObj.resourceUid' is not null or undefined
        if (requestObj.resourceUid === null || requestObj.resourceUid === undefined) {
            throw new Error('Required parameter "requestObj.resourceUid" was null or undefined when calling getResourceTimephasedData.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "type", requestObj.type);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startDate", requestObj.startDate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "endDate", requestObj.endDate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TimephasedDataResponse");
		const result: model.TasksIncomingMessage<model.TimephasedDataResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get a project's resources.
     * @param requestObj contains request parameters
     */
    public async getResources(requestObj: model.GetResourcesRequest): Promise<model.TasksIncomingMessage<model.ResourceItemsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getResources.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/resources"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getResources.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ResourceItemsResponse");
		const result: model.TasksIncomingMessage<model.ResourceItemsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Add a new resource to a project.
     * @param requestObj contains request parameters
     */
    public async postResource(requestObj: model.PostResourceRequest): Promise<model.TasksIncomingMessage<model.ResourceItemResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postResource.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/resources"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postResource.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resourceName", requestObj.resourceName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "beforeResourceId", requestObj.beforeResourceId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ResourceItemResponse");
		const result: model.TasksIncomingMessage<model.ResourceItemResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates resource with the specified Uid
     * @param requestObj contains request parameters
     */
    public async putResource(requestObj: model.PutResourceRequest): Promise<model.TasksIncomingMessage<model.ResourceResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putResource.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/resources/{resourceUid}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "resourceUid" + "}", String(requestObj.resourceUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putResource.');
        }

        // verify required parameter 'requestObj.resourceUid' is not null or undefined
        if (requestObj.resourceUid === null || requestObj.resourceUid === undefined) {
            throw new Error('Required parameter "requestObj.resourceUid" was null or undefined when calling putResource.');
        }

        // verify required parameter 'requestObj.resource' is not null or undefined
        if (requestObj.resource === null || requestObj.resource === undefined) {
            throw new Error('Required parameter "requestObj.resource" was null or undefined when calling putResource.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "mode", requestObj.mode);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "recalculate", requestObj.recalculate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);

        let requestBody : any;
        if(requestObj.resource) {
            requestBody = ObjectSerializer.serialize(requestObj.resource, requestObj.resource.constructor.name === "Object" ? "Resource" : requestObj.resource.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ResourceResponse");
		const result: model.TasksIncomingMessage<model.ResourceResponse> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Performs a risk analysys using Monte Carlo simulation and creates a risk analysis report.
     * @param requestObj contains request parameters
     */
    public async getRiskAnalysisReport(requestObj: model.GetRiskAnalysisReportRequest): Promise<model.TasksIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRiskAnalysisReport.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/riskAnalysisReport"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getRiskAnalysisReport.');
        }

        // verify required parameter 'requestObj.taskUid' is not null or undefined
        if (requestObj.taskUid === null || requestObj.taskUid === undefined) {
            throw new Error('Required parameter "requestObj.taskUid" was null or undefined when calling getRiskAnalysisReport.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "taskUid", requestObj.taskUid);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "distributionType", requestObj.distributionType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "optimistic", requestObj.optimistic);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pessimistic", requestObj.pessimistic);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "confidenceLevel", requestObj.confidenceLevel);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "iterations", requestObj.iterations);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
		const result: model.TasksIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Deletes a project task with all references to it and rebuilds tasks tree.
     * @param requestObj contains request parameters
     */
    public async deleteTask(requestObj: model.DeleteTaskRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTask.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/tasks/{taskUid}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "taskUid" + "}", String(requestObj.taskUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteTask.');
        }

        // verify required parameter 'requestObj.taskUid' is not null or undefined
        if (requestObj.taskUid === null || requestObj.taskUid === undefined) {
            throw new Error('Required parameter "requestObj.taskUid" was null or undefined when calling deleteTask.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get primavera properties for a task with the specified Uid.
     * @param requestObj contains request parameters
     */
    public async getPrimaveraTaskProperties(requestObj: model.GetPrimaveraTaskPropertiesRequest): Promise<model.TasksIncomingMessage<model.PrimaveraTaskPropertiesResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getPrimaveraTaskProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/tasks/{taskUid}/primaveraProperties"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "taskUid" + "}", String(requestObj.taskUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getPrimaveraTaskProperties.');
        }

        // verify required parameter 'requestObj.taskUid' is not null or undefined
        if (requestObj.taskUid === null || requestObj.taskUid === undefined) {
            throw new Error('Required parameter "requestObj.taskUid" was null or undefined when calling getPrimaveraTaskProperties.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "PrimaveraTaskPropertiesResponse");
		const result: model.TasksIncomingMessage<model.PrimaveraTaskPropertiesResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Read project task.
     * @param requestObj contains request parameters
     */
    public async getTask(requestObj: model.GetTaskRequest): Promise<model.TasksIncomingMessage<model.TaskResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTask.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/tasks/{taskUid}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "taskUid" + "}", String(requestObj.taskUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTask.');
        }

        // verify required parameter 'requestObj.taskUid' is not null or undefined
        if (requestObj.taskUid === null || requestObj.taskUid === undefined) {
            throw new Error('Required parameter "requestObj.taskUid" was null or undefined when calling getTask.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TaskResponse");
		const result: model.TasksIncomingMessage<model.TaskResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get task assignments.
     * @param requestObj contains request parameters
     */
    public async getTaskAssignments(requestObj: model.GetTaskAssignmentsRequest): Promise<model.TasksIncomingMessage<model.AssignmentsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTaskAssignments.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/tasks/{taskUid}/assignments"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "taskUid" + "}", String(requestObj.taskUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTaskAssignments.');
        }

        // verify required parameter 'requestObj.taskUid' is not null or undefined
        if (requestObj.taskUid === null || requestObj.taskUid === undefined) {
            throw new Error('Required parameter "requestObj.taskUid" was null or undefined when calling getTaskAssignments.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AssignmentsResponse");
		const result: model.TasksIncomingMessage<model.AssignmentsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get recurring info for a task with the specified Uid
     * @param requestObj contains request parameters
     */
    public async getTaskRecurringInfo(requestObj: model.GetTaskRecurringInfoRequest): Promise<model.TasksIncomingMessage<model.RecurringInfoResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTaskRecurringInfo.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/tasks/{taskUid}/recurringInfo"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "taskUid" + "}", String(requestObj.taskUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTaskRecurringInfo.');
        }

        // verify required parameter 'requestObj.taskUid' is not null or undefined
        if (requestObj.taskUid === null || requestObj.taskUid === undefined) {
            throw new Error('Required parameter "requestObj.taskUid" was null or undefined when calling getTaskRecurringInfo.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "RecurringInfoResponse");
		const result: model.TasksIncomingMessage<model.RecurringInfoResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get timescaled data for a task with the specified Uid.
     * @param requestObj contains request parameters
     */
    public async getTaskTimephasedData(requestObj: model.GetTaskTimephasedDataRequest): Promise<model.TasksIncomingMessage<model.TimephasedDataResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTaskTimephasedData.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/tasks/{taskUid}/timeScaleData"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "taskUid" + "}", String(requestObj.taskUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTaskTimephasedData.');
        }

        // verify required parameter 'requestObj.taskUid' is not null or undefined
        if (requestObj.taskUid === null || requestObj.taskUid === undefined) {
            throw new Error('Required parameter "requestObj.taskUid" was null or undefined when calling getTaskTimephasedData.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "type", requestObj.type);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startDate", requestObj.startDate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "endDate", requestObj.endDate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TimephasedDataResponse");
		const result: model.TasksIncomingMessage<model.TimephasedDataResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get a project's tasks.
     * @param requestObj contains request parameters
     */
    public async getTasks(requestObj: model.GetTasksRequest): Promise<model.TasksIncomingMessage<model.TaskItemsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTasks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/tasks"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTasks.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TaskItemsResponse");
		const result: model.TasksIncomingMessage<model.TaskItemsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Add a new task to a project.
     * @param requestObj contains request parameters
     */
    public async postTask(requestObj: model.PostTaskRequest): Promise<model.TasksIncomingMessage<model.TaskItemResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postTask.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/tasks"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postTask.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "taskName", requestObj.taskName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "beforeTaskId", requestObj.beforeTaskId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TaskItemResponse");
		const result: model.TasksIncomingMessage<model.TaskItemResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds a new recurring task.
     * @param requestObj contains request parameters
     */
    public async postTaskRecurringInfo(requestObj: model.PostTaskRecurringInfoRequest): Promise<model.TasksIncomingMessage<model.TaskItemResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postTaskRecurringInfo.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/tasks/recurringInfo"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postTaskRecurringInfo.');
        }

        // verify required parameter 'requestObj.parentTaskUid' is not null or undefined
        if (requestObj.parentTaskUid === null || requestObj.parentTaskUid === undefined) {
            throw new Error('Required parameter "requestObj.parentTaskUid" was null or undefined when calling postTaskRecurringInfo.');
        }

        // verify required parameter 'requestObj.taskName' is not null or undefined
        if (requestObj.taskName === null || requestObj.taskName === undefined) {
            throw new Error('Required parameter "requestObj.taskName" was null or undefined when calling postTaskRecurringInfo.');
        }

        // verify required parameter 'requestObj.recurringInfo' is not null or undefined
        if (requestObj.recurringInfo === null || requestObj.recurringInfo === undefined) {
            throw new Error('Required parameter "requestObj.recurringInfo" was null or undefined when calling postTaskRecurringInfo.');
        }

        // verify required parameter 'requestObj.calendarName' is not null or undefined
        if (requestObj.calendarName === null || requestObj.calendarName === undefined) {
            throw new Error('Required parameter "requestObj.calendarName" was null or undefined when calling postTaskRecurringInfo.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "parentTaskUid", requestObj.parentTaskUid);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "taskName", requestObj.taskName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "calendarName", requestObj.calendarName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        let requestBody : any;
        if(requestObj.recurringInfo) {
            requestBody = ObjectSerializer.serialize(requestObj.recurringInfo, requestObj.recurringInfo.constructor.name === "Object" ? "RecurringInfo" : requestObj.recurringInfo.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TaskItemResponse");
		const result: model.TasksIncomingMessage<model.TaskItemResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Create multiple tasks by single request.
     * @param requestObj contains request parameters
     */
    public async postTasks(requestObj: model.PostTasksRequest): Promise<model.TasksIncomingMessage<model.TaskItemsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postTasks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/tasks/batch"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postTasks.');
        }

        // verify required parameter 'requestObj.requests' is not null or undefined
        if (requestObj.requests === null || requestObj.requests === undefined) {
            throw new Error('Required parameter "requestObj.requests" was null or undefined when calling postTasks.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        let requestBody : any;
        if(requestObj.requests) {
            requestBody = ObjectSerializer.serialize(requestObj.requests, requestObj.requests.constructor.name === "Object" ? "Array<TaskCreationRequest>" : requestObj.requests.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TaskItemsResponse");
		const result: model.TasksIncomingMessage<model.TaskItemsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Move one task to another parent task.
     * @param requestObj contains request parameters
     */
    public async putMoveTask(requestObj: model.PutMoveTaskRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putMoveTask.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/tasks/{taskUid}/move"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "taskUid" + "}", String(requestObj.taskUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putMoveTask.');
        }

        // verify required parameter 'requestObj.taskUid' is not null or undefined
        if (requestObj.taskUid === null || requestObj.taskUid === undefined) {
            throw new Error('Required parameter "requestObj.taskUid" was null or undefined when calling putMoveTask.');
        }

        // verify required parameter 'requestObj.parentTaskUid' is not null or undefined
        if (requestObj.parentTaskUid === null || requestObj.parentTaskUid === undefined) {
            throw new Error('Required parameter "requestObj.parentTaskUid" was null or undefined when calling putMoveTask.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "parentTaskUid", requestObj.parentTaskUid);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Move a task to another position under the same parent and the same outline level
     * @param requestObj contains request parameters
     */
    public async putMoveTaskToSibling(requestObj: model.PutMoveTaskToSiblingRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putMoveTaskToSibling.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/tasks/{taskUid}/moveToSibling"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "taskUid" + "}", String(requestObj.taskUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putMoveTaskToSibling.');
        }

        // verify required parameter 'requestObj.taskUid' is not null or undefined
        if (requestObj.taskUid === null || requestObj.taskUid === undefined) {
            throw new Error('Required parameter "requestObj.taskUid" was null or undefined when calling putMoveTaskToSibling.');
        }

        // verify required parameter 'requestObj.beforeTaskUid' is not null or undefined
        if (requestObj.beforeTaskUid === null || requestObj.beforeTaskUid === undefined) {
            throw new Error('Required parameter "requestObj.beforeTaskUid" was null or undefined when calling putMoveTaskToSibling.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "beforeTaskUid", requestObj.beforeTaskUid);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates special task getting by task UID
     * @param requestObj contains request parameters
     */
    public async putTask(requestObj: model.PutTaskRequest): Promise<model.TasksIncomingMessage<model.TaskResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putTask.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/tasks/{taskUid}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "taskUid" + "}", String(requestObj.taskUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putTask.');
        }

        // verify required parameter 'requestObj.taskUid' is not null or undefined
        if (requestObj.taskUid === null || requestObj.taskUid === undefined) {
            throw new Error('Required parameter "requestObj.taskUid" was null or undefined when calling putTask.');
        }

        // verify required parameter 'requestObj.task' is not null or undefined
        if (requestObj.task === null || requestObj.task === undefined) {
            throw new Error('Required parameter "requestObj.task" was null or undefined when calling putTask.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "mode", requestObj.mode);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "recalculate", requestObj.recalculate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);

        let requestBody : any;
        if(requestObj.task) {
            requestBody = ObjectSerializer.serialize(requestObj.task, requestObj.task.constructor.name === "Object" ? "Task" : requestObj.task.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TaskResponse");
		const result: model.TasksIncomingMessage<model.TaskResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates existing task's recurring info. Note that task should be already recurring.
     * @param requestObj contains request parameters
     */
    public async putTaskRecurringInfo(requestObj: model.PutTaskRecurringInfoRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putTaskRecurringInfo.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/tasks/{taskUid}/recurringInfo"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "taskUid" + "}", String(requestObj.taskUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putTaskRecurringInfo.');
        }

        // verify required parameter 'requestObj.taskUid' is not null or undefined
        if (requestObj.taskUid === null || requestObj.taskUid === undefined) {
            throw new Error('Required parameter "requestObj.taskUid" was null or undefined when calling putTaskRecurringInfo.');
        }

        // verify required parameter 'requestObj.recurringInfo' is not null or undefined
        if (requestObj.recurringInfo === null || requestObj.recurringInfo === undefined) {
            throw new Error('Required parameter "requestObj.recurringInfo" was null or undefined when calling putTaskRecurringInfo.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        let requestBody : any;
        if(requestObj.recurringInfo) {
            requestBody = ObjectSerializer.serialize(requestObj.recurringInfo, requestObj.recurringInfo.constructor.name === "Object" ? "RecurringInfo" : requestObj.recurringInfo.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Delete task link.
     * @param requestObj contains request parameters
     */
    public async deleteTaskLink(requestObj: model.DeleteTaskLinkRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTaskLink.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/taskLinks/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteTaskLink.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteTaskLink.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get tasks' links of a project.
     * @param requestObj contains request parameters
     */
    public async getTaskLinks(requestObj: model.GetTaskLinksRequest): Promise<model.TasksIncomingMessage<model.TaskLinksResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTaskLinks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/taskLinks"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTaskLinks.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TaskLinksResponse");
		const result: model.TasksIncomingMessage<model.TaskLinksResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds a new task link to a project.
     * @param requestObj contains request parameters
     */
    public async postTaskLink(requestObj: model.PostTaskLinkRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postTaskLink.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/taskLinks"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postTaskLink.');
        }

        // verify required parameter 'requestObj.taskLink' is not null or undefined
        if (requestObj.taskLink === null || requestObj.taskLink === undefined) {
            throw new Error('Required parameter "requestObj.taskLink" was null or undefined when calling postTaskLink.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);

        let requestBody : any;
        if(requestObj.taskLink) {
            requestBody = ObjectSerializer.serialize(requestObj.taskLink, requestObj.taskLink.constructor.name === "Object" ? "TaskLink" : requestObj.taskLink.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates existing task link.
     * @param requestObj contains request parameters
     */
    public async putTaskLink(requestObj: model.PutTaskLinkRequest): Promise<model.TasksIncomingMessage<model.TaskLinkResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putTaskLink.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/taskLinks/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putTaskLink.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling putTaskLink.');
        }

        // verify required parameter 'requestObj.taskLink' is not null or undefined
        if (requestObj.taskLink === null || requestObj.taskLink === undefined) {
            throw new Error('Required parameter "requestObj.taskLink" was null or undefined when calling putTaskLink.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);

        let requestBody : any;
        if(requestObj.taskLink) {
            requestBody = ObjectSerializer.serialize(requestObj.taskLink, requestObj.taskLink.constructor.name === "Object" ? "TaskLink" : requestObj.taskLink.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TaskLinkResponse");
		const result: model.TasksIncomingMessage<model.TaskLinkResponse> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Returns VBA project.
     * @param requestObj contains request parameters
     */
    public async getVbaProject(requestObj: model.GetVbaProjectRequest): Promise<model.TasksIncomingMessage<model.VbaProjectResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getVbaProject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/vbaproject"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getVbaProject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "VbaProjectResponse");
		const result: model.TasksIncomingMessage<model.VbaProjectResponse> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Create table text style in specified view.
     * @param requestObj contains request parameters
     */
    public async createTableTextStyle(requestObj: model.CreateTableTextStyleRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createTableTextStyle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/views/{viewUid}/tabletextstyles"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "viewUid" + "}", String(requestObj.viewUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling createTableTextStyle.');
        }

        // verify required parameter 'requestObj.viewUid' is not null or undefined
        if (requestObj.viewUid === null || requestObj.viewUid === undefined) {
            throw new Error('Required parameter "requestObj.viewUid" was null or undefined when calling createTableTextStyle.');
        }

        // verify required parameter 'requestObj.tableTextStyle' is not null or undefined
        if (requestObj.tableTextStyle === null || requestObj.tableTextStyle === undefined) {
            throw new Error('Required parameter "requestObj.tableTextStyle" was null or undefined when calling createTableTextStyle.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        let requestBody : any;
        if(requestObj.tableTextStyle) {
            requestBody = ObjectSerializer.serialize(requestObj.tableTextStyle, requestObj.tableTextStyle.constructor.name === "Object" ? "TableTextStyle" : requestObj.tableTextStyle.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Delete specified table text style from specified view.
     * @param requestObj contains request parameters
     */
    public async deleteTableTextStyle(requestObj: model.DeleteTableTextStyleRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTableTextStyle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/views/{viewUid}/tabletextstyles/{rowUid}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "viewUid" + "}", String(requestObj.viewUid))
            .replace("{" + "rowUid" + "}", String(requestObj.rowUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteTableTextStyle.');
        }

        // verify required parameter 'requestObj.viewUid' is not null or undefined
        if (requestObj.viewUid === null || requestObj.viewUid === undefined) {
            throw new Error('Required parameter "requestObj.viewUid" was null or undefined when calling deleteTableTextStyle.');
        }

        // verify required parameter 'requestObj.rowUid' is not null or undefined
        if (requestObj.rowUid === null || requestObj.rowUid === undefined) {
            throw new Error('Required parameter "requestObj.rowUid" was null or undefined when calling deleteTableTextStyle.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "field", requestObj.field);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Read all table text styles from specified view.
     * @param requestObj contains request parameters
     */
    public async getAllTableTextStyles(requestObj: model.GetAllTableTextStylesRequest): Promise<model.TasksIncomingMessage<model.TableTextStylesResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getAllTableTextStyles.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/views/{viewUid}/tabletextstyles"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "viewUid" + "}", String(requestObj.viewUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getAllTableTextStyles.');
        }

        // verify required parameter 'requestObj.viewUid' is not null or undefined
        if (requestObj.viewUid === null || requestObj.viewUid === undefined) {
            throw new Error('Required parameter "requestObj.viewUid" was null or undefined when calling getAllTableTextStyles.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableTextStylesResponse");
		const result: model.TasksIncomingMessage<model.TableTextStylesResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Read specified table text style from specified view.
     * @param requestObj contains request parameters
     */
    public async getTableTextStyle(requestObj: model.GetTableTextStyleRequest): Promise<model.TasksIncomingMessage<model.TableTextStyleResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableTextStyle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/views/{viewUid}/tabletextstyles/{rowUid}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "viewUid" + "}", String(requestObj.viewUid))
            .replace("{" + "rowUid" + "}", String(requestObj.rowUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTableTextStyle.');
        }

        // verify required parameter 'requestObj.viewUid' is not null or undefined
        if (requestObj.viewUid === null || requestObj.viewUid === undefined) {
            throw new Error('Required parameter "requestObj.viewUid" was null or undefined when calling getTableTextStyle.');
        }

        // verify required parameter 'requestObj.rowUid' is not null or undefined
        if (requestObj.rowUid === null || requestObj.rowUid === undefined) {
            throw new Error('Required parameter "requestObj.rowUid" was null or undefined when calling getTableTextStyle.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "field", requestObj.field);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableTextStyleResponse");
		const result: model.TasksIncomingMessage<model.TableTextStyleResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Read all project views.
     * @param requestObj contains request parameters
     */
    public async getViews(requestObj: model.GetViewsRequest): Promise<model.TasksIncomingMessage<model.ViewsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getViews.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/views"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getViews.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ViewsResponse");
		const result: model.TasksIncomingMessage<model.ViewsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Update table text style in specified view.
     * @param requestObj contains request parameters
     */
    public async updateTableTextStyle(requestObj: model.UpdateTableTextStyleRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTableTextStyle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/views/{viewUid}/tabletextstyles"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "viewUid" + "}", String(requestObj.viewUid));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateTableTextStyle.');
        }

        // verify required parameter 'requestObj.viewUid' is not null or undefined
        if (requestObj.viewUid === null || requestObj.viewUid === undefined) {
            throw new Error('Required parameter "requestObj.viewUid" was null or undefined when calling updateTableTextStyle.');
        }

        // verify required parameter 'requestObj.tableTextStyle' is not null or undefined
        if (requestObj.tableTextStyle === null || requestObj.tableTextStyle === undefined) {
            throw new Error('Required parameter "requestObj.tableTextStyle" was null or undefined when calling updateTableTextStyle.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        let requestBody : any;
        if(requestObj.tableTextStyle) {
            requestBody = ObjectSerializer.serialize(requestObj.tableTextStyle, requestObj.tableTextStyle.constructor.name === "Object" ? "TableTextStyle" : requestObj.tableTextStyle.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }


    /**
     * Get a project's WBS Definition.
     * @param requestObj contains request parameters
     */
    public async getWbsDefinition(requestObj: model.GetWbsDefinitionRequest): Promise<model.TasksIncomingMessage<model.WBSDefinitionResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWbsDefinition.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/wbsDefinition"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getWbsDefinition.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "WBSDefinitionResponse");
		const result: model.TasksIncomingMessage<model.WBSDefinitionResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renumber WBS code of passed tasks (if specified) or all project's tasks.
     * @param requestObj contains request parameters
     */
    public async putRenumberWbsCode(requestObj: model.PutRenumberWbsCodeRequest): Promise<model.TasksIncomingMessage<model.AsposeResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putRenumberWbsCode.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/renumberWbsCode"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putRenumberWbsCode.');
        }

        // verify required parameter 'requestObj.taskUids' is not null or undefined
        if (requestObj.taskUids === null || requestObj.taskUids === undefined) {
            throw new Error('Required parameter "requestObj.taskUids" was null or undefined when calling putRenumberWbsCode.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);

        let requestBody : any;
        if(requestObj.taskUids) {
            requestBody = ObjectSerializer.serialize(requestObj.taskUids, requestObj.taskUids.constructor.name === "Object" ? "Array<number>" : requestObj.taskUids.constructor.name);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: requestBody,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
		const result: model.TasksIncomingMessage<model.AsposeResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get a project document in the specified format and with the specified save options.
     * @param requestObj contains request parameters
     */
    public async postTaskDocumentWithFormat(requestObj: model.PostTaskDocumentWithFormatRequest): Promise<model.TasksIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postTaskDocumentWithFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/tasks/{name}/format"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postTaskDocumentWithFormat.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling postTaskDocumentWithFormat.');
        }

        // verify required parameter 'requestObj.saveOptions' is not null or undefined
        if (requestObj.saveOptions === null || requestObj.saveOptions === undefined) {
            throw new Error('Required parameter "requestObj.saveOptions" was null or undefined when calling postTaskDocumentWithFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "returnAsZipArchive", requestObj.returnAsZipArchive);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: ObjectSerializer.serialize(requestObj.saveOptions, requestObj.saveOptions.constructor.name === "Object" ? "String" : requestObj.saveOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.TasksIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }
}