"use client";
import React from "react";
import heart from "@/assests/icons/heart.png";
import filledHeart from "@/assests/icons/red-heart.png";
import commentlogo from "@/assests/icons/message.png";
import unknownPicture from "@/assests/images/unknown-picture.jpg";
import postImage1 from "@/assests/images/p1.jpg";
import postImage2 from "@/assests/images/p2.jpg";
import postImage3 from "@/assests/images/p3.jpg";
import postImage4 from "@/assests/images/p4.jpg";
import postImage5 from "@/assests/images/p5.jpg";
import Image from "next/image";

const postData = [
  {
    id: 1,
    dpPic: unknownPicture,
    postImg: postImage1,
  },
  {
    id: 2,
    dpPic: unknownPicture,
    postImg: postImage2,
  },
  {
    id: 3,
    dpPic: unknownPicture,
    postImg: postImage3,
  },
  {
    id: 4,
    dpPic: unknownPicture,
    postImg: postImage4,
  },
  {
    id: 5,
    dpPic: unknownPicture,
    postImg: postImage5,
  },
];

const UserHomePage = () => {
  return (
    <main>
      <div>
        <div className="pt-5">
            {
                postData.map(({id, dpPic, postImg}) => (
                    <div key={id} className="mb-5">
                        <Image
                          src={dpPic}
                          alt="profile dp"
                          className="w-[60] rounded-full"
                        />
                        <Image
                          src={postImg}
                          alt="post image"
                          className="w-full px-2"
                        />

                    </div>
                ))
            }
        </div>
      </div>
    </main>
  );
};

export default UserHomePage;
