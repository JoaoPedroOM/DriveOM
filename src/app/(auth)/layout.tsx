import Image from "next/image";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen ">
      <section className="bg-gradient-to-t from-blue-400 to-white p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div className="flex flex-col justify-center space-y-12 max-h-[800px] max-w-[430px]">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/images/pendrive.png"
              width={50}
              height={50}
              className="h-auto"
              alt="logo"
            />
            <span className="bg-gradient-to-b from-white to-blue-800 bg-clip-text text-transparent font-bold text-3xl">
              DriveOM
            </span>
          </div>

          <div className="text-black space-y-3">
            <h1 className="text-3xl font-bold">
              Fazendo gerenciamento de dados
            </h1>
            <p className="font-normal">
              Aqui você pode manter seus arquivos seguros.
            </p>
          </div>

          <Image
            src="/assets/images/designAuth.png"
            width={342}
            height={342}
            alt="Files"
            className=" transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>
      {children}
    </div>
  );
};

export default layout;
