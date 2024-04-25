/*
* MIT License

* Copyright (c) 2024 Aspose Pty Ltd

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

import { Field, Colors, GetAllTableTextStylesRequest, GetTableTextStyleRequest, GetViewsRequest, ItemType, TextItemType, ViewScreen, BackgroundPattern, CreateTableTextStyleRequest, TableTextStyle, UpdateTableTextStyleRequest, DeleteTableTextStyleRequest } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getViews function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetViewsRequest();
        request.name = fileName;
        request.folder = remotePath;

        const result = await tasksApi.getViews(request);

        expect(result.response.statusCode).to.equal(200);
        const firstView = result.body.views[0];
        expect(firstView).not.undefined.and.not.null;
        expect(firstView.showInMenu).to.equal(true);
        expect(firstView.type).to.equal(ItemType.TaskItem);
        expect(firstView.screen).to.equal(ViewScreen.Gantt);
        expect(firstView.name).to.equal('&Gantt Chart');
        expect(firstView.uid).to.equal(1);
    });
});

describe("getAllTableTextStyles function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetAllTableTextStylesRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.viewUid = 2;

        const result = await tasksApi.getAllTableTextStyles(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.items.length).to.equal(8);
    });
});

describe("getTableTextStyle function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetTableTextStyleRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.viewUid = 2;
        request.rowUid = 29;

        const result = await tasksApi.getTableTextStyle(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.tableTextStyle.rowUid).to.equal(29);
        expect(result.body.tableTextStyle.field).to.equal(Field.Undefined);
        expect(result.body.tableTextStyle.itemType).to.equal(TextItemType.Allocated);
        expect(result.body.tableTextStyle.color).to.equal(Colors.Transparent);
        expect(result.body.tableTextStyle.backgroundPattern).to.equal(BackgroundPattern.Hollow);
        expect(result.body.tableTextStyle.backgroundColor).to.equal(Colors.Transparent);
    });
});

describe("createTableTextStyle function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Home_move_plan.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const newTableTextStyle = new TableTextStyle();
        newTableTextStyle.rowUid = 3;
        newTableTextStyle.field = Field.TaskName;
        newTableTextStyle.itemType = TextItemType.Allocated;
        newTableTextStyle.color = Colors.Red;
        newTableTextStyle.backgroundPattern = BackgroundPattern.Hollow;
        newTableTextStyle.backgroundColor = Colors.GreenYellow;
        const createRequest = new CreateTableTextStyleRequest();
        createRequest.name = fileName;
        createRequest.folder = remotePath;
        createRequest.viewUid = 1;
        createRequest.tableTextStyle = newTableTextStyle;

        const createResult = await tasksApi.createTableTextStyle(createRequest);

        expect(createResult.body.code).to.equal(201);
        

        const getRequest = new GetTableTextStyleRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;
        getRequest.viewUid = createRequest.viewUid;
        getRequest.rowUid = createRequest.tableTextStyle.rowUid;

        const getResult = await tasksApi.getTableTextStyle(getRequest);

        expect(getResult.body.tableTextStyle.rowUid).to.equal(newTableTextStyle.rowUid);
        expect(getResult.body.tableTextStyle.field).to.equal(newTableTextStyle.field);
        expect(getResult.body.tableTextStyle.itemType).to.equal(newTableTextStyle.itemType);
        expect(getResult.body.tableTextStyle.color).to.equal(newTableTextStyle.color);
        expect(getResult.body.tableTextStyle.backgroundPattern).to.equal(newTableTextStyle.backgroundPattern);
        expect(getResult.body.tableTextStyle.backgroundColor).to.equal(newTableTextStyle.backgroundColor);
    });
});

describe("updateTableTextStyle function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const getRequest = new GetTableTextStyleRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;
        getRequest.viewUid = 2;
        getRequest.rowUid = 29;

        let getResult = await tasksApi.getTableTextStyle(getRequest);

        expect(getResult.body.tableTextStyle.color).to.equal(Colors.Transparent);
        expect(getResult.body.tableTextStyle.backgroundColor).to.equal(Colors.Transparent);
        
        const updateRequest = new UpdateTableTextStyleRequest();
        updateRequest.name = getRequest.name;
        updateRequest.folder = getRequest.folder;
        updateRequest.viewUid = getRequest.viewUid;
        updateRequest.tableTextStyle = getResult.body.tableTextStyle;
        updateRequest.tableTextStyle.backgroundColor = Colors.DodgerBlue;
        updateRequest.tableTextStyle.color = Colors.OrangeRed;

        const updateResult = await tasksApi.updateTableTextStyle(updateRequest);

        expect(updateResult.response.statusCode).to.equal(200);

        getResult = await tasksApi.getTableTextStyle(getRequest);

        expect(getResult.body.tableTextStyle.color).to.equal(updateRequest.tableTextStyle.color);
        expect(getResult.body.tableTextStyle.backgroundColor).to.equal(updateRequest.tableTextStyle.backgroundColor);
    });
});

describe("deleteTableTextStyle function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const getRequest = new GetAllTableTextStylesRequest();
        getRequest.name = fileName;
        getRequest.folder = remotePath;
        getRequest.viewUid = 2;

        let getResult = await tasksApi.getAllTableTextStyles(getRequest);

        expect(getResult.body.items.length).to.equal(8);

        const deleteRequest = new DeleteTableTextStyleRequest();
        deleteRequest.name = fileName;
        deleteRequest.folder = remotePath;
        deleteRequest.viewUid = getRequest.viewUid;
        deleteRequest.rowUid = 29;

        const deleteResult = await tasksApi.deleteTableTextStyle(deleteRequest);

        expect(deleteResult.response.statusCode).to.equal(200);

        getResult = await tasksApi.getAllTableTextStyles(getRequest);

        expect(getResult.body.items.length).to.equal(7);
    });
});
