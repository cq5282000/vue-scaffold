import 'whatwg-fetch';
import nodeUrl from 'url';
import querystring from 'querystring';
import * as requestMethod from '../configs/requestMethod';
import requestPath from './requestPath';
import sleep from './sleep';
import * as requestMethod from '../configs/requestMethod';
import envConst from '../configs/envConst';
import * as env from '../configs/env'

const MOCK_DELAY = 1000;

const getMockData = async({
    url,
    param,
    method = requestMethod.GET,
    mockDelay = MOCK_DELAY
}) => {
    const context = require.context('../../mock-server/api', true, /\.js(on)?$/);
    let responseData = null;
    const requestUrl = requestPath(url);
    try {
        responseData = context(requestUrl);
    } catch (e) {
        throw new Error('404 not found');
    }
    return {
        json: () => {
            return responseData;
        },
        status: 200,
    }
};

const timeoutPromise = async(timeout) => {
    await sleep(timeout);
};

const fetchOriginData = async({
    url,
    param,
    method = requestMethod.GET,
    mockDelay = MOCK_DELAY
}) => {
    const reqMethod = method.toUpperCase();
    const options = {
        method: reqMethod,
        credentials: 'include'
    };
    let reqPath = '';
    if (reqMethod === requestMethod.GET) {
        const requestUrl = requestPath(url);
        reqPath = nodeUrl.format({
            pathname: requestUrl,
            query: param,
        });
    } else if (reqMethod === requestMethod.POST) {
        reqPath = requestPath(url);
        options.body = JSON.stringify(param);
        options.header = {
            'Content-Type': 'application/json',
        };
    }
    try {
        const response = await fetch(reqPath, options);
    } catch (error) {
        throw new Error(e);
    }
    const responseData = await Promise.race([timeoutPromise(60000), response.json()]);
    return {
        json: () => responseData,
    };
};

export default async(config) => {
    let responseData = null;
    if (envConst === env.LOCAL || envConst === env.DEVELOPMENT) {
        responseData = await getMockData(config);
    } else {
        responseData = await fetchOriginData(config);
    }
    return responseData.json();
}