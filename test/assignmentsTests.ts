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

import { GetAssignmentsRequest, GetAssignmentRequest, GetResourceAssignmentsRequest, PostAssignmentRequest, GetTaskRequest, PutAssignmentRequest, CalculationMode, DeleteAssignmentRequest, WorkContourType, TimephasedData, TimeUnitType, TimephasedDataType, AssignmentBaseline, BaselineType, ResourceAssignment } from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("getAssignments function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetAssignmentsRequest();
        request.name = fileName;
        request.folder = remotePath;

        const result = await tasksApi.getAssignments(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.assignments).not.undefined.and.not.null;
        expect(result.body.assignments.assignmentItem.length).to.equal(6);
        expect(result.body.assignments.assignmentItem[0].taskUid).to.equal(34);
        expect(result.body.assignments.assignmentItem[0].uid).to.equal(63);
        expect(result.body.assignments.assignmentItem[0].link.href).to.equal("/63");
    });
});

describe("getAssignment function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetAssignmentRequest();
        request.assignmentUid = 63;
        request.name = fileName;
        request.folder = remotePath;

        const result = await tasksApi.getAssignment(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.assignment).not.undefined.and.not.null;
        expect(result.body.assignment.regularWork).to.equal("08:00:00");
        expect(result.body.assignment.remainingWork).to.equal("08:00:00");
        expect(result.body.assignment.start).to.eql(new Date(2012, 6, 9, 8, 0, 0));
    });
});

describe("getResourceAssignments function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request = new GetResourceAssignmentsRequest();
        request.resourceUid = 1;
        request.name = fileName;
        request.folder = remotePath;

        const result = await tasksApi.getResourceAssignments(request);

        expect(result.response.statusCode).to.equal(200);
        expect(result.body.assignments).not.undefined.and.not.null;
        expect(result.body.assignments.list.length).to.equal(6);
        expect(result.body.assignments.list.every(a => a.resourceUid === 1)).is.true;
    });
});

describe("postAssignment function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request1 = new PostAssignmentRequest();
        request1.resourceUid = 1;
        request1.units = 0.5;
        request1.taskUid = 0;
        request1.name = fileName;
        request1.folder = remotePath;

        const result1 = await tasksApi.postAssignment(request1);

        expect(result1.response.statusCode).to.equal(200);
        expect(result1.body.assignmentItem).not.undefined.and.not.null;

        const assignmentUid = result1.body.assignmentItem.uid;

        const request2 = new GetAssignmentRequest();
        request2.assignmentUid = assignmentUid;
        request2.name = fileName;
        request2.folder = remotePath;

        const result2 = await tasksApi.getAssignment(request2);

        expect(result2.response.statusCode).to.equal(200);
        expect(result2.body.assignment).not.undefined.and.not.null;
        expect(result2.body.assignment.taskUid).to.equal(0);
        expect(result2.body.assignment.resourceUid).to.equal(1);

        const request3 = new GetTaskRequest();
        request3.taskUid = 0;
        request3.name = fileName;
        request3.folder = remotePath;

        const result3 = await tasksApi.getTask(request3);

        expect(result3.response.statusCode).to.equal(200);
        expect(result3.body.task.start).to.eql(result2.body.assignment.start);
        expect(result3.body.task.finish).to.eql(result2.body.assignment.finish);
        expect(result3.body.task.work).to.equal(result2.body.assignment.work);
        expect(result3.body.task.cost).to.equal(result2.body.assignment.cost);
    });
    it("should return correct data when using assignment cost instead of units", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "Cost_Res.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request1 = new PostAssignmentRequest();
        request1.resourceUid = 1;
        request1.cost = 2;
        request1.taskUid = 0;
        request1.name = fileName;
        request1.folder = remotePath;

        const result1 = await tasksApi.postAssignment(request1);

        expect(result1.response.statusCode).to.equal(200);
        expect(result1.body.assignmentItem).not.undefined.and.not.null;

        const assignmentUid = result1.body.assignmentItem.uid;

        const request2 = new GetAssignmentRequest();
        request2.assignmentUid = assignmentUid;
        request2.name = fileName;
        request2.folder = remotePath;

        const result2 = await tasksApi.getAssignment(request2);

        expect(result2.response.statusCode).to.equal(200);
        expect(result2.body.assignment.cost).to.equal(request1.cost);
    });
});

describe("putAssignment function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request1 = new GetAssignmentRequest();
        request1.assignmentUid = 63;
        request1.name = fileName;
        request1.folder = remotePath;

        const result1 = await tasksApi.getAssignment(request1);

        expect(result1.response.statusCode).to.equal(200);
        expect(result1.body.assignment).not.undefined.and.not.null;

        result1.body.assignment.taskUid = 0;

        const request2 = new PutAssignmentRequest();
        request2.mode = CalculationMode.Automatic;
        request2.recalculate = true;
        request2.assignmentUid = 63;
        request2.assignment = result1.body.assignment;
        request2.name = fileName;
        request2.folder = remotePath;

        const result2 = await tasksApi.putAssignment(request2);

        expect(result2.response.statusCode).to.equal(200);

        const request3 = new GetAssignmentsRequest();
        request3.name = fileName;
        request3.folder = remotePath;

        const result3 = await tasksApi.getAssignments(request3);

        expect(result3.response.statusCode).to.equal(200);
        expect(result3.body.assignments.assignmentItem.some(a => a.taskUid === 34 && a.resourceUid === 1)).is.false;
        expect(result3.body.assignments.assignmentItem.some(a => a.taskUid === 0 && a.resourceUid === 1 && a.uid == 63)).is.true;
    });    
    it("should modify TimephasedData and Baselines with assignment", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "sample.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request1 = new GetAssignmentRequest();
        request1.assignmentUid = 1;
        request1.name = fileName;
        request1.folder = remotePath;

        const result1 = await tasksApi.getAssignment(request1);

        expect(result1.response.statusCode).to.equal(200);
        expect(result1.body.assignment).not.undefined.and.not.null;

        const modifiedAssignment = new ResourceAssignment(); 
        Object.assign(modifiedAssignment, result1.body.assignment);
        modifiedAssignment.cost = 100;
        modifiedAssignment.start = new Date(2001, 9, 10);
        modifiedAssignment.finish = new Date(2002, 9, 10);
        modifiedAssignment.baselines = [
            new AssignmentBaseline({
                baselineNumber: BaselineType.Baseline1,
                start: new Date(2002, 9, 10)
            })
        ]
        modifiedAssignment.actualWork = "10:10:10";
        modifiedAssignment.actualCost = 100;
        modifiedAssignment.actualStart = new Date(2001, 9, 10);
        modifiedAssignment.actualFinish = new Date(2002, 9, 10);
        modifiedAssignment.actualOvertimeWork = "100:10:10";
        modifiedAssignment.work = "80:0:0";
        modifiedAssignment.uid = 1;
        modifiedAssignment.vac = 10;
        modifiedAssignment.workContour = WorkContourType.Contoured;
        modifiedAssignment.timephasedData = [
            new TimephasedData({
                uid: modifiedAssignment.uid,
                start: new Date(2001, 9, 10, 9, 0, 0, 0),
                finish: new Date(2001, 9, 10, 14, 0, 0, 0),
                unit: TimeUnitType.Hour,
                value: "4:0:0",
                timephasedDataType: TimephasedDataType.AssignmentRemainingWork
            })
        ];

        const request2 = new PutAssignmentRequest();
        request2.mode = CalculationMode.None;
        request2.recalculate = false;
        request2.assignmentUid = modifiedAssignment.uid;
        request2.assignment = modifiedAssignment;
        request2.name = fileName;
        request2.folder = remotePath;

        const result2 = await tasksApi.putAssignment(request2);

        expect(result2.response.statusCode).to.equal(200);
        expect(result2.body.assignment).not.undefined.and.not.null;
        expect(result2.body.assignment.uid).to.equal(modifiedAssignment.uid);
        expect(result2.body.assignment.vac).to.equal(modifiedAssignment.vac);
        expect(result2.body.assignment.cost).to.not.equal(modifiedAssignment.cost, "Calculated fields must be overwritten");
        expect(result2.body.assignment.start).to.eql(modifiedAssignment.start);
        expect(result2.body.assignment.finish).to.eql(modifiedAssignment.finish);
        expect(result2.body.assignment.work).to.equal("80.00:00:00");
        expect(result2.body.assignment.actualWork).to.equal(modifiedAssignment.actualWork);
        expect(result2.body.assignment.actualStart).to.eql(modifiedAssignment.actualStart);
        expect(result2.body.assignment.actualFinish).to.eql(modifiedAssignment.actualFinish);
        expect(result2.body.assignment.actualOvertimeWork).to.equal("100.10:10:00");
        expect(result2.body.assignment.baselines.length).to.equal(1);
        expect(result2.body.assignment.baselines[0].baselineNumber).to.equal(BaselineType.Baseline1);
        expect(result2.body.assignment.baselines[0].start).to.eql(modifiedAssignment.baselines[0].start);
        expect(result2.body.assignment.timephasedData.length).to.equal(1);
        expect(result2.body.assignment.timephasedData[0].uid).to.equal(modifiedAssignment.uid);
        expect(result2.body.assignment.timephasedData[0].value).to.equal("PT4H0M0S");
        expect(result2.body.assignment.timephasedData[0].start).to.eql(modifiedAssignment.timephasedData[0].start);
        expect(result2.body.assignment.timephasedData[0].finish).to.eql(modifiedAssignment.timephasedData[0].finish);
        expect(result2.body.assignment.timephasedData[0].timephasedDataType).to.equal(modifiedAssignment.timephasedData[0].timephasedDataType);
    });
});

describe("deleteAssignment function", () => {
    it("should return response with code 200 and correct data", async () => {

        const tasksApi = BaseTest.initializeTasksApi();
        const fileName = "NewProductDev.mpp";
        const localPath = BaseTest.localBaseTestDataFolder + fileName;
        const remotePath = BaseTest.remoteBaseTestDataFolder;
        const remoteFullPath = remotePath + "/" + fileName;

        await tasksApi.uploadFileToStorage(remoteFullPath, localPath);

        const request1 = new DeleteAssignmentRequest();
        request1.assignmentUid = 63;
        request1.name = fileName;
        request1.folder = remotePath;

        const result1 = await tasksApi.deleteAssignment(request1);

        expect(result1.response.statusCode).to.equal(200);

        const request2 = new GetAssignmentsRequest();
        request2.name = fileName;
        request2.folder = remotePath;

        const result2 = await tasksApi.getAssignments(request2);

        expect(result2.response.statusCode).to.equal(200);
        expect(result2.body.assignments.assignmentItem.some(a => a.taskUid === 34 && a.resourceUid === 1)).is.false;
        expect(result2.body.assignments.assignmentItem.some(a => a.uid == 63)).is.false;
    });
});
