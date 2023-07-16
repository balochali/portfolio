import React from "react";
import "@fontsource/lilita-one";
import "@fontsource/indie-flower";
import "@fontsource/neucha";

const AboutMe = () => {
  return (
    <div className="h-[100vh]">
      <p
        className="text-5xl font-bold mt-24 text-center font-light tracking-widest text-black/80"
        style={{ fontFamily: "Lilita One" }}
      >
        About
        <span className="text-[#3b82f6] ml-2">Me</span>
      </p>
      <div className="flex place-content-center mt-6">
        <div className="border-t-2 w-10 -ml-14 mt-4 border-[#3b82f6]" />
        <p
          className="text-2xl text-center ml-14"
          style={{ fontFamily: "Neucha" }}
        >
          Code Crafting Marvels, Unleashing Digital Dreams
        </p>
        <div className="border-t-2 w-10 ml-14 mt-4 border-[#3b82f6]" />
      </div>
    </div>
  );
};

export default AboutMe;
