"use client";

import { useAuthContext } from "../context/authContext";
import LoginPage from "./login/LoginPage"; 

const AdminLayout = ({children}) => { 

    const {user} = useAuthContext();

    return (
        <>
            { 
            user?.logged ? children : <LoginPage/> 
            }
        </>
    );

}

export default AdminLayout;