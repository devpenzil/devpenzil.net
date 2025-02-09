import React from "react";
import Spacer from "./Spacer";
import Link from "next/link";

function Footer() {
  return (
    <>
      <Spacer gap="h-20" />
      <hr />
      <footer className="footer text-base-content p-10">
        <aside>
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content w-8 rounded-full">
              <span className="text-xs">UI</span>
            </div>
          </div>
          <p>
            Developed by Ajo Alex
            <br />
            Built with Next, Tailwind and Supabase
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">General</h6>
          <a className="link link-hover">
            <Link href={"/"}>Home</Link>
          </a>
          <a className="link link-hover">
            <Link href={"/about"}>About</Link>
          </a>
          <a className="link link-hover">
            <Link href={"/projects"}>Project </Link>
          </a>
          <a className="link link-hover">
            <Link href={"/blogs"}>Blog</Link>
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Specifics</h6>
          <a className="link link-hover">
            <Link href={"/stats"}>Stats</Link>
          </a>
          <a className="link link-hover">
            <Link href={"/"}>Toolbox </Link>
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Extra</h6>
          <a className="link link-hover">
            <Link href={"/resume"}>Resume</Link>
          </a>
          <a className="link link-hover">
            <Link href={"/sponsor"}>Sponsor</Link>
          </a>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
