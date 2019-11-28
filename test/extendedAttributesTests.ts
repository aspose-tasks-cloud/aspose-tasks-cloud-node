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

import { GetExtendedAttributesRequest, GetExtendedAttributeByIndexRequest, CalculationType, PutExtendedAttributeRequest, ExtendedAttributeDefinition, CustomFieldType, ElementType, Value, DeleteExtendedAttributeByIndexRequest } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getExtendedAttributes function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetExtendedAttributesRequest();
        request.name = fileName;
        request.folder = remotePath;

        const result = await tasksApi.getExtendedAttributes(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.extendedAttributes).not.undefined.and.not.null;
        expect(result.body.extendedAttributes.list.length).to.equal(2);
    });
});

describe("getExtendedAttributeByIndex function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetExtendedAttributeByIndexRequest();
        request.name = fileName;
        request.folder = remotePath;
        request.index = 1;

        const result = await tasksApi.getExtendedAttributeByIndex(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.extendedAttribute).not.undefined.and.not.null;
        expect(result.body.extendedAttribute.fieldName).to.equal("Text1");
        expect(result.body.extendedAttribute.calculationType).to.equal(CalculationType.Lookup);
        expect(result.body.extendedAttribute.valueList.length).to.equal(1);
        expect(result.body.extendedAttribute.valueList[0].description).to.equal("descr");
        expect(result.body.extendedAttribute.valueList[0].id).to.equal(1);
    });
});

describe("putExtendedAttribute function", () => {
    it("should add new ExtendedAttribute and return correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const firstValue = new Value();
        firstValue.description = "descr1";
        firstValue.val = "Internal";
        firstValue.id = 111;
        const secondValue = new Value();
        secondValue.description = "descr2";
        secondValue.val = "External";
        secondValue.id = 112;
        const newExtendedAttribute = new ExtendedAttributeDefinition
        newExtendedAttribute.calculationType = CalculationType.Lookup,
        newExtendedAttribute.cfType = CustomFieldType.Text,
        newExtendedAttribute.fieldName = "Text3",
        newExtendedAttribute.elementType = ElementType.Task,
        newExtendedAttribute.alias = "New Field",
        newExtendedAttribute.valueList = [firstValue, secondValue];

        const request1 = new PutExtendedAttributeRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.extendedAttribute = newExtendedAttribute;

        const result1 = await tasksApi.putExtendedAttribute(request1);

        expect(result1.response.statusCode).to.equal(200);
        expect(result1.body.extendedAttribute).not.undefined.and.not.null;
        expect(result1.body.extendedAttribute.fieldName).to.equal("Text3");
        expect(result1.body.extendedAttribute.alias).to.equal("New Field");
        expect(result1.body.extendedAttribute.fieldId).to.equal("188743737");

        const addedAttributeIndex = result1.body.extendedAttribute.index;
        const request2 = new GetExtendedAttributeByIndexRequest();
        request2.name = fileName;
        request2.folder = remotePath;
        request2.index = addedAttributeIndex;

        const result2 = await tasksApi.getExtendedAttributeByIndex(request2);

        expect(result2.response.statusCode).to.equal(200);
        expect(result2.body.extendedAttribute).not.undefined.and.not.null;

        expect(result2.body.extendedAttribute.fieldId).to.equal("188743737");
        expect(result2.body.extendedAttribute.fieldName).to.equal("Text3");
        expect(result2.body.extendedAttribute.cfType).to.equal(CustomFieldType.Text);
        expect(result2.body.extendedAttribute.alias).to.equal("New Field");
        
        const valueList = result2.body.extendedAttribute.valueList;
        expect(valueList.length).to.equal(2);
        expect(valueList[0].id).to.equal(111);
        expect(valueList[0].val).to.equal("Internal");
        expect(valueList[0].description).to.equal("descr1");
        expect(valueList[1].id).to.equal(112);
        expect(valueList[1].val).to.equal("External");
        expect(valueList[1].description).to.equal("descr2");
    });
    it("should edit ExtendedAttribute and return correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request1 = new GetExtendedAttributeByIndexRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.index = 1;

        const result1 = await tasksApi.getExtendedAttributeByIndex(request1);

        expect(result1.response.statusCode).to.equal(200);
        expect(result1.body.extendedAttribute).not.undefined.and.not.null;

        const extendedAttributeToEdit = result1.body.extendedAttribute;
        extendedAttributeToEdit.calculationType = CalculationType.None;
        extendedAttributeToEdit.valueList.length = 0;
        extendedAttributeToEdit.cfType = CustomFieldType.Text;
        extendedAttributeToEdit.fieldName = "Text1";
        extendedAttributeToEdit.elementType = ElementType.Task;
        extendedAttributeToEdit.alias = "Edited field";

        const request2 = new PutExtendedAttributeRequest();
        request2.name = fileName;
        request2.folder = remotePath;
        request2.extendedAttribute = extendedAttributeToEdit;

        const result2 = await tasksApi.putExtendedAttribute(request2);

        expect(result2.response.statusCode).to.equal(200);
        expect(result2.body.extendedAttribute).not.undefined.and.not.null;
        expect(result2.body.extendedAttribute.fieldName).to.equal("Text1");
        expect(result2.body.extendedAttribute.alias).to.equal("Edited field");
        expect(result2.body.extendedAttribute.fieldId).to.equal("188743731");

        const addedAttributeIndex = result2.body.extendedAttribute.index;
        const request3 = new GetExtendedAttributeByIndexRequest();
        request3.name = fileName;
        request3.folder = remotePath;
        request3.index = addedAttributeIndex;

        const result3 = await tasksApi.getExtendedAttributeByIndex(request3);

        expect(result3.response.statusCode).to.equal(200);
        expect(result3.body.extendedAttribute).not.undefined.and.not.null;

        expect(result3.body.extendedAttribute.fieldId).to.equal("188743731");
        expect(result3.body.extendedAttribute.fieldName).to.equal("Text1");
        expect(result3.body.extendedAttribute.cfType).to.equal(CustomFieldType.Text);
        expect(result3.body.extendedAttribute.alias).to.equal("Edited field");
        expect(result3.body.extendedAttribute.valueList.length).to.equal(0);
    });
});

describe("deleteExtendedAttributeByIndex function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request1 = new DeleteExtendedAttributeByIndexRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.index = 1;

        const result1 = await tasksApi.deleteExtendedAttributeByIndex(request1);

        expect(result1.response.statusCode).to.equal(200);

        const request2 = new GetExtendedAttributesRequest();
        request2.name = fileName;
        request2.folder = remotePath;

        const result2 = await tasksApi.getExtendedAttributes(request2);

        expect(result2.response.statusCode).to.equal(200);
        expect(result2.body.extendedAttributes).not.undefined.and.not.null;
        expect(result2.body.extendedAttributes.list.length).to.equal(1);
    });
});