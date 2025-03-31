import React from "react";
import notificationIcon from "@/assests/icons/notification-bell.png";
import messageIcon from "@/assests/icons/message.png";
import { tangerine , tektur } from "@/Config/fonts";
import Image from "next/image";

const Navbar = () => {
  return (
    <main className={` ${tangerine.className}  sticky top-0 z-40`}>
      <div className="flex justify-between items-center px-4 py-4 bg-blue-950">
        <section>
          <h1 className="text-4xl font-bold ">InstaCity</h1>
        </section>
        <section className={`${tektur.className} flex gap-8 `}>
          <div title="notification" className="relative">
            <Image
              src={notificationIcon}
              alt="notication Icon"
              className="w-6 relative"
            />
            <span className="absolute -top-1 -right-1 bg-gray-500  text-[15px] w-[16px] h-[16px] p-2 flex justify-center items-center rounded-full">
              0
            </span>
          </div>
          <div title="message" className="relative">
            <Image
              src={messageIcon}
              alt="notication Icon"
              className="w-6 relative"
            />
            <span className="absolute -top-1 -right-2 bg-gray-500  text-[15px] w-[16px] h-[16px] p-2 flex justify-center items-center rounded-full">
              0
            </span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Navbar;
