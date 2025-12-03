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

import { Configuration } from "./configuration";
import { invokeApiMethod } from "./requestHelper";

/**
 * Authentication logic for api calls
 */
export interface IAuthentication {
    /**
     * Apply authentication settings to header and query params.
     */
    applyToRequest(requestOptions: any, configuration: Configuration): Promise<void> | void;

    /**
     * Handle 401 response.
     */
    handle401response(configuration: Configuration): Promise<void> | void;
}

/**
 * Implements OAuth authentication 
 */
export class OAuth implements IAuthentication {
    private accessToken: string | null = null;

    /**
     * Apply authentication settings to header and query params.
     * If token is not available, requests a new one.
     */
    public async applyToRequest(requestOptions: any, configuration: Configuration): Promise<void> {
        if (this.accessToken == null) {
            await this._requestToken(configuration);
        }

        if (requestOptions) {
            if (!requestOptions.headers) {
                requestOptions.headers = {};
            }
            requestOptions.headers.Authorization = "Bearer " + this.accessToken;
        }

        return Promise.resolve();
    }

    /**
     * Handle 401 response by requesting a new token.
     */
    public async handle401response(configuration: Configuration): Promise<void> {
        await this._requestToken(configuration);
    }

    private async _requestToken(configuration: Configuration): Promise<void> {
        let uri: string;
        if (configuration.authUrl) {
            uri = configuration.authUrl;
        } else {
            uri = configuration.baseUrl + "/connect/token";
        }

        const requestOptions: any = {
            method: "POST",
            json: true,
            uri,
            form: {
                grant_type: "client_credentials",
                client_id: configuration.appSID,
                client_secret: configuration.appKey,
            },
        };

        const response = await invokeApiMethod(requestOptions, configuration, true);
        let body = response && response.body;

        if (body && Buffer.isBuffer(body)) {
            try {
                body = JSON.parse(body.toString("utf8"));
            } catch {
            }
        }

        if (!body || !body.access_token) {
            throw new Error("Failed to obtain access token from auth server.");
        }

        this.accessToken = body.access_token;
        return Promise.resolve();
    }
}
