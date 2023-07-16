import React, {useState} from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const hero = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false)

  const handleAbout = () => {
    router.push("/aboutme")
  }
  return (
    <>
      <div className="w-full">
        <p className="text-neutral-300 font-semibold text-xl">
          HI THERE!
        </p>
        <div className="flex w-full">
          <p className="text-white w-1/2 font-bold text-4xl font-outline-4 text-border">
            I'M{" "}
          </p>
          <span className="text-[#3b82f6] font-bold text-4xl font-outline-4 text-border pl-4 w-full -ml-[380px] ">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "ALI BALOCH",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "A WEB DEVELOPER",
                2000,
                "AN ANDROID DEVELOPER",
                2000,
              ]}
              wrapper="span"
              speed={250}
              repeat={Infinity}
            />
          </span>
        </div>
        <p className="text-white mt-4 text-lg w-2/3">
          I'm a talented and creative <b>Web</b> and <b>Android</b> developer
          based in
          <span className="font-bold">&nbsp;Pakistan</span>. With a passion for
          innovation, I transform ideas into captivating digital experiences. My
          expertise lies in crafting exceptional web applications and delightful
          Android interfaces. Let's bring your vision to life together!
        </p>
        <div className="mt-8 flex">
          <motion.button
            className="bg-[#3b82f6] flex px-5 py-2 font-bold text-white uppercase rounded-full hover:bg-[#94a3b8]/50 transition duration-300 animate__animated animate__pulse"
            whileTap={{ scale: 0.3 }}
          >
            <span className="mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="mt-[3px]" onClick={handleAbout}>More About me</span>
          </motion.button>
          <motion.button
            className="bg-transparent border-2 border-[#3b82f6] ml-8 flex px-9 py-2 font-bold text-white uppercase rounded-full hover:bg-[#3b82f6] transition duration-300 animate__animated animate__pulse"
            whileTap={{ scale: 0.3 }}
            onMouseEnter={() => setToggle(true)}
            onMouseLeave={() => setToggle(false)}
          >
            <span className={toggle ? "text-white" : "text-[#3b82f6]"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className={toggle ? "text-white" : "text-[#3b82f6]"}>Portfolio</span>
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default hero;
