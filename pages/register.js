import Link from "next/link";

const Register = () => {
    return (
        <>
            <div className="w-full h-screen flex flex-col justify-center items-center gap-y-10 text-black">
                <div className="flex flex-col items-center">
                    <p className="font-bold text-4xl">//try register</p>
                    <p className="text-lg">join now and create account, yey!</p>
                </div>
                <form className="flex flex-col p-[12px] border-black border-[2px] rounded-[5px]">
                    <div className="flex flex-row gap-x-[6px]">
                        <div className="flex flex-col">
                            <label for="fName">first name</label>
                            <input name="fName" type="text" className="border-black border-[2px] rounded-[5px] p-[4px]" />
                        </div>
                        <div className="flex flex-col">
                            <label for="lName">last name</label>
                            <input name="lName" type="text" className="border-black border-[2px] rounded-[5px] p-[4px]" />
                        </div>
                    </div>
                    <label for="username">username</label>
                    <input name="username" type="text" className="border-black border-[2px] rounded-[5px] p-[4px]" />
                    <label for="password">password</label>
                    <input name="password" type="password" className="border-black border-[2px] rounded-[5px] p-[4px]" />
                    <label for="confPassword">confirm password</label>
                    <input name="confPassword" type="password" className="border-black border-[2px] rounded-[5px] p-[4px]" />
                    <button className="font-bold py-[12px] px-5 border-black border-[2px] rounded-[5px] uppercase items-center justify-center flex mt-[12px]">Register</button>
                </form>
                <Link href="/login"><p>i hab account</p></Link>
            </div>
        </>
    );
}

export default Register;