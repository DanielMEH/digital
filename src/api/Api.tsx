import axios,{ AxiosRequestConfig }   from "axios";
import { Utils } from "../util/utils";


export const ApiPost = async (urlServer: string, path: string, method: string, action: string, data: unknown) => {
    const config: AxiosRequestConfig = {
        url: `${urlServer}${path}`,
        method: method,
        headers: { },
        data: data,
        timeout: 5000,
        // Other options...
    };

  return  Utils.getTokenAuth(action).then((headers) => {

        config.headers = headers;
        
        try {
            const response = axios(config);
            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }   
    }
    )
};

export const ApiGet = async(urlServer:string,path:string,method:string,action:string,params:string) => {
    
    const config: AxiosRequestConfig = {
        url:`${urlServer}/${path}/?q=${JSON.stringify(params)}`,
        method:method,
        params:params,
        headers: {},
        
        timeout: 5000,
        httpAgent: "httpAgent",
        timeoutErrorMessage: "timeoutErrorMessage",
        decompress: true,
        transport: "transport",
        
        baseURL: "baseURL",
    }

  return  Utils.getTokenAuth(action).then((headers) => {

        config.headers = headers;

        console.log(config)
        
        try {
            const response = axios(config);
            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }   
    }
    )

}
export const ApiPut = async (urlServer:string,path:string,method:string,action:string,data:unknown,params:string) => {
  
    const config: AxiosRequestConfig = {
        url:`${urlServer}/${path}/?q=${JSON.stringify(params)}`,
        method:method,
        headers: {},
        data:data,
        timeout: 5000,
        httpAgent: "httpAgent",
        timeoutErrorMessage: "timeoutErrorMessage",
        decompress: true,
        transport: "transport",
        baseURL: "baseURL",
    
}

  return Utils.getTokenAuth(action).then((headers) => {

    config.headers = headers;
    
    try {
        const response = axios(config);
        return response;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }   
}
)
}
export const ApiDelete = async (urlServer:string,path:string,method:string,action:string,params:string) => {
   
    const config: AxiosRequestConfig = {
        url:`${urlServer}/${path}/?q=${JSON.stringify(params)}`,
        method:method,
        headers:{},
        timeout: 5000,
        httpAgent: "httpAgent",
        timeoutErrorMessage: "timeoutErrorMessage",
        decompress: true,
        transport: "transport",
        baseURL: "baseURL",
    
}


   return Utils.getTokenAuth(action).then((headers) => {

    config.headers = headers;
    
    try {
        const response = axios(config);
        return response;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }   
}
)
}
// file 

