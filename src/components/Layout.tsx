import React from "react";
import Meta from "./Meta";
import {  Open_Sans, Raleway } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

// const brunoAceSc = Bruno_Ace_SC({
//   subsets: ["latin"],
//   variable: "--font-bruce-ace-sc",
//   weight: "400",
// });

const Layout = ({ children }: any) => {
  return (
    <main className={` ${raleway.variable} ${openSans.className}  font-sans`}>
      <Meta />

      <div className="">{children}</div>
    </main>
  );
};

export default Layout;
