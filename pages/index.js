import Head from "next/head";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <Head><title>l && r</title></Head>
      <div className="w-full h-screen flex flex-col justify-center items-center gap-y-20">
        <p className="font-bold text-7xl">//login && register</p>
        <div className="flex flex-row gap-x-5">
          <Link href="/login">
            <div className="font-bold py-2 px-5 border-black border-[2px] rounded-[5px] uppercase items-center justify-center flex">Login</div>
          </Link>
          <Link href="/register">
            <div className="bg-black text-white font-bold py-2 px-5 border-black border-[2px] rounded-[5px] uppercase items-center justify-center flex">Register</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Index;