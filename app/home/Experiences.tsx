"use client";

import React from "react";
import { listProcesses } from "../common/processes";
import { Card, Carousel, Col, Row } from "antd";
import Image from "next/image";
import { listFeedbacks } from "../common/feedbacks";

export default function Experiences() {
  return (
    <div className="home__experiences" id="experiences">
      <div className="home__experiences__header">
        <div className="home__experiences__header__title">12+ YEARS XP</div>

        <div className="home__experiences__header__detail">
          <div className="home__experiences__header__detail__title">
            From Saas to Website & Mobile
          </div>

          <div className="home__experiences__header__detail__description">
            {`I’ve had the opportunity to work across all kinds of product`}
          </div>
        </div>
      </div>

      <div className="home__experiences__processes">
        <Row>
          {listProcesses?.map((i) => {
            return (
              <Col key={i.id}>
                <Card className="home__experiences__processes__item" hoverable>
                  <div className="processes__time">{i.time}</div>

                  <div className="processes__image">
                    <Image src={i.image} alt="" />
                  </div>

                  <div className="processes__name">{i.name}</div>

                  <div className="processes__cc">{i.cc}</div>

                  <div className="processes__flag">
                    <Image src={i.flag} alt="" />
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>

      <div className="home__experiences__feedback">
        <Carousel autoplay>
          {listFeedbacks?.map((i) => {
            return (
              <Card key={i.id} className="home__experiences__feedback__item">
                <div className="feedback__avatar">
                  <Image src={i.avatar} alt="" />
                </div>

                <div className="feedback__name">{i.name}</div>

                <div className="feedback__position">
                  <span className="feedback__position__position">
                    {i.position}
                  </span>{" "}
                  <span className="highlight clickable">{i.cc}</span>
                </div>

                <div className="feedback__content">{i.feedback}</div>
              </Card>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
