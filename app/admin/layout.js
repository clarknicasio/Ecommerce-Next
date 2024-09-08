"use client";

import { useAuthContext } from "../context/authContext";
import LoginPage from "./login/LoginPage"; // quitar y usar el paralel route en carpeta login con el @ y cambiar LoginPage.js por page.js

const AdminLayout = ({children, login}) => { 

    const {user} = useAuthContext();

    return (
        <>
            { 
            //user.logged ? children : login 
            user?.logged ? children : <LoginPage/> 
            }
        </>
    );

}

export default AdminLayout;