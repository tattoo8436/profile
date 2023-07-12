import React from "react";
import { listTagSkills } from "../common/tagSkills";
import { listCardSkills } from "../common/cardSkill";
import { listIconSkills } from "../common/iconSkills";
import Image from "next/image";
import { Card, Col, Row } from "antd";

export default function Services() {
  return (
    <div className="home__services section" id="services">
      <div className="home__services__group">
        <div className="home__services__title">SERVICES</div>

        <Row className="home__services__tag-skill">
            {listTagSkills?.map((i) => {
              return (
                <Col className="home__services__tag-skill__item" key={i.id}>
                  <div className="tag-skill__icon">
                    <Image
                      src={require("../../public/icons/icon_check.svg")}
                      alt=""
                    />
                  </div>

                  <div className="tag-skill__name">{i.name}</div>
                </Col>
              );
            })}
        </Row>
      </div>

      <div className="home__services__text">
        <div className="home__services__text__title">
          Product, Website or Brand Design, I've got you covered!
        </div>

        <div className="home__services__text__content">
          Let's elevate your vision and achieve your design goals together!
        </div>
      </div>

      <div className="home__services__card-skill">
        {listCardSkills?.map((i) => {
          return (
            <Card
              key={i.id}
              className="home__services__card-skill__item"
              hoverable
            >
              <div className="card-skill__left">
                <Image src={i.icon} alt="" />
              </div>

              <div className="card-skill__right">
                <div className="card-skill__right__name">{i.name}</div>

                <div className="card-skill__right__description">
                  {i.description}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="home__services__icon-skill">
        <div className="home__services__icon-skill__wrapper">
          {listIconSkills?.map((i) => {
            return (
              <div key={i.id} className="icon-skill">
                <Image src={i.icon} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
