"use client";

import React from "react";
import CustomScroll from "./customscroll";
import Image from "next/image";

export default function App() {
  return (
    <>
      <div className="container"> {/* Apply the 'container' class */}
        <Image className="logo" src="/ribbiot-logo.png" width={100} height={100} />{" "}
      </div>
      <CustomScroll />
    </>
  );
}