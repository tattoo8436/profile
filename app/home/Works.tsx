"use client";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import AvatarImage from "./avatar.png";
import Image from "next/image";
import { listBrands } from "../component/brands";

export default function Works() {
  return (
    <div className="home__works">
      <div className="home__works__name">{`I'm Kevin`}</div>

      <div className="home__works__avatar">
        <Image src={AvatarImage} alt="" height={90} />
      </div>

      <div className="home__works__job">
        SENIOR
        <br />
        FREELANCE
        <br />
        DESIGNER
      </div>

      <div className="home__works__description">
        <div className="home__works__description__title">
          {`Over the last 12 years, I've empowered 25+ companies`}
        </div>
        <div className="home__works__description__detail">
          {`Creating stunning designs that make a real impact`}
        </div>
      </div>

      <div className="home__works__brand">
        {listBrands?.map((i) => {
          return (
            <div key={i.id} className="home__works__brand__item">
              <Image src={i.url} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
