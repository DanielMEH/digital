import {PropsWithChildren, createContext, useContext, useState } from "react";
import { serviceUsers } from "../../services/ServiceUsers";
import { Utils } from "../../util/utils";
import {AxiosResponse } from "axios";

interface ProfileItem {
    id: number;
    name: string;
    surname: string;
    email: string;
    // Agrega más propiedades si es necesario
}

type ContextValueType = {
    user: { email: string; password: string };
    profileData: ProfileItem[];
    postSignup: (email:string, password:string) => Promise<AxiosResponse>;
    loginuser: (email:string, password:string) => Promise<AxiosResponse>;
    getUserProfile: () => Promise<AxiosResponse>;
    updateProfile: (name:string, surname:string) => Promise<AxiosResponse>;
    deleteProfile: () => Promise<AxiosResponse>;
};

export const UseContextPostData =  createContext<ContextValueType>({
    user: { email: "", password: "" },
    profileData: [],
    postSignup: () => Promise.resolve({} as AxiosResponse),
    loginuser: () =>  Promise.resolve({} as AxiosResponse),
    getUserProfile: () =>  Promise.resolve({} as AxiosResponse),
    updateProfile: () =>  Promise.resolve({} as AxiosResponse),
    deleteProfile: () =>  Promise.resolve({} as AxiosResponse),
}
    )

export const GetUsertPosts = ()=>{
    const contextUser = useContext(UseContextPostData);
    return contextUser;
}

export const GetUserContext =  ({children}:PropsWithChildren<unknown>) => {

    const [user, setUser] = useState<{ email: string; password: string }>({
        email: "",
        password: "",
    });

    const [profileData, setProfileData] = useState<ProfileItem[]>([])

    const postSignup = async (email:string, password:string): Promise<AxiosResponse> => {
        setUser({email, password})
        try {
            const data = await serviceUsers.postRegisterUser(email, password);
            return data as AxiosResponse;

        } catch (error) {
            console.error("Error occurred during signup:", error);
            throw error; // Re-throw the error to propagate it further if needed
        }
    }


    const loginuser = async (email:string, password:string): Promise<AxiosResponse> => {
        try {
            const data = await serviceUsers.getLoginUser(email, password);
            Utils.GetTokenUser(data.data.body.acessToken);
            return data as AxiosResponse;

        } catch (error) {
            console.error("Error occurred during login:", error);
            throw error; // Re-throw the error to propagate it further if needed
        }
    }

    const getUserProfile = async (): Promise<AxiosResponse> => {
        try {
            const data = await serviceUsers.getProfileUser();
            setProfileData(data.data.body);
            return data as AxiosResponse;

        } catch (error) {
            console.error("Error occurred during getting user profile:", error);
            throw error; // Re-throw the error to propagate it further if needed
        }
    }

    const updateProfile = async (name:string, surname:string): Promise<AxiosResponse> => {
        try {
            const data = await serviceUsers.putProfileUser (name, surname);
            getUserProfile().then((data)=>{
                setProfileData(data.data.body);
            }
            )
            return data as AxiosResponse;

        } catch (error) {
            console.error("Error occurred during updating user profile:", error);
            throw error; // Re-throw the error to propagate it further if needed
        }
    }

    const deleteProfile = async (): Promise<AxiosResponse> => {
        try {
            const data = await serviceUsers.deleteProfileUser();
            return data as AxiosResponse;

        } catch (error) {
            console.error("Error occurred during deleting user profile:", error);
            throw error; // Re-throw the error to propagate it further if needed
        }
    }



    return (
        <UseContextPostData.Provider value={{user,profileData, postSignup,loginuser,getUserProfile,updateProfile,deleteProfile}}>
            {children}
        </UseContextPostData.Provider>
    )

}