import Head from "next/head";
import Link from "next/link";
import { useState } from 'react';

const Register = () => {
    const [value, setValue] = useState({
        fName: "",
        lName: "",
        username: "",
        password: "",
    })

    const handleFetch = () => {
        fetch("/api/register", {
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
        <Head><title>register</title></Head>
            <div className="w-full h-screen flex flex-col justify-center items-center gap-y-10 text-black">
                {/* title */}
                <div className="flex flex-col items-center">
                    <p className="font-bold text-4xl">//try register</p>
                    <p className="text-lg">join now and create account, yey!</p>
                </div>

                {/* form */}
                <form className="flex flex-col p-[12px] border-black border-[2px] rounded-[5px]">
                    <div className="flex flex-row gap-x-[6px]">
                        {/* first name */}
                        <div className="flex flex-col">
                            <label for="fName">first name</label>
                            <input name="fName" type="text" className="border-black border-[2px] rounded-[5px] p-[4px]" onChange={handleChange} />
                        </div>

                        {/* last name */}
                        <div className="flex flex-col">
                            <label for="lName">last name</label>
                            <input name="lName" type="text" className="border-black border-[2px] rounded-[5px] p-[4px]" onChange={handleChange} />
                        </div>
                    </div>

                    {/* username */}
                    <label for="username">username</label>
                    <input name="username" type="text" className="border-black border-[2px] rounded-[5px] p-[4px]" onChange={handleChange} />

                    {/* password */}
                    <label for="password">password</label>
                    <input name="password" type="password" className="border-black border-[2px] rounded-[5px] p-[4px]" onChange={handleChange} />

                    {/* confirm password */}
                    <label for="confPassword">confirm password</label>
                    <input name="confPassword" type="password" className="border-black border-[2px] rounded-[5px] p-[4px]" onChange={handleChange} />

                    {/* button */}
                    <button className="font-bold py-[12px] px-5 border-black border-[2px] rounded-[5px] uppercase items-center justify-center flex mt-[12px]" onClick={handleFetch}>Register</button>
                </form>
                <Link href="/login"><p>i hab account</p></Link>
            </div>
        </>
    );
}

export default Register;