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

import { IncomingMessage } from "http";

/**
 * Generic class for Tasks Cloud API response
 */
export class TasksIncomingMessage<T> {
    /**
     * Gets or sets raw response
     */
    public response: IncomingMessage;
    
    /**
     * Get or set parsed response
     */
    public body: T;
}

export class AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "code",
            type: "number",
        },        
        {
            name: "status",
            baseName: "status",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AsposeResponse.attributeTypeMap;
    }

    /**
     * Response status code
     */
    public code: number;
    
    /**
     * Response status
     */
    public status: string;
    
    public constructor(init?: Partial<AsposeResponse>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Resource's assignment brief into.
 */
export class AssignmentItem {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "uid",
            baseName: "uid",
            type: "number",
        },        
        {
            name: "taskUid",
            baseName: "taskUid",
            type: "number",
        },        
        {
            name: "resourceUid",
            baseName: "resourceUid",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AssignmentItem.attributeTypeMap;
    }

    public link: Link;
    
    /**
     * The unique id (Uid) of the resource's assignment.
     */
    public uid: number;
    
    /**
     * Uid of the task.
     */
    public taskUid: number;
    
    /**
     * Uid of the resource.
     */
    public resourceUid: number;
    
    public constructor(init?: Partial<AssignmentItem>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents baseline values of a resource or a task.
 */
export class Baseline {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "baselineNumber",
            baseName: "baselineNumber",
            type: "BaselineType",
        },        
        {
            name: "work",
            baseName: "work",
            type: "string",
        },        
        {
            name: "cost",
            baseName: "cost",
            type: "number",
        },        
        {
            name: "bcws",
            baseName: "bcws",
            type: "number",
        },        
        {
            name: "bcwp",
            baseName: "bcwp",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Baseline.attributeTypeMap;
    }

    /**
     * The unique number of a baseline data record.
     */
    public baselineNumber: BaselineType;
    
    /**
     * The work assigned to a resource when the baseline is saved.
     */
    public work: string;
    
    /**
     * The projected cost of a resource when the baseline is saved.
     */
    public cost: number;
    
    /**
     * The budget cost of a work scheduled for a resource.
     */
    public bcws: number;
    
    /**
     * The budgeted cost of a work performed by a resource for a project to-date.
     */
    public bcwp: number;
    
    public constructor(init?: Partial<Baseline>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Specifies the baseline type used to calculate Variance values.
 */
export enum BaselineType {
    Baseline = 'Baseline' as any,
    Baseline1 = 'Baseline1' as any,
    Baseline2 = 'Baseline2' as any,
    Baseline3 = 'Baseline3' as any,
    Baseline4 = 'Baseline4' as any,
    Baseline5 = 'Baseline5' as any,
    Baseline6 = 'Baseline6' as any,
    Baseline7 = 'Baseline7' as any,
    Baseline8 = 'Baseline8' as any,
    Baseline9 = 'Baseline9' as any,
    Baseline10 = 'Baseline10' as any,
    Undefined = 'Undefined' as any,
}
/**
 * Specifies the booking type of a resource.
 */
export enum BookingType {
    Committed = 'Committed' as any,
    Proposed = 'Proposed' as any,
    Undefined = 'Undefined' as any,
}
/**
 * Specifies project calculation mode. None: Project dates and costs are not recalculated in this mode. Automatic mode: Project dates and costs are recalculated when using this mode. Manual mode: Only necessary fields are recalculated in this mode, for example Uids and Ids of objects
 */
export enum CalculationMode {
    None = 'None' as any,
    Automatic = 'Automatic' as any,
    Manual = 'Manual' as any,
}
/**
 * Specifies the calculation type.
 */
export enum CalculationType {
    None = 'None' as any,
    Lookup = 'Lookup' as any,
    Rollup = 'Rollup' as any,
    Calculation = 'Calculation' as any,
}
/**
 * Represents a calendar used in a project.
 */
export class Calendar {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "uid",
            baseName: "uid",
            type: "number",
        },        
        {
            name: "days",
            baseName: "days",
            type: "Array<WeekDay>",
        },        
        {
            name: "isBaseCalendar",
            baseName: "isBaseCalendar",
            type: "boolean",
        },        
        {
            name: "baseCalendar",
            baseName: "baseCalendar",
            type: "Calendar",
        },        
        {
            name: "isBaselineCalendar",
            baseName: "isBaselineCalendar",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Calendar.attributeTypeMap;
    }

    /**
     * The name of the calendar.
     */
    public name: string;
    
    /**
     * The unique identifier of the calendar.
     */
    public uid: number;
    
    /**
     * The collection of weekdays that defines the calendar.
     */
    public days: Array<WeekDay>;
    
    /**
     * Determines whether the calendar is a base calendar.
     */
    public isBaseCalendar: boolean;
    
    /**
     * The base calendar on which this calendar depends. Only applicable if the calendar is not a base calendar.
     */
    public baseCalendar: Calendar;
    
    /**
     * Specifies whether the calendar is a baseline calendar.
     */
    public isBaselineCalendar: boolean;
    
    public constructor(init?: Partial<Calendar>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represent exceptional time periods in a calendar.
 */
export class CalendarException {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "index",
            baseName: "index",
            type: "number",
        },        
        {
            name: "enteredByOccurrences",
            baseName: "enteredByOccurrences",
            type: "boolean",
        },        
        {
            name: "fromDate",
            baseName: "fromDate",
            type: "Date",
        },        
        {
            name: "toDate",
            baseName: "toDate",
            type: "Date",
        },        
        {
            name: "occurrences",
            baseName: "occurrences",
            type: "number",
        },        
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "type",
            baseName: "type",
            type: "CalendarExceptionType",
        },        
        {
            name: "period",
            baseName: "period",
            type: "number",
        },        
        {
            name: "daysOfWeek",
            baseName: "daysOfWeek",
            type: "Array<DayType>",
        },        
        {
            name: "monthItem",
            baseName: "monthItem",
            type: "MonthItemType",
        },        
        {
            name: "monthPosition",
            baseName: "monthPosition",
            type: "MonthPosition",
        },        
        {
            name: "month",
            baseName: "month",
            type: "Month",
        },        
        {
            name: "monthDay",
            baseName: "monthDay",
            type: "number",
        },        
        {
            name: "dayWorking",
            baseName: "dayWorking",
            type: "boolean",
        },        
        {
            name: "workingTimes",
            baseName: "workingTimes",
            type: "Array<WorkingTime>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CalendarException.attributeTypeMap;
    }

    /**
     * Index of the current item in the collection of calendar's exceptions.
     */
    public index: number;
    
    /**
     * Determines whether the range of recurrence is defined by entering a number of occurrences. False specifies that the range of recurrence is defined by entering a finish date.
     */
    public enteredByOccurrences: boolean;
    
    /**
     * The beginning of the exception time.
     */
    public fromDate: Date;
    
    /**
     * The end of the exception time.
     */
    public toDate: Date;
    
    /**
     * The number of occurrences for which the calendar exception is valid.
     */
    public occurrences: number;
    
    /**
     * The name of the exception.
     */
    public name: string;
    
    /**
     * The exception type.
     */
    public type: CalendarExceptionType;
    
    /**
     * The period of recurrence for the exception.
     */
    public period: number;
    
    /**
     * The days of the week on which the exception is valid.
     */
    public daysOfWeek: Array<DayType>;
    
    /**
     * The month item for which an exception recurrence is scheduled.
     */
    public monthItem: MonthItemType;
    
    /**
     * The position of a month item within a month.
     */
    public monthPosition: MonthPosition;
    
    /**
     * The month for which an exception recurrence is scheduled.
     */
    public month: Month;
    
    /**
     * The day of a month on which an exception recurrence is scheduled.
     */
    public monthDay: number;
    
    /**
     * Determines whether the specified date or day type is working.
     */
    public dayWorking: boolean;
    
    /**
     * The collection of working times that defines the time worked on the weekday.  At least one working time must present, and there can't be more than five.
     */
    public workingTimes: Array<WorkingTime>;
    
    public constructor(init?: Partial<CalendarException>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Specifies the calendar exception type.
 */
export enum CalendarExceptionType {
    Daily = 'Daily' as any,
    YearlyByDay = 'YearlyByDay' as any,
    YearlyByPosition = 'YearlyByPosition' as any,
    MonthlyByDay = 'MonthlyByDay' as any,
    MonthlyByPosition = 'MonthlyByPosition' as any,
    Weekly = 'Weekly' as any,
    ByDayCount = 'ByDayCount' as any,
    ByWeekDayCount = 'ByWeekDayCount' as any,
    NoExceptionType = 'NoExceptionType' as any,
}
/**
 * Represents a project calendar's brief info.
 */
export class CalendarItem {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "uid",
            baseName: "uid",
            type: "number",
        },        
        {
            name: "name",
            baseName: "name",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CalendarItem.attributeTypeMap;
    }

    public link: Link;
    
    public uid: number;
    
    public name: string;
    
    public constructor(init?: Partial<CalendarItem>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Specifies supported confidence levels used in risk analysis that correspond to  the percentage of the time the actual values will be within optimistic and pessimistic estimates.
 */
export enum ConfidenceLevel {
    CL75 = 'CL75' as any,
    CL85 = 'CL85' as any,
    CL90 = 'CL90' as any,
    CL95 = 'CL95' as any,
    CL99 = 'CL99' as any,
}
/**
 * Specifies a constraint type for a project task.
 */
export enum ConstraintType {
    AsSoonAsPossible = 'AsSoonAsPossible' as any,
    AsLateAsPossible = 'AsLateAsPossible' as any,
    MustStartOn = 'MustStartOn' as any,
    MustFinishOn = 'MustFinishOn' as any,
    StartNoEarlierThan = 'StartNoEarlierThan' as any,
    StartNoLaterThan = 'StartNoLaterThan' as any,
    FinishNoEarlierThan = 'FinishNoEarlierThan' as any,
    FinishNoLaterThan = 'FinishNoLaterThan' as any,
    Undefined = 'Undefined' as any,
}
/**
 * Specifies the type of an accrual cost.
 */
export enum CostAccrualType {
    Start = 'Start' as any,
    Prorated = 'Prorated' as any,
    End = 'End' as any,
    Invalid = 'Invalid' as any,
    Undefined = 'Undefined' as any,
}
/**
 * Specifies the type of a custom field.
 */
export enum CustomFieldType {
    Null = 'Null' as any,
    Cost = 'Cost' as any,
    Date = 'Date' as any,
    Duration = 'Duration' as any,
    Finish = 'Finish' as any,
    Flag = 'Flag' as any,
    Number = 'Number' as any,
    Start = 'Start' as any,
    Text = 'Text' as any,
    OutlineCode = 'OutlineCode' as any,
    RBS = 'RBS' as any,
}
/**
 * 
 */
export enum DayOfWeek {
    Sunday = 'Sunday' as any,
    Monday = 'Monday' as any,
    Tuesday = 'Tuesday' as any,
    Wednesday = 'Wednesday' as any,
    Thursday = 'Thursday' as any,
    Friday = 'Friday' as any,
    Saturday = 'Saturday' as any,
}
/**
 * Specifies the day of a week.
 */
export enum DayType {
    Exception = 'Exception' as any,
    Sunday = 'Sunday' as any,
    Monday = 'Monday' as any,
    Tuesday = 'Tuesday' as any,
    Wednesday = 'Wednesday' as any,
    Thursday = 'Thursday' as any,
    Friday = 'Friday' as any,
    Saturday = 'Saturday' as any,
}
/**
 * Class for disc space information.
 */
export class DiscUsage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "usedSize",
            baseName: "usedSize",
            type: "number",
        },        
        {
            name: "totalSize",
            baseName: "totalSize",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DiscUsage.attributeTypeMap;
    }

    /**
     * Application used disc space.
     */
    public usedSize: number;
    
    /**
     * Total disc space.
     */
    public totalSize: number;
    
    public constructor(init?: Partial<DiscUsage>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents a duration value.
 */
export class Duration {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "timeSpan",
            baseName: "timeSpan",
            type: "string",
        },        
        {
            name: "timeUnit",
            baseName: "timeUnit",
            type: "TimeUnitType",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Duration.attributeTypeMap;
    }

    /**
     * Gets or sets the time interval of duration.
     */
    public timeSpan: string;
    
    /**
     * Gets or sets the time units which will be used to display duration in MS Project.
     */
    public timeUnit: TimeUnitType;
    
    public constructor(init?: Partial<Duration>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Specifies the method used for calculating earned value.
 */
export enum EarnedValueMethodType {
    PercentComplete = 'PercentComplete' as any,
    PhysicalPercentComplete = 'PhysicalPercentComplete' as any,
    Undefined = 'Undefined' as any,
}
/**
 * Specifies the type of an element.
 */
export enum ElementType {
    Null = 'Null' as any,
    Task = 'Task' as any,
    Resource = 'Resource' as any,
}
/**
 * The error details
 */
export class ErrorDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "requestId",
            baseName: "requestId",
            type: "string",
        },        
        {
            name: "date",
            baseName: "date",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }

    /**
     * The request id
     */
    public requestId: string;
    
    /**
     * Date
     */
    public date: Date;
    
    public constructor(init?: Partial<ErrorDetails>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents extended attribute.
 */
export class ExtendedAttribute {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fieldId",
            baseName: "fieldId",
            type: "string",
        },        
        {
            name: "attributeType",
            baseName: "attributeType",
            type: "CustomFieldType",
        },        
        {
            name: "valueGuid",
            baseName: "valueGuid",
            type: "string",
        },        
        {
            name: "lookupValueId",
            baseName: "lookupValueId",
            type: "number",
        },        
        {
            name: "durationValue",
            baseName: "durationValue",
            type: "Duration",
        },        
        {
            name: "numericValue",
            baseName: "numericValue",
            type: "number",
        },        
        {
            name: "dateValue",
            baseName: "dateValue",
            type: "Date",
        },        
        {
            name: "flagValue",
            baseName: "flagValue",
            type: "boolean",
        },        
        {
            name: "textValue",
            baseName: "textValue",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ExtendedAttribute.attributeTypeMap;
    }

    /**
     * Gets or sets the id of a field.
     */
    public fieldId: string;
    
    /**
     * Gets the type of a custom field.
     */
    public attributeType: CustomFieldType;
    
    /**
     * Gets or sets the guid of a value.
     */
    public valueGuid: string;
    
    /**
     * Gets or sets Id of the lookup value (if value is lookup value)
     */
    public lookupValueId: number;
    
    /**
     * Gets or sets value for attributes with 'Duration' type.
     */
    public durationValue: Duration;
    
    /**
     * Gets or sets a value for attributes with numeric types (Cost, Number).
     */
    public numericValue: number;
    
    /**
     * Gets or sets a value for attributes with date types (Date, Start, Finish).
     */
    public dateValue: Date;
    
    /**
     * Gets or sets a value indicating whether a flag is set for an attribute with 'Flag' type.
     */
    public flagValue: boolean;
    
    /**
     * Gets or sets a value for attributes with 'Text' type.
     */
    public textValue: string;
    
    public constructor(init?: Partial<ExtendedAttribute>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Extended attribute definition's brief into.
 */
export class ExtendedAttributeDefinition {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fieldId",
            baseName: "fieldId",
            type: "string",
        },        
        {
            name: "fieldName",
            baseName: "fieldName",
            type: "string",
        },        
        {
            name: "cfType",
            baseName: "cfType",
            type: "CustomFieldType",
        },        
        {
            name: "guid",
            baseName: "guid",
            type: "string",
        },        
        {
            name: "elementType",
            baseName: "elementType",
            type: "ElementType",
        },        
        {
            name: "maxMultiValues",
            baseName: "maxMultiValues",
            type: "number",
        },        
        {
            name: "userDef",
            baseName: "userDef",
            type: "boolean",
        },        
        {
            name: "alias",
            baseName: "alias",
            type: "string",
        },        
        {
            name: "secondaryPid",
            baseName: "secondaryPid",
            type: "string",
        },        
        {
            name: "autoRollDown",
            baseName: "autoRollDown",
            type: "boolean",
        },        
        {
            name: "defaultGuid",
            baseName: "defaultGuid",
            type: "string",
        },        
        {
            name: "lookupUid",
            baseName: "lookupUid",
            type: "string",
        },        
        {
            name: "phoneticsAlias",
            baseName: "phoneticsAlias",
            type: "string",
        },        
        {
            name: "rollupType",
            baseName: "rollupType",
            type: "RollupType",
        },        
        {
            name: "calculationType",
            baseName: "calculationType",
            type: "CalculationType",
        },        
        {
            name: "formula",
            baseName: "formula",
            type: "string",
        },        
        {
            name: "restrictValues",
            baseName: "restrictValues",
            type: "boolean",
        },        
        {
            name: "valuelistSortOrder",
            baseName: "valuelistSortOrder",
            type: "number",
        },        
        {
            name: "appendNewValues",
            baseName: "appendNewValues",
            type: "boolean",
        },        
        {
            name: "default",
            baseName: "default",
            type: "string",
        },        
        {
            name: "valueList",
            baseName: "valueList",
            type: "Array<Value>",
        },        
        {
            name: "secondaryGuid",
            baseName: "secondaryGuid",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ExtendedAttributeDefinition.attributeTypeMap;
    }

    /**
     * Corresponds to the Pid of a custom field.
     */
    public fieldId: string;
    
    /**
     * The name of a custom field.
     */
    public fieldName: string;
    
    /**
     * The type of a custom field.
     */
    public cfType: CustomFieldType;
    
    /**
     * The Guid of a custom field.
     */
    public guid: string;
    
    /**
     * Determines whether the extended attribute is associated with a task or a resource
     */
    public elementType: ElementType;
    
    /**
     * The maximum number of values you can set in a picklist.
     */
    public maxMultiValues: number;
    
    /**
     * Determines whether a custom field is user defined.
     */
    public userDef: boolean;
    
    /**
     * The alias of a custom field.
     */
    public alias: string;
    
    /**
     * The secondary Pid of a custom field.
     */
    public secondaryPid: string;
    
    /**
     * Determines whether an automatic rolldown to assignments is enabled.
     */
    public autoRollDown: boolean;
    
    /**
     * The Guid of the default lookup table entry.
     */
    public defaultGuid: string;
    
    /**
     * The Guid of the lookup table associated with a custom field.
     */
    public lookupUid: string;
    
    /**
     * The phonetic pronunciation of the alias of a custom field.
     */
    public phoneticsAlias: string;
    
    /**
     * The way rollups are calculated.
     */
    public rollupType: RollupType;
    
    /**
     * Determines whether rollups are calculated for a task and group summary rows.
     */
    public calculationType: CalculationType;
    
    /**
     * The formula that Microsoft Project uses to populate a custom task field.
     */
    public formula: string;
    
    /**
     * Determines whether only values in the list are allowed in a file.
     */
    public restrictValues: boolean;
    
    /**
     * The way value lists are sorted. Values are: 0=Descending, 1=Ascending.
     */
    public valuelistSortOrder: number;
    
    /**
     * Determines whether new values added to a project are automatically added to the list.
     */
    public appendNewValues: boolean;
    
    /**
     * The default value in the list.
     */
    public default: string;
    
    /**
     * Returns list of Extended Attribute Values.
     */
    public valueList: Array<Value>;
    
    /**
     * Secondary guid of extended attribute.
     */
    public secondaryGuid: string;
    
    public constructor(init?: Partial<ExtendedAttributeDefinition>) {
        
        Object.assign(this, init);
    }        
}

export class ExtendedAttributeItem {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "index",
            baseName: "index",
            type: "number",
        },        
        {
            name: "fieldName",
            baseName: "fieldName",
            type: "string",
        },        
        {
            name: "alias",
            baseName: "alias",
            type: "string",
        },        
        {
            name: "fieldId",
            baseName: "fieldId",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ExtendedAttributeItem.attributeTypeMap;
    }

    public link: Link;
    
    public index: number;
    
    public fieldName: string;
    
    public alias: string;
    
    public fieldId: string;
    
    public constructor(init?: Partial<ExtendedAttributeItem>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File versions FileVersion.
 */
export class FileVersions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<FileVersion>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileVersions.attributeTypeMap;
    }

    /**
     * File versions FileVersion.
     */
    public value: Array<FileVersion>;
    
    public constructor(init?: Partial<FileVersions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Files list
 */
export class FilesList {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<StorageFile>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }

    /**
     * Files and folders contained by folder StorageFile.
     */
    public value: Array<StorageFile>;
    
    public constructor(init?: Partial<FilesList>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File upload result
 */
export class FilesUploadResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "uploaded",
            baseName: "uploaded",
            type: "Array<string>",
        },        
        {
            name: "errors",
            baseName: "errors",
            type: "Array<Error>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesUploadResult.attributeTypeMap;
    }

    /**
     * List of uploaded file names
     */
    public uploaded: Array<string>;
    
    /**
     * List of errors.
     */
    public errors: Array<Error>;
    
    public constructor(init?: Partial<FilesUploadResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Specifies the type of a database file to import a project from
 */
export enum ImportedProjectType {
    None = 'None' as any,
    PrimaveraSqliteDb = 'PrimaveraSqliteDb' as any,
    PrimaveraXml = 'PrimaveraXml' as any,
}
/**
 * Provides information for the object link. This is supposed to be an atom:link, therefore it should have all attributes specified here http://tools.ietf.org/html/rfc4287#section-4.2.7
 */
export class Link {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "href",
            baseName: "href",
            type: "string",
        },        
        {
            name: "rel",
            baseName: "rel",
            type: "string",
        },        
        {
            name: "type",
            baseName: "type",
            type: "string",
        },        
        {
            name: "title",
            baseName: "title",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Link.attributeTypeMap;
    }

    /**
     * The \"href\" attribute contains the link's IRI. atom:link elements MUST have an href attribute, whose value MUST be a IRI reference
     */
    public href: string;
    
    /**
     * atom:link elements MAY have a \"rel\" attribute that indicates the link relation type.  If the \"rel\" attribute is not present, the link element MUST be interpreted as if the link relation type is \"alternate\".
     */
    public rel: string;
    
    /**
     * On the link element, the \"type\" attribute's value is an advisory media type: it is a hint about the type of the representation that is expected to be returned when the value of the href attribute is dereferenced.  Note that the type attribute does not override the actual media type returned with the representation.
     */
    public type: string;
    
    /**
     * The \"title\" attribute conveys human-readable information about the link.  The content of the \"title\" attribute is Language-Sensitive.
     */
    public title: string;
    
    public constructor(init?: Partial<Link>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Reference to document.
 */
export class LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return LinkElement.attributeTypeMap;
    }

    /**
     * Link to the document.
     */
    public link: Link;
    
    public constructor(init?: Partial<LinkElement>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Specifies the type of a mask.
 */
export enum MaskType {
    Null = 'Null' as any,
    Numbers = 'Numbers' as any,
    UpperCaseLetters = 'UpperCaseLetters' as any,
    LowerCaseLetters = 'LowerCaseLetters' as any,
    Characters = 'Characters' as any,
    Val4 = 'Val4' as any,
    Val5 = 'Val5' as any,
    Val6 = 'Val6' as any,
    Val7 = 'Val7' as any,
    Val8 = 'Val8' as any,
    Val9 = 'Val9' as any,
}
/**
 * Error
 */
export class ModelError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "code",
            type: "string",
        },        
        {
            name: "message",
            baseName: "message",
            type: "string",
        },        
        {
            name: "description",
            baseName: "description",
            type: "string",
        },        
        {
            name: "innerError",
            baseName: "innerError",
            type: "ErrorDetails",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }

    /**
     * Code             
     */
    public code: string;
    
    /**
     * Message             
     */
    public message: string;
    
    /**
     * Description             
     */
    public description: string;
    
    /**
     * Inner Error             
     */
    public innerError: ErrorDetails;
    
    public constructor(init?: Partial<ModelError>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Specifies the month.
 */
export enum Month {
    January = 'January' as any,
    February = 'February' as any,
    March = 'March' as any,
    April = 'April' as any,
    May = 'May' as any,
    June = 'June' as any,
    July = 'July' as any,
    August = 'August' as any,
    September = 'September' as any,
    October = 'October' as any,
    November = 'November' as any,
    December = 'December' as any,
    Undefined = 'Undefined' as any,
}
/**
 * Specifies the month item for which an exception recurrence is scheduled.
 */
export enum MonthItemType {
    Day = 'Day' as any,
    Weekday = 'Weekday' as any,
    WeekendDay = 'WeekendDay' as any,
    Sunday = 'Sunday' as any,
    Monday = 'Monday' as any,
    Tuesday = 'Tuesday' as any,
    Wednesday = 'Wednesday' as any,
    Thursday = 'Thursday' as any,
    Friday = 'Friday' as any,
    Saturday = 'Saturday' as any,
    Undefined = 'Undefined' as any,
}
/**
 * Specifies the position of a month item within a month.
 */
export enum MonthPosition {
    First = 'First' as any,
    Second = 'Second' as any,
    Third = 'Third' as any,
    Fourth = 'Fourth' as any,
    Last = 'Last' as any,
    Undefined = 'Undefined' as any,
}
/**
 * Object exists
 */
export class ObjectExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ObjectExist.attributeTypeMap;
    }

    /**
     * Indicates that the file or folder exists.
     */
    public exists: boolean;
    
    /**
     * True if it is a folder, false if it is a file.
     */
    public isFolder: boolean;
    
    public constructor(init?: Partial<ObjectExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents an ordinal number in the instance of RecurringInfo class.
 */
export enum OrdinalNumber {
    First = 'First' as any,
    Second = 'Second' as any,
    Third = 'Third' as any,
    Fourth = 'Fourth' as any,
    Last = 'Last' as any,
}
/**
 * Represents a value of an outline code.
 */
export class OutlineCode {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fieldId",
            baseName: "fieldId",
            type: "string",
        },        
        {
            name: "valueId",
            baseName: "valueId",
            type: "number",
        },        
        {
            name: "valueGuid",
            baseName: "valueGuid",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OutlineCode.attributeTypeMap;
    }

    /**
     * The number value of the project Id (Pid) custom field.
     */
    public fieldId: string;
    
    /**
     * The Id in the value list associated with the definition in the outline code collection.
     */
    public valueId: number;
    
    /**
     * The Guid of the value in the value list. The ValueGuid matches the FieldGuid in the value list.
     */
    public valueGuid: string;
    
    public constructor(init?: Partial<OutlineCode>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents an outline code definition.
 */
export class OutlineCodeDefinition {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "guid",
            baseName: "guid",
            type: "string",
        },        
        {
            name: "fieldId",
            baseName: "fieldId",
            type: "string",
        },        
        {
            name: "fieldName",
            baseName: "fieldName",
            type: "string",
        },        
        {
            name: "alias",
            baseName: "alias",
            type: "string",
        },        
        {
            name: "phoneticAlias",
            baseName: "phoneticAlias",
            type: "string",
        },        
        {
            name: "values",
            baseName: "values",
            type: "Array<OutlineValue>",
        },        
        {
            name: "enterprise",
            baseName: "enterprise",
            type: "boolean",
        },        
        {
            name: "enterpriseOutlineCodeAlias",
            baseName: "enterpriseOutlineCodeAlias",
            type: "number",
        },        
        {
            name: "resourceSubstitutionEnabled",
            baseName: "resourceSubstitutionEnabled",
            type: "boolean",
        },        
        {
            name: "leafOnly",
            baseName: "leafOnly",
            type: "boolean",
        },        
        {
            name: "allLevelsRequired",
            baseName: "allLevelsRequired",
            type: "boolean",
        },        
        {
            name: "onlyTableValuesAllowed",
            baseName: "onlyTableValuesAllowed",
            type: "boolean",
        },        
        {
            name: "masks",
            baseName: "masks",
            type: "Array<OutlineMask>",
        },        
        {
            name: "showIndent",
            baseName: "showIndent",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OutlineCodeDefinition.attributeTypeMap;
    }

    /**
     * The Guid of an outline code.
     */
    public guid: string;
    
    /**
     * Corresponds to the field number of an outline code.
     */
    public fieldId: string;
    
    /**
     * The name of a custom outline code.
     */
    public fieldName: string;
    
    /**
     * The alias of a custom outline code.
     */
    public alias: string;
    
    /**
     * The phonetic pronunciation of the alias of the custom outline code.
     */
    public phoneticAlias: string;
    
    /**
     * Returns List&lt;OutlineValue&gt; Values. The values of the table associated with this outline code.
     */
    public values: Array<OutlineValue>;
    
    /**
     * Determines whether a custom outline code is an enterprise custom outline code.
     */
    public enterprise: boolean;
    
    /**
     * The reference to another custom field for which this outline code definition is an alias.
     */
    public enterpriseOutlineCodeAlias: number;
    
    /**
     * Determines whether the custom outline code can be used by the Resource Substitution Wizard in Microsoft Project.
     */
    public resourceSubstitutionEnabled: boolean;
    
    /**
     * Determines whether the values specified in this outline code field must be leaf values.
     */
    public leafOnly: boolean;
    
    /**
     * Determines whether the new codes must have all levels. Not available for Enterprise Codes.
     */
    public allLevelsRequired: boolean;
    
    /**
     * Determines whether the values specified must come from values table.
     */
    public onlyTableValuesAllowed: boolean;
    
    /**
     * Returns List&lt;OutlineMask&gt; Masks. The table of entries that define the outline code mask.
     */
    public masks: Array<OutlineMask>;
    
    /**
     * Determines whether the indents of this outline code must be shown.
     */
    public showIndent: boolean;
    
    public constructor(init?: Partial<OutlineCodeDefinition>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Outline code's brief into.
 */
export class OutlineCodeItem {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "index",
            baseName: "index",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OutlineCodeItem.attributeTypeMap;
    }

    public link: Link;
    
    public index: number;
    
    public constructor(init?: Partial<OutlineCodeItem>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents four elements of a mask which defines an outline code format.
 */
export class OutlineMask {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "level",
            baseName: "level",
            type: "number",
        },        
        {
            name: "type",
            baseName: "type",
            type: "MaskType",
        },        
        {
            name: "length",
            baseName: "length",
            type: "number",
        },        
        {
            name: "separator",
            baseName: "separator",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OutlineMask.attributeTypeMap;
    }

    /**
     * The level of a mask.
     */
    public level: number;
    
    /**
     * The type of a mask.
     */
    public type: MaskType;
    
    /**
     * The maximum length (in characters) of the outline code values. 0 if length is not defined.
     */
    public length: number;
    
    /**
     * The separator of code values.
     */
    public separator: string;
    
    public constructor(init?: Partial<OutlineMask>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents an outline value.
 */
export class OutlineValue {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "valueId",
            baseName: "valueId",
            type: "number",
        },        
        {
            name: "fieldGuid",
            baseName: "fieldGuid",
            type: "string",
        },        
        {
            name: "type",
            baseName: "type",
            type: "OutlineValueType",
        },        
        {
            name: "parentValueId",
            baseName: "parentValueId",
            type: "number",
        },        
        {
            name: "value",
            baseName: "value",
            type: "string",
        },        
        {
            name: "description",
            baseName: "description",
            type: "string",
        },        
        {
            name: "isCollapsed",
            baseName: "isCollapsed",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OutlineValue.attributeTypeMap;
    }

    /**
     * The unique Id of an outline code value within a project.
     */
    public valueId: number;
    
    /**
     * The Guid of an outline code value.
     */
    public fieldGuid: string;
    
    /**
     * The outline code type.
     */
    public type: OutlineValueType;
    
    /**
     * The Id of a parent node of an outline code.
     */
    public parentValueId: number;
    
    /**
     * The actual value.
     */
    public value: string;
    
    /**
     * The description of an outline value.
     */
    public description: string;
    
    /**
     * Determines whether outline value is collapsed or not.
     */
    public isCollapsed: boolean;
    
    public constructor(init?: Partial<OutlineValue>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Specifies the type of an outline value.
 */
export enum OutlineValueType {
    Null = 'Null' as any,
    Date = 'Date' as any,
    Duration = 'Duration' as any,
    Cost = 'Cost' as any,
    Number = 'Number' as any,
    Flag = 'Flag' as any,
    Text = 'Text' as any,
    FinishDate = 'FinishDate' as any,
}
/**
 * Specifies page size.
 */
export enum PageSize {
    Letter = 'Letter' as any,
    Ledger = 'Ledger' as any,
    A0 = 'A0' as any,
    A1 = 'A1' as any,
    A2 = 'A2' as any,
    A3 = 'A3' as any,
    A4 = 'A4' as any,
}
/**
 * Enumeration for presentation format.
 */
export enum PresentationFormat {
    GanttChart = 'GanttChart' as any,
    TaskUsage = 'TaskUsage' as any,
    ResourceUsage = 'ResourceUsage' as any,
    ResourceSheet = 'ResourceSheet' as any,
    TaskSheet = 'TaskSheet' as any,
}
/**
 * Specifies types of supported probability distributions.
 */
export enum ProbabilityDistributionType {
    Uniform = 'Uniform' as any,
    Normal = 'Normal' as any,
}
/**
 * Specifies the type of a database to import a project from
 */
export enum ProjectDatabaseType {
    None = 'None' as any,
    Msp = 'Msp' as any,
    Primavera = 'Primavera' as any,
}
/**
 * Supported formats in which project file can be saved.
 */
export enum ProjectFileFormat {
    Mpp = 'mpp' as any,
    Xml = 'xml' as any,
    Html = 'html' as any,
    Bmp = 'bmp' as any,
    Png = 'png' as any,
    Jpeg = 'jpeg' as any,
    Pdf = 'pdf' as any,
    Tiff = 'tiff' as any,
    Xps = 'xps' as any,
    Svg = 'svg' as any,
    Csv = 'csv' as any,
    Txt = 'txt' as any,
    SpreadsheetML = 'spreadsheetML' as any,
    Xlsx = 'xlsx' as any,
    P6xml = 'p6xml' as any,
    Xer = 'xer' as any,
    Mpx = 'mpx' as any,
    Gdhtml = 'Gdhtml' as any,
}
/**
 * Brief info about the published project available on Project Online.
 */
export class ProjectInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "id",
            baseName: "id",
            type: "string",
        },        
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "createdDate",
            baseName: "createdDate",
            type: "Date",
        },        
        {
            name: "isCheckedOut",
            baseName: "isCheckedOut",
            type: "boolean",
        },        
        {
            name: "lastPublishedDate",
            baseName: "lastPublishedDate",
            type: "Date",
        },        
        {
            name: "lastSavedDate",
            baseName: "lastSavedDate",
            type: "Date",
        },        
        {
            name: "description",
            baseName: "description",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ProjectInfo.attributeTypeMap;
    }

    /**
     * The unique identifier of the project.
     */
    public id: string;
    
    /**
     * The name of the project.
     */
    public name: string;
    
    /**
     * The date and time when the project was created.
     */
    public createdDate: Date;
    
    /**
     * Value indicating whether the project is checked out.
     */
    public isCheckedOut: boolean;
    
    /**
     * The most recent date when the project was published.
     */
    public lastPublishedDate: Date;
    
    /**
     * The most recent date when the project was saved.
     */
    public lastSavedDate: Date;
    
    /**
     * The description of the project.
     */
    public description: string;
    
    public constructor(init?: Partial<ProjectInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Specifies the  result of recalculation of the project;
 */
export class ProjectRecalculationResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "validationState",
            baseName: "validationState",
            type: "ProjectValidationState",
        },        
        {
            name: "validationErrorMessage",
            baseName: "validationErrorMessage",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ProjectRecalculationResult.attributeTypeMap;
    }

    public validationState: ProjectValidationState;
    
    public validationErrorMessage: string;
    
    public constructor(init?: Partial<ProjectRecalculationResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Specifies the state of the project's validation
 */
export enum ProjectValidationState {
    None = 'None' as any,
    NotStarted = 'NotStarted' as any,
    Valid = 'Valid' as any,
    HasErrors = 'HasErrors' as any,
}
/**
 * Specifies the units used by Microsoft Project to display a rate.
 */
export enum RateFormatType {
    Minute = 'Minute' as any,
    Hour = 'Hour' as any,
    Day = 'Day' as any,
    Week = 'Week' as any,
    Month = 'Month' as any,
    Year = 'Year' as any,
    MaterialResourceRate = 'MaterialResourceRate' as any,
    Undefined = 'Undefined' as any,
}
/**
 * Specifies the rate scale type.
 */
export enum RateScaleType {
    Undefined = 'Undefined' as any,
    Minute = 'Minute' as any,
    Hour = 'Hour' as any,
    Day = 'Day' as any,
    Week = 'Week' as any,
    Month = 'Month' as any,
    Quarter = 'Quarter' as any,
    Year = 'Year' as any,
}
/**
 * Specifies the unique identifiers of a rate table.
 */
export enum RateType {
    A = 'A' as any,
    B = 'B' as any,
    C = 'C' as any,
    D = 'D' as any,
    E = 'E' as any,
    Undefined = 'Undefined' as any,
}
/**
 * Represents a type of recurrence pattern of a recurring task.
 */
export enum RecurrencePattern {
    Daily = 'Daily' as any,
    Weekly = 'Weekly' as any,
    Monthly = 'Monthly' as any,
    Yearly = 'Yearly' as any,
}
/**
 * Represents the details of a recurring task in a project.
 */
export class RecurringInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "recurrencePattern",
            baseName: "recurrencePattern",
            type: "RecurrencePattern",
        },        
        {
            name: "startDate",
            baseName: "startDate",
            type: "Date",
        },        
        {
            name: "endDate",
            baseName: "endDate",
            type: "Date",
        },        
        {
            name: "duration",
            baseName: "duration",
            type: "string",
        },        
        {
            name: "occurrences",
            baseName: "occurrences",
            type: "number",
        },        
        {
            name: "useEndDate",
            baseName: "useEndDate",
            type: "boolean",
        },        
        {
            name: "dailyRepetitions",
            baseName: "dailyRepetitions",
            type: "number",
        },        
        {
            name: "dailyUseWorkdays",
            baseName: "dailyUseWorkdays",
            type: "boolean",
        },        
        {
            name: "weeklyRepetitions",
            baseName: "weeklyRepetitions",
            type: "number",
        },        
        {
            name: "weeklyDays",
            baseName: "weeklyDays",
            type: "WeekDayType",
        },        
        {
            name: "monthlyUseOrdinalDay",
            baseName: "monthlyUseOrdinalDay",
            type: "boolean",
        },        
        {
            name: "monthlyOrdinalNumber",
            baseName: "monthlyOrdinalNumber",
            type: "OrdinalNumber",
        },        
        {
            name: "monthlyOrdinalDay",
            baseName: "monthlyOrdinalDay",
            type: "DayOfWeek",
        },        
        {
            name: "monthlyOrdinalRepetitions",
            baseName: "monthlyOrdinalRepetitions",
            type: "number",
        },        
        {
            name: "monthlyDay",
            baseName: "monthlyDay",
            type: "number",
        },        
        {
            name: "monthlyRepetitions",
            baseName: "monthlyRepetitions",
            type: "number",
        },        
        {
            name: "yearlyUseOrdinalDay",
            baseName: "yearlyUseOrdinalDay",
            type: "boolean",
        },        
        {
            name: "yearlyDate",
            baseName: "yearlyDate",
            type: "Date",
        },        
        {
            name: "yearlyOrdinalNumber",
            baseName: "yearlyOrdinalNumber",
            type: "OrdinalNumber",
        },        
        {
            name: "yearlyOrdinalDay",
            baseName: "yearlyOrdinalDay",
            type: "DayOfWeek",
        },        
        {
            name: "yearlyOrdinalMonth",
            baseName: "yearlyOrdinalMonth",
            type: "Month",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return RecurringInfo.attributeTypeMap;
    }

    /**
     * Represents a recurrence pattern of the recurring task. Can be one of the values of  enum.
     */
    public recurrencePattern: RecurrencePattern;
    
    /**
     * Specifies the date for the occurrences to begin.
     */
    public startDate: Date;
    
    /**
     * Specifies the date for the occurrences to end.
     */
    public endDate: Date;
    
    /**
     * Specifies the duration for one occurrence of the recurring task. the instance of  class.
     */
    public duration: string;
    
    /**
     * Specifies a number of occurrences of the recurring task.
     */
    public occurrences: number;
    
    /**
     * Determines whether to use the end date or a number of occurrences for the recurring task.
     */
    public useEndDate: boolean;
    
    /**
     * Specifies an interval between repetitions for the daily recurrence pattern.
     */
    public dailyRepetitions: number;
    
    /**
     * Determines whether to use workdays for the daily recurrence pattern.
     */
    public dailyUseWorkdays: boolean;
    
    /**
     * Specifies an interval between repetitions for the weekly recurrence pattern.
     */
    public weeklyRepetitions: number;
    
    /**
     * Specifies a collection of days used in the weekly recurrence pattern.
     */
    public weeklyDays: WeekDayType;
    
    /**
     * Determines whether to use ordinal day for the monthly recurrence pattern.
     */
    public monthlyUseOrdinalDay: boolean;
    
    /**
     * Specifies an ordinal number of the monthly recurrence pattern. Can be one of the values of  enum.
     */
    public monthlyOrdinalNumber: OrdinalNumber;
    
    /**
     * Specifies a day of the monthly recurrence pattern when using ordinal day. Can be one of the values of  enum.
     */
    public monthlyOrdinalDay: DayOfWeek;
    
    /**
     * Specifies a number of repetitions for the monthly recurrence pattern when using ordinal day.
     */
    public monthlyOrdinalRepetitions: number;
    
    /**
     * Specifies a number of day of the monthly recurrence pattern.
     */
    public monthlyDay: number;
    
    /**
     * Specifies a number of repetitions for the monthly recurrence pattern.
     */
    public monthlyRepetitions: number;
    
    /**
     * Determines whether to use ordinal day for the yearly recurrence pattern.
     */
    public yearlyUseOrdinalDay: boolean;
    
    /**
     * Specifies a date for the yearly recurrence pattern.
     */
    public yearlyDate: Date;
    
    /**
     * Specifies an ordinal number of the yearly recurrence pattern. Can be one of the values of  enum.
     */
    public yearlyOrdinalNumber: OrdinalNumber;
    
    /**
     * Specifies a weekday of the yearly recurrence pattern when using ordinal day. Can be one of the values of  enum.
     */
    public yearlyOrdinalDay: DayOfWeek;
    
    /**
     * Specifies a month of the yearly recurrence pattern when using ordinal day. Can be one of the values of  enum.
     */
    public yearlyOrdinalMonth: Month;
    
    public constructor(init?: Partial<RecurringInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Specifies a type of the project's graphical report.
 */
export enum ReportType {
    ProjectOverview = 'ProjectOverview' as any,
    CostOverview = 'CostOverview' as any,
    WorkOverview = 'WorkOverview' as any,
    ResourceOverview = 'ResourceOverview' as any,
    ResourceCostOverview = 'ResourceCostOverview' as any,
    CriticalTasks = 'CriticalTasks' as any,
    LateTasks = 'LateTasks' as any,
    Milestones = 'Milestones' as any,
    UpcomingTask = 'UpcomingTask' as any,
    CostOverruns = 'CostOverruns' as any,
    TaskCostOverview = 'TaskCostOverview' as any,
    OverallocatedResources = 'OverallocatedResources' as any,
    SlippingTasks = 'SlippingTasks' as any,
    BestPracticeAnalyzer = 'BestPracticeAnalyzer' as any,
    Burndown = 'Burndown' as any,
    CashFlow = 'CashFlow' as any,
}
/**
 * Represents a project resource.
 */
export class Resource {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "uid",
            baseName: "uid",
            type: "number",
        },        
        {
            name: "id",
            baseName: "id",
            type: "number",
        },        
        {
            name: "guid",
            baseName: "guid",
            type: "string",
        },        
        {
            name: "type",
            baseName: "type",
            type: "ResourceType",
        },        
        {
            name: "isNull",
            baseName: "isNull",
            type: "boolean",
        },        
        {
            name: "initials",
            baseName: "initials",
            type: "string",
        },        
        {
            name: "phonetics",
            baseName: "phonetics",
            type: "string",
        },        
        {
            name: "ntAccount",
            baseName: "ntAccount",
            type: "string",
        },        
        {
            name: "windowsUserAccount",
            baseName: "windowsUserAccount",
            type: "string",
        },        
        {
            name: "workgroup",
            baseName: "workgroup",
            type: "WorkGroupType",
        },        
        {
            name: "materialLabel",
            baseName: "materialLabel",
            type: "string",
        },        
        {
            name: "code",
            baseName: "code",
            type: "string",
        },        
        {
            name: "group",
            baseName: "group",
            type: "string",
        },        
        {
            name: "emailAddress",
            baseName: "emailAddress",
            type: "string",
        },        
        {
            name: "hyperlink",
            baseName: "hyperlink",
            type: "string",
        },        
        {
            name: "hyperlinkAddress",
            baseName: "hyperlinkAddress",
            type: "string",
        },        
        {
            name: "hyperlinkSubAddress",
            baseName: "hyperlinkSubAddress",
            type: "string",
        },        
        {
            name: "maxUnits",
            baseName: "maxUnits",
            type: "number",
        },        
        {
            name: "peakUnits",
            baseName: "peakUnits",
            type: "number",
        },        
        {
            name: "overAllocated",
            baseName: "overAllocated",
            type: "boolean",
        },        
        {
            name: "availableFrom",
            baseName: "availableFrom",
            type: "Date",
        },        
        {
            name: "availableTo",
            baseName: "availableTo",
            type: "Date",
        },        
        {
            name: "start",
            baseName: "start",
            type: "Date",
        },        
        {
            name: "finish",
            baseName: "finish",
            type: "Date",
        },        
        {
            name: "canLevel",
            baseName: "canLevel",
            type: "boolean",
        },        
        {
            name: "accrueAt",
            baseName: "accrueAt",
            type: "CostAccrualType",
        },        
        {
            name: "work",
            baseName: "work",
            type: "string",
        },        
        {
            name: "regularWork",
            baseName: "regularWork",
            type: "string",
        },        
        {
            name: "overtimeWork",
            baseName: "overtimeWork",
            type: "string",
        },        
        {
            name: "actualWork",
            baseName: "actualWork",
            type: "string",
        },        
        {
            name: "remainingWork",
            baseName: "remainingWork",
            type: "string",
        },        
        {
            name: "actualOvertimeWork",
            baseName: "actualOvertimeWork",
            type: "string",
        },        
        {
            name: "remainingOvertimeWork",
            baseName: "remainingOvertimeWork",
            type: "string",
        },        
        {
            name: "percentWorkComplete",
            baseName: "percentWorkComplete",
            type: "number",
        },        
        {
            name: "standardRate",
            baseName: "standardRate",
            type: "number",
        },        
        {
            name: "standardRateFormat",
            baseName: "standardRateFormat",
            type: "RateFormatType",
        },        
        {
            name: "cost",
            baseName: "cost",
            type: "number",
        },        
        {
            name: "overtimeRateFormat",
            baseName: "overtimeRateFormat",
            type: "RateFormatType",
        },        
        {
            name: "overtimeCost",
            baseName: "overtimeCost",
            type: "number",
        },        
        {
            name: "costPerUse",
            baseName: "costPerUse",
            type: "number",
        },        
        {
            name: "actualCost",
            baseName: "actualCost",
            type: "number",
        },        
        {
            name: "actualOvertimeCost",
            baseName: "actualOvertimeCost",
            type: "number",
        },        
        {
            name: "remainingCost",
            baseName: "remainingCost",
            type: "number",
        },        
        {
            name: "remainingOvertimeCost",
            baseName: "remainingOvertimeCost",
            type: "number",
        },        
        {
            name: "workVariance",
            baseName: "workVariance",
            type: "number",
        },        
        {
            name: "costVariance",
            baseName: "costVariance",
            type: "number",
        },        
        {
            name: "sv",
            baseName: "sv",
            type: "number",
        },        
        {
            name: "cv",
            baseName: "cv",
            type: "number",
        },        
        {
            name: "acwp",
            baseName: "acwp",
            type: "number",
        },        
        {
            name: "calendarUid",
            baseName: "calendarUid",
            type: "number",
        },        
        {
            name: "notesText",
            baseName: "notesText",
            type: "string",
        },        
        {
            name: "notes",
            baseName: "notes",
            type: "string",
        },        
        {
            name: "notesRTF",
            baseName: "notesRTF",
            type: "string",
        },        
        {
            name: "bcws",
            baseName: "bcws",
            type: "number",
        },        
        {
            name: "bcwp",
            baseName: "bcwp",
            type: "number",
        },        
        {
            name: "isGeneric",
            baseName: "isGeneric",
            type: "boolean",
        },        
        {
            name: "isInactive",
            baseName: "isInactive",
            type: "boolean",
        },        
        {
            name: "isEnterprise",
            baseName: "isEnterprise",
            type: "boolean",
        },        
        {
            name: "bookingType",
            baseName: "bookingType",
            type: "BookingType",
        },        
        {
            name: "actualWorkProtected",
            baseName: "actualWorkProtected",
            type: "string",
        },        
        {
            name: "actualOvertimeWorkProtected",
            baseName: "actualOvertimeWorkProtected",
            type: "string",
        },        
        {
            name: "activeDirectoryGuid",
            baseName: "activeDirectoryGuid",
            type: "string",
        },        
        {
            name: "creationDate",
            baseName: "creationDate",
            type: "Date",
        },        
        {
            name: "costCenter",
            baseName: "costCenter",
            type: "string",
        },        
        {
            name: "isCostResource",
            baseName: "isCostResource",
            type: "boolean",
        },        
        {
            name: "teamAssignmentPool",
            baseName: "teamAssignmentPool",
            type: "boolean",
        },        
        {
            name: "assignmentOwner",
            baseName: "assignmentOwner",
            type: "string",
        },        
        {
            name: "assignmentOwnerGuid",
            baseName: "assignmentOwnerGuid",
            type: "string",
        },        
        {
            name: "isBudget",
            baseName: "isBudget",
            type: "boolean",
        },        
        {
            name: "budgetWork",
            baseName: "budgetWork",
            type: "string",
        },        
        {
            name: "budgetCost",
            baseName: "budgetCost",
            type: "number",
        },        
        {
            name: "overtimeRate",
            baseName: "overtimeRate",
            type: "number",
        },        
        {
            name: "baselines",
            baseName: "baselines",
            type: "Array<Baseline>",
        },        
        {
            name: "extendedAttributes",
            baseName: "extendedAttributes",
            type: "Array<ExtendedAttribute>",
        },        
        {
            name: "outlineCodes",
            baseName: "outlineCodes",
            type: "Array<OutlineCode>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Resource.attributeTypeMap;
    }

    /**
     * The name of a resource.
     */
    public name: string;
    
    /**
     * The unique identifier of a resource.
     */
    public uid: number;
    
    /**
     * The position identifier of a resource within the list of resources.
     */
    public id: number;
    
    /**
     * Contains the generated unique identification code for the resource.             
     */
    public guid: string;
    
    /**
     * The type of a resource.
     */
    public type: ResourceType;
    
    /**
     * Determines whether a resource is null.
     */
    public isNull: boolean;
    
    /**
     * The initials of a resource.
     */
    public initials: string;
    
    /**
     * The phonetic spelling of the resource name. For use with Japanese only.
     */
    public phonetics: string;
    
    /**
     * The NT account associated with a resource.
     */
    public ntAccount: string;
    
    /**
     * The NT account associated with a resource.
     */
    public windowsUserAccount: string;
    
    /**
     * The type of a workgroup to which a resource belongs.  type.
     */
    public workgroup: WorkGroupType;
    
    /**
     * The unit of measure for the material resource. Read/write String.
     */
    public materialLabel: string;
    
    /**
     * The code or other information about a resource.
     */
    public code: string;
    
    /**
     * The group to which a resource belongs.
     */
    public group: string;
    
    public emailAddress: string;
    
    /**
     * The title of a hyperlink associated with a resource.
     */
    public hyperlink: string;
    
    /**
     * The hyperlink associated with a resource.
     */
    public hyperlinkAddress: string;
    
    /**
     * The document bookmark of a hyperlink associated with a resource. Read/write String.
     */
    public hyperlinkSubAddress: string;
    
    /**
     * The maximum number of units of a resource is available.
     */
    public maxUnits: number;
    
    /**
     * The largest number of units assigned to a resource at any time.
     */
    public peakUnits: number;
    
    public overAllocated: boolean;
    
    /**
     * The first date when a resource is available.
     */
    public availableFrom: Date;
    
    /**
     * The last date when a resource is available.
     */
    public availableTo: Date;
    
    /**
     * The scheduled start date of a resource.
     */
    public start: Date;
    
    /**
     * The scheduled finish date of a resource.
     */
    public finish: Date;
    
    /**
     * Determines whether a resource can be leveled.
     */
    public canLevel: boolean;
    
    /**
     * Determines how cost is accrued against the resource.
     */
    public accrueAt: CostAccrualType;
    
    /**
     * The total work assigned to a resource across all assigned tasks.
     */
    public work: string;
    
    /**
     * The amount of non-overtime work assigned to a resource.
     */
    public regularWork: string;
    
    /**
     * The amount of overtime work assigned to a resource.
     */
    public overtimeWork: string;
    
    /**
     * The amount of actual work performed by a resource.
     */
    public actualWork: string;
    
    /**
     * The amount of remaining work required to complete all assigned tasks.
     */
    public remainingWork: string;
    
    /**
     * The amount of actual overtime work performed by a resource.
     */
    public actualOvertimeWork: string;
    
    /**
     * The amount of remaining overtime work required to complete all tasks.
     */
    public remainingOvertimeWork: string;
    
    /**
     * The percentage of work completed across all tasks.
     */
    public percentWorkComplete: number;
    
    /**
     * The standard rate of a resource. This value retrieved from the current date if a rate table exists for a resource.
     */
    public standardRate: number;
    
    /**
     * The units used by Microsoft Project to display the standard rate.
     */
    public standardRateFormat: RateFormatType;
    
    /**
     * The total project cost for a resource across all assigned tasks.
     */
    public cost: number;
    
    /**
     * The units used by Microsoft Project to display the overtime rate.
     */
    public overtimeRateFormat: RateFormatType;
    
    /**
     * The total overtime cost of a resource including actual and remaining overtime costs.
     */
    public overtimeCost: number;
    
    /**
     * The cost per use of a resource. This value retrieved from the current date if a rate table exists for the resource.
     */
    public costPerUse: number;
    
    /**
     * The actual cost incurred by the resource across all assigned tasks.
     */
    public actualCost: number;
    
    /**
     * The actual overtime cost incurred by the resource across all assigned tasks.
     */
    public actualOvertimeCost: number;
    
    /**
     * The remaining projected cost of a resource to complete all assigned tasks.
     */
    public remainingCost: number;
    
    /**
     * The remaining projected overtime cost of a resource to complete all assigned tasks.
     */
    public remainingOvertimeCost: number;
    
    /**
     * The difference between a baseline work and a work
     */
    public workVariance: number;
    
    /**
     * The difference between a baseline cost and a cost.
     */
    public costVariance: number;
    
    /**
     * The earned value schedule variance, through the project status date.
     */
    public sv: number;
    
    /**
     * The earned value cost variance, through the project status date.
     */
    public cv: number;
    
    /**
     * The actual cost of a work performed by a resource for the project to-date.
     */
    public acwp: number;
    
    /**
     * The calendar of a resource.
     */
    public calendarUid: number;
    
    /**
     * Notes' plain text extracted from RTF data.
     */
    public notesText: string;
    
    /**
     * The text notes associated with a resource.
     */
    public notes: string;
    
    /**
     * The text notes in RTF format. Supported for MPP formats only.
     */
    public notesRTF: string;
    
    /**
     * The budget cost of a work scheduled for a resource.
     */
    public bcws: number;
    
    /**
     * The budgeted cost of a work performed by a resource for the project to-date.
     */
    public bcwp: number;
    
    /**
     * Determines whether a resource is generic.
     */
    public isGeneric: boolean;
    
    /**
     * Determines whether a resource is inactive.
     */
    public isInactive: boolean;
    
    /**
     * Determines whether a resource is an Enterprise resource.
     */
    public isEnterprise: boolean;
    
    /**
     * The booking type of a resource.
     */
    public bookingType: BookingType;
    
    /**
     * The duration through which actual work is protected.
     */
    public actualWorkProtected: string;
    
    /**
     * The duration through which actual overtime work is protected.
     */
    public actualOvertimeWorkProtected: string;
    
    /**
     * The Active Directory Guid for a resource.
     */
    public activeDirectoryGuid: string;
    
    /**
     * The date when a resource was created.
     */
    public creationDate: Date;
    
    /**
     * Indicates which cost center the costs accrued by the resource should be charged to.
     */
    public costCenter: string;
    
    /**
     * Determines whether a resource is a cost resource.
     */
    public isCostResource: boolean;
    
    /**
     * Determines whether the current resource is a team resource.             
     */
    public teamAssignmentPool: boolean;
    
    /**
     * The name of an assignment owner.
     */
    public assignmentOwner: string;
    
    /**
     * The GUID of an assignment owner.
     */
    public assignmentOwnerGuid: string;
    
    /**
     * Determines whether a resource is a budget resource.
     */
    public isBudget: boolean;
    
    /**
     * The budget work for a budget work or material resource.
     */
    public budgetWork: string;
    
    /**
     * The budget cost for a budget cost resource.
     */
    public budgetCost: number;
    
    /**
     * The overtime rate of a resource. This value retrieved from the current date if a rate table exists for a resource.
     */
    public overtimeRate: number;
    
    /**
     * Gets or sets the collection of baseline values of the resource.
     */
    public baselines: Array<Baseline>;
    
    /**
     * Resource extended attributes.
     */
    public extendedAttributes: Array<ExtendedAttribute>;
    
    /**
     * Resource outline codes.
     */
    public outlineCodes: Array<OutlineCode>;
    
    public constructor(init?: Partial<Resource>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents a resource assignment in a project.
 */
export class ResourceAssignment {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "taskUid",
            baseName: "taskUid",
            type: "number",
        },        
        {
            name: "resourceUid",
            baseName: "resourceUid",
            type: "number",
        },        
        {
            name: "uid",
            baseName: "uid",
            type: "number",
        },        
        {
            name: "percentWorkComplete",
            baseName: "percentWorkComplete",
            type: "number",
        },        
        {
            name: "actualCost",
            baseName: "actualCost",
            type: "number",
        },        
        {
            name: "actualFinish",
            baseName: "actualFinish",
            type: "Date",
        },        
        {
            name: "actualOvertimeCost",
            baseName: "actualOvertimeCost",
            type: "number",
        },        
        {
            name: "actualOvertimeWork",
            baseName: "actualOvertimeWork",
            type: "string",
        },        
        {
            name: "actualStart",
            baseName: "actualStart",
            type: "Date",
        },        
        {
            name: "actualWork",
            baseName: "actualWork",
            type: "string",
        },        
        {
            name: "acwp",
            baseName: "acwp",
            type: "number",
        },        
        {
            name: "confirmed",
            baseName: "confirmed",
            type: "boolean",
        },        
        {
            name: "cost",
            baseName: "cost",
            type: "number",
        },        
        {
            name: "costRateTableType",
            baseName: "costRateTableType",
            type: "RateType",
        },        
        {
            name: "costVariance",
            baseName: "costVariance",
            type: "number",
        },        
        {
            name: "cv",
            baseName: "cv",
            type: "number",
        },        
        {
            name: "delay",
            baseName: "delay",
            type: "number",
        },        
        {
            name: "finish",
            baseName: "finish",
            type: "Date",
        },        
        {
            name: "finishVariance",
            baseName: "finishVariance",
            type: "number",
        },        
        {
            name: "hyperlink",
            baseName: "hyperlink",
            type: "string",
        },        
        {
            name: "hyperlinkAddress",
            baseName: "hyperlinkAddress",
            type: "string",
        },        
        {
            name: "hyperlinkSubAddress",
            baseName: "hyperlinkSubAddress",
            type: "string",
        },        
        {
            name: "workVariance",
            baseName: "workVariance",
            type: "number",
        },        
        {
            name: "hasFixedRateUnits",
            baseName: "hasFixedRateUnits",
            type: "boolean",
        },        
        {
            name: "fixedMaterial",
            baseName: "fixedMaterial",
            type: "boolean",
        },        
        {
            name: "levelingDelay",
            baseName: "levelingDelay",
            type: "number",
        },        
        {
            name: "levelingDelayFormat",
            baseName: "levelingDelayFormat",
            type: "TimeUnitType",
        },        
        {
            name: "linkedFields",
            baseName: "linkedFields",
            type: "boolean",
        },        
        {
            name: "milestone",
            baseName: "milestone",
            type: "boolean",
        },        
        {
            name: "notes",
            baseName: "notes",
            type: "string",
        },        
        {
            name: "overallocated",
            baseName: "overallocated",
            type: "boolean",
        },        
        {
            name: "overtimeCost",
            baseName: "overtimeCost",
            type: "number",
        },        
        {
            name: "overtimeWork",
            baseName: "overtimeWork",
            type: "string",
        },        
        {
            name: "peakUnits",
            baseName: "peakUnits",
            type: "number",
        },        
        {
            name: "regularWork",
            baseName: "regularWork",
            type: "string",
        },        
        {
            name: "remainingCost",
            baseName: "remainingCost",
            type: "number",
        },        
        {
            name: "remainingOvertimeCost",
            baseName: "remainingOvertimeCost",
            type: "number",
        },        
        {
            name: "remainingOvertimeWork",
            baseName: "remainingOvertimeWork",
            type: "string",
        },        
        {
            name: "remainingWork",
            baseName: "remainingWork",
            type: "string",
        },        
        {
            name: "responsePending",
            baseName: "responsePending",
            type: "boolean",
        },        
        {
            name: "start",
            baseName: "start",
            type: "Date",
        },        
        {
            name: "stop",
            baseName: "stop",
            type: "Date",
        },        
        {
            name: "resume",
            baseName: "resume",
            type: "Date",
        },        
        {
            name: "startVariance",
            baseName: "startVariance",
            type: "number",
        },        
        {
            name: "summary",
            baseName: "summary",
            type: "boolean",
        },        
        {
            name: "sv",
            baseName: "sv",
            type: "number",
        },        
        {
            name: "units",
            baseName: "units",
            type: "number",
        },        
        {
            name: "updateNeeded",
            baseName: "updateNeeded",
            type: "boolean",
        },        
        {
            name: "vac",
            baseName: "vac",
            type: "number",
        },        
        {
            name: "work",
            baseName: "work",
            type: "string",
        },        
        {
            name: "workContour",
            baseName: "workContour",
            type: "WorkContourType",
        },        
        {
            name: "bcws",
            baseName: "bcws",
            type: "number",
        },        
        {
            name: "bcwp",
            baseName: "bcwp",
            type: "number",
        },        
        {
            name: "bookingType",
            baseName: "bookingType",
            type: "BookingType",
        },        
        {
            name: "actualWorkProtected",
            baseName: "actualWorkProtected",
            type: "string",
        },        
        {
            name: "actualOvertimeWorkProtected",
            baseName: "actualOvertimeWorkProtected",
            type: "string",
        },        
        {
            name: "creationDate",
            baseName: "creationDate",
            type: "Date",
        },        
        {
            name: "assnOwner",
            baseName: "assnOwner",
            type: "string",
        },        
        {
            name: "assnOwnerGuid",
            baseName: "assnOwnerGuid",
            type: "string",
        },        
        {
            name: "budgetCost",
            baseName: "budgetCost",
            type: "number",
        },        
        {
            name: "budgetWork",
            baseName: "budgetWork",
            type: "string",
        },        
        {
            name: "rateScale",
            baseName: "rateScale",
            type: "RateScaleType",
        },        
        {
            name: "baselines",
            baseName: "baselines",
            type: "Array<AssignmentBaseline>",
        },        
        {
            name: "extendedAttributes",
            baseName: "extendedAttributes",
            type: "Array<ExtendedAttribute>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ResourceAssignment.attributeTypeMap;
    }

    /**
     * Returns or sets a task unique id to which a resource is assigned.
     */
    public taskUid: number;
    
    /**
     * Returns or sets a resource unique id assigned to a task.
     */
    public resourceUid: number;
    
    /**
     * Returns or sets the unique identifier of an assignment.
     */
    public uid: number;
    
    /**
     * Returns or sets the amount of a work completed on an assignment.
     */
    public percentWorkComplete: number;
    
    /**
     * Returns or sets the actual cost incurred on an assignment.
     */
    public actualCost: number;
    
    /**
     * Returns or sets the actual finish date of an assignment.
     */
    public actualFinish: Date;
    
    /**
     * Returns or sets the actual overtime cost incurred on an assignment.
     */
    public actualOvertimeCost: number;
    
    /**
     * Returns or sets the actual amount of an overtime work incurred on an assignment.
     */
    public actualOvertimeWork: string;
    
    /**
     * Returns or sets the actual start date of an assignment.
     */
    public actualStart: Date;
    
    /**
     * Returns or sets the actual amount of a work incurred on an assignment.
     */
    public actualWork: string;
    
    /**
     * Returns or sets the actual cost of a work performed on an assignment to-date.
     */
    public acwp: number;
    
    /**
     * Determines whether a resource has accepted all of its assignments.
     */
    public confirmed: boolean;
    
    /**
     * Returns or sets the projected or scheduled cost of an assignment.
     */
    public cost: number;
    
    /**
     * Returns or sets the cost rate table used for this assignment.
     */
    public costRateTableType: RateType;
    
    /**
     * Returns or sets the difference between the cost and baseline cost of a resource.
     */
    public costVariance: number;
    
    /**
     * Returns or sets the earned value cost variance.
     */
    public cv: number;
    
    /**
     * Returns or sets the delay of an assignment.
     */
    public delay: number;
    
    /**
     * Returns or sets the scheduled finish date of an assignment.
     */
    public finish: Date;
    
    /**
     * Returns or sets the variance of an assignment finish date from a baseline finish date.
     */
    public finishVariance: number;
    
    /**
     * Returns or sets the title of the hyperlink associated with an assignment.
     */
    public hyperlink: string;
    
    /**
     * Returns or sets the hyperlink associated with an assignment.
     */
    public hyperlinkAddress: string;
    
    /**
     * Returns or sets the document bookmark of the hyperlink associated with an assignment.
     */
    public hyperlinkSubAddress: string;
    
    /**
     * Returns or sets the variance of an assignment work from the baseline work as minutes.
     */
    public workVariance: number;
    
    /**
     * Determines whether the Units have Fixed Rate.
     */
    public hasFixedRateUnits: boolean;
    
    /**
     * Determines whether the consumption of an assigned material resource occurs in a single, fixed amount.
     */
    public fixedMaterial: boolean;
    
    /**
     * Returns or sets the delay caused by leveling.
     */
    public levelingDelay: number;
    
    /**
     * Returns or sets the duration format of a delay.
     */
    public levelingDelayFormat: TimeUnitType;
    
    /**
     * Determines whether the Project is linked to another OLE object.
     */
    public linkedFields: boolean;
    
    /**
     * Determines whether the assignment is a milestone.
     */
    public milestone: boolean;
    
    /**
     * Returns or sets the text notes associated with an assignment.
     */
    public notes: string;
    
    /**
     * Determines whether the assignment is overallocated.
     */
    public overallocated: boolean;
    
    /**
     * Returns or sets the sum of the actual and remaining overtime cost of an assignment.
     */
    public overtimeCost: number;
    
    /**
     * Returns or sets the scheduled overtime work of an assignment.
     */
    public overtimeWork: string;
    
    /**
     * Returns or sets the largest number of a resource's units assigned to a task.
     */
    public peakUnits: number;
    
    /**
     * Returns or sets the amount of a non-overtime work scheduled for an assignment.
     */
    public regularWork: string;
    
    /**
     * Returns or sets the remaining projected cost of completing an assignment.
     */
    public remainingCost: number;
    
    /**
     * Returns or sets the remaining projected overtime cost of completing an assignment.
     */
    public remainingOvertimeCost: number;
    
    /**
     * Returns or sets the remaining overtime work scheduled to complete an assignment.
     */
    public remainingOvertimeWork: string;
    
    /**
     * Returns or sets the remaining work scheduled to complete an assignment.
     */
    public remainingWork: string;
    
    /**
     * Determines whether the response has been received for a TeamAssign message.
     */
    public responsePending: boolean;
    
    /**
     * Returns or sets the scheduled start date of an assignment.
     */
    public start: Date;
    
    /**
     * Returns or sets the date when assignment is stopped.
     */
    public stop: Date;
    
    /**
     * Returns or sets the date when assignment is resumed.
     */
    public resume: Date;
    
    /**
     * Returns or sets the variance of an assignment start date from a baseline start date.
     */
    public startVariance: number;
    
    /**
     * Determines whether the task is a summary task.
     */
    public summary: boolean;
    
    /**
     * Returns or sets the earned value schedule variance, through the project status date.
     */
    public sv: number;
    
    /**
     * Returns or sets the number of units for an assignment.
     */
    public units: number;
    
    /**
     * Determines whether the resource assigned to a task needs to be updated as to the status of the task.
     */
    public updateNeeded: boolean;
    
    /**
     * Returns or sets the difference between basline cost and total cost. Read/write Double.
     */
    public vac: number;
    
    /**
     * Returns or sets the amount of scheduled work for an assignment. Read/write TimeSpan.
     */
    public work: string;
    
    /**
     * Returns or sets the work contour of an assignment.
     */
    public workContour: WorkContourType;
    
    /**
     * Returns or sets the budgeted cost of a work on assignment.
     */
    public bcws: number;
    
    /**
     * Returns or sets the budgeted cost of a work performed on assignment to-date.
     */
    public bcwp: number;
    
    /**
     * Returns or sets the booking type of an assignment.
     */
    public bookingType: BookingType;
    
    /**
     * Returns or sets the duration through which actual work is protected.
     */
    public actualWorkProtected: string;
    
    /**
     * Returns or sets the duration through which actual overtime work is protected.
     */
    public actualOvertimeWorkProtected: string;
    
    /**
     * Returns or sets the date that the assignment was created.
     */
    public creationDate: Date;
    
    /**
     * Returns or sets the name of an assignment owner.
     */
    public assnOwner: string;
    
    /**
     * Returns or sets the Guid of an assignment owner.
     */
    public assnOwnerGuid: string;
    
    /**
     * Returns or sets the budgeted cost of resources on an assignment.
     */
    public budgetCost: number;
    
    /**
     * Returns or sets the budgeted work amount for a work or material resources on an assignment.
     */
    public budgetWork: string;
    
    /**
     * Returns the time unit for the usage rate of the material resource assignment.
     */
    public rateScale: RateScaleType;
    
    /**
     * List of ResourceAssignment's Baseline values.
     */
    public baselines: Array<AssignmentBaseline>;
    
    /**
     * ResourceAssignment extended attributes.
     */
    public extendedAttributes: Array<ExtendedAttribute>;
    
    public constructor(init?: Partial<ResourceAssignment>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Resource's brief info
 */
export class ResourceItem {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "uid",
            baseName: "uid",
            type: "number",
        },        
        {
            name: "id",
            baseName: "id",
            type: "number",
        },        
        {
            name: "name",
            baseName: "name",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ResourceItem.attributeTypeMap;
    }

    public link: Link;
    
    public uid: number;
    
    public id: number;
    
    public name: string;
    
    public constructor(init?: Partial<ResourceItem>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Specifies the type of a resource.
 */
export enum ResourceType {
    Material = 'Material' as any,
    Work = 'Work' as any,
    Cost = 'Cost' as any,
}
/**
 * Specifies the rollup type.
 */
export enum RollupType {
    Null = 'Null' as any,
    Maximum = 'Maximum' as any,
    Minimum = 'Minimum' as any,
    Count = 'Count' as any,
    Sum = 'Sum' as any,
    Average = 'Average' as any,
    AverageFirstSublevel = 'AverageFirstSublevel' as any,
    CountFirstSublevel = 'CountFirstSublevel' as any,
    CountNonsummaries = 'CountNonsummaries' as any,
}
/**
 * Storage exists
 */
export class StorageExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageExist.attributeTypeMap;
    }

    /**
     * Shows that the storage exists.             
     */
    public exists: boolean;
    
    public constructor(init?: Partial<StorageExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File or folder information
 */
export class StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        },        
        {
            name: "modifiedDate",
            baseName: "modifiedDate",
            type: "Date",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "path",
            baseName: "path",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }

    /**
     * File or folder name.
     */
    public name: string;
    
    /**
     * True if it is a folder.
     */
    public isFolder: boolean;
    
    /**
     * File or folder last modified DateTime.
     */
    public modifiedDate: Date;
    
    /**
     * File or folder size.
     */
    public size: number;
    
    /**
     * File or folder path.
     */
    public path: string;
    
    public constructor(init?: Partial<StorageFile>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents project task.
 */
export class Task {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "uid",
            baseName: "uid",
            type: "number",
        },        
        {
            name: "id",
            baseName: "id",
            type: "number",
        },        
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "durationText",
            baseName: "durationText",
            type: "string",
        },        
        {
            name: "duration",
            baseName: "duration",
            type: "string",
        },        
        {
            name: "start",
            baseName: "start",
            type: "Date",
        },        
        {
            name: "finish",
            baseName: "finish",
            type: "Date",
        },        
        {
            name: "startText",
            baseName: "startText",
            type: "string",
        },        
        {
            name: "finishText",
            baseName: "finishText",
            type: "string",
        },        
        {
            name: "percentComplete",
            baseName: "percentComplete",
            type: "number",
        },        
        {
            name: "percentWorkComplete",
            baseName: "percentWorkComplete",
            type: "number",
        },        
        {
            name: "isActive",
            baseName: "isActive",
            type: "boolean",
        },        
        {
            name: "actualCost",
            baseName: "actualCost",
            type: "number",
        },        
        {
            name: "actualDuration",
            baseName: "actualDuration",
            type: "string",
        },        
        {
            name: "actualFinish",
            baseName: "actualFinish",
            type: "Date",
        },        
        {
            name: "actualOvertimeCost",
            baseName: "actualOvertimeCost",
            type: "number",
        },        
        {
            name: "actualOvertimeWork",
            baseName: "actualOvertimeWork",
            type: "string",
        },        
        {
            name: "actualWorkProtected",
            baseName: "actualWorkProtected",
            type: "string",
        },        
        {
            name: "actualOvertimeWorkProtected",
            baseName: "actualOvertimeWorkProtected",
            type: "string",
        },        
        {
            name: "actualStart",
            baseName: "actualStart",
            type: "Date",
        },        
        {
            name: "budgetWork",
            baseName: "budgetWork",
            type: "string",
        },        
        {
            name: "budgetCost",
            baseName: "budgetCost",
            type: "number",
        },        
        {
            name: "constraintDate",
            baseName: "constraintDate",
            type: "Date",
        },        
        {
            name: "constraintType",
            baseName: "constraintType",
            type: "ConstraintType",
        },        
        {
            name: "contact",
            baseName: "contact",
            type: "string",
        },        
        {
            name: "cost",
            baseName: "cost",
            type: "number",
        },        
        {
            name: "cv",
            baseName: "cv",
            type: "number",
        },        
        {
            name: "deadline",
            baseName: "deadline",
            type: "Date",
        },        
        {
            name: "durationVariance",
            baseName: "durationVariance",
            type: "string",
        },        
        {
            name: "earlyFinish",
            baseName: "earlyFinish",
            type: "Date",
        },        
        {
            name: "earlyStart",
            baseName: "earlyStart",
            type: "Date",
        },        
        {
            name: "isEffortDriven",
            baseName: "isEffortDriven",
            type: "boolean",
        },        
        {
            name: "isExternalTask",
            baseName: "isExternalTask",
            type: "boolean",
        },        
        {
            name: "externalTaskProject",
            baseName: "externalTaskProject",
            type: "string",
        },        
        {
            name: "externalId",
            baseName: "externalId",
            type: "number",
        },        
        {
            name: "finishSlack",
            baseName: "finishSlack",
            type: "number",
        },        
        {
            name: "finishVariance",
            baseName: "finishVariance",
            type: "number",
        },        
        {
            name: "fixedCost",
            baseName: "fixedCost",
            type: "number",
        },        
        {
            name: "fixedCostAccrual",
            baseName: "fixedCostAccrual",
            type: "CostAccrualType",
        },        
        {
            name: "freeSlack",
            baseName: "freeSlack",
            type: "number",
        },        
        {
            name: "guid",
            baseName: "guid",
            type: "string",
        },        
        {
            name: "hideBar",
            baseName: "hideBar",
            type: "boolean",
        },        
        {
            name: "ignoreResourceCalendar",
            baseName: "ignoreResourceCalendar",
            type: "boolean",
        },        
        {
            name: "lateFinish",
            baseName: "lateFinish",
            type: "Date",
        },        
        {
            name: "lateStart",
            baseName: "lateStart",
            type: "Date",
        },        
        {
            name: "isLevelAssignments",
            baseName: "isLevelAssignments",
            type: "boolean",
        },        
        {
            name: "canLevelingSplit",
            baseName: "canLevelingSplit",
            type: "boolean",
        },        
        {
            name: "levelingDelay",
            baseName: "levelingDelay",
            type: "number",
        },        
        {
            name: "isMarked",
            baseName: "isMarked",
            type: "boolean",
        },        
        {
            name: "isMilestone",
            baseName: "isMilestone",
            type: "boolean",
        },        
        {
            name: "isCritical",
            baseName: "isCritical",
            type: "boolean",
        },        
        {
            name: "isSubproject",
            baseName: "isSubproject",
            type: "boolean",
        },        
        {
            name: "isSubprojectReadOnly",
            baseName: "isSubprojectReadOnly",
            type: "boolean",
        },        
        {
            name: "subprojectName",
            baseName: "subprojectName",
            type: "string",
        },        
        {
            name: "isSummary",
            baseName: "isSummary",
            type: "boolean",
        },        
        {
            name: "subtasksUids",
            baseName: "subtasksUids",
            type: "Array<number>",
        },        
        {
            name: "outlineLevel",
            baseName: "outlineLevel",
            type: "number",
        },        
        {
            name: "isOverAllocated",
            baseName: "isOverAllocated",
            type: "boolean",
        },        
        {
            name: "isEstimated",
            baseName: "isEstimated",
            type: "boolean",
        },        
        {
            name: "overtimeCost",
            baseName: "overtimeCost",
            type: "number",
        },        
        {
            name: "overtimeWork",
            baseName: "overtimeWork",
            type: "string",
        },        
        {
            name: "physicalPercentComplete",
            baseName: "physicalPercentComplete",
            type: "number",
        },        
        {
            name: "preLeveledFinish",
            baseName: "preLeveledFinish",
            type: "Date",
        },        
        {
            name: "preLeveledStart",
            baseName: "preLeveledStart",
            type: "Date",
        },        
        {
            name: "isRecurring",
            baseName: "isRecurring",
            type: "boolean",
        },        
        {
            name: "regularWork",
            baseName: "regularWork",
            type: "string",
        },        
        {
            name: "remainingCost",
            baseName: "remainingCost",
            type: "number",
        },        
        {
            name: "remainingDuration",
            baseName: "remainingDuration",
            type: "string",
        },        
        {
            name: "remainingOvertimeCost",
            baseName: "remainingOvertimeCost",
            type: "number",
        },        
        {
            name: "remainingOvertimeWork",
            baseName: "remainingOvertimeWork",
            type: "string",
        },        
        {
            name: "remainingWork",
            baseName: "remainingWork",
            type: "string",
        },        
        {
            name: "resume",
            baseName: "resume",
            type: "Date",
        },        
        {
            name: "isResumeValid",
            baseName: "isResumeValid",
            type: "boolean",
        },        
        {
            name: "stop",
            baseName: "stop",
            type: "Date",
        },        
        {
            name: "isRollup",
            baseName: "isRollup",
            type: "boolean",
        },        
        {
            name: "startSlack",
            baseName: "startSlack",
            type: "number",
        },        
        {
            name: "startVariance",
            baseName: "startVariance",
            type: "number",
        },        
        {
            name: "calendarUid",
            baseName: "calendarUid",
            type: "number",
        },        
        {
            name: "isManual",
            baseName: "isManual",
            type: "boolean",
        },        
        {
            name: "manualStart",
            baseName: "manualStart",
            type: "Date",
        },        
        {
            name: "manualFinish",
            baseName: "manualFinish",
            type: "Date",
        },        
        {
            name: "manualDuration",
            baseName: "manualDuration",
            type: "string",
        },        
        {
            name: "totalSlack",
            baseName: "totalSlack",
            type: "number",
        },        
        {
            name: "type",
            baseName: "type",
            type: "TaskType",
        },        
        {
            name: "wbs",
            baseName: "wbs",
            type: "string",
        },        
        {
            name: "priority",
            baseName: "priority",
            type: "number",
        },        
        {
            name: "work",
            baseName: "work",
            type: "string",
        },        
        {
            name: "workVariance",
            baseName: "workVariance",
            type: "number",
        },        
        {
            name: "notesText",
            baseName: "notesText",
            type: "string",
        },        
        {
            name: "notesRTF",
            baseName: "notesRTF",
            type: "string",
        },        
        {
            name: "acwp",
            baseName: "acwp",
            type: "number",
        },        
        {
            name: "bcws",
            baseName: "bcws",
            type: "number",
        },        
        {
            name: "bcwp",
            baseName: "bcwp",
            type: "number",
        },        
        {
            name: "levelingDelayFormat",
            baseName: "levelingDelayFormat",
            type: "TimeUnitType",
        },        
        {
            name: "predecessors",
            baseName: "predecessors",
            type: "string",
        },        
        {
            name: "successors",
            baseName: "successors",
            type: "string",
        },        
        {
            name: "ignoreWarnings",
            baseName: "ignoreWarnings",
            type: "boolean",
        },        
        {
            name: "isExpanded",
            baseName: "isExpanded",
            type: "boolean",
        },        
        {
            name: "displayOnTimeline",
            baseName: "displayOnTimeline",
            type: "boolean",
        },        
        {
            name: "displayAsSummary",
            baseName: "displayAsSummary",
            type: "boolean",
        },        
        {
            name: "hyperlink",
            baseName: "hyperlink",
            type: "string",
        },        
        {
            name: "hyperlinkAddress",
            baseName: "hyperlinkAddress",
            type: "string",
        },        
        {
            name: "hyperlinkSubAddress",
            baseName: "hyperlinkSubAddress",
            type: "string",
        },        
        {
            name: "earnedValueMethod",
            baseName: "earnedValueMethod",
            type: "EarnedValueMethodType",
        },        
        {
            name: "isPublished",
            baseName: "isPublished",
            type: "boolean",
        },        
        {
            name: "statusManager",
            baseName: "statusManager",
            type: "string",
        },        
        {
            name: "commitmentStart",
            baseName: "commitmentStart",
            type: "Date",
        },        
        {
            name: "commitmentFinish",
            baseName: "commitmentFinish",
            type: "Date",
        },        
        {
            name: "commitmentType",
            baseName: "commitmentType",
            type: "number",
        },        
        {
            name: "baselines",
            baseName: "baselines",
            type: "Array<TaskBaseline>",
        },        
        {
            name: "extendedAttributes",
            baseName: "extendedAttributes",
            type: "Array<ExtendedAttribute>",
        },        
        {
            name: "outlineCodes",
            baseName: "outlineCodes",
            type: "Array<OutlineCode>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Task.attributeTypeMap;
    }

    /**
     * The unique id of a task.
     */
    public uid: number;
    
    /**
     * The position of a task in collection.
     */
    public id: number;
    
    /**
     * The name of a task.
     */
    public name: string;
    
    /**
     * The duration of a task entered by the user as a text.
     */
    public durationText: string;
    
    /**
     * The duration of a task.
     */
    public duration: string;
    
    /**
     * The start date of a task.
     */
    public start: Date;
    
    /**
     * The finish date of a task.
     */
    public finish: Date;
    
    /**
     * Returns the task's start text.
     */
    public startText: string;
    
    /**
     * Returns the task's finish text.
     */
    public finishText: string;
    
    /**
     * The percent complete of a task.
     */
    public percentComplete: number;
    
    /**
     * The percent work complete of a task.
     */
    public percentWorkComplete: number;
    
    /**
     * Determines if a task is active.
     */
    public isActive: boolean;
    
    /**
     * The actual cost of a task.
     */
    public actualCost: number;
    
    /**
     * The actual duration of a task.
     */
    public actualDuration: string;
    
    /**
     * The actual finish date of a task.
     */
    public actualFinish: Date;
    
    /**
     * The actual overtime cost of a task.
     */
    public actualOvertimeCost: number;
    
    /**
     * The actual overtime work of a task.
     */
    public actualOvertimeWork: string;
    
    /**
     * The duration through which actual work is protected. Reading supported for XML format only.
     */
    public actualWorkProtected: string;
    
    /**
     * The duration through which actual overtime work is protected. Reading supported for XML format only.
     */
    public actualOvertimeWorkProtected: string;
    
    /**
     * The actual start date of a task.
     */
    public actualStart: Date;
    
    /**
     * The amount of budgeted work for a project root task.
     */
    public budgetWork: string;
    
    /**
     * The amount of budgeted cost for a project root task.
     */
    public budgetCost: number;
    
    /**
     * Shows the specific date associated with certain constraint types,  such as Must Start On, Must Finish On, Start No Earlier Than, Start No Later Than, Finish No Earlier Than, and Finish No Later Than.
     */
    public constraintDate: Date;
    
    /**
     * Provides choices for the type of constraint that can be applied for scheduling a task.
     */
    public constraintType: ConstraintType;
    
    /**
     * The contact person for a task.
     */
    public contact: string;
    
    /**
     * The projected or scheduled cost of a task.
     */
    public cost: number;
    
    /**
     * The difference between the baseline cost and total cost for a task.
     */
    public cv: number;
    
    /**
     * The deadline for a task to be completed.
     */
    public deadline: Date;
    
    /**
     * Contains the difference between the total duration of a task and the baseline duration of a task.
     */
    public durationVariance: string;
    
    /**
     * The early finish date of a task.
     */
    public earlyFinish: Date;
    
    /**
     * The early start date of a task.
     */
    public earlyStart: Date;
    
    /**
     * Determines whether a task is effort-driven.
     */
    public isEffortDriven: boolean;
    
    /**
     * Determines whether a task is external.
     */
    public isExternalTask: boolean;
    
    /**
     * The source location and task identifier of an external task.
     */
    public externalTaskProject: string;
    
    /**
     * If a task is an external task the property contains the task's external Id.  type.
     */
    public externalId: number;
    
    /**
     * Contains the duration between the Early Finish and Late Finish dates.
     */
    public finishSlack: number;
    
    /**
     * The variance of the task finish date from the baseline finish date as minutes.
     */
    public finishVariance: number;
    
    /**
     * The fixed cost of a task.
     */
    public fixedCost: number;
    
    /**
     * Determines how the fixed cost is accrued against a task.
     */
    public fixedCostAccrual: CostAccrualType;
    
    /**
     * The amount of a free slack.
     */
    public freeSlack: number;
    
    public guid: string;
    
    /**
     * Determines whether the GANTT bar of a task is hidden when displayed in Microsoft Project.
     */
    public hideBar: boolean;
    
    /**
     * Determines whether a task ignores the resource calendar.
     */
    public ignoreResourceCalendar: boolean;
    
    /**
     * The late finish date of a task.
     */
    public lateFinish: Date;
    
    /**
     * The late start date of a task.
     */
    public lateStart: Date;
    
    public isLevelAssignments: boolean;
    
    public canLevelingSplit: boolean;
    
    /**
     * The delay caused by leveling a task.
     */
    public levelingDelay: number;
    
    /**
     * Shows whether a task is marked for further action or identification of some kind.             
     */
    public isMarked: boolean;
    
    /**
     * Determines whether a task is a milestone.
     */
    public isMilestone: boolean;
    
    /**
     * Determines whether a task is in the critical chain.
     */
    public isCritical: boolean;
    
    /**
     * Determines whether a task is an inserted project.
     */
    public isSubproject: boolean;
    
    /**
     * Determines whether a subproject is read-only.
     */
    public isSubprojectReadOnly: boolean;
    
    /**
     * The source location of a subproject. Read/write String.
     */
    public subprojectName: string;
    
    /**
     * Determines whether a task is a summary task.
     */
    public isSummary: boolean;
    
    /**
     * Unique ids of all subtasks.
     */
    public subtasksUids: Array<number>;
    
    /**
     * The outline level of a task.
     */
    public outlineLevel: number;
    
    public isOverAllocated: boolean;
    
    /**
     * Determines whether a task is estimated.
     */
    public isEstimated: boolean;
    
    /**
     * The sum of an actual and remaining overtime cost of a task.
     */
    public overtimeCost: number;
    
    /**
     * The amount of an overtime work scheduled for a task.
     */
    public overtimeWork: string;
    
    /**
     * The percentage complete value entered by the Project Manager.
     */
    public physicalPercentComplete: number;
    
    public preLeveledFinish: Date;
    
    public preLeveledStart: Date;
    
    /**
     * Determines whether a task is a recurring task.
     */
    public isRecurring: boolean;
    
    /**
     * The amount of non-overtime work scheduled for a task.
     */
    public regularWork: string;
    
    /**
     * The remaining projected cost of completing a task.
     */
    public remainingCost: number;
    
    /**
     * The amount of time required to complete the unfinished portion of a task.
     */
    public remainingDuration: string;
    
    /**
     * The remaining overtime cost projected to finish a task.
     */
    public remainingOvertimeCost: number;
    
    /**
     * The remaining overtime work scheduled to finish a task.
     */
    public remainingOvertimeWork: string;
    
    /**
     * The remaining work scheduled to complete a task.
     */
    public remainingWork: string;
    
    /**
     * The date when a task resumed.
     */
    public resume: Date;
    
    /**
     * Determines whether a task can be resumed.
     */
    public isResumeValid: boolean;
    
    /**
     * The date that represents the end of the actual portion of a task.
     */
    public stop: Date;
    
    /**
     * Determines whether a task is rolled up.
     */
    public isRollup: boolean;
    
    /**
     * Returns the task's start slack.
     */
    public startSlack: number;
    
    /**
     * The variance of the task start date from the baseline start date as minutes. 
     */
    public startVariance: number;
    
    /**
     * The unique id of task calendar.
     */
    public calendarUid: number;
    
    /**
     * Determines whether a task is manually scheduled.
     */
    public isManual: boolean;
    
    /**
     * Defines manually scheduled start of a task.
     */
    public manualStart: Date;
    
    /**
     * Defines manually scheduled finish of a task.
     */
    public manualFinish: Date;
    
    /**
     * Defines manually scheduled duration of a task.
     */
    public manualDuration: string;
    
    /**
     * The amount of a total slack.
     */
    public totalSlack: number;
    
    /**
     * The type of a task.
     */
    public type: TaskType;
    
    /**
     * The work breakdown structure code of a task.
     */
    public wbs: string;
    
    /**
     * The priority of a task from 0 to 1000.
     */
    public priority: number;
    
    /**
     * The amount of the scheduled work for a task.
     */
    public work: string;
    
    /**
     * The variance of the task work from the baseline task work as minutes.
     */
    public workVariance: number;
    
    /**
     * Notes' plain text extracted from RTF data.
     */
    public notesText: string;
    
    /**
     * The text notes in RTF format.
     */
    public notesRTF: string;
    
    public acwp: number;
    
    public bcws: number;
    
    public bcwp: number;
    
    /**
     * LevelingDelayFormat
     */
    public levelingDelayFormat: TimeUnitType;
    
    /**
     * The task Uid numbers for the predecessor tasks on which the task depends before it can be started or finished.
     */
    public predecessors: string;
    
    /**
     * The task Uid numbers for the successor tasks to a task.
     */
    public successors: string;
    
    /**
     * Indicates whether to hide the schedule conflict warning indicator in Microsoft Project.             
     */
    public ignoreWarnings: boolean;
    
    /**
     * Determines whether a summary task is expanded or not in GanttChart view.
     */
    public isExpanded: boolean;
    
    /**
     * Specifies whether a task should be displayed on a timeline view.
     */
    public displayOnTimeline: boolean;
    
    /**
     * Determines whether the task should be displayed as a summary task. Reading supported for XML format only.
     */
    public displayAsSummary: boolean;
    
    /**
     * The title or explanatory text for a hyperlink associated with a task.
     */
    public hyperlink: string;
    
    /**
     * The address for a hyperlink associated with a task.
     */
    public hyperlinkAddress: string;
    
    /**
     * The specific location in a document in a hyperlink associated with a task.  type.
     */
    public hyperlinkSubAddress: string;
    
    /**
     * Determines whether the % Complete or Physical % Complete field should be used to calculate budgeted cost of work performed (BCWP).
     */
    public earnedValueMethod: EarnedValueMethodType;
    
    /**
     * Determines whether the current task should be published to Project Server with the rest of the project.
     */
    public isPublished: boolean;
    
    /**
     * The name of the enterprise resource who is to receive status updates for the current task from resources.
     */
    public statusManager: string;
    
    /**
     * The start date of a delivery. Reading supported for XML format only.
     */
    public commitmentStart: Date;
    
    /**
     * The finish date of a delivery. Reading supported for XML format only.
     */
    public commitmentFinish: Date;
    
    /**
     * Determines whether a task has an associated delivery or a dependency on an associated delivery. Reading supported for XML format only.
     */
    public commitmentType: number;
    
    /**
     * Gets or sets the collection of baseline values of the task.
     */
    public baselines: Array<TaskBaseline>;
    
    /**
     * Task extended attributes.
     */
    public extendedAttributes: Array<ExtendedAttribute>;
    
    /**
     * Task outline codes.
     */
    public outlineCodes: Array<OutlineCode>;
    
    public constructor(init?: Partial<Task>) {
        
        Object.assign(this, init);
    }        
}

/**
 * A task's brief info 
 */
export class TaskItem {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "uid",
            baseName: "uid",
            type: "number",
        },        
        {
            name: "id",
            baseName: "id",
            type: "number",
        },        
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "start",
            baseName: "start",
            type: "Date",
        },        
        {
            name: "finish",
            baseName: "finish",
            type: "Date",
        },        
        {
            name: "duration",
            baseName: "duration",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TaskItem.attributeTypeMap;
    }

    public link: Link;
    
    public uid: number;
    
    public id: number;
    
    public name: string;
    
    public start: Date;
    
    public finish: Date;
    
    /**
     * The duration of a task.
     */
    public duration: string;
    
    public constructor(init?: Partial<TaskItem>) {
        
        Object.assign(this, init);
    }        
}

export class TaskLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "index",
            baseName: "index",
            type: "number",
        },        
        {
            name: "predecessorUid",
            baseName: "predecessorUid",
            type: "number",
        },        
        {
            name: "successorUid",
            baseName: "successorUid",
            type: "number",
        },        
        {
            name: "linkType",
            baseName: "linkType",
            type: "TaskLinkType",
        },        
        {
            name: "lag",
            baseName: "lag",
            type: "number",
        },        
        {
            name: "lagFormat",
            baseName: "lagFormat",
            type: "TimeUnitType",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TaskLink.attributeTypeMap;
    }

    public link: Link;
    
    public index: number;
    
    public predecessorUid: number;
    
    public successorUid: number;
    
    public linkType: TaskLinkType;
    
    public lag: number;
    
    public lagFormat: TimeUnitType;
    
    public constructor(init?: Partial<TaskLink>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Specifies the type of tasks dependency.
 */
export enum TaskLinkType {
    FinishToFinish = 'FinishToFinish' as any,
    FinishToStart = 'FinishToStart' as any,
    StartToFinish = 'StartToFinish' as any,
    StartToStart = 'StartToStart' as any,
}
/**
 * Specifies the type of a task.
 */
export enum TaskType {
    FixedUnits = 'FixedUnits' as any,
    FixedDuration = 'FixedDuration' as any,
    FixedWork = 'FixedWork' as any,
    Undefined = 'Undefined' as any,
}
/**
 * Specifies the type of a time unit.
 */
export enum TimeUnitType {
    Minute = 'Minute' as any,
    ElapsedMinute = 'ElapsedMinute' as any,
    Hour = 'Hour' as any,
    ElapsedHour = 'ElapsedHour' as any,
    Day = 'Day' as any,
    ElapsedDay = 'ElapsedDay' as any,
    Week = 'Week' as any,
    ElapsedWeek = 'ElapsedWeek' as any,
    Month = 'Month' as any,
    ElapsedMonth = 'ElapsedMonth' as any,
    Percent = 'Percent' as any,
    ElapsedPercent = 'ElapsedPercent' as any,
    Null = 'Null' as any,
    MinuteEstimated = 'MinuteEstimated' as any,
    ElapsedMinuteEstimated = 'ElapsedMinuteEstimated' as any,
    HourEstimated = 'HourEstimated' as any,
    ElapsedHourEstimated = 'ElapsedHourEstimated' as any,
    DayEstimated = 'DayEstimated' as any,
    ElapsedDayEstimated = 'ElapsedDayEstimated' as any,
    WeekEstimated = 'WeekEstimated' as any,
    ElapsedWeekEstimated = 'ElapsedWeekEstimated' as any,
    MonthEstimated = 'MonthEstimated' as any,
    ElapsedMonthEstimated = 'ElapsedMonthEstimated' as any,
    PercentEstimated = 'PercentEstimated' as any,
    ElapsedPercentEstimated = 'ElapsedPercentEstimated' as any,
    Year = 'Year' as any,
    Undefined = 'Undefined' as any,
}
/**
 * Represents a time phased data.
 */
export class TimephasedData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "uid",
            baseName: "uid",
            type: "number",
        },        
        {
            name: "start",
            baseName: "start",
            type: "Date",
        },        
        {
            name: "finish",
            baseName: "finish",
            type: "Date",
        },        
        {
            name: "unit",
            baseName: "unit",
            type: "TimeUnitType",
        },        
        {
            name: "value",
            baseName: "value",
            type: "string",
        },        
        {
            name: "timephasedDataType",
            baseName: "timephasedDataType",
            type: "TimephasedDataType",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TimephasedData.attributeTypeMap;
    }

    /**
     * The unique identifier of a timephased data
     */
    public uid: number;
    
    /**
     * The start date of a timephased data period.
     */
    public start: Date;
    
    /**
     * The finish date of a timephased data period.
     */
    public finish: Date;
    
    /**
     * The time unit of a timephased data period.
     */
    public unit: TimeUnitType;
    
    /**
     * The value per unit of time for a timephased data period.
     */
    public value: string;
    
    /**
     * The type of a timephased data.
     */
    public timephasedDataType: TimephasedDataType;
    
    public constructor(init?: Partial<TimephasedData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * 
 */
export enum TimephasedDataType {
    AssignmentRemainingWork = 'AssignmentRemainingWork' as any,
    AssignmentActualWork = 'AssignmentActualWork' as any,
    AssignmentActualOvertimeWork = 'AssignmentActualOvertimeWork' as any,
    AssignmentBaselineWork = 'AssignmentBaselineWork' as any,
    AssignmentBaselineCost = 'AssignmentBaselineCost' as any,
    AssignmentActualCost = 'AssignmentActualCost' as any,
    ResourceBaselineWork = 'ResourceBaselineWork' as any,
    ResourceBaselineCost = 'ResourceBaselineCost' as any,
    TaskBaselineWork = 'TaskBaselineWork' as any,
    TaskBaselineCost = 'TaskBaselineCost' as any,
    TaskPercentComplete = 'TaskPercentComplete' as any,
    AssignmentBaseline1Work = 'AssignmentBaseline1Work' as any,
    AssignmentBaseline1Cost = 'AssignmentBaseline1Cost' as any,
    TaskBaseline1Work = 'TaskBaseline1Work' as any,
    TaskBaseline1Cost = 'TaskBaseline1Cost' as any,
    ResourceBaseline1Work = 'ResourceBaseline1Work' as any,
    ResourceBaseline1Cost = 'ResourceBaseline1Cost' as any,
    AssignmentBaseline2Work = 'AssignmentBaseline2Work' as any,
    AssignmentBaseline2Cost = 'AssignmentBaseline2Cost' as any,
    TaskBaseline2Work = 'TaskBaseline2Work' as any,
    TaskBaseline2Cost = 'TaskBaseline2Cost' as any,
    ResourceBaseline2Work = 'ResourceBaseline2Work' as any,
    ResourceBaseline2Cost = 'ResourceBaseline2Cost' as any,
    AssignmentBaseline3Work = 'AssignmentBaseline3Work' as any,
    AssignmentBaseline3Cost = 'AssignmentBaseline3Cost' as any,
    TaskBaseline3Work = 'TaskBaseline3Work' as any,
    TaskBaseline3Cost = 'TaskBaseline3Cost' as any,
    ResourceBaseline3Work = 'ResourceBaseline3Work' as any,
    ResourceBaseline3Cost = 'ResourceBaseline3Cost' as any,
    AssignmentBaseline4Work = 'AssignmentBaseline4Work' as any,
    AssignmentBaseline4Cost = 'AssignmentBaseline4Cost' as any,
    TaskBaseline4Work = 'TaskBaseline4Work' as any,
    TaskBaseline4Cost = 'TaskBaseline4Cost' as any,
    ResourceBaseline4Work = 'ResourceBaseline4Work' as any,
    ResourceBaseline4Cost = 'ResourceBaseline4Cost' as any,
    AssignmentBaseline5Work = 'AssignmentBaseline5Work' as any,
    AssignmentBaseline5Cost = 'AssignmentBaseline5Cost' as any,
    TaskBaseline5Work = 'TaskBaseline5Work' as any,
    TaskBaseline5Cost = 'TaskBaseline5Cost' as any,
    ResourceBaseline5Work = 'ResourceBaseline5Work' as any,
    ResourceBaseline5Cost = 'ResourceBaseline5Cost' as any,
    AssignmentBaseline6Work = 'AssignmentBaseline6Work' as any,
    AssignmentBaseline6Cost = 'AssignmentBaseline6Cost' as any,
    TaskBaseline6Work = 'TaskBaseline6Work' as any,
    TaskBaseline6Cost = 'TaskBaseline6Cost' as any,
    ResourceBaseline6Work = 'ResourceBaseline6Work' as any,
    ResourceBaseline6Cost = 'ResourceBaseline6Cost' as any,
    AssignmentBaseline7Work = 'AssignmentBaseline7Work' as any,
    AssignmentBaseline7Cost = 'AssignmentBaseline7Cost' as any,
    TaskBaseline7Work = 'TaskBaseline7Work' as any,
    TaskBaseline7Cost = 'TaskBaseline7Cost' as any,
    ResourceBaseline7Work = 'ResourceBaseline7Work' as any,
    ResourceBaseline7Cost = 'ResourceBaseline7Cost' as any,
    AssignmentBaseline8Work = 'AssignmentBaseline8Work' as any,
    AssignmentBaseline8Cost = 'AssignmentBaseline8Cost' as any,
    TaskBaseline8Work = 'TaskBaseline8Work' as any,
    TaskBaseline8Cost = 'TaskBaseline8Cost' as any,
    ResourceBaseline8Work = 'ResourceBaseline8Work' as any,
    ResourceBaseline8Cost = 'ResourceBaseline8Cost' as any,
    AssignmentBaseline9Work = 'AssignmentBaseline9Work' as any,
    AssignmentBaseline9Cost = 'AssignmentBaseline9Cost' as any,
    TaskBaseline9Work = 'TaskBaseline9Work' as any,
    TaskBaseline9Cost = 'TaskBaseline9Cost' as any,
    ResourceBaseline9Work = 'ResourceBaseline9Work' as any,
    ResourceBaseline9Cost = 'ResourceBaseline9Cost' as any,
    AssignmentBaseline10Work = 'AssignmentBaseline10Work' as any,
    AssignmentBaseline10Cost = 'AssignmentBaseline10Cost' as any,
    TaskBaseline10Work = 'TaskBaseline10Work' as any,
    TaskBaseline10Cost = 'TaskBaseline10Cost' as any,
    ResourceBaseline10Work = 'ResourceBaseline10Work' as any,
    ResourceBaseline10Cost = 'ResourceBaseline10Cost' as any,
    PhysicalPercentComplete = 'PhysicalPercentComplete' as any,
    TaskWork = 'TaskWork' as any,
    TaskCost = 'TaskCost' as any,
    ResourceWork = 'ResourceWork' as any,
    ResourceCost = 'ResourceCost' as any,
    AssignmentWork = 'AssignmentWork' as any,
    AssignmentCost = 'AssignmentCost' as any,
    Undefined = 'Undefined' as any,
}
/**
 * The minimal time period to render when saving project view data to some of SaveFileFormat.
 */
export enum Timescale {
    Days = 'Days' as any,
    ThirdsOfMonths = 'ThirdsOfMonths' as any,
    Months = 'Months' as any,
}
/**
 * Represents a lookup value of an extended attribute.
 */
export class Value {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "id",
            baseName: "id",
            type: "number",
        },        
        {
            name: "val",
            baseName: "val",
            type: "string",
        },        
        {
            name: "dateTimeValue",
            baseName: "dateTimeValue",
            type: "Date",
        },        
        {
            name: "durationValue",
            baseName: "durationValue",
            type: "number",
        },        
        {
            name: "description",
            baseName: "description",
            type: "string",
        },        
        {
            name: "phonetic",
            baseName: "phonetic",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Value.attributeTypeMap;
    }

    /**
     * The unique Id of a value across a project.
     */
    public id: number;
    
    /**
     * The actual value.
     */
    public val: string;
    
    /**
     * The value in case of datetime type
     */
    public dateTimeValue: Date;
    
    /**
     * The value in case of duration type
     */
    public durationValue: number;
    
    /**
     * The description of a value.
     */
    public description: string;
    
    /**
     * The phonetic information about custom field name.
     */
    public phonetic: string;
    
    public constructor(init?: Partial<Value>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents a vba module 
 */
export class VbaModule {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "attributes",
            baseName: "attributes",
            type: "Array<VbaModuleAttribute>",
        },        
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "sourceCode",
            baseName: "sourceCode",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return VbaModule.attributeTypeMap;
    }

    /**
     * Gets a collection of  VbaModuleAttributeCollection
     */
    public attributes: Array<VbaModuleAttribute>;
    
    /**
     * Gets the name of the module.
     */
    public name: string;
    
    /**
     * Gets a source code of the module
     */
    public sourceCode: string;
    
    public constructor(init?: Partial<VbaModule>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The attribute of the VbaModule object
 */
export class VbaModuleAttribute {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "key",
            baseName: "key",
            type: "string",
        },        
        {
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return VbaModuleAttribute.attributeTypeMap;
    }

    /**
     * Gets key of VBA module attribute.
     */
    public key: string;
    
    /**
     * Gets value of VBA module attribute.
     */
    public value: string;
    
    public constructor(init?: Partial<VbaModuleAttribute>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents VbaProject
 */
export class VbaProject {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "compilationArguments",
            baseName: "compilationArguments",
            type: "string",
        },        
        {
            name: "description",
            baseName: "description",
            type: "string",
        },        
        {
            name: "helpContextId",
            baseName: "helpContextId",
            type: "number",
        },        
        {
            name: "helpFile",
            baseName: "helpFile",
            type: "string",
        },        
        {
            name: "modules",
            baseName: "modules",
            type: "Array<VbaModule>",
        },        
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "references",
            baseName: "references",
            type: "Array<VbaReference>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return VbaProject.attributeTypeMap;
    }

    /**
     * Gets conditional Compilation Arguments
     */
    public compilationArguments: string;
    
    /**
     * Gets a project Description
     */
    public description: string;
    
    /**
     * Gets a project Help Context Id
     */
    public helpContextId: number;
    
    /**
     * Gets a help file name
     */
    public helpFile: string;
    
    /**
     * Gets a collection of VbaModuleCollection
     */
    public modules: Array<VbaModule>;
    
    /**
     * Gets project name
     */
    public name: string;
    
    /**
     * Gets a collection of VbaReferenceCollection
     */
    public references: Array<VbaReference>;
    
    public constructor(init?: Partial<VbaProject>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents a reference of the VbaProject
 */
export class VbaReference {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "libIdentifier",
            baseName: "libIdentifier",
            type: "string",
        },        
        {
            name: "name",
            baseName: "name",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return VbaReference.attributeTypeMap;
    }

    /**
     * Gets identifier of the library.
     */
    public libIdentifier: string;
    
    /**
     * Gets name of Vba reference.
     */
    public name: string;
    
    public constructor(init?: Partial<VbaReference>) {
        
        Object.assign(this, init);
    }        
}

export class WBSCodeMask {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "level",
            baseName: "level",
            type: "number",
        },        
        {
            name: "length",
            baseName: "length",
            type: "number",
        },        
        {
            name: "sequence",
            baseName: "sequence",
            type: "WBSSequence",
        },        
        {
            name: "separator",
            baseName: "separator",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return WBSCodeMask.attributeTypeMap;
    }

    /**
     * Mask level.
     */
    public level: number;
    
    /**
     * The number of characters of the code string.
     */
    public length: number;
    
    /**
     * Specifies  the type of character of the code string.
     */
    public sequence: WBSSequence;
    
    /**
     * Specifies the separator of the code string. Default value is Period.
     */
    public separator: string;
    
    public constructor(init?: Partial<WBSCodeMask>) {
        
        Object.assign(this, init);
    }        
}

export class WBSDefinition {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "codePrefix",
            baseName: "codePrefix",
            type: "string",
        },        
        {
            name: "generateWBSCode",
            baseName: "generateWBSCode",
            type: "boolean",
        },        
        {
            name: "verifyUniqueness",
            baseName: "verifyUniqueness",
            type: "boolean",
        },        
        {
            name: "codeMaskCollection",
            baseName: "codeMaskCollection",
            type: "Array<WBSCodeMask>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return WBSDefinition.attributeTypeMap;
    }

    /**
     * Project Code Prefix.
     */
    public codePrefix: string;
    
    /**
     * Determines whether to generate WBS code for new task.
     */
    public generateWBSCode: boolean;
    
    /**
     * Determines whether to verify uniqueness of new WBS codes.
     */
    public verifyUniqueness: boolean;
    
    /**
     * Collection of WBSCodeMask objects.
     */
    public codeMaskCollection: Array<WBSCodeMask>;
    
    public constructor(init?: Partial<WBSDefinition>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Specifies sequence for WBSCodeMask
 */
export enum WBSSequence {
    OrderedNumbers = 'OrderedNumbers' as any,
    OrderedUppercaseLetters = 'OrderedUppercaseLetters' as any,
    OrderedLowercaseLetters = 'OrderedLowercaseLetters' as any,
    UnorderedCharacters = 'UnorderedCharacters' as any,
}
export class WeekDay {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "dayType",
            baseName: "dayType",
            type: "DayType",
        },        
        {
            name: "dayWorking",
            baseName: "dayWorking",
            type: "boolean",
        },        
        {
            name: "fromDate",
            baseName: "fromDate",
            type: "Date",
        },        
        {
            name: "toDate",
            baseName: "toDate",
            type: "Date",
        },        
        {
            name: "workingTimes",
            baseName: "workingTimes",
            type: "Array<WorkingTime>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return WeekDay.attributeTypeMap;
    }

    /**
     * Returns or sets the type of a day.
     */
    public dayType: DayType;
    
    /**
     * Determines whether the specified date or day type is working.
     */
    public dayWorking: boolean;
    
    /**
     * Returns or sets the beginning of an exception time.
     */
    public fromDate: Date;
    
    /**
     * Returns or sets the end of an exception time.
     */
    public toDate: Date;
    
    /**
     * The collection of working times that define the time worked on the weekday.
     */
    public workingTimes: Array<WorkingTime>;
    
    public constructor(init?: Partial<WeekDay>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents a weekday of a project in the instance of RecurringInfo class.
 */
export enum WeekDayType {
    None = 'None' as any,
    Sunday = 'Sunday' as any,
    Monday = 'Monday' as any,
    Tuesday = 'Tuesday' as any,
    Wednesday = 'Wednesday' as any,
    Thursday = 'Thursday' as any,
    Friday = 'Friday' as any,
    Saturday = 'Saturday' as any,
}
/**
 * Specifies the contour of a work.
 */
export enum WorkContourType {
    Flat = 'Flat' as any,
    BackLoaded = 'BackLoaded' as any,
    FrontLoaded = 'FrontLoaded' as any,
    DoublePeak = 'DoublePeak' as any,
    EarlyPeak = 'EarlyPeak' as any,
    LatePeak = 'LatePeak' as any,
    Bell = 'Bell' as any,
    Turtle = 'Turtle' as any,
    Contoured = 'Contoured' as any,
    Undefined = 'Undefined' as any,
}
/**
 * Specifies the type of a workgroup.
 */
export enum WorkGroupType {
    Default = 'Default' as any,
    None = 'None' as any,
    Email = 'Email' as any,
    Web = 'Web' as any,
}
export class WorkWeek {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "fromDate",
            baseName: "fromDate",
            type: "Date",
        },        
        {
            name: "toDate",
            baseName: "toDate",
            type: "Date",
        },        
        {
            name: "weekDays",
            baseName: "weekDays",
            type: "Array<WeekDay>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return WorkWeek.attributeTypeMap;
    }

    /**
     * Determines the name of a work week.
     */
    public name: string;
    
    /**
     * Returns or sets the beginning of a work week.
     */
    public fromDate: Date;
    
    /**
     * Returns or sets the end of a work week.
     */
    public toDate: Date;
    
    /**
     * The collection of week days that define the working time of current working week.
     */
    public weekDays: Array<WeekDay>;
    
    public constructor(init?: Partial<WorkWeek>) {
        
        Object.assign(this, init);
    }        
}

export class WorkingTime {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fromTime",
            baseName: "fromTime",
            type: "Date",
        },        
        {
            name: "toTime",
            baseName: "toTime",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return WorkingTime.attributeTypeMap;
    }

    /**
     * Returns or sets the beginning of a working time. Read/write DateTime.
     */
    public fromTime: Date;
    
    /**
     * Returns or sets the end of a working time. Read/write DateTime.
     */
    public toTime: Date;
    
    public constructor(init?: Partial<WorkingTime>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents baseline values of a resource assignment.
 */
export class AssignmentBaseline extends Baseline {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "start",
            baseName: "start",
            type: "Date",
        },        
        {
            name: "finish",
            baseName: "finish",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AssignmentBaseline.attributeTypeMap);
    }

    /**
     * Gets or sets the scheduled start date of the resource assignment when the baseline was saved. The start date of the resource assignment when this baseline was saved.
     */
    public start: Date;
    
    /**
     * Gets or sets the scheduled finish date of the resource assignment when the baseline was saved. The finish date of the resource assignment when this baseline was saved.
     */
    public finish: Date;
    
    public constructor(init?: Partial<AssignmentBaseline>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class AssignmentItemResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "assignmentItem",
            baseName: "assignmentItem",
            type: "AssignmentItem",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AssignmentItemResponse.attributeTypeMap);
    }

    /**
     * AssignmentItem DTO.
     */
    public assignmentItem: AssignmentItem;
    
    public constructor(init?: Partial<AssignmentItemResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class AssignmentItems extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "assignmentItem",
            baseName: "assignmentItem",
            type: "Array<AssignmentItem>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AssignmentItems.attributeTypeMap);
    }

    public assignmentItem: Array<AssignmentItem>;
    
    public constructor(init?: Partial<AssignmentItems>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class AssignmentItemsResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "assignments",
            baseName: "assignments",
            type: "AssignmentItems",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AssignmentItemsResponse.attributeTypeMap);
    }

    public assignments: AssignmentItems;
    
    public constructor(init?: Partial<AssignmentItemsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Assignment response.
 */
export class AssignmentResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "assignment",
            baseName: "assignment",
            type: "ResourceAssignment",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AssignmentResponse.attributeTypeMap);
    }

    /**
     * ResourceAssignment DTO.
     */
    public assignment: ResourceAssignment;
    
    public constructor(init?: Partial<AssignmentResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class AssignmentsResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "assignments",
            baseName: "assignments",
            type: "ResourceAssignments",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AssignmentsResponse.attributeTypeMap);
    }

    public assignments: ResourceAssignments;
    
    public constructor(init?: Partial<AssignmentsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * CalendarExceptions response.
 */
export class CalendarExceptionsResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "calendarExceptions",
            baseName: "calendarExceptions",
            type: "Array<CalendarException>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CalendarExceptionsResponse.attributeTypeMap);
    }

    public calendarExceptions: Array<CalendarException>;
    
    public constructor(init?: Partial<CalendarExceptionsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * TaskItem response.
 */
export class CalendarItemResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "calendarItem",
            baseName: "calendarItem",
            type: "CalendarItem",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CalendarItemResponse.attributeTypeMap);
    }

    /**
     * CalendarItem DTO.
     */
    public calendarItem: CalendarItem;
    
    public constructor(init?: Partial<CalendarItemResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class CalendarItems extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "list",
            baseName: "list",
            type: "Array<CalendarItem>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CalendarItems.attributeTypeMap);
    }

    public list: Array<CalendarItem>;
    
    public constructor(init?: Partial<CalendarItems>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class CalendarItemsResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "calendars",
            baseName: "calendars",
            type: "CalendarItems",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CalendarItemsResponse.attributeTypeMap);
    }

    public calendars: CalendarItems;
    
    public constructor(init?: Partial<CalendarItemsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Task response.
 */
export class CalendarResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "calendar",
            baseName: "calendar",
            type: "Calendar",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CalendarResponse.attributeTypeMap);
    }

    /**
     * Calendar DTO.
     */
    public calendar: Calendar;
    
    public constructor(init?: Partial<CalendarResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * CalendarWorkWeeks response.
 */
export class CalendarWorkWeeksResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "calendarWorkWeeks",
            baseName: "calendarWorkWeeks",
            type: "Array<WorkWeek>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CalendarWorkWeeksResponse.attributeTypeMap);
    }

    public calendarWorkWeeks: Array<WorkWeek>;
    
    public constructor(init?: Partial<CalendarWorkWeeksResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Collection of document properties.
 */
export class DocumentProperties extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "list",
            baseName: "list",
            type: "Array<DocumentProperty>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentProperties.attributeTypeMap);
    }

    public list: Array<DocumentProperty>;
    
    public constructor(init?: Partial<DocumentProperties>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class DocumentPropertiesResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "properties",
            baseName: "properties",
            type: "DocumentProperties",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentPropertiesResponse.attributeTypeMap);
    }

    /**
     * DocumentProperties response.
     */
    public properties: DocumentProperties;
    
    public constructor(init?: Partial<DocumentPropertiesResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents project document's property.
 */
export class DocumentProperty extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentProperty.attributeTypeMap);
    }

    /**
     * Name of the document property.
     */
    public name: string;
    
    /**
     * String value of the document property. 
     */
    public value: string;
    
    public constructor(init?: Partial<DocumentProperty>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class DocumentPropertyResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "property",
            baseName: "property",
            type: "DocumentProperty",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentPropertyResponse.attributeTypeMap);
    }

    /**
     * DocumentProperties response.
     */
    public property: DocumentProperty;
    
    public constructor(init?: Partial<DocumentPropertyResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ExtendedAttributeItemResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "extendedAttribute",
            baseName: "extendedAttribute",
            type: "ExtendedAttributeItem",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ExtendedAttributeItemResponse.attributeTypeMap);
    }

    /**
     * Extended attribute definition info.
     */
    public extendedAttribute: ExtendedAttributeItem;
    
    public constructor(init?: Partial<ExtendedAttributeItemResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ExtendedAttributeItems extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "list",
            baseName: "list",
            type: "Array<ExtendedAttributeItem>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ExtendedAttributeItems.attributeTypeMap);
    }

    public list: Array<ExtendedAttributeItem>;
    
    public constructor(init?: Partial<ExtendedAttributeItems>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ExtendedAttributeItemsResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "extendedAttributes",
            baseName: "extendedAttributes",
            type: "ExtendedAttributeItems",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ExtendedAttributeItemsResponse.attributeTypeMap);
    }

    public extendedAttributes: ExtendedAttributeItems;
    
    public constructor(init?: Partial<ExtendedAttributeItemsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ExtendedAttributeResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "extendedAttribute",
            baseName: "extendedAttribute",
            type: "ExtendedAttributeDefinition",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ExtendedAttributeResponse.attributeTypeMap);
    }

    /**
     * Extended attribute definition.
     */
    public extendedAttribute: ExtendedAttributeDefinition;
    
    public constructor(init?: Partial<ExtendedAttributeResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * File Version
 */
export class FileVersion extends StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "versionId",
            baseName: "versionId",
            type: "string",
        },        
        {
            name: "isLatest",
            baseName: "isLatest",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileVersion.attributeTypeMap);
    }

    /**
     * File Version ID.
     */
    public versionId: string;
    
    /**
     * Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    public isLatest: boolean;
    
    public constructor(init?: Partial<FileVersion>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class OutlineCodeItems extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "list",
            baseName: "list",
            type: "Array<OutlineCodeItem>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OutlineCodeItems.attributeTypeMap);
    }

    public list: Array<OutlineCodeItem>;
    
    public constructor(init?: Partial<OutlineCodeItems>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class OutlineCodeItemsResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "outlineCodes",
            baseName: "outlineCodes",
            type: "OutlineCodeItems",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OutlineCodeItemsResponse.attributeTypeMap);
    }

    public outlineCodes: OutlineCodeItems;
    
    public constructor(init?: Partial<OutlineCodeItemsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class OutlineCodeResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "outlineCode",
            baseName: "outlineCode",
            type: "OutlineCodeDefinition",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OutlineCodeResponse.attributeTypeMap);
    }

    /**
     * Outline code definition.
     */
    public outlineCode: OutlineCodeDefinition;
    
    public constructor(init?: Partial<OutlineCodeResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Response that contains page count.
 */
export class PageCountResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageCount",
            baseName: "pageCount",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PageCountResponse.attributeTypeMap);
    }

    /**
     * Number of pages in document.
     */
    public pageCount: number;
    
    public constructor(init?: Partial<PageCountResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * ProjectIds response
 */
export class ProjectIdsResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "projectIds",
            baseName: "projectIds",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ProjectIdsResponse.attributeTypeMap);
    }

    /**
     * UIds of the projects
     */
    public projectIds: Array<string>;
    
    public constructor(init?: Partial<ProjectIdsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ProjectList extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "projectInfo",
            baseName: "projectInfo",
            type: "Array<ProjectInfo>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ProjectList.attributeTypeMap);
    }

    public projectInfo: Array<ProjectInfo>;
    
    public constructor(init?: Partial<ProjectList>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ProjectListResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "projects",
            baseName: "projects",
            type: "ProjectList",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ProjectListResponse.attributeTypeMap);
    }

    public projects: ProjectList;
    
    public constructor(init?: Partial<ProjectListResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ProjectRecalculateResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "result",
            baseName: "result",
            type: "ProjectRecalculationResult",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ProjectRecalculateResponse.attributeTypeMap);
    }

    public result: ProjectRecalculationResult;
    
    public constructor(init?: Partial<ProjectRecalculateResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * RecurringInfo responce
 */
export class RecurringInfoResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "recurringInfo",
            baseName: "recurringInfo",
            type: "RecurringInfo",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RecurringInfoResponse.attributeTypeMap);
    }

    /**
     * Gets or sets RecurringInfo
     */
    public recurringInfo: RecurringInfo;
    
    public constructor(init?: Partial<RecurringInfoResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ResourceAssignments extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "list",
            baseName: "list",
            type: "Array<ResourceAssignment>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ResourceAssignments.attributeTypeMap);
    }

    public list: Array<ResourceAssignment>;
    
    public constructor(init?: Partial<ResourceAssignments>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * ResourceItem response.
 */
export class ResourceItemResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "resourceItem",
            baseName: "resourceItem",
            type: "ResourceItem",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ResourceItemResponse.attributeTypeMap);
    }

    /**
     * ResourceItem DTO.
     */
    public resourceItem: ResourceItem;
    
    public constructor(init?: Partial<ResourceItemResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ResourceItems extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "resourceItem",
            baseName: "resourceItem",
            type: "Array<ResourceItem>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ResourceItems.attributeTypeMap);
    }

    public resourceItem: Array<ResourceItem>;
    
    public constructor(init?: Partial<ResourceItems>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ResourceItemsResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "resources",
            baseName: "resources",
            type: "ResourceItems",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ResourceItemsResponse.attributeTypeMap);
    }

    public resources: ResourceItems;
    
    public constructor(init?: Partial<ResourceItemsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Task response.
 */
export class ResourceResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "resource",
            baseName: "resource",
            type: "Resource",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ResourceResponse.attributeTypeMap);
    }

    /**
     * Resource DTO.
     */
    public resource: Resource;
    
    public constructor(init?: Partial<ResourceResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents baseline values of a task.
 */
export class TaskBaseline extends Baseline {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "start",
            baseName: "start",
            type: "Date",
        },        
        {
            name: "finish",
            baseName: "finish",
            type: "Date",
        },        
        {
            name: "duration",
            baseName: "duration",
            type: "string",
        },        
        {
            name: "fixedCost",
            baseName: "fixedCost",
            type: "number",
        },        
        {
            name: "durationFormat",
            baseName: "durationFormat",
            type: "TimeUnitType",
        },        
        {
            name: "estimatedDuration",
            baseName: "estimatedDuration",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TaskBaseline.attributeTypeMap);
    }

    /**
     * The scheduled start date of the task when the baseline was saved.
     */
    public start: Date;
    
    /**
     * The scheduled finish date of the task when the baseline was saved.
     */
    public finish: Date;
    
    /**
     * The scheduled duration of the task when the baseline was saved.
     */
    public duration: string;
    
    /**
     * The fixed cost of the task when the baseline was saved.
     */
    public fixedCost: number;
    
    /**
     * The format for expressing the duration of the task baseline.
     */
    public durationFormat: TimeUnitType;
    
    /**
     * Indicates whether the baseline duration of the task was estimated.
     */
    public estimatedDuration: boolean;
    
    public constructor(init?: Partial<TaskBaseline>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * TaskItem response.
 */
export class TaskItemResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "taskItem",
            baseName: "taskItem",
            type: "TaskItem",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TaskItemResponse.attributeTypeMap);
    }

    /**
     * TaskItem DTO.
     */
    public taskItem: TaskItem;
    
    public constructor(init?: Partial<TaskItemResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TaskItems extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "taskItem",
            baseName: "taskItem",
            type: "Array<TaskItem>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TaskItems.attributeTypeMap);
    }

    public taskItem: Array<TaskItem>;
    
    public constructor(init?: Partial<TaskItems>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TaskItemsResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "tasks",
            baseName: "tasks",
            type: "TaskItems",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TaskItemsResponse.attributeTypeMap);
    }

    public tasks: TaskItems;
    
    public constructor(init?: Partial<TaskItemsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * TaskItem response.
 */
export class TaskLinkResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "taskLink",
            baseName: "taskLink",
            type: "TaskLink",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TaskLinkResponse.attributeTypeMap);
    }

    /**
     * TaskLink DTO.
     */
    public taskLink: TaskLink;
    
    public constructor(init?: Partial<TaskLinkResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * TaskLinks response.
 */
export class TaskLinksResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "taskLinks",
            baseName: "taskLinks",
            type: "Array<TaskLink>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TaskLinksResponse.attributeTypeMap);
    }

    public taskLinks: Array<TaskLink>;
    
    public constructor(init?: Partial<TaskLinksResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Task response.
 */
export class TaskResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "task",
            baseName: "task",
            type: "Task",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TaskResponse.attributeTypeMap);
    }

    /**
     * Task DTO.
     */
    public task: Task;
    
    public constructor(init?: Partial<TaskResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * TaskLinks response.
 */
export class TimephasedDataResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "items",
            baseName: "items",
            type: "Array<TimephasedData>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TimephasedDataResponse.attributeTypeMap);
    }

    public items: Array<TimephasedData>;
    
    public constructor(init?: Partial<TimephasedDataResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * VbaProject response
 */
export class VbaProjectResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "vbaProject",
            baseName: "vbaProject",
            type: "VbaProject",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VbaProjectResponse.attributeTypeMap);
    }

    public vbaProject: VbaProject;
    
    public constructor(init?: Partial<VbaProjectResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * WBSDefinition response
 */
export class WBSDefinitionResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "wbsDefinition",
            baseName: "wbsDefinition",
            type: "WBSDefinition",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WBSDefinitionResponse.attributeTypeMap);
    }

    /**
     * DTO WBSDefintion
     */
    public wbsDefinition: WBSDefinition;
    
    public constructor(init?: Partial<WBSDefinitionResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

const enumsMap = {
    "BaselineType": BaselineType,
    "BookingType": BookingType,
    "CalculationMode": CalculationMode,
    "CalculationType": CalculationType,
    "CalendarExceptionType": CalendarExceptionType,
    "ConfidenceLevel": ConfidenceLevel,
    "ConstraintType": ConstraintType,
    "CostAccrualType": CostAccrualType,
    "CustomFieldType": CustomFieldType,
    "DayOfWeek": DayOfWeek,
    "DayType": DayType,
    "EarnedValueMethodType": EarnedValueMethodType,
    "ElementType": ElementType,
    "ImportedProjectType": ImportedProjectType,
    "MaskType": MaskType,
    "Month": Month,
    "MonthItemType": MonthItemType,
    "MonthPosition": MonthPosition,
    "OrdinalNumber": OrdinalNumber,
    "OutlineValueType": OutlineValueType,
    "PageSize": PageSize,
    "PresentationFormat": PresentationFormat,
    "ProbabilityDistributionType": ProbabilityDistributionType,
    "ProjectDatabaseType": ProjectDatabaseType,
    "ProjectFileFormat": ProjectFileFormat,
    "ProjectValidationState": ProjectValidationState,
    "RateFormatType": RateFormatType,
    "RateScaleType": RateScaleType,
    "RateType": RateType,
    "RecurrencePattern": RecurrencePattern,
    "ReportType": ReportType,
    "ResourceType": ResourceType,
    "RollupType": RollupType,
    "TaskLinkType": TaskLinkType,
    "TaskType": TaskType,
    "TimeUnitType": TimeUnitType,
    "TimephasedDataType": TimephasedDataType,
    "Timescale": Timescale,
    "WBSSequence": WBSSequence,
    "WeekDayType": WeekDayType,
    "WorkContourType": WorkContourType,
    "WorkGroupType": WorkGroupType,
};

const typeMap = {
            AsposeResponse,
            AssignmentItem,
            Baseline,
            Calendar,
            CalendarException,
            CalendarItem,
            DiscUsage,
            Duration,
            ErrorDetails,
            ExtendedAttribute,
            ExtendedAttributeDefinition,
            ExtendedAttributeItem,
            FileVersions,
            FilesList,
            FilesUploadResult,
            Link,
            LinkElement,
            ModelError,
            ObjectExist,
            OutlineCode,
            OutlineCodeDefinition,
            OutlineCodeItem,
            OutlineMask,
            OutlineValue,
            ProjectInfo,
            ProjectRecalculationResult,
            RecurringInfo,
            Resource,
            ResourceAssignment,
            ResourceItem,
            StorageExist,
            StorageFile,
            Task,
            TaskItem,
            TaskLink,
            TimephasedData,
            Value,
            VbaModule,
            VbaModuleAttribute,
            VbaProject,
            VbaReference,
            WBSCodeMask,
            WBSDefinition,
            WeekDay,
            WorkWeek,
            WorkingTime,
            AssignmentBaseline,
            AssignmentItemResponse,
            AssignmentItems,
            AssignmentItemsResponse,
            AssignmentResponse,
            AssignmentsResponse,
            CalendarExceptionsResponse,
            CalendarItemResponse,
            CalendarItems,
            CalendarItemsResponse,
            CalendarResponse,
            CalendarWorkWeeksResponse,
            DocumentProperties,
            DocumentPropertiesResponse,
            DocumentProperty,
            DocumentPropertyResponse,
            ExtendedAttributeItemResponse,
            ExtendedAttributeItems,
            ExtendedAttributeItemsResponse,
            ExtendedAttributeResponse,
            FileVersion,
            OutlineCodeItems,
            OutlineCodeItemsResponse,
            OutlineCodeResponse,
            PageCountResponse,
            ProjectIdsResponse,
            ProjectList,
            ProjectListResponse,
            ProjectRecalculateResponse,
            RecurringInfoResponse,
            ResourceAssignments,
            ResourceItemResponse,
            ResourceItems,
            ResourceItemsResponse,
            ResourceResponse,
            TaskBaseline,
            TaskItemResponse,
            TaskItems,
            TaskItemsResponse,
            TaskLinkResponse,
            TaskLinksResponse,
            TaskResponse,
            TimephasedDataResponse,
            VbaProjectResponse,
            WBSDefinitionResponse,
};

export {enumsMap, typeMap};

/**
 * Request model for copyFile operation.
 */
export class CopyFileRequest {
    /**
     * Source file path e.g. '/folder/file.ext'
     */
public srcPath: string;

    /**
     * Destination file path
     */
public destPath: string;

    /**
     * Source storage name
     */
public srcStorageName: string;

    /**
     * Destination storage name
     */
public destStorageName: string;

    /**
     * File version ID to copy
     */
public versionId: string;
    
    public constructor(init?: Partial<CopyFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for deleteFile operation.
 */
export class DeleteFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
public path: string;

    /**
     * Storage name
     */
public storageName: string;

    /**
     * File version ID to delete
     */
public versionId: string;
    
    public constructor(init?: Partial<DeleteFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for downloadFile operation.
 */
export class DownloadFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
public path: string;

    /**
     * Storage name
     */
public storageName: string;

    /**
     * File version ID to download
     */
public versionId: string;
    
    public constructor(init?: Partial<DownloadFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for moveFile operation.
 */
export class MoveFileRequest {
    /**
     * Source file path e.g. '/src.ext'
     */
public srcPath: string;

    /**
     * Destination file path e.g. '/dest.ext'
     */
public destPath: string;

    /**
     * Source storage name
     */
public srcStorageName: string;

    /**
     * Destination storage name
     */
public destStorageName: string;

    /**
     * File version ID to move
     */
public versionId: string;
    
    public constructor(init?: Partial<MoveFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for uploadFile operation.
 */
export class UploadFileRequest {
    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             
     */
public path: string;

    /**
     * File to upload
     */
public file: Buffer;

    /**
     * Storage name
     */
public storageName: string;
    
    public constructor(init?: Partial<UploadFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for copyFolder operation.
 */
export class CopyFolderRequest {
    /**
     * Source folder path e.g. '/src'
     */
public srcPath: string;

    /**
     * Destination folder path e.g. '/dst'
     */
public destPath: string;

    /**
     * Source storage name
     */
public srcStorageName: string;

    /**
     * Destination storage name
     */
public destStorageName: string;
    
    public constructor(init?: Partial<CopyFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for createFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Folder path to create e.g. 'folder_1/folder_2/'
     */
public path: string;

    /**
     * Storage name
     */
public storageName: string;
    
    public constructor(init?: Partial<CreateFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for deleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. '/folder'
     */
public path: string;

    /**
     * Storage name
     */
public storageName: string;

    /**
     * Enable to delete folders, subfolders and files
     */
public recursive: boolean;
    
    public constructor(init?: Partial<DeleteFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. '/folder'
     */
public path: string;

    /**
     * Storage name
     */
public storageName: string;
    
    public constructor(init?: Partial<GetFilesListRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for moveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Folder path to move e.g. '/folder'
     */
public srcPath: string;

    /**
     * Destination folder path to move to e.g '/dst'
     */
public destPath: string;

    /**
     * Source storage name
     */
public srcStorageName: string;

    /**
     * Destination storage name
     */
public destStorageName: string;
    
    public constructor(init?: Partial<MoveFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getDiscUsage operation.
 */
export class GetDiscUsageRequest {
    /**
     * Storage name
     */
public storageName: string;
    
    public constructor(init?: Partial<GetDiscUsageRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getFileVersions operation.
 */
export class GetFileVersionsRequest {
    /**
     * File path e.g. '/file.ext'
     */
public path: string;

    /**
     * Storage name
     */
public storageName: string;
    
    public constructor(init?: Partial<GetFileVersionsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for objectExists operation.
 */
export class ObjectExistsRequest {
    /**
     * File or folder path e.g. '/file.ext' or '/folder'
     */
public path: string;

    /**
     * Storage name
     */
public storageName: string;

    /**
     * File version ID
     */
public versionId: string;
    
    public constructor(init?: Partial<ObjectExistsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for storageExists operation.
 */
export class StorageExistsRequest {
    /**
     * Storage name
     */
public storageName: string;
    
    public constructor(init?: Partial<StorageExistsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for deleteAssignment operation.
 */
export class DeleteAssignmentRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * assignment Uid
     */
public assignmentUid: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;

    /**
     * The name of the project document to save changes to. If this parameter is omitted then the changes will be saved to the source project document.
     */
public fileName: string;
    
    public constructor(init?: Partial<DeleteAssignmentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getAssignment operation.
 */
export class GetAssignmentRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Assignment Uid
     */
public assignmentUid: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetAssignmentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getAssignmentTimephasedData operation.
 */
export class GetAssignmentTimephasedDataRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Uid of assignment to get timephased data for.
     */
public assignmentUid: number;

    /**
     * Type of timephased data to get.
     */
public type: TimephasedDataType;

    /**
     * Start date.
     */
public startDate: Date;

    /**
     * End date.
     */
public endDate: Date;

    /**
     * The document folder.
     */
public folder: string;

    /**
     * The document storage.
     */
public storage: string;
    
    public constructor(init?: Partial<GetAssignmentTimephasedDataRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getAssignments operation.
 */
export class GetAssignmentsRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetAssignmentsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postAssignment operation.
 */
export class PostAssignmentRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The unique id of the task to be assigned.
     */
public taskUid: number;

    /**
     * The unique id of the resource to be assigned.
     */
public resourceUid: number;

    /**
     * The units for the new assignment. Default value is 1.
     */
public units: number;

    /**
     * The name of the project document to save changes to. If this parameter is omitted then the changes will be saved to the source project document.
     */
public fileName: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<PostAssignmentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putAssignment operation.
 */
export class PutAssignmentRequest {
    /**
     * The file name
     */
public name: string;

    /**
     * Assignment UID
     */
public assignmentUid: number;

    /**
     * Assignment DTO
     */
public assignment: ResourceAssignment;

    /**
     * Project's calculation mode
     */
public mode: CalculationMode;

    /**
     * boolean value
     */
public recalculate: boolean;

    /**
     * The document storage
     */
public storage: string;

    /**
     * The document storage
     */
public folder: string;

    /**
     * The filename to save Changes
     */
public fileName: string;
    
    public constructor(init?: Partial<PutAssignmentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for deleteCalendar operation.
 */
export class DeleteCalendarRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Calendar's Uid
     */
public calendarUid: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;

    /**
     * The name of the project document to save changes to.              If this parameter is omitted then the changes will be saved to the source project document.
     */
public fileName: string;
    
    public constructor(init?: Partial<DeleteCalendarRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for deleteCalendarException operation.
 */
export class DeleteCalendarExceptionRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Calendar Uid
     */
public calendarUid: number;

    /**
     * Index of the calendar exception. See CalendarException.Index property.
     */
public index: number;

    /**
     * The name of the project document to save changes to.              If this parameter is omitted then the changes will be saved to the source project document.
     */
public fileName: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<DeleteCalendarExceptionRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getCalendar operation.
 */
export class GetCalendarRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Calendar's Uid
     */
public calendarUid: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetCalendarRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getCalendarExceptions operation.
 */
export class GetCalendarExceptionsRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Calendar's Uid
     */
public calendarUid: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetCalendarExceptionsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getCalendarWorkWeeks operation.
 */
export class GetCalendarWorkWeeksRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Calendar Uid
     */
public calendarUid: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetCalendarWorkWeeksRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getCalendars operation.
 */
export class GetCalendarsRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetCalendarsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postCalendar operation.
 */
export class PostCalendarRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Calendar DTO
     */
public calendar: Calendar;

    /**
     * The name of the project document to save changes to.              If this parameter is omitted then the changes will be saved to the source project document.
     */
public fileName: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<PostCalendarRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postCalendarException operation.
 */
export class PostCalendarExceptionRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Calendar's Uid
     */
public calendarUid: number;

    /**
     * CalendarException DTO
     */
public calendarException: CalendarException;

    /**
     * The name of the project document to save changes to.              If this parameter is omitted then the changes will be saved to the source project document.
     */
public fileName: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<PostCalendarExceptionRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putCalendar operation.
 */
export class PutCalendarRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The Uid of an existing calendar to edit.
     */
public calendarUid: number;

    /**
     * Modified calendar DTO
     */
public calendar: Calendar;

    /**
     * The name of the project document to save changes to.              If this parameter is omitted then the changes will be saved to the source project document.
     */
public fileName: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<PutCalendarRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putCalendarException operation.
 */
export class PutCalendarExceptionRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Calendar Uid
     */
public calendarUid: number;

    /**
     * Index of the calendar exception. See CalendarException.Index property.
     */
public index: number;

    /**
     * CalendarException DTO
     */
public calendarException: CalendarException;

    /**
     * The name of the project document to save changes to. If this parameter              is omitted then the changes will be saved to the source project document.
     */
public fileName: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<PutCalendarExceptionRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getCriticalPath operation.
 */
export class GetCriticalPathRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetCriticalPathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getPageCount operation.
 */
export class GetPageCountRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * PageSize to get page count for.
     */
public pageSize: PageSize;

    /**
     * PresentationFormat to get page count for.
     */
public presentationFormat: PresentationFormat;

    /**
     * Timescale to get page count for.
     */
public timescale: Timescale;

    /**
     * Start date to get page count for.
     */
public startDate: Date;

    /**
     * End date to get page count for.
     */
public endDate: Date;

    /**
     * The document folder
     */
public folder: string;

    /**
     * The document storage.
     */
public storage: string;
    
    public constructor(init?: Partial<GetPageCountRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getProjectIds operation.
 */
export class GetProjectIdsRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetProjectIdsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getTaskDocument operation.
 */
export class GetTaskDocumentRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetTaskDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getTaskDocumentWithFormat operation.
 */
export class GetTaskDocumentWithFormatRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The format of the resulting file.
     */
public format: ProjectFileFormat;

    /**
     * If parameter is true, HTML resources are included as separate files and returned along with the resulting html file as a zip package.
     */
public returnAsZipArchive: boolean;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetTaskDocumentWithFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putImportProjectFromDb operation.
 */
export class PutImportProjectFromDbRequest {
    /**
     * The type of source database. The supported values are (Msp, Mpd, Primavera).
     */
public databaseType: ProjectDatabaseType;

    /**
     * The connection string to the source database.
     */
public connectionString: string;

    /**
     * Uid of the project to import.
     */
public projectUid: string;

    /**
     * The name of the resulting file.
     */
public filename: string;

    /**
     * Format of the resulting file. The import to Mpp format is not supported.
     */
public format: ProjectFileFormat;

    /**
     * The document folder.
     */
public folder: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * Schema of Microsoft project database (if applicable)
     */
public databaseSchema: string;
    
    public constructor(init?: Partial<PutImportProjectFromDbRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putImportProjectFromFile operation.
 */
export class PutImportProjectFromFileRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Uid of the project to import.
     */
public projectUid: string;

    /**
     * The name of the resulting file.
     */
public filename: string;

    /**
     * The type of file to import. The supported values are (PrimaveraSqliteDb, PrimaveraXml).
     */
public fileType: ImportedProjectType;

    /**
     * The document folder.
     */
public folder: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The format of the resulting file.
     */
public outputFileFormat: ProjectFileFormat;
    
    public constructor(init?: Partial<PutImportProjectFromFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putImportProjectFromProjectOnline operation.
 */
export class PutImportProjectFromProjectOnlineRequest {
    /**
     * The name of the resulting file.
     */
public name: string;

    /**
     * The url of sharepoint site. For example, \"https://your_company_name.sharepoint.com\"
     */
public siteUrl: string;

    /**
     * Guid of the project to import.
     */
public guid: string;

    /**
     * Authorization token for the SharePoint. For example, in c# it can be retrieved using SharePointOnlineCredentials class from Microsoft.SharePoint.Client.Runtime assembly
     */
public xProjectOnlineToken: string;

    /**
     * Format of the resulting file. The import to Mpp format is not supported.
     */
public format: ProjectFileFormat;

    /**
     * The document folder.
     */
public folder: string;

    /**
     * The document storage.
     */
public storage: string;
    
    public constructor(init?: Partial<PutImportProjectFromProjectOnlineRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getDocumentProperties operation.
 */
export class GetDocumentPropertiesRequest {
    /**
     * The document name.
     */
public name: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetDocumentPropertiesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getDocumentProperty operation.
 */
export class GetDocumentPropertyRequest {
    /**
     * The document name.
     */
public name: string;

    /**
     * The property name.
     */
public propertyName: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetDocumentPropertyRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postDocumentProperty operation.
 */
export class PostDocumentPropertyRequest {
    /**
     * The document name.
     */
public name: string;

    /**
     * The property name.
     */
public propertyName: string;

    /**
     * DocumentProperty with new property value.
     */
public property: DocumentProperty;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;

    /**
     * Name of the project document to save changes to. If this parameter is omitted then the changes will be saved to the source project document.
     */
public filename: string;
    
    public constructor(init?: Partial<PostDocumentPropertyRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putDocumentProperty operation.
 */
export class PutDocumentPropertyRequest {
    /**
     * The document name.
     */
public name: string;

    /**
     * The property name.
     */
public propertyName: string;

    /**
     * DocumentProperty with new property value.
     */
public property: DocumentProperty;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;

    /**
     * Name of the project document to save changes to. If this parameter is omitted then the changes will be saved to the source project document.
     */
public filename: string;
    
    public constructor(init?: Partial<PutDocumentPropertyRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for deleteExtendedAttributeByIndex operation.
 */
export class DeleteExtendedAttributeByIndexRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Index (See ExtendedAttributeItem.Index property) or FieldId of the extended attribute.
     */
public index: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<DeleteExtendedAttributeByIndexRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getExtendedAttributeByIndex operation.
 */
export class GetExtendedAttributeByIndexRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Index (See ExtendedAttributeItem.Index property) or FieldId of the extended attribute.
     */
public index: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetExtendedAttributeByIndexRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getExtendedAttributes operation.
 */
export class GetExtendedAttributesRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetExtendedAttributesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putExtendedAttribute operation.
 */
export class PutExtendedAttributeRequest {
    /**
     * Definition of the extended attribute to add.
     */
public extendedAttribute: ExtendedAttributeDefinition;

    /**
     * The name of the file.
     */
public name: string;

    /**
     * The name of the project document to save changes to.              If this parameter is omitted then the changes will be saved to the source project document.
     */
public fileName: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<PutExtendedAttributeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for deleteOutlineCodeByIndex operation.
 */
export class DeleteOutlineCodeByIndexRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Index of the outline code. See OutlineCodeItem.Index property.
     */
public index: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<DeleteOutlineCodeByIndexRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getOutlineCodeByIndex operation.
 */
export class GetOutlineCodeByIndexRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Index of the outline code. See OutlineCodeItem.Index property.
     */
public index: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetOutlineCodeByIndexRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getOutlineCodes operation.
 */
export class GetOutlineCodesRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetOutlineCodesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getProjectList operation.
 */
export class GetProjectListRequest {
    /**
     * The url of sharepoint site. For example, \"https://your_company_name.sharepoint.com\"
     */
public siteUrl: string;

    /**
     * Authorization token for the SharePoint. For example, in c# it can be retrieved using SharePointOnlineCredentials class from Microsoft.SharePoint.Client.Runtime assembly
     */
public xProjectOnlineToken: string;
    
    public constructor(init?: Partial<GetProjectListRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putRecalculateProject operation.
 */
export class PutRecalculateProjectRequest {
    /**
     * The filename
     */
public name: string;

    /**
     * Project's calculation mode
     */
public mode: CalculationMode;

    /**
     * If true the validation of recalculation will be performed. What data is validated:     At the moment only basic validation of task and task link date ranges is implemented.     Task's date ranges (e.g. ActualStart - ActualFinish, EarlyStart - EarlyFinish, etc.) as well as Task Links dates will be checked against the date criteria that start date is less or equal than finish date.
     */
public validate: boolean;

    /**
     * The filename to save the changes
     */
public fileName: string;

    /**
     * The document storage
     */
public storage: string;

    /**
     * The document folder
     */
public folder: string;
    
    public constructor(init?: Partial<PutRecalculateProjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putRecalculateProjectResourceFields operation.
 */
export class PutRecalculateProjectResourceFieldsRequest {
    /**
     * The name of the file
     */
public name: string;

    /**
     * The document storage
     */
public storage: string;

    /**
     * The document folder
     */
public folder: string;

    /**
     * The document fileName
     */
public fileName: string;
    
    public constructor(init?: Partial<PutRecalculateProjectResourceFieldsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putRecalculateProjectUncompleteWorkToStartAfter operation.
 */
export class PutRecalculateProjectUncompleteWorkToStartAfterRequest {
    /**
     * The file name
     */
public name: string;

    /**
     * DateTime (from System lib)
     */
public after: Date;

    /**
     * The document storage 
     */
public storage: string;

    /**
     * The document folder
     */
public folder: string;

    /**
     * The filename to save the changes
     */
public fileName: string;
    
    public constructor(init?: Partial<PutRecalculateProjectUncompleteWorkToStartAfterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putRecalculateProjectWorkAsComplete operation.
 */
export class PutRecalculateProjectWorkAsCompleteRequest {
    /**
     * The filename
     */
public name: string;

    /**
     * DateTime (type from System lib)
     */
public completeThrough: Date;

    /**
     * boolean value
     */
public setZeroOrHundredPercentCompleteOnly: boolean;

    /**
     * The document storage
     */
public storage: string;

    /**
     * The document folder
     */
public folder: string;

    /**
     * The filename to save the changes
     */
public fileName: string;
    
    public constructor(init?: Partial<PutRecalculateProjectWorkAsCompleteRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getReportPdf operation.
 */
export class GetReportPdfRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * A type of the project's graphical report.
     */
public type: ReportType;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetReportPdfRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for deleteResource operation.
 */
export class DeleteResourceRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Resource Uid
     */
public resourceUid: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;

    /**
     * The name of the project document to save changes to.              If this parameter is omitted then the changes will be saved to the source project document.
     */
public fileName: string;
    
    public constructor(init?: Partial<DeleteResourceRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getResource operation.
 */
export class GetResourceRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Resource Uid
     */
public resourceUid: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetResourceRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getResourceAssignments operation.
 */
export class GetResourceAssignmentsRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Resource Uid
     */
public resourceUid: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetResourceAssignmentsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getResourceTimephasedData operation.
 */
export class GetResourceTimephasedDataRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Uid of resource to get timephased data for.
     */
public resourceUid: number;

    /**
     * Type of timephased data to get.
     */
public type: TimephasedDataType;

    /**
     * Start date.
     */
public startDate: Date;

    /**
     * End date.
     */
public endDate: Date;

    /**
     * The document folder.
     */
public folder: string;

    /**
     * The document storage.
     */
public storage: string;
    
    public constructor(init?: Partial<GetResourceTimephasedDataRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getResources operation.
 */
export class GetResourcesRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetResourcesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postResource operation.
 */
export class PostResourceRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The name of the new resource. The default value is an empty string
     */
public resourceName: string;

    /**
     * The id of the resource to insert the new resource before. The default value is the id of the last resource in a project file.
     */
public beforeResourceId: number;

    /**
     * The name of the project document to save changes to.              If this parameter is omitted then the changes will be saved to the source project document.
     */
public fileName: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<PostResourceRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putResource operation.
 */
export class PutResourceRequest {
    /**
     * The file name
     */
public name: string;

    /**
     * The Uid of a resource
     */
public resourceUid: number;

    /**
     * The representation of the modified resource
     */
public resource: Resource;

    /**
     * The calculation mode of a project
     */
public mode: CalculationMode;

    /**
     * Specifies whether the project's recalculation should be performed
     */
public recalculate: boolean;

    /**
     * The document storage
     */
public storage: string;

    /**
     * The document storage
     */
public folder: string;

    /**
     * The filename to save Changes
     */
public fileName: string;
    
    public constructor(init?: Partial<PutResourceRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getRiskAnalysisReport operation.
 */
export class GetRiskAnalysisReportRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The uid of the task for which this risk will be applied in Monte Carlo simulation.
     */
public taskUid: number;

    /**
     * Gets or sets the probability distribution used in Monte Carlo simulation. The default value is ProbabilityDistributionType.Normal.
     */
public distributionType: ProbabilityDistributionType;

    /**
     * The percentage of the most likely task duration which can happen in the best possible project scenario. The default value is 75, which means that if the estimated specified task duration is 4 days then the optimistic duration will be 3 days.
     */
public optimistic: number;

    /**
     * The percentage of the most likely task duration which can happen in the worst possible project scenario. The default value is 125, which means that if the estimated specified task duration is 4 days then the pessimistic duration will be 5 days.
     */
public pessimistic: number;

    /**
     * Gets or sets the confidence level that correspond to the percentage of the time the actual generated values will be within optimistic and pessimistic estimates. The default value is CL99.
     */
public confidenceLevel: ConfidenceLevel;

    /**
     * The number of iterations to use in Monte Carlo simulation. The default value is 100.
     */
public iterations: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The folder storage.
     */
public folder: string;

    /**
     * The resulting report fileName.
     */
public fileName: string;
    
    public constructor(init?: Partial<GetRiskAnalysisReportRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for deleteTask operation.
 */
export class DeleteTaskRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Task Uid
     */
public taskUid: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;

    /**
     * The name of the project document to save changes to.  If this parameter is omitted then the changes will be saved to the source project document.
     */
public fileName: string;
    
    public constructor(init?: Partial<DeleteTaskRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getTask operation.
 */
export class GetTaskRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Task Uid
     */
public taskUid: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetTaskRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getTaskAssignments operation.
 */
export class GetTaskAssignmentsRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Task Uid
     */
public taskUid: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetTaskAssignmentsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getTaskRecurringInfo operation.
 */
export class GetTaskRecurringInfoRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Task Uid
     */
public taskUid: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetTaskRecurringInfoRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getTaskTimephasedData operation.
 */
export class GetTaskTimephasedDataRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Uid of task to get timephased data for.
     */
public taskUid: number;

    /**
     * Type of timephased data to get.
     */
public type: TimephasedDataType;

    /**
     * Start date.
     */
public startDate: Date;

    /**
     * End date.
     */
public endDate: Date;

    /**
     * The document folder.
     */
public folder: string;

    /**
     * The document storage.
     */
public storage: string;
    
    public constructor(init?: Partial<GetTaskTimephasedDataRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getTasks operation.
 */
export class GetTasksRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetTasksRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postTask operation.
 */
export class PostTaskRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The name of the new task. The default value is an empty string
     */
public taskName: string;

    /**
     * The id of the task to insert the new task before.              The default value is the id of the last task in a project file.
     */
public beforeTaskId: number;

    /**
     * The name of the project document to save changes to.              If this parameter is omitted then the changes will be saved to the source project document.
     */
public fileName: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<PostTaskRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postTaskRecurringInfo operation.
 */
export class PostTaskRecurringInfoRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The Uid of parent task for the created recurring task
     */
public parentTaskUid: number;

    /**
     * Name of the task to create.
     */
public taskName: string;

    /**
     * DTO which defines task's recurring info.
     */
public recurringInfo: RecurringInfo;

    /**
     * Name of the project's calendar to use for recurring task's scheduling.
     */
public calendarName: string;

    /**
     * File name to save changes to.
     */
public fileName: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<PostTaskRecurringInfoRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putMoveTask operation.
 */
export class PutMoveTaskRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Unique id of the task to be moved.
     */
public taskUid: number;

    /**
     * Unique id of the new parent task.
     */
public parentTaskUid: number;

    /**
     * The name of the project document to save changes to.              If this parameter is omitted then the changes will be saved to the source project document. 
     */
public fileName: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<PutMoveTaskRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putMoveTaskToSibling operation.
 */
export class PutMoveTaskToSiblingRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Task Unique Id.
     */
public taskUid: number;

    /**
     * Unique Id of the task after which the current task will be placed.
     */
public beforeTaskUid: number;

    /**
     * The name of the project document to save changes to.             If this parameter is omitted then the changes will be saved to the source project document.
     */
public fileName: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<PutMoveTaskToSiblingRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putTask operation.
 */
export class PutTaskRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Task UID
     */
public taskUid: number;

    /**
     * TaskDTO
     */
public task: Task;

    /**
     * CalculationModeDTO
     */
public mode: CalculationMode;

    /**
     * boolean value 
     */
public recalculate: boolean;

    /**
     * The document strorage
     */
public storage: string;

    /**
     * The document folder
     */
public folder: string;

    /**
     * The name of the file to save changes
     */
public fileName: string;
    
    public constructor(init?: Partial<PutTaskRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putTaskRecurringInfo operation.
 */
export class PutTaskRecurringInfoRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Task Uid.
     */
public taskUid: number;

    /**
     * A modified DTO of task's recurring info.
     */
public recurringInfo: RecurringInfo;

    /**
     * File name to save changes to.
     */
public fileName: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<PutTaskRecurringInfoRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for deleteTaskLink operation.
 */
export class DeleteTaskLinkRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Index of the task link object. See TaskLink.Index property.
     */
public index: number;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;

    /**
     * The name of the project document to save changes to.  If this parameter is omitted then the changes will be saved to the source project document.
     */
public fileName: string;
    
    public constructor(init?: Partial<DeleteTaskLinkRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getTaskLinks operation.
 */
export class GetTaskLinksRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetTaskLinksRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postTaskLink operation.
 */
export class PostTaskLinkRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The TaskLink object representation that should be added.
     */
public taskLink: TaskLink;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;

    /**
     * The name of the project document to save changes to.  If this parameter is omitted then the changes will be saved to the source project document.
     */
public fileName: string;
    
    public constructor(init?: Partial<PostTaskLinkRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putTaskLink operation.
 */
export class PutTaskLinkRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Index of the task link object. See TaskLink.Index property.
     */
public index: number;

    /**
     * The representation of the modified TaskLink object.
     */
public taskLink: TaskLink;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;

    /**
     * The name of the project document to save changes to.  If this parameter is omitted then the changes will be saved to the source project document.
     */
public fileName: string;
    
    public constructor(init?: Partial<PutTaskLinkRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getVbaProject operation.
 */
export class GetVbaProjectRequest {
    /**
     * The name of the file
     */
public name: string;

    /**
     * The folder storage
     */
public folder: string;

    /**
     * The document storage.
     */
public storage: string;
    
    public constructor(init?: Partial<GetVbaProjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getWbsDefinition operation.
 */
export class GetWbsDefinitionRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<GetWbsDefinitionRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for putRenumberWbsCode operation.
 */
export class PutRenumberWbsCodeRequest {
    /**
     * The name of the file.
     */
public name: string;

    /**
     * Uids of task for WBS codes renumbering. If not specified, WBS codes for all tasks will be renumbered.
     */
public taskUids: Array<number>;

    /**
     * The document storage.
     */
public storage: string;

    /**
     * The name of the project document to save changes to.              If this parameter is omitted then the changes will be saved to the source project document.
     */
public fileName: string;

    /**
     * The document folder.
     */
public folder: string;
    
    public constructor(init?: Partial<PutRenumberWbsCodeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postTaskDocumentWithFormat operation.
 */
export class PostTaskDocumentWithFormatRequest {
    /**
     * The name of the file.
     */
    public name: string;

    /**
     * The format of the resulting file.
     */
    public format: ProjectFileFormat;

    /**
     * Instance of inheritor of SaveOptions class which contains format-specific settings for saving a project.
     */
    public saveOptions: Object;

    /**
     * If parameter is true, HTML resources are included as separate files and returned along with the resulting html file as a zip package.
     */
    public returnAsZipArchive: boolean;

    /**
     * The document storage.
     */
    public storage: string;

    /**
     * The document folder.
     */
    public folder: string;

    public constructor(init?: Partial<PostTaskDocumentWithFormatRequest>) {
        Object.assign(this, init);
    }
}
