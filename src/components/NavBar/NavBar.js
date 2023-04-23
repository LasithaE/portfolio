import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  console.log(openNav);
  return (
    <div className="hidden md:block pb-[30px] pt-[30px] fixed w-full bg-bodyColorLight max-h-[80px]">
      <div className="text-black mb-[20px] float-right">
        <Link href="/" className="mr-6 mt-9 font-semibold">
          About
        </Link>
        <Link
          href="/#projects"
          smooth={true}
          className="mr-6 mt-9 font-semibold"
        >
          Projects
        </Link>
        <Link href="/#skills" smooth={true} className="mr-6 mt-9 font-semibold">
          Skills
        </Link>
        <Link href="/#blogs" smooth={true} className="mr-6 mt-9 font-semibold">
          Blogs
        </Link>
        <Link
          href="/#resume"
          smooth={true}
          className="mr-6 mt-[29px] font-semibold border-solid border-2 px-2 py-1 mb-3 rounded-lg border-borderColorLight"
        >
          Resume
        </Link>
      </div>
      <div onClick={() => setOpenNav(!openNav)}>
        {openNav ? (
          <>
            <div className="block md:hidden fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-bodyColorLight h-screen">
              <div className="float-right mr-6 mt-6">
                <FontAwesomeIcon icon={faClose} size="xl" color="#9D5353" />
              </div>
              <div className="flex flex-col items-center justify-center pt-[25%] pl-2">
                <Link
                  href="/"
                  className="p-2 mr-6 mt-9 font-semibold hover:bg-darkPinkColor hover:border-transparent hover: rounded-md"
                >
                  About
                </Link>

                <Link
                  href="/projects"
                  className="mr-6 p-2 mt-9 font-semibold hover:bg-darkPinkColor hover:border-transparent hover: rounded-md"
                >
                  Projects
                </Link>
                <Link
                  href="/skills"
                  className="mr-6 p-2 mt-9 font-semibold hover:bg-darkPinkColor hover:border-transparent hover: rounded-md"
                >
                  Skills
                </Link>

                <Link
                  href="/blogs"
                  className="mr-6 p-2 mt-9 font-semibold hover:bg-darkPinkColor hover:border-transparent hover: rounded-md"
                >
                  Blogs
                </Link>

                <Link
                  href="/resume"
                  className="mr-6 p-2 mt-[29px] font-semibold border-solid border-2 px-2 py-1 mb-3 rounded-lg border-borderColorLight hover:bg-darkPinkColor"
                >
                  Resume
                </Link>
              </div>
            </div>
          </>
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            className="block float-right mr-6 mt-6 md:hidden"
            color="#9D5353"
          />
        )}
      </div>
    </div>
  );
};
export default NavBar;
