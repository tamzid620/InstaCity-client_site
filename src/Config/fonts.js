import {  Roboto, Tangerine, Tektur } from "next/font/google";


export const tektur = Tektur ({
    weight: ["400", "500","600", "700", "800", "900"], 
     subsets: ["latin"],
      preload: true, 
 });
 
 export const poppins = Roboto ({
    weight: [ "100", "200", "300", "400","500", "600", "700", "800", "900"], 
    subsets: ["latin"],
     preload: true, 
 });

 export const tangerine = Tangerine ({
    weight: [  "400", "700" ], 
    subsets: ["latin"],
     preload: true, 
 });


