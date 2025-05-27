import React from "react";
import icon1 from "@/assests/icons/home.png";
import icon2 from "@/assests/icons/tabs.png";
import icon3 from "@/assests/icons/user.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-40">
      <div className="flex justify-between items-center px-10 py-4 bg-blue-950 w-[220%]">
        <div>
          <Image src={icon1} alt="tab icon" title="home icon" className="w-8" />
        </div>
        <div>
          <Image
            src={icon2}
            alt="tab icon"
            title="create post"
            className="w-8"
          />
        </div>
        <div>
          <Image src={icon3} alt="tab icon" title="profile" className="w-8" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
