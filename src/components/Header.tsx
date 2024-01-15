import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import organization from "../assets/organization.svg";
export function Header() {
  return (
    <header>
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-darkThemeColor rounded-lg">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex">
            <a href="https://flowbite.com" className="flex items-center mr-10">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                BitTest
              </span>
            </a>

            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <div className="hidden sm:inline-flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                <img src={organization} className="px-2" />
                Моя организация
              </div>
            </div>
          </div>
          <div className="flex items-center lg:order-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <a
                href="#"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Администратор
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
