// "use client"
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <div className="bg-gray-400 mx-4 md:mx-52 my-10 p-4 flex flex-col md:flex-row items-center ustify-center justify-around rounded-md">
//       <Link href="/project" className="text-white text-lg hover:underline">
//         Project
//       </Link>
//       <Link href="/about" className="text-white text-lg hover:underline">
//         About
//       </Link>
//       <Link href="/other" className="text-white text-lg hover:underline">
//         Other
//       </Link>
//     </div>
//   );
// }

"use client";

import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";

const Navbar = () => {
  const navLinks = [
    { href: "/project", label: "Project" },
    { href: "/about", label: "About" },
    { href: "/other", label: "Other" },
  ];

  return (
    // flex justify-center mt-navbar
    <div className="flex justify-center mt-navbar">
      <nav className="bg-opacity-50 backdrop-blur-md fixed top-3 w-full max-w-screen-md rounded-xl z-50 shadow-md">
        <div className="container mx-auto p-3">
          {/* Desktop Navbar */}
          <div className="">
            <div className="hidden md:flex justify-around items-center">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-gray-700 hover:text-black px-3 py-2 rounded-sm text-lg font-medium"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className="md:hidden flex justify-between items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-black focus:outline-none">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {navLinks.map(({ href, label }) => (
                  <DropdownMenuItem key={href}>
                    <Link
                      href={href}
                      className="block w-full text-gray-700 hover:text-black px-2 py-1 text-sm"
                    >
                      {label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
