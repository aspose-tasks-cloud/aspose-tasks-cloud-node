![](https://img.shields.io/badge/api-v3.0-lightgrey) ![npm (scoped)](https://img.shields.io/npm/v/@asposecloud/aspose-tasks-cloud) ![npm bundle size](https://img.shields.io/bundlephobia/min/@asposecloud/aspose-tasks-cloud) ![node-current](https://img.shields.io/node/v/@asposecloud/aspose-tasks-cloud) [![GitHub license](https://img.shields.io/github/license/aspose-tasks-cloud/aspose-tasks-cloud-node)](LICENSE) ![GitHub last commit](https://img.shields.io/github/last-commit/Aspose-tasks-Cloud/aspose-tasks-cloud-node)

# Node.js SDK to Manage Tasks in the Cloud

Aspose.Tasks for Cloud offers the ability to manipulate and convert Microsoft Project MPT, MPP, MPX & Oracle Primavera XER, XML, and PrimaveraP6XML files in the Cloud. [Aspose.Tasks Cloud SDK for Node.js](https://products.aspose.cloud/tasks/nodejs) wraps the REST API to make it easier for the developers to integrate Task Management features in their own cloud-based Node.js applications.

## REST API for Task Management

- [Convert project documents](https://docs.aspose.cloud/tasks/convert-project-document-to-the-specified-format/) to other formats.
- Manipulate task data.
- [Manage project's resources](https://docs.aspose.cloud/tasks/working-with-resources/).
- Handle task links & task assignments.
- Work with project's extended attributes.
- [Read Microsoft Project’s document properties](https://docs.aspose.cloud/tasks/working-with-calendars/) such as start and finish date, tasks scheduling types and so on.
- [Read Microsoft Project’s Calendars](https://docs.aspose.cloud/tasks/working-with-calendars/) and Calendar Exceptions information.

## Read & Write Project Data

**Microsoft Project** MPP, XML, MPT **Primavera** MPX

## Save Project Data As

XER, XLSX, HTML, XML, TXT, TIF, SVG, PNG, JPEG

## Get Started with Aspose.Tasks Cloud SDK for Node.js

Register an account at [Aspose Cloud Dashboard](https://dashboard.aspose.cloud/#/apps) to get you application information. Next, execute `npm i @asposecloud/aspose-tasks-cloud` from the command line to install Aspose.Tasks Cloud SDK for Node.js via NPM.


## Create MPP in the Cloud 

``` js
const tasksApi = new TasksApi("AppSid", "AppKey");
const request: GetTasksRequest = { name: "template.mpp", folder: "documents", storage: ""}

tasksApi.getTasks(request)
    .then((result) => {
        // Deal with a result
        console.log(result.response.statusCode);
        console.log(result.body);
    })
    .catch(function(err) {
        // Deal with an error
        console.log(err.reponse.statusCode);
        console.log(err.body);
    });
```

[Tests](test) contain various examples of using the SDK. You have to create "testConfig.json" file in project root to run every example. The "testConfig.json" has the following structure.

``` json
{
    "AppSid": "Youre AppSid here",
    "AppKey": "Youre AppKey here",
    "BaseUrl": "http://api.aspose.cloud"
}
```
## Aspose.Tasks Cloud SDKs in Popular Languages

| .NET | PHP | Python | Node.js |
|---|---|---|---|
| [GitHub](https://github.com/aspose-tasks-cloud/aspose-tasks-cloud-dotnet) | [GitHub](https://github.com/aspose-tasks-cloud/aspose-tasks-cloud-php) | [GitHub](https://github.com/aspose-tasks-cloud/aspose-tasks-cloud-python) | [GitHub](https://github.com/aspose-tasks-cloud/aspose-tasks-cloud-node)  | 
| [NuGet](https://www.nuget.org/packages/Aspose.Tasks-Cloud/) | [Composer](https://packagist.org/packages/aspose/tasks-sdk-php) | [PIP](https://pypi.org/project/aspose-tasks-cloud/) | [NPM](https://www.npmjs.com/package/@asposecloud/aspose-tasks-cloud)  |

[Home](https://www.aspose.cloud) | [Product Page](https://products.aspose.cloud/tasks/nodejs) | [Documentation](https://docs.aspose.cloud/tasks/) | [Live Demo](https://products.aspose.app/tasks/family) |  [API Reference](https://apireference.aspose.cloud/tasks/) | [Code Samples](https://github.com/aspose-tasks-cloud/aspose-tasks-cloud-dotnet/tree/master/Aspose.Tasks.Cloud.Sdk.Tests) | [Blog](https://blog.aspose.cloud/category/tasks/) | [Free Support](https://forum.aspose.cloud/c/tasks) | [Free Trial](https://dashboard.aspose.cloud/#/apps)
