"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CiMenuBurger, CiCircleRemove } from "react-icons/ci";
import {
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import Card from "./main/card";
import GradientHeader from "./gradient-header";
import "./globals.css";
import "./main/main.css";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [avatarHover, setAvatarHover] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [background, setBackground] = useState("bg-gray-800");
  const [foreground, setForeground] = useState("text-gray-100");
  const [specialCursor, setSpecialCursor] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = Number(
    new Intl.DateTimeFormat("en-GB", {
      hour: "numeric",
      hour12: false,
    }).format(time)
  );

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
      nav: true,
    },
    {
      id: "instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/jakerbusse",
      nav: false,
    },
    {
      id: "bluesky",
      icon: <FaBluesky />,
      url: "https://bsky.app/profile/jakerbusse.bsky.social",
      nav: false,
    },
    {
      id: "email",
      icon: <FaEnvelope />,
      url: "mailto:jakerbusse@outlook.com",
      nav: true,
    },
    {
      id: "phone",
      icon: <FaPhoneAlt />,
      url: "tel:6516051932",
      nav: true,
    },
  ];

  const cards = [
    {
      id: "hero",
      key: 1,
      bg: "transparent",
      fg: "white",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <Image
            src={avatarHover ? "/main/avatar_wink.png" : "/main/avatar.png"}
            alt={"Jake Busse avatar"}
            width={100}
            height={100}
            onMouseEnter={() => setAvatarHover(true)}
            onMouseLeave={() => {
              setAvatarHover(false);
              setSpecialCursor(true);
            }}
            className="transition-all duration-500 ease-in-out z-30 w-auto h-auto"
            priority
          />
          <h2 className="text-4xl text-white font-medium text-center">
            Good{" "}
            {formattedTime < 12
              ? "Morning"
              : formattedTime === 12
              ? "Day"
              : formattedTime > 12 && formattedTime < 5
              ? "Afternoon"
              : "Evening"}
            , I'm Jake
          </h2>
          <span className="text-2xl text-white text-center">
            Welcome to my humble corner of the web.
          </span>
        </div>
      ),
    },
    {
      id: "about",
      key: 2,
      content: (
        <div className="w-full h-full flex flex-row flex-no-wrap gap-6 justify-between">
          <div className="w-full md:w-2/3 space-y-4">
            <GradientHeader>About Me</GradientHeader>
            <p>Hey, I’m Jake.</p>
            <p>
              I’m a firm believer that curiosity and caffeine fuel the best
              ideas. Whether I’m troubleshooting a stubborn piece of technology
              or diving into a new topic just for the thrill of learning, I’m
              always looking for ways to make things work better, faster, and
              smarter.
            </p>
            <p>
              Beyond the world of IT, I’m an avid thinker, road trip planner,
              and proud cat parent. My four feline companions keep me grounded
              (and mildly entertained), proving that life is best balanced
              between structured problem-solving and spontaneous chaos.
            </p>
            <p>
              I thrive on understanding how things work—whether it’s technology,
              systems, or people. My approach to life is a mix of pragmatism,
              humor, and just enough overthinking to keep things interesting.
              While I spend plenty of time in the tech world, I believe the best
              solutions come from looking beyond the screen and connecting with
              people.
            </p>
            <p>
              When I’m not deep in a project or wrangling my ever-growing to-do
              list, you’ll probably find me exploring new places or planning my
              next adventure. Always happy to chat—especially if it involves
              tech, cats, or something interesting to figure out!
            </p>
          </div>
          <div className="hidden md:block bg-[url(/main/headshot.png)] bg-center bg-contain bg-no-repeat md:bg-cover w-full min-h-full md:w-1/3 rounded-lg">
            &nbsp;
          </div>
        </div>
      ),
    },
    {
      id: "experience",
      key: 3,
      content: <GradientHeader>Experience</GradientHeader>,
    },
    {
      id: "education",
      key: 4,
      content: <GradientHeader>Education</GradientHeader>,
    },
    {
      id: "portfolio",
      key: 5,
      content: <GradientHeader>Portfolio</GradientHeader>,
    },
    {
      id: "certifications",
      key: 6,
      content: <GradientHeader>Certifications</GradientHeader>,
    },
    {
      id: "contact",
      key: 7,
      content: <GradientHeader>Contact</GradientHeader>,
    },
  ];

  return (
    <div
      className={`w-screen h-screen gradient overflow-hidden flex flex-col gap-0 fixed top-0 bottom-0 left-0 right-0 ${
        specialCursor ? "specialCursor" : "normalCursor"
      }`}
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
          {socialIcons
            .filter((socialIcon) => socialIcon.nav)
            .map((socialIcon) => (
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
        className="fixed top-[100px] right-0 bottom-0 left-0 overflow-y-scroll p-8 pt-0 gap-32 select-none focus:outline-none"
      >
        {cards.map((card) => (
          <Card
            key={card.key}
            id={card.id}
            bg={card.bg ? card.bg : background}
            fg={card.fg ? card.fg : foreground}
          >
            {card.content}
          </Card>
        ))}
      </div>
    </div>
  );
}
