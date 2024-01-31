"use client";
import React, { useEffect ,useState } from "react";
import Button from "../Button/Button";
import Image from "next/image";

export default function Navbar() {

  const [isScreenScrolled, setisScreenScrolled] = useState(false);
  const [ishide, setHide] = useState(false);
  const addShadowtoNav = () => {
    
    window.scrollY >= 50 ? setisScreenScrolled(true) : window.screenY <=200 && setisScreenScrolled(false)
    window.scrollY >= 200 ? setHide(true) : setHide(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', addShadowtoNav);
    return () => {
      window.removeEventListener('scroll', addShadowtoNav);
    };
  }, []);



  useEffect(() => {
    import("preline");

  }, []);

//${isScreenScrolled && 'right-[10px] md:right-0 p-2 md:p-0 fixed !z-10 !bg-white md:w-[95%] w-[90%] mx-auto '}

  return (


    <header className={`
    ${isScreenScrolled && '   fixed  bg-white !z-10 top-0 right-[12px] '} 
    ${ishide && '  -translate-y-5  opacity-0   duration-700 transition-all '} 
    
    flex-wrap sm:justify-start sm:flex-nowrap w-full bg-transparent text-sm py-3`}>
      <nav
        className="max-w-[85rem] w-full mx-auto flex flex-wrap basis-full items-center justify-between"
        aria-label="Global"
      >
        <a
          className="sm:order-1 flex-none text-xl font-semibold dark:text-white"
          href="#"
        >
          <Image
            src="/assets/logo.png"
            width={0}
            height={0}
            alt="Logo"
            sizes="100vw"
            style={{ width: "18rem", height: "auto" }} // optional
            quality={100}
          />
        </a>
        <div className="sm:order-3 flex items-center gap-x-2">
          <button
            type="button"
            className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-collapse="#navbar-alignment"
            aria-controls="navbar-alignment"
            aria-label="Toggle navigation"
          >
            <svg
              className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          <Button>قم بمراسلتنا</Button>
        </div>
        <div
          id="navbar-alignment"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5 lg:ps-0 lg:me-2">
            <a
              className="font-medium active-link dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
              aria-current="page"
            >
              Gibson
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Gree
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              White-Wistinghouse
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              حول الشركة
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
