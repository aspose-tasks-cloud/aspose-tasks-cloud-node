/*
* MIT License

* Copyright (c) 2022 Aspose Pty Ltd

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
import { GetPrimaveraTaskPropertiesRequest, PrimaveraActivityType, PrimaveraDurationType, PrimaveraPercentCompleteType } from "../src";

import * as BaseTest from "./baseTest";

describe("getPrimaveraTaskProperties function", () => {
    it("should return response with code 200 and correct data", async () => {
        
        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "p6_multiproject.xml";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request : GetPrimaveraTaskPropertiesRequest = {
            name: fileName,
            taskUid: 1,
            folder: remotePath,
            storage: undefined
        }

        const result = await tasksApi.getPrimaveraTaskProperties(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.primaveraProperties.sequenceNumber).to.equal(0);
        expect(result.body.primaveraProperties.activityId).to.equal("A1040");
        expect(result.body.primaveraProperties.remainingEarlyStart).to.eql(new Date(2000, 9, 12, 8));
        expect(result.body.primaveraProperties.remainingEarlyFinish).to.eql(new Date(2000, 9, 12, 17));
        expect(result.body.primaveraProperties.remainingLateStart).to.eql(new Date(2000, 9, 12, 8));
        expect(result.body.primaveraProperties.remainingLateFinish).to.eql(new Date(2000, 9, 12, 17));
        expect(result.body.primaveraProperties.rawDurationType).to.equal("Fixed Units");
        expect(result.body.primaveraProperties.rawActivityType).to.equal("Task Dependent");
        expect(result.body.primaveraProperties.rawCompletePercentType).to.equal("Units");
        expect(result.body.primaveraProperties.rawStatus).to.equal("Not Started");
        expect(result.body.primaveraProperties.durationType).to.eql(PrimaveraDurationType.FixedUnits); 
        expect(result.body.primaveraProperties.activityType).to.eql(PrimaveraActivityType.TaskDependent); 
        expect(result.body.primaveraProperties.percentCompleteType).to.eql(PrimaveraPercentCompleteType.Units);
    });
});
