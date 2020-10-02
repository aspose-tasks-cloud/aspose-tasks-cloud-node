# Aspose.Tasks Cloud
[Aspose.Tasks Cloud](https://products.aspose.cloud/tasks/cloud)

Aspose.Tasks Cloud is a REST API for manipulating and converting Microsoft Project documents hosted on cloud platforms. It allows you to work with all aspects of a Project document as well as offers a wide range of export options allowing developers to convert Microsoft Project documents a number of industry standard formats. Our Cloud SDKs are wrappers around REST API in various programming languages, allowing you to work with Project documents in language of your choice quickly and easily, gaining all benefits of strong types and IDE highlights. 

This repository contains Aspose.Tasks Cloud SDK for Node.js source code. This SDK allows you to work with Aspose.Tasks Cloud REST APIs in your nodejs applications quickly and easily, with zero initial cost.

To use these SDK, you will need App SID and App Key which can be looked up at [Aspose Cloud Dashboard](https://dashboard.aspose.cloud/#/apps) (free registration in Aspose Cloud is required for this).

### Sample usage
The examples below show how your application have to initiate and get a project's tasks using aspose-tasks-cloud library:
``` js

const tasksApi = new TasksApi("Youre AppSid here", "Youre AppKey here");

const request: GetTasksRequest = { name: "ProjectFile.mpp", folder: "documents", storage: ""}

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

Every method returns a chainable promise.

[Tests](test) contain various examples of using the SDK. You have to create "testConfig.json" file in project root to run them.
"testConfig.json" has the following structure
``` json
{
    "AppSid": "Youre AppSid here",
    "AppKey": "Youre AppKey here",
    "BaseUrl": "http://api.aspose.cloud"
}
```

For other examples, check the product [Developer Guide](https://docs.aspose.cloud/tasks/developer-guide/).

# Licensing
All Aspose.Tasks Cloud SDKs, helper scripts and templates are licensed under [MIT License](LICENSE).

# Resources
+ [**Website**](https://www.aspose.cloud)
+ [**Product Home**](https://products.aspose.cloud/tasks/cloud)
+ [**Documentation**](https://docs.aspose.cloud/tasks/)
+ [**Free Support Forum**](https://forum.aspose.cloud/c/tasks)
+ [**Paid Support Helpdesk**](https://helpdesk.aspose.cloud/)
+ [**Blog**](https://blog.aspose.cloud/category/aspose-products/aspose-tasks-product-family/)
