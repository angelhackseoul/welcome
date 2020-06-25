import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { MissionItem } from "components/MissionItem";
import "./index.css";

import MissionEducation from "images/missions/mission_education.png";
import MissionBusiness from "images/missions/mission_business.png";
import MissionCoding from "images/missions/mission_coding.png";

import MissionEducationBackground from "images/missions/mission_education_background.png";
import MissionBusinessBackground from "images/missions/mission_business_background.png";
import MissionCodingBackground from "images/missions/mission_coding_background.png";

export const Missions = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="missions">
            <Container>
                <h1 className="missions-heading">도전과제</h1>
                <p className="missions-message">
                    <b>AngelHack Seoul 2020 Online</b> 해커톤은{" "}
                    <span className="missions-emphasis">
                        유엔이 제안하는 17가지의 지속 가능한 개발
                        목표(Sustainable Development Goals)
                    </span>
                    을 바탕으로 설계되었으며, 이 해커톤에서는 아래 6개의 선택
                    주제를 참가자들에게 제안합니다.
                </p>
                <Row style={{ marginBottom: "2em" }}>
                    <Col xs="12" lg="4" style={{ marginBottom: "30px" }}>
                        <MissionItem
                            name="커먼컴퓨터"
                            desc={`Ainize(오픈소스 프로젝트 배포 솔루션)를 활용한 코로나 시대를 헤쳐나갈 수 있는 모든 분야의 솔루션`}
                            openToggle={setIsOpen}
                            isOpen={isOpen}
                            image={
                                isOpen ? MissionCodingBackground : MissionCoding
                            }
                        />
                    </Col>
                    <Col xs="12" lg="4" style={{ marginBottom: "30px" }}>
                        <MissionItem
                            name="패스트캠퍼스"
                            desc={`코로나와 같은 재난 격리, 도서 산간 거주 등 불가피한 원격 상황에서도 학습 의지 부여와 완주율을 높이는 교육/학습 솔루션`}
                            openToggle={setIsOpen}
                            isOpen={isOpen}
                            image={
                                isOpen
                                    ? MissionEducationBackground
                                    : MissionEducation
                            }
                        />
                    </Col>
                    <Col xs="12" lg="4" style={{ marginBottom: "30px" }}>
                        <MissionItem
                            name="테이블매니저"
                            desc={`코로나로 인해 어려움을 겪는 소상공인을 돕는 솔루션을 통한 안정적이고 지속 가능한 도시`}
                            openToggle={setIsOpen}
                            isOpen={isOpen}
                            image={
                                isOpen
                                    ? MissionBusinessBackground
                                    : MissionBusiness
                            }
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
