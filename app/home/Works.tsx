"use client";

import { Avatar, Card, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import AvatarImage from "../../public/images/avatar.png";
import Image from "next/image";
import { listBrands } from "../common/brands";
import { listProducts } from "../common/products";

export default function Works() {
  return (
    <div className="home__works" id="works">
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
        <Row className="home__works__brand__content">
          {listBrands?.map((i) => {
            return (
              <Col key={i.id} className="home__works__brand__item">
                <Image src={i.url} alt="" />
              </Col>
            );
          })}
        </Row>
      </div>

      <div className="home__works__product">
        <Row>
          {listProducts?.map((i) => {
            return (
              <Col key={i.id}>
                <Card className="home__works__product__item" hoverable>
                  <div className="product__image">
                    <Image src={i.image} alt="" />
                  </div>

                  <div className="product__detail">
                    <div className="product__detail__logo">
                      <Image src={i.logo} alt="" />
                    </div>
                    <div className="product__detail__content">
                      <div className="product__detail__content__name">
                        {i.name}
                      </div>
                      <div className="product__detail__content__description">
                        {i.description}
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
