import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
    const [value, setValue] = useState({
        username: "",
        password: "",
    })
    
    const handleFetch = () => {
        fetch("/api/login", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                value: value
            })
        }).then((response) => {
            return response.json()
        })
    }

    const handleChange = (e) => {
        setValue(current => ({ ...current, [e.target.name]: e.target.value }))
    }
    return (
        <>
        <Head><title>login</title></Head>
            <div className="w-full h-screen flex flex-col justify-center items-center gap-y-10 text-black">
                <div className="flex flex-col items-center">
                    <p className="font-bold text-4xl">//try login</p>
                    <p className="text-lg">login using your credentials</p>
                </div>
                <form className="flex flex-col p-[12px] border-black border-[2px] rounded-[5px]">
                    {/* username */}
                    <label for="username">username</label>
                    <input name="username" id="username" type="text" className="border-black border-[2px] rounded-[5px] p-[4px]" onChange={handleChange} />

                    {/* password */}
                    <label for="password">password</label>
                    <input name="password" id="password" type="password" className="border-black border-[2px] rounded-[5px] p-[4px]" onChange={handleChange} />

                    {/* button */}
                    <div className="font-bold py-[12px] px-5 border-black border-[2px] rounded-[5px] uppercase items-center justify-center flex mt-[12px]" onClick={handleFetch}>Login</div>
                </form>
                <Link href="/register"><p>i want to join</p></Link>
            </div>
        </>
    );
}

export default Login;