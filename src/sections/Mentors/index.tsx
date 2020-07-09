import React from "react";
import { Container, Row, Col } from "reactstrap";
import { MentorItem } from "components/MentorItem";

import 강경완 from "images/mentors/강경완.png";
import 강상진 from "images/mentors/강상진.png";
import 김민우 from "images/mentors/김민우.png";
import 김영웅 from "images/mentors/김영웅.png";
import 김진아 from "images/mentors/김진아.png";
import 김진우 from "images/mentors/김진우.png";
import 박지민 from "images/mentors/박지민.png";
import 이동건 from "images/mentors/이동건.png";
import 이보라 from "images/mentors/이보라.png";
import 이희택 from "images/mentors/이희택.png";
import 예시카 from "images/mentors/예시카.png";
import 송요창 from "images/mentors/송요창.png";
import 신대휘 from "images/mentors/신대휘.png";
import 신수철 from "images/mentors/신수철.png";
import 장미영 from "images/mentors/장미영.png";
import 정성민 from "images/mentors/정성민.png";
import 정희재 from "images/mentors/정희재.png";
import 조난현 from "images/mentors/조난현.png";
import 올리비아하 from "images/mentors/올리비아하.png";
import 하희목 from "images/mentors/하희목.png";

import "./index.css";

export class Mentors extends React.Component {
    public render() {
        const xs = "12";
        const md = "6";
        const lg = "3";
        return (
            <section id="mentors">
                <Container>
                    <h1 className="mentors-heading">멘토</h1>
                    <p className="mentors-message">
                        해커톤의 참가팀들을 위해 20명의 현업 멘토들이 멘토로
                        참여하고 있습니다.
                    </p>
                    <Row style={{ marginBottom: "2.3em" }}>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={강경완} />
                        </Col>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={강상진} />
                        </Col>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={김민우} />
                        </Col>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={김영웅} />
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "2.3em" }}>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={김진아} />
                        </Col>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={김진우} />
                        </Col>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={박지민} />
                        </Col>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={송요창} />
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "2.3em" }}>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={신대휘} />
                        </Col>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={신수철} />
                        </Col>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={예시카} />
                        </Col>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={이동건} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={이보라} />
                        </Col>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={이희택} />
                        </Col>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={장미영} />
                        </Col>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={정성민} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={정희재} />
                        </Col>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={조난현} />
                        </Col>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={올리비아하} />
                        </Col>
                        <Col xs={xs} md={md} lg={lg}>
                            <MentorItem img={하희목} />
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
