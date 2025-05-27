"use client";
import React from "react";
import heartLogo from "@/assests/icons/heart.png";
import filledHeartLogo from "@/assests/icons/red-heart.png";
import commentLogo from "@/assests/icons/message.png";
import dotLogo from "@/assests/icons/dots.png";
import unknownPicture from "@/assests/images/unknown-picture.jpg";
import postImage1 from "@/assests/images/p1.jpg";
import postImage2 from "@/assests/images/p2.jpg";
import postImage3 from "@/assests/images/p3.jpg";
import postImage4 from "@/assests/images/p4.jpg";
import postImage5 from "@/assests/images/p5.jpg";
import Image from "next/image";
import { poppins } from "@/Config/fonts";

const postData = [
  {
    id: 1,
    name: "Alexa",
    dpPic: unknownPicture,
    postImg: postImage5,
  },
  {
    id: 2,
    name: "Sora",
    dpPic: unknownPicture,
    postImg: postImage2,
  },
  {
    id: 3,
    name: "Haris",
    dpPic: unknownPicture,
    postImg: postImage3,
  },
  {
    id: 4,
    name: "Zoriah",
    dpPic: unknownPicture,
    postImg: postImage4,
  },
  {
    id: 5,
    name: "Bleach",
    dpPic: unknownPicture,
    postImg: postImage1,
  },
];

const UserHome = () => {
  return (
    <main>
      <div>
        <div className="pt-5 px-4 ">
            {
                postData.map(({id,name,  dpPic, postImg}) => (
                    <div key={id} className="mb-16">
                      {/* profile info section */}
                      <div className="mb-3 flex items-center">
                        <Image
                          src={dpPic}
                          alt="profile dp"
                          className="w-[40px] rounded-full"
                        />
                        <h1 className={` ${poppins.className} font-semibold text-lg ms-3 `}>{name}</h1>
                      </div>
                      {/* image section  */}
                        <Image
                          src={postImg}
                          alt="post image"
                          className="w-full "
                        />
                        {/* TOOLS SECTION --------------------------------  */}
                      <div className="flex justify-between items-center mt-4 ">
                        <div className="flex gap-4">
                          <Image
                          src={heartLogo}
                          alt="heart logo"
                          className="w-6"
                        />
                          <Image
                          src={commentLogo}
                          alt="heart logo"
                          className="w-5 h-5"
                        />

                        </div>
                        <div>
                          <Image
                          src={dotLogo}
                          alt="heart logo"
                          className="w-6"
                        />
                        </div>
                      </div>
                    </div>
                ))
            }
        </div>
      </div>
    </main>
  );
};

export default UserHome;
