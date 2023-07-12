"use client";

import { useEffect } from "react";
import Experiences from "./home/Experiences";
import HeaderCustom from "./home/HeaderCustom";
import Works from "./home/Works";
import Services from "./home/Services";
import Contact from "./home/Contact";
import { RecoilRoot } from "recoil";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div className="home">
        <HeaderCustom />
        <Works />
        <Experiences />
        <Services />
        <Contact />
      </div>
  );
}
