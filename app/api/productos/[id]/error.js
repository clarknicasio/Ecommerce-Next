"use client";

import { useEffect } from "react";

export default function Error ({error, reset}) {

    useEffect(() =>{ 
        console.log(error);
    }, [error]);

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-center">
                <h2>Oops ...algo no salió bien</h2>
                <hr className="my-6" />
                <button onClick={() => reset()} className="btn-green">Intenta nuevamente</button>
            </div>
        </div>
    );    

}