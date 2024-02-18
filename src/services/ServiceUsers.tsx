import { AxiosResponse } from "axios";
import { ApiDelete, ApiPost, ApiPut } from "../api/Api";
import datajson from "../data/data.json";


if (process.env.URL_CATALOGS){
    datajson.url_servers.url_catalogs = `${process.env.URL_CATALOGS}`
}

 class ServiceUsers {
    public async getLoginUser(email: string, password: string): Promise<AxiosResponse> {
        const resp = await ApiPost(datajson.url_servers.url_catalogs, "login", "POST", "", {email, password});
        return resp;
    }
    public async postRegisterUser(email:string, password:string): Promise<AxiosResponse>  {
        return await ApiPost(datajson.url_servers.url_catalogs, "register", "POST", "", {email, password});
    }
    public async getProfileUser(): Promise<AxiosResponse> {
        return await ApiPost(datajson.url_servers.url_catalogs, "profile", "GET", "", {});
    }
    
    public async putProfileUser(name:string, surname:string): Promise<AxiosResponse> {
        return await ApiPut(datajson.url_servers.url_catalogs, "profile", "PUT", "", {name, surname},"");
    }

    public async deleteProfileUser(): Promise<AxiosResponse> {
     return await ApiDelete(datajson.url_servers.url_catalogs, "profile", "DELETE", "", "");
    }
}

export const serviceUsers = new ServiceUsers();