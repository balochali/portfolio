import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="mt-80 flex place-content-end mr-40">
      <Image
        src="/img/profile.jpg"
        width={400}
        height={400}
        alt=""
        className="rounded-full border-4 border-[#3b82f6]"
      />
    </div>
  );
};

export default HeroImage;
