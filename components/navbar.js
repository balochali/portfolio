import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHome, setIshome] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isPortfolio, setIsPortfolio] = useState(false);
  const [isContact, setIsContact] = useState(false);

  const divControls = useAnimation();

  const handleToggle = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      divControls.start({
        height: "353px",
        transition: { duration: 0.3 },
      });
    } else {
      divControls.start({
        height: "50px",
        transition: { duration: 0.3 },
      });
    }
  };

  const variants = {
    open: { rotate: 90, opacity: 1 },
    closed: { rotate: 0, opacity: 1 },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <div className="flex fixed">
        <motion.div
          className="text-white ml-12 mt-12 cursor-pointer bg-[#475569] rounded-full w-12 h-14"
          initial={{ height: "50px" }}
          animate={divControls}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="rounded-full w-12 h-12 px-2 py-2"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.3 }}
            onClick={handleToggle}
          >
            {isOpen ? (
              <motion.path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            ) : (
              <motion.path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            )}
          </motion.svg>
          {isOpen && (
            <>
              <motion.div
                className={
                  isHome
                    ? "text-white flex place-content-center border-r-4 border-[#3b82f6] mt-5 hover:text-[#3b82f6] transition duration-300 animate__animated animate__pulse"
                    : "text-white flex place-content-center border-r-4 border-white mt-5 hover:text-[#3b82f6] transition duration-300 animate__animated animate__pulse"
                }
                onMouseEnter={() => setIshome(true)}
                onMouseLeave={() => setIshome(false)}
                initial="hidden"
                variants={fadeInVariants}
                animate={isOpen ? "visible" : "hidden"}
                transition={{ duration: 0.8 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                  whileHover={{ scale: 1.1 }}
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </motion.svg>
              </motion.div>
              <br />
              <motion.div
                className={
                  isAbout
                    ? "text-white flex place-content-center border-r-4 border-[#3b82f6] mt-5 hover:text-[#3b82f6] transition duration-300 animate__animated animate__pulse"
                    : "text-white flex place-content-center border-r-4 border-white mt-5 hover:text-[#3b82f6] transition duration-300 animate__animated animate__pulse"
                }
                onMouseEnter={() => setIsAbout(true)}
                onMouseLeave={() => setIsAbout(false)}
                initial="hidden"
                variants={fadeInVariants}
                animate={isOpen ? "visible" : "hidden"}
                transition={{ duration: 0.8 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                  whileHover={{ scale: 1.1 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </motion.div>
              <br />
              <motion.div
                className={
                  isPortfolio
                    ? "text-white flex place-content-center border-r-4 border-[#3b82f6] mt-5 hover:text-[#3b82f6] transition duration-300 animate__animated animate__pulse"
                    : "text-white flex place-content-center border-r-4 border-white mt-5 hover:text-[#3b82f6] transition duration-300 animate__animated animate__pulse"
                }
                onMouseEnter={() => setIsPortfolio(true)}
                onMouseLeave={() => setIsPortfolio(false)}
                initial="hidden"
                variants={fadeInVariants}
                animate={isOpen ? "visible" : "hidden"}
                transition={{ duration: 0.8 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                  whileHover={{ scale: 1.1 }}
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
                </motion.svg>
              </motion.div>
              <br />
              <motion.div
                className={
                  isContact
                    ? "text-white flex place-content-center border-r-4 border-[#3b82f6] mt-5 hover:text-[#3b82f6] transition duration-300 animate__animated animate__pulse"
                    : "text-white flex place-content-center border-r-4 border-white mt-5 hover:text-[#3b82f6] transition duration-300 animate__animated animate__pulse"
                }
                onMouseEnter={() => setIsContact(true)}
                onMouseLeave={() => setIsContact(false)}
                initial="hidden"
                variants={fadeInVariants}
                animate={isOpen ? "visible" : "hidden"}
                transition={{ duration: 0.8 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </motion.div>
            </>
          )}
        </motion.div>

        {isHome && (
          <>
            <motion.div
              className="mt-[117px] ml-4"
              initial="hidden"
              animate={isHome ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#3b82f6] font-semibold text-lg">Home</p>{" "}
            </motion.div>
            <div className="-ml-[65px]" />
          </>
        )}
        {isAbout && (
          <>
            <motion.div
              className="mt-[187px] ml-4"
              initial="hidden"
              animate={isAbout ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#3b82f6] font-semibold text-lg">About</p>{" "}
            </motion.div>
            <div className="-ml-[67px]" />
          </>
        )}
        {isPortfolio && (
          <>
            <motion.div
              className="mt-[259px] ml-4"
              initial="hidden"
              animate={isPortfolio ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#3b82f6] font-semibold text-lg">Portfolio</p>{" "}
            </motion.div>
            <div className="-ml-[87px]" />
          </>
        )}
        {isContact && (
          <>
            <motion.div
              className="mt-[331px] ml-4"
              initial="hidden"
              animate={isContact ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#3b82f6] font-semibold text-lg">Contact</p>{" "}
            </motion.div>
            <div className="-ml-[80px]" />
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
