import Link from "next/link";
import React from "react";
import { useAuth } from "../../context/AuthContext";
import LogoutButton from "../authentication/LogoutButton";

export default function Header() {
  const { currentUser } = useAuth();
  return (
    <header className="w-full absolute z-10 px-8 md:px-12 lg:px-24 py-4 flex flex-col gap-4 justify-between items-center lg:items-end lg:flex-row lg:gap-6">
      {/* Left side */}
      <div className="flex gap-20 items-end shrink-0">
        <Link href={"/"}>
          <div className="w-fit md:shrink-0">
            <p className="text-3xl font-bold link">Quizzz</p>
          </div>
        </Link>
      </div>

      {/* Right side */}
      <div className="flex flex-row gap-10 items-center justify-center lg:justify-end shrink">
        <nav className="flex">
          <ul className="flex gap-6 justify-start">
            <li className="link text-xl">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="link text-xl">
              <a
                href="https://www.github.com/rijalghodi"
                rel="noreferrer"
                target="_blank"
              >
                About
              </a>
            </li>
            {/* <li className="link"></li> */}
          </ul>
        </nav>
        <div>
          {currentUser ? (
            <LogoutButton />
          ) : (
            <div className="flex gap-3">
              <Link href={"/login"}>
                <button className="w-28 button primary-button">Log In</button>
              </Link>
              <Link href={"/signup"}>
                <button className="w-32 button secondary-button">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Mobile Version */}
    </header>
  );
}
