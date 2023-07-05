"use client";

import { useEffect } from "react";
import Experiences from "./home/Experiences";
import HeaderCustom from "./home/HeaderCustom";
import Works from "./home/Works";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <HeaderCustom />
      <Works />
      <Experiences />
    </div>
  );
}
