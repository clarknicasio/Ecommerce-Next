
"use client";

import { useState } from "react";
import { useAuthContext } from "../../context/authContext";

const LoginForm = () => { 
    const { registerUser, loginUser, googleLogin } = useAuthContext();

    const [values, setValues] = useState({ 
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value        
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }



    return (
        <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 bg-opacity-25"> 
            <form onSubmit={handleSubmit} className="bg-white py-4 px-6 rounded-x1 max-w-md w-full">
                <h2>Ingrese sus credenciales</h2>
                <input
                type="email"
                value={values.email}
                required
                placeholder="Tu email"
                className="p-2 rounded w-full border border-blue-100 block my-4" name="email"
                onChange={handleChange} 
                />

                <input
                type="password"
                value={values.password}
                required
                placeholder="Tu password"
                className="p-2 rounded w-full border border-blue-100 block my-4"
                name="password"
                onChange={handleChange}
                />

                <button type="submit" onClick={()=> loginUser(values)} className="bg-green-500 text-white py-1 px-3 rounded mr-2">Ingresar</button>
                <button type="submit" onClick={()=> registerUser(values)} className="bg-gray-400 text-white py-1 px-3 rounded mr-2">Registrarme</button>
                <button type="submit" onClick={googleLogin} className="bg-blue-400 text-white py-1 px-3 rounded">Ingresar con Google</button>
            </form>
        </div>
    );

}

export default LoginForm;