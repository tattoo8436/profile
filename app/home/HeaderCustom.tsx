"use client";

import {
  TwitterOutlined,
  DribbbleOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import classNames from "classnames";
import React, { useState } from "react";

export default function HeaderCustom() {
  const [menu, setMenu] = useState("WORKS");

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
          onClick={() => setMenu("SERVICES")}
        >
          Services
        </div>
        <div
          className={classNames("home__header__right__item", {
            active: menu === "CONTACT",
          })}
          onClick={() => setMenu("CONTACT")}
        >
          contact@kc.studio
        </div>
      </div>
    </div>
  );
}
