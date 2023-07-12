"use client";

import {
  TwitterOutlined,
  DribbbleOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import classNames from "classnames";
import React, { useEffect, useState } from "react";

export default function HeaderCustom() {
  const [menu, setMenu] = useState("WORKS");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const sections: any = document.getElementsByClassName("section");
      //console.log(sections);
      for (let i = 0; i < sections.length; i++) {
        const sectionTop = sections[i].offsetTop;
        const sectionHeight = sections[i].offsetHeight;
        const sectionId = sections[i].getAttribute("id");
        //console.log(sectionId);
        if (
          scrollY + 100 >= sectionTop &&
          scrollY < sectionTop + sectionHeight
        ) {
          switch (sectionId) {
            case "works":
              setMenu("WORKS");
              break;
            case "experiences":
              setMenu("EXPERIENCES");
              break;
            case "services":
              setMenu("SERVICES");
              break;
            case "contact":
              setMenu("CONTACT");
              break;
            default:
              break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home__header">
      <div className="home__header__left">
        <TwitterOutlined
          className="clickable"
          style={{ fontSize: "24px", opacity: 0.5 }}
        />
        <DribbbleOutlined
          className="clickable"
          style={{ fontSize: "24px", opacity: 0.5 }}
        />
        <LinkedinOutlined
          className="clickable"
          style={{ fontSize: "24px", opacity: 0.5 }}
        />
      </div>

      <div className="home__header__right">
        <div
          className={classNames("home__header__right__item", {
            active: menu === "WORKS",
          })}
          onClick={() => {
            setMenu("WORKS");
            document
              .getElementById("works")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Works
        </div>
        <div
          className={classNames("home__header__right__item", {
            active: menu === "EXPERIENCES",
          })}
          onClick={() => {
            setMenu("EXPERIENCES");
            document
              .getElementById("experiences")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Experiences
        </div>
        <div
          className={classNames("home__header__right__item", {
            active: menu === "SERVICES",
          })}
          onClick={() => {
            setMenu("SERVICES");
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Services
        </div>
        <div
          className={classNames("home__header__right__item", {
            active: menu === "CONTACT",
          })}
          onClick={() => {
            setMenu("CONTACT");
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          contact@kc.studio
        </div>
      </div>
    </div>
  );
}
