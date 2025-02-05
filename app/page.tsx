"use client";
import { useState } from "react";
import Image from "next/image";
import { CiMenuBurger, CiCircleRemove } from "react-icons/ci";
import {
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import Card from "./card";
import GradientHeader from "./gradient-header";
import "./globals.css";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [avatarHover, setAvatarHover] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [background, setBackground] = useState("bg-gray-800");
  const [foreground, setForeground] = useState("text-gray-100");

  const navItems = [
    {
      id: "home",
      name: "Home",
      path: "/",
      target: "_self",
    },
    {
      id: "about",
      name: "About",
      path: "/about",
      target: "_self",
    },
  ];

  const socialIcons = [
    {
      id: "linkedin",
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com/in/jakebusse",
    },
    {
      id: "instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/jakerbusse",
    },
    {
      id: "bluesky",
      icon: <FaBluesky />,
      url: "",
    },
    {
      id: "email",
      icon: <FaEnvelope />,
      url: "https://instagram.com/jakerbusse",
    },
    {
      id: "phone",
      icon: <FaPhoneAlt />,
      url: "https://instagram.com/jakerbusse",
    },
  ];
  return (
    <div
      className={`w-screen h-screen gradient overflow-hidden flex flex-col gap-0`}
    >
      <nav
        className={`text-white absolute top-0 left-0 right-0 md:h-[100px] flex flex-no-wrap justify-between p-6 md:py-0 md:px-6 ${
          navOpen
            ? background +
              " z-40 fixed top-0 right-0 bottom-0 left-0 text-black flex-col align-center items-center"
            : "flex-row items-center"
        }`}
      >
        <h1
          className={`w-1/5 text-2xl font-medium ${
            navOpen ? "hidden" : "block"
          }`}
        >
          Jake Busse
        </h1>
        <div
          className={`rounded-md block p-2 cursor-pointer ${
            navOpen
              ? "place-self-end text-3xl border-none" + foreground
              : "border border-white"
          } md:hidden`}
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <CiCircleRemove /> : <CiMenuBurger />}
        </div>
        <ul
          className={`gap-6 ${
            navOpen
              ? "block text-primary flex flex-col items-center justify-center"
              : "hidden"
          } md:block md:flex md:flex-row`}
        >
          {navItems.map((navItem) => (
            <li
              key={navItem.id}
              className={`font-medium text-2xl bg-gradient-to-r from-primary via-primary to-secondary inline-block text-transparent bg-clip-text md:text-white md:font-normal md:text-base md:underline underline-offset-8 decoration-transparent hover:underline-offset-4 hover:decoration-white transition-all duration-500 ease-in-out`}
            >
              <a href={navItem.path} target={navItem.target}>
                {navItem.name}
              </a>
            </li>
          ))}
        </ul>
        <ul
          className={`md:w-1/5 flex flex-row justify-end gap-3 md:flex md:flex-row ${
            navOpen
              ? "block z-50 text-secondary"
              : "hidden md:block md:text-white"
          }`}
        >
          {socialIcons.map((socialIcon) => (
            <a href={socialIcon.url} target="_blank" key={socialIcon.id}>
              <li className="rounded-full md:border border-white p-3 transition duration-500 ease-in-out md:hover:text-primary md:hover:bg-white">
                {socialIcon.icon}
              </li>
            </a>
          ))}
        </ul>
      </nav>
      <div
        id="container"
        className="fixed top-[100px] right-0 bottom-0 left-0 overflow-scroll p-8 pt-0 gap-32 select-none"
      >
        <Card id="hero" bg="transparent" fg="white">
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <Image
              src={avatarHover ? "/main/avatar_wink.png" : "/main/avatar.png"}
              alt={"Jake Busse avatar"}
              width={150}
              height={150}
              onMouseEnter={() => setAvatarHover(true)}
              onMouseLeave={() => setAvatarHover(false)}
              className="transition-all duration-500 ease-in-out z-30"
            />
            <h2 className="text-4xl text-white font-medium text-center">
              Good Morning, I'm Jake
            </h2>
            <span className="text-2xl text-white text-center">
              Welcome to my humble corner of the web.
            </span>
          </div>
        </Card>
        <Card id="about" bg={background} fg={foreground}>
          <div className="w-full h-full flex flex-row flex-wrap justify-between">
            <div className="w-full md:w-2/3">
              <GradientHeader>About Me</GradientHeader>
              <p>A</p>
            </div>
            <div className="bg-[url(/main/headshot.png)] bg-center bg-contain bg-no-repeat md:bg-cover w-full min-h-full md:w-1/3 rounded-lg">
              &nbsp;
            </div>
          </div>
        </Card>
        <Card id="experience" bg={background} fg={foreground}>
          <GradientHeader>Experience</GradientHeader>
        </Card>
        <Card id="education" bg={background} fg={foreground}>
          <GradientHeader>Education</GradientHeader>
        </Card>
        <Card id="portfolio" bg={background} fg={foreground}>
          <GradientHeader>Portfolio</GradientHeader>
        </Card>
        <Card id="certifications" bg={background} fg={foreground}>
          <GradientHeader>Certifications</GradientHeader>
        </Card>
        <Card id="contact" bg={background} fg={foreground}>
          <GradientHeader>Contact</GradientHeader>
        </Card>
      </div>
    </div>
  );
}
