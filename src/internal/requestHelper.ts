/**
 *
 *   Copyright (c) 2025 Aspose.Tasks Cloud
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
 *
 */

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import FormData = require("form-data");
import * as querystring from "querystring";
import * as https from "https";
import { URL } from "url";
import { Configuration } from "./configuration";
import { ObjectSerializer } from "./objectSerializer";

/**
 * Invoke api method
 * @param requestOptions request parameters
 * @param configuration api configuration
 * @param notApplyAuthToRequest if set to true, auth is not applied to request
 */
export async function invokeApiMethod(requestOptions: any, configuration: Configuration, notApplyAuthToRequest?: boolean, postData?: Buffer): Promise<any> {
    try {
        return await invokeApiMethodInternal(requestOptions, configuration, notApplyAuthToRequest, postData);
    } catch (e) {
        if (e instanceof NeedRepeatException) {
            return await invokeApiMethodInternal(requestOptions, configuration, notApplyAuthToRequest, postData);
        }
        throw e;
    }
}

/**
 * Add parameter to query
 * @param url url
 * @param queryParameters queryParameters
 * @param parameterName parameterName
 * @param parameterValue parameterValue
 */
export function addQueryParameterToUrl(url: string, queryParameters: any, parameterName: string, parameterValue: any) {
    if (parameterValue !== undefined) {
        let valueAsString: string;
        if (parameterValue instanceof Date) {
            valueAsString = (parameterValue as Date).toISOString();
        } else {
            valueAsString = String(parameterValue);
        }

        if (url.indexOf("{" + parameterName + "}") >= 0) {
            url = url.replace("{" + parameterName + "}", valueAsString);
        } else {
            queryParameters[parameterName] = valueAsString;
        }
    } else {
        url = url.replace("/{" + parameterName + "}", "");
    }

    return url;
}

/**
 * Internal implementation using axios
 * @param requestOptions
 * @param configuration
 * @param notApplyAuthToRequest
 * @param postData
 */
async function invokeApiMethodInternal(requestOptions: any, configuration: Configuration, notApplyAuthToRequest?: boolean, postData?: Buffer): Promise<any> {
    const auth = configuration.authentication;

    if (!notApplyAuthToRequest && auth && typeof auth.applyToRequest === "function") {
        await auth.applyToRequest(requestOptions, configuration);
    }

    const rawUrl = String(requestOptions.uri || requestOptions.url || "");
    let urlObj: URL | null = null;
    try {
        urlObj = rawUrl ? new URL(rawUrl) : null;
    } catch {
        urlObj = null;
    }

    const axiosConfig: AxiosRequestConfig = {
        method: (requestOptions.method || "GET").toLowerCase() as any,
        url: rawUrl,
        validateStatus: () => true,
        headers: {},
        params: requestOptions.qs || undefined,
    };

    const defaultHeaders: any = {
        "User-Agent": "tasks nodejs sdk",
        "x-aspose-client": "nodejs sdk",
        "x-aspose-client-version": "26.6",
    };

    axiosConfig.headers = Object.assign({}, defaultHeaders, requestOptions.headers || {});

    if (requestOptions.form) {
        axiosConfig.data = querystring.stringify(requestOptions.form);
        (axiosConfig.headers as any)["Content-Type"] = "application/x-www-form-urlencoded";
    } else if ((requestOptions as any).formData) {
        const form = new FormData();
        const formData = (requestOptions as any).formData || {};
        
        for (const k of Object.keys(formData)) {
            const val = formData[k];

            if (val && typeof val === "object" && ("value" in val || "options" in val)) {
                const value = (val as any).value;
                const options = (val as any).options;
                form.append(k, value, options);
            } else if (Buffer.isBuffer(val)) {
                const filename = (requestOptions && requestOptions.fileName) || k || "file";
                form.append(k, val, { filename });
            } else if (val && typeof val === "object" && typeof (val as any).pipe === "function") {
                const stream: any = val;
                let options: any = undefined;
                if (stream.path && typeof stream.path === "string") {
                    try {
                        const parts = (stream.path as string).split(/[\/\\]/);
                        options = { filename: parts[parts.length - 1] || k };
                    } catch { options = undefined; }
                }
                if (options) form.append(k, stream, options);
                else form.append(k, stream);
            } else {
                form.append(k, val as any);
            }
        }

        axiosConfig.headers = Object.assign({}, axiosConfig.headers, (form as any).getHeaders ? (form as any).getHeaders() : {});
        
        try {
            const length: number = await new Promise<number>((resolve, _) => {
                (form as any).getLength((err: Error | null, len: number) => {
                    if (err) {
                        return resolve(-1);
                    }
                    return resolve(len);
                });
            });
            if (length >= 0) {
                (axiosConfig.headers as any)["Content-Length"] = length;
            }
        } catch {
        }

        axiosConfig.data = form;
    } else if (postData) {
        axiosConfig.data = postData;
        (axiosConfig.headers as any)["Content-Type"] = "application/octet-stream";
        (axiosConfig.headers as any)["Content-Length"] = Buffer.byteLength(postData as Buffer);
    } else if (requestOptions.body !== undefined) {
        if (requestOptions.json) {
            axiosConfig.data = requestOptions.body;
            (axiosConfig.headers as any)["Content-Type"] = "application/json";
        } else {
            axiosConfig.data = requestOptions.body;
        }
    }

    if (requestOptions.encoding === null || requestOptions.isResponseFile) {
        axiosConfig.responseType = "arraybuffer";
    } else if (requestOptions.json) {
        axiosConfig.responseType = "json";
    } else {
        axiosConfig.responseType = "text";
    }

    if (requestOptions.json) {
        (axiosConfig.headers as any)["Accept"] = "application/json";
    }

    if (urlObj) {
        try {
            axiosConfig.httpsAgent = new https.Agent({
                minVersion: "TLSv1",
            } as https.AgentOptions);
        } catch {
        }
    }

    let axiosResponse: AxiosResponse;
    try {
        axiosResponse = await axios.request(axiosConfig);
    } catch (err) {
        if (err && err.code === "EPROTO") {
            const host = urlObj ? urlObj.hostname : axiosConfig.url;
            err.message = `${err.message} (while connecting to ${host}). Possible causes: SNI mismatch, outdated OpenSSL/Node, or corporate TLS interception. Try: 'openssl s_client -connect ${host}:443 -servername ${host}' and check Node/OpenSSL versions.`;
        }
        throw err;
    }

    if (axiosResponse && axiosResponse.status === 401 && !notApplyAuthToRequest) {
        if (auth && typeof auth.handle401response === "function") {
            await auth.handle401response(configuration);
            throw new NeedRepeatException();
        }
    }

    const rawData = axiosResponse.data;
    let bodyContent: any = rawData;

    if (axiosResponse.config && axiosResponse.config.responseType === "arraybuffer" && rawData) {
        try {
            bodyContent = Buffer.from(rawData);
            if (requestOptions.json) {
                try {
                    const text = (bodyContent as Buffer).toString("utf8");
                    bodyContent = JSON.parse(text);
                } catch {
                }
            }
        } catch {
            bodyContent = rawData;
        }
    } else if (axiosResponse.config && axiosResponse.config.responseType === "json") {
        bodyContent = rawData;
    } else if (axiosResponse.config && axiosResponse.config.responseType === "text" && typeof rawData === "string") {
        bodyContent = rawData;
    } else {
        bodyContent = rawData;
    }

    const wrappedResponse = {
        body: bodyContent,
        status: axiosResponse.status,
        statusCode: axiosResponse.status,
        statusMessage: axiosResponse.statusText,
        headers: axiosResponse.headers,
        text: typeof bodyContent === "string" ? bodyContent : undefined,
        axiosResponse: axiosResponse
    };

    if (axiosResponse.status >= 200 && axiosResponse.status <= 299) {
        return Promise.resolve(wrappedResponse);
    }

    try {
        let parsedErrorBody = bodyContent;
        if (Buffer.isBuffer(parsedErrorBody)) {
            try {
                parsedErrorBody = JSON.parse(parsedErrorBody.toString("utf8"));
            } catch {
            }
        }
        const result = ObjectSerializer.deserialize(parsedErrorBody, "AsposeResponse");
        return Promise.reject(
        { 
            message: result && result.message ? result.message : axiosResponse.statusText, 
            code: axiosResponse.status, 
            response: wrappedResponse
        });
    } catch (error) {
        return Promise.reject({ message: "Error while parse server error: " + error, code: axiosResponse.status });
    }
}

/**
 * Exception, indicating necessity of request repeat
 */
class NeedRepeatException extends Error {
}
