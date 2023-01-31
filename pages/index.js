const Index = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center gap-y-20">
        <p className="font-bold text-7xl">//login && register</p>
        <div className="flex flex-row gap-x-5">
          <button className="font-bold py-2 px-5 border-black border-[2px] rounded-[5px] uppercase items-center justify-center flex">Login</button>
          <button className="bg-black text-white font-bold py-2 px-5 border-black border-[2px] rounded-[5px] uppercase items-center justify-center flex">Register</button>
        </div>
      </div>
    </>
  );
}

export default Index;