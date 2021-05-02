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

import { Value, ExtendedAttributeDefinition, CalculationType, CustomFieldType, ElementType, PutExtendedAttributeRequest, GetTaskRequest, ExtendedAttribute, PutTaskRequest, Duration, TimeUnitType } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("putExtendedAttribute with putTask functions", () => {
    it("should return response with code 200 and uniform lookup value", async () => {
        
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
        const newExtendedAttributeDef = new ExtendedAttributeDefinition
        newExtendedAttributeDef.calculationType = CalculationType.Lookup,
        newExtendedAttributeDef.cfType = CustomFieldType.Text,
        newExtendedAttributeDef.fieldName = "Text3",
        newExtendedAttributeDef.elementType = ElementType.Task,
        newExtendedAttributeDef.alias = "New Field",
        newExtendedAttributeDef.valueList = [firstValue, secondValue];

        const request1 = new PutExtendedAttributeRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.extendedAttribute = newExtendedAttributeDef;

        const putResult = await tasksApi.putExtendedAttribute(request1);

        expect(putResult.response.statusCode).to.equal(200);

        const getTaskRequest = new GetTaskRequest();
        getTaskRequest.name = fileName;
        getTaskRequest.folder = remotePath;
        getTaskRequest.taskUid = 27;

        let getTaskResult = await tasksApi.getTask(getTaskRequest);

        expect(getTaskResult.response.statusCode).to.equal(200);
        expect(getTaskResult.body.task).not.undefined.and.not.null;

        const newExtendedAttribute = new ExtendedAttribute()
        newExtendedAttribute.lookupValueId = 112; 
        newExtendedAttribute.fieldId = putResult.body.extendedAttribute.fieldId
        getTaskResult.body.task.extendedAttributes.push(newExtendedAttribute);

        const putTaskRequest = new PutTaskRequest();
        putTaskRequest.name = fileName;
        putTaskRequest.folder = remotePath;
        putTaskRequest.taskUid = 27;
        putTaskRequest.task = getTaskResult.body.task;

        const putTaskResult = await tasksApi.putTask(putTaskRequest);

        expect(putTaskResult.response.statusCode).to.equal(200);

        getTaskResult = await tasksApi.getTask(getTaskRequest);
        expect(getTaskResult.response.statusCode).to.equal(200);
        expect(getTaskResult.body.task).not.undefined.and.not.null;
        expect(getTaskResult.body.task.extendedAttributes.length).to.equal(1);
        expect(getTaskResult.body.task.extendedAttributes[0].fieldId).to.equal("188743737");
        expect(getTaskResult.body.task.extendedAttributes[0].lookupValueId).to.equal(112);
    });
    it("should return response with code 200 and uniform date value", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const newExtendedAttributeDef = new ExtendedAttributeDefinition
        newExtendedAttributeDef.calculationType = CalculationType.None;
        newExtendedAttributeDef.cfType = CustomFieldType.Finish;
        newExtendedAttributeDef.fieldName = "Finish4";
        newExtendedAttributeDef.elementType = ElementType.Task;
        newExtendedAttributeDef.alias = "Custom Finish Field";

        const request1 = new PutExtendedAttributeRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.extendedAttribute = newExtendedAttributeDef;

        const putResult = await tasksApi.putExtendedAttribute(request1);

        expect(putResult.response.statusCode).to.equal(200);

        const getTaskRequest = new GetTaskRequest();
        getTaskRequest.name = fileName;
        getTaskRequest.folder = remotePath;
        getTaskRequest.taskUid = 27;

        let getTaskResult = await tasksApi.getTask(getTaskRequest);

        expect(getTaskResult.response.statusCode).to.equal(200);
        expect(getTaskResult.body.task).not.undefined.and.not.null;

        const newExtendedAttribute = new ExtendedAttribute()
        newExtendedAttribute.dateValue = new Date(Date.UTC(2018, 2, 4, 12, 30, 0)); 
        newExtendedAttribute.fieldId = "188743742";
        getTaskResult.body.task.extendedAttributes.push(newExtendedAttribute);

        const putTaskRequest = new PutTaskRequest();
        putTaskRequest.name = fileName;
        putTaskRequest.folder = remotePath;
        putTaskRequest.taskUid = 27;
        putTaskRequest.task = getTaskResult.body.task;

        const putTaskResult = await tasksApi.putTask(putTaskRequest);

        expect(putTaskResult.response.statusCode).to.equal(200);

        getTaskResult = await tasksApi.getTask(getTaskRequest);

        expect(getTaskResult.response.statusCode).to.equal(200);
        expect(getTaskResult.body.task).not.undefined.and.not.null;
        expect(getTaskResult.body.task.extendedAttributes.length).to.equal(1);
        expect(getTaskResult.body.task.extendedAttributes[0].fieldId).to.equal("188743742");
        expect(getTaskResult.body.task.extendedAttributes[0].dateValue).to.eql(new Date(2018, 2, 4, 12, 30, 0));
    });
    it("should return response with code 200 and uniform duration value", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const newExtendedAttributeDef = new ExtendedAttributeDefinition
        newExtendedAttributeDef.calculationType = CalculationType.None;
        newExtendedAttributeDef.cfType = CustomFieldType.Duration;
        newExtendedAttributeDef.fieldName = "Duration3";
        newExtendedAttributeDef.elementType = ElementType.Task;
        newExtendedAttributeDef.alias = "Custom Duration Field";

        const request1 = new PutExtendedAttributeRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.extendedAttribute = newExtendedAttributeDef;

        const putResult = await tasksApi.putExtendedAttribute(request1);

        expect(putResult.response.statusCode).to.equal(200);

        const getTaskRequest = new GetTaskRequest();
        getTaskRequest.name = fileName;
        getTaskRequest.folder = remotePath;
        getTaskRequest.taskUid = 27;

        let getTaskResult = await tasksApi.getTask(getTaskRequest);

        expect(getTaskResult.response.statusCode).to.equal(200);
        expect(getTaskResult.body.task).not.undefined.and.not.null;

        const duration = new Duration();
        duration.timeSpan = "04:00:00"
        duration.timeUnit = TimeUnitType.Minute;
        const newExtendedAttribute = new ExtendedAttribute()
        newExtendedAttribute.durationValue = duration; 
        newExtendedAttribute.fieldId = "188743785";
        getTaskResult.body.task.extendedAttributes.push(newExtendedAttribute);

        const putTaskRequest = new PutTaskRequest();
        putTaskRequest.name = fileName;
        putTaskRequest.folder = remotePath;
        putTaskRequest.taskUid = 27;
        putTaskRequest.task = getTaskResult.body.task;

        const putTaskResult = await tasksApi.putTask(putTaskRequest);

        expect(putTaskResult.response.statusCode).to.equal(200);

        getTaskResult = await tasksApi.getTask(getTaskRequest);

        expect(getTaskResult.response.statusCode).to.equal(200);
        expect(getTaskResult.body.task).not.undefined.and.not.null;
        expect(getTaskResult.body.task.extendedAttributes.length).to.equal(1);
        expect(getTaskResult.body.task.extendedAttributes[0].fieldId).to.equal("188743785");
        expect(getTaskResult.body.task.extendedAttributes[0].durationValue).not.undefined.and.not.null;
        expect(getTaskResult.body.task.extendedAttributes[0].durationValue.timeSpan).to.equal("04:00:00");
    });
    it("should return response with code 200 and uniform flag value", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const newExtendedAttributeDef = new ExtendedAttributeDefinition
        newExtendedAttributeDef.calculationType = CalculationType.None;
        newExtendedAttributeDef.cfType = CustomFieldType.Flag;
        newExtendedAttributeDef.fieldName = "Flag12";
        newExtendedAttributeDef.elementType = ElementType.Task;
        newExtendedAttributeDef.alias = "Custom Flag Field";

        const request1 = new PutExtendedAttributeRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.extendedAttribute = newExtendedAttributeDef;

        const putResult = await tasksApi.putExtendedAttribute(request1);

        expect(putResult.response.statusCode).to.equal(200);

        const getTaskRequest = new GetTaskRequest();
        getTaskRequest.name = fileName;
        getTaskRequest.folder = remotePath;
        getTaskRequest.taskUid = 27;

        let getTaskResult = await tasksApi.getTask(getTaskRequest);

        expect(getTaskResult.response.statusCode).to.equal(200);
        expect(getTaskResult.body.task).not.undefined.and.not.null;

        const newExtendedAttribute = new ExtendedAttribute()
        newExtendedAttribute.flagValue = true; 
        newExtendedAttribute.fieldId = "188743973";
        getTaskResult.body.task.extendedAttributes.push(newExtendedAttribute);

        const putTaskRequest = new PutTaskRequest();
        putTaskRequest.name = fileName;
        putTaskRequest.folder = remotePath;
        putTaskRequest.taskUid = 27;
        putTaskRequest.task = getTaskResult.body.task;

        const putTaskResult = await tasksApi.putTask(putTaskRequest);

        expect(putTaskResult.response.statusCode).to.equal(200);

        getTaskResult = await tasksApi.getTask(getTaskRequest);

        expect(getTaskResult.response.statusCode).to.equal(200);
        expect(getTaskResult.body.task).not.undefined.and.not.null;
        expect(getTaskResult.body.task.extendedAttributes.length).to.equal(1);
        expect(getTaskResult.body.task.extendedAttributes[0].fieldId).to.equal("188743973");
        expect(getTaskResult.body.task.extendedAttributes[0].flagValue).is.true;
    });
    it("should return response with code 200 and uniform cost value", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const newExtendedAttributeDef = new ExtendedAttributeDefinition
        newExtendedAttributeDef.calculationType = CalculationType.None;
        newExtendedAttributeDef.cfType = CustomFieldType.Cost;
        newExtendedAttributeDef.fieldName = "Cost10";
        newExtendedAttributeDef.elementType = ElementType.Task;
        newExtendedAttributeDef.alias = "Custom Cost Field";

        const request1 = new PutExtendedAttributeRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.extendedAttribute = newExtendedAttributeDef;

        const putResult = await tasksApi.putExtendedAttribute(request1);

        expect(putResult.response.statusCode).to.equal(200);

        const getTaskRequest = new GetTaskRequest();
        getTaskRequest.name = fileName;
        getTaskRequest.folder = remotePath;
        getTaskRequest.taskUid = 27;

        let getTaskResult = await tasksApi.getTask(getTaskRequest);

        expect(getTaskResult.response.statusCode).to.equal(200);
        expect(getTaskResult.body.task).not.undefined.and.not.null;

        const newExtendedAttribute = new ExtendedAttribute()
        newExtendedAttribute.numericValue = 115.99; 
        newExtendedAttribute.fieldId = "188743944";
        getTaskResult.body.task.extendedAttributes.push(newExtendedAttribute);

        const putTaskRequest = new PutTaskRequest();
        putTaskRequest.name = fileName;
        putTaskRequest.folder = remotePath;
        putTaskRequest.taskUid = 27;
        putTaskRequest.task = getTaskResult.body.task;

        const putTaskResult = await tasksApi.putTask(putTaskRequest);

        expect(putTaskResult.response.statusCode).to.equal(200);

        getTaskResult = await tasksApi.getTask(getTaskRequest);

        expect(getTaskResult.response.statusCode).to.equal(200);
        expect(getTaskResult.body.task).not.undefined.and.not.null;
        expect(getTaskResult.body.task.extendedAttributes.length).to.equal(1);
        expect(getTaskResult.body.task.extendedAttributes[0].fieldId).to.equal("188743944");
        expect(getTaskResult.body.task.extendedAttributes[0].numericValue).to.equal(115.99);
    });
    it("should return response with code 200 and uniform number value", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const newExtendedAttributeDef = new ExtendedAttributeDefinition
        newExtendedAttributeDef.calculationType = CalculationType.None;
        newExtendedAttributeDef.cfType = CustomFieldType.Number;
        newExtendedAttributeDef.fieldName = "Number9";
        newExtendedAttributeDef.elementType = ElementType.Task;
        newExtendedAttributeDef.alias = "Custom Number Field";

        const request1 = new PutExtendedAttributeRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.extendedAttribute = newExtendedAttributeDef;

        const putResult = await tasksApi.putExtendedAttribute(request1);

        expect(putResult.response.statusCode).to.equal(200);

        const getTaskRequest = new GetTaskRequest();
        getTaskRequest.name = fileName;
        getTaskRequest.folder = remotePath;
        getTaskRequest.taskUid = 27;

        let getTaskResult = await tasksApi.getTask(getTaskRequest);

        expect(getTaskResult.response.statusCode).to.equal(200);
        expect(getTaskResult.body.task).not.undefined.and.not.null;

        const newExtendedAttribute = new ExtendedAttribute()
        newExtendedAttribute.numericValue = 99.99; 
        newExtendedAttribute.fieldId = "188743985";
        getTaskResult.body.task.extendedAttributes.push(newExtendedAttribute);

        const putTaskRequest = new PutTaskRequest();
        putTaskRequest.name = fileName;
        putTaskRequest.folder = remotePath;
        putTaskRequest.taskUid = 27;
        putTaskRequest.task = getTaskResult.body.task;

        const putTaskResult = await tasksApi.putTask(putTaskRequest);

        expect(putTaskResult.response.statusCode).to.equal(200);

        getTaskResult = await tasksApi.getTask(getTaskRequest);

        expect(getTaskResult.response.statusCode).to.equal(200);
        expect(getTaskResult.body.task).not.undefined.and.not.null;
        expect(getTaskResult.body.task.extendedAttributes.length).to.equal(1);
        expect(getTaskResult.body.task.extendedAttributes[0].fieldId).to.equal("188743985");
        expect(getTaskResult.body.task.extendedAttributes[0].numericValue).to.equal(99.99);
    });
    it("should return response with code 200 and uniform text value", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const newExtendedAttributeDef = new ExtendedAttributeDefinition
        newExtendedAttributeDef.calculationType = CalculationType.None;
        newExtendedAttributeDef.cfType = CustomFieldType.Text;
        newExtendedAttributeDef.fieldName = "Text1";
        newExtendedAttributeDef.elementType = ElementType.Task;
        newExtendedAttributeDef.alias = "Custom Text Field";

        const request1 = new PutExtendedAttributeRequest();
        request1.name = fileName;
        request1.folder = remotePath;
        request1.extendedAttribute = newExtendedAttributeDef;

        const putResult = await tasksApi.putExtendedAttribute(request1);

        expect(putResult.response.statusCode).to.equal(200);

        const getTaskRequest = new GetTaskRequest();
        getTaskRequest.name = fileName;
        getTaskRequest.folder = remotePath;
        getTaskRequest.taskUid = 27;

        let getTaskResult = await tasksApi.getTask(getTaskRequest);

        expect(getTaskResult.response.statusCode).to.equal(200);
        expect(getTaskResult.body.task).not.undefined.and.not.null;

        const newExtendedAttribute = new ExtendedAttribute()
        newExtendedAttribute.textValue = "Test value"; 
        newExtendedAttribute.fieldId = "188743731";
        getTaskResult.body.task.extendedAttributes.push(newExtendedAttribute);

        const putTaskRequest = new PutTaskRequest();
        putTaskRequest.name = fileName;
        putTaskRequest.folder = remotePath;
        putTaskRequest.taskUid = 27;
        putTaskRequest.task = getTaskResult.body.task;

        const putTaskResult = await tasksApi.putTask(putTaskRequest);

        expect(putTaskResult.response.statusCode).to.equal(200);

        getTaskResult = await tasksApi.getTask(getTaskRequest);

        expect(getTaskResult.response.statusCode).to.equal(200);
        expect(getTaskResult.body.task).not.undefined.and.not.null;
        expect(getTaskResult.body.task.extendedAttributes.length).to.equal(1);
        expect(getTaskResult.body.task.extendedAttributes[0].fieldId).to.equal("188743731");
        expect(getTaskResult.body.task.extendedAttributes[0].textValue).to.equal("Test value");
    });
});