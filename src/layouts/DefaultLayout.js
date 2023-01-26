import Head from "next/head";
import { useState, useEffect, cloneElement, useRef } from "react";
import { HeaderApp } from "../components/HeaderApp";
import { SideBar } from "../components/SideBar";

export const DefaultLayout = ({ children }) => {
  return (
    <div
      className={`relative 
      } h-full mx-auto contentWrapper`}
    >
      <Head>
        <title>Survey Management</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="preload"
          as="font"
          href="/fonts/Heading-Pro-Bold-trial.ttf"
        /> */}
        <meta name="keywords" content="buyer profile"></meta>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#317EFB" />
        <meta name="description" content={"a surveys magement"}></meta>
      </Head>
      <HeaderApp />
      <SideBar />
      {cloneElement(children)}
    </div>
  );
};
