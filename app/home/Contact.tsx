import {
  CiCircleFilled,
  DribbbleOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="home__contact section" id="contact">
      <div className="home__contact__title">CONTACT</div>

      <div className="home__contact__card">
        <Row>
          <Col xs={24} lg={14} className="home__contact__card__left">
            <div className="left__header">
              <div className="left__header__avatar">
                <Image src={require("../../public/images/avatar.png")} alt="" />
              </div>

              <div className="left__header__status">
                <div className="left__header__status__icon"></div>

                <div className="left__header__status__text">
                  Available for work
                </div>
              </div>
            </div>

            <div className="left__content">
              <div className="left__content__title">
                Drop me a line or say 👋 on social networks
              </div>

              <div className="left__content__content">
                Whether you're a design team in need of support or an
                early-stage company looking to level up your design, I'd love to
                talk about your project 💜
              </div>
            </div>
          </Col>

          <Col xs={24} lg={10} className="home__contact__card__right">
            <div className="right__icon">
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

              <FacebookOutlined
                className="clickable"
                style={{ fontSize: "24px", opacity: 0.5 }}
              />
            </div>

            <div className="right__btn clickable">
              Let’s create magic together ✨
            </div>
          </Col>
        </Row>
      </div>

      <div className="home__contact__logo">
        <Image src={require("../../public/images/contact_logo.png")} alt="" />
      </div>

      <div className="home__contact__contact">
        <div className="home__contact__contact__content">
          <span>Cooked with love in</span>
          <Image src={require("../../public/icons/contact_icon1.svg")} alt="" />
          <span>with</span>
          <Image src={require("../../public/icons/contact_icon2.png")} alt="" />
          <span>&</span>
          <Image src={require("../../public/icons/contact_icon3.png")} alt="" />
        </div>
      </div>

      <div className="home__contact__author">©kcstudio 2023</div>
    </div>
  );
}
