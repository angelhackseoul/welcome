import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./index.css";

export class Intro extends React.Component {
    public render() {
        return (
            <section id="intro">
                <Container fluid>
                    <Row>
                        <Col className="intro-left">
                            <div className="intro-wrapper">
                                <span className="intro-heading intro-black">
                                    <span className="intro-lightmark">
                                        1명이
                                    </span>{" "}
                                    수천명의 사람들을 <br />
                                    감염시킬 수 있습니다.
                                </span>
                                <p className="intro-message intro-black">
                                    2020년 초부터, 전 세계가 지금 COVID-19의
                                    영향으로 어려움을 겪고 있습니다. 광풍처럼
                                    빠른 확산 속도에 백신이 없는 상황 에서 많은
                                    사람들이 어려움을 겪고 있습니다. 매일 뉴스와
                                    신문 에는 확진자 숫자와 동선을 발표하고,
                                    하루 하루 우리는 불안감에 떨어야했습니다.
                                </p>
                                <p className="intro-message intro-black">
                                    남에게 피해주지 않도록, 사랑하는 이들을
                                    지키기 위해 우리는 스스로 마스크를 썼고, 몇
                                    주 동안이나 집 안에서 우리 스스로를
                                    격리해왔습니다.
                                </p>
                                <p className="intro-message intro-black">
                                    개학을 해야했던 학교들은 임시 휴교를 했고,
                                    확진자가 지나간 상점들과 도로, 건물들은 문을
                                    닫거나 심지어 폐업하기도 했습니다.
                                </p>
                                <p className="intro-message intro-black">
                                    갑작스러운 판데믹의 공포는 수 천명의
                                    일자리를 빼앗았고 또는 급여를 삭감하며
                                    우리의 일상을 완전히 바꾸었습니다.
                                </p>
                                <p className="intro-message intro-black">
                                    이처럼 개인의 일상에서부터 국가는 물론
                                    지역경제와 더불어 전세계적으로 코로나19
                                    확산에 따른 여파는 사상 유례없는 상황 으로
                                    치닫고 있습니다.
                                </p>
                            </div>
                        </Col>
                        <Col className="intro-right">
                            <div className="intro-wrapper">
                                <span className="intro-heading intro-white">
                                    <span className="intro-darkmark">
                                        1명이
                                    </span>{" "}
                                    수천명의 사람들에게 <br />
                                    선한 영향력을 발휘할 수 있습니다.
                                </span>
                                <p className="intro-message intro-white">
                                    이 어려운 시기 속에도 우리는 지혜로움을
                                    발휘하며 이겨내고 있습니다.
                                </p>
                                <p className="intro-message intro-white">
                                    한 청소년이 만든 확진자 통계 앱은 며칠만에
                                    화제가 되었고, 이로 수많은 사람들이 더
                                    안전하게 움직일 수 있게 되었습니다.
                                </p>
                                <p className="intro-message intro-white">
                                    한국의 기술력 높은 검진 키트와 드라이브 스루
                                    검진 방식 역시 전 세계 국가에서 환대를
                                    받으며 세계적인 영향력을 발휘하고 있습니다.
                                </p>
                                <p className="intro-message intro-white">
                                    지혜롭고 혁신적인 아이디어와 기술은 우리의
                                    삶과 세상을 더욱 안전하게 만들 수 있습니다.
                                    <span className="intro-darkmark">
                                        AngelHack Seoul 2020 Online
                                    </span>{" "}
                                    해커톤은 COVID-19와 같은 판데믹 속에 유엔이
                                    제안하는 지속가능한 개발목표 17가지를
                                    기반으로 설계되었으며, 여러분들의 지혜롭고
                                    혁신적인 아이디어와 기술을 기다립니다.
                                </p>
                                <p className="intro-message intro-white">
                                    이 해커톤은 단순히 아이디어 피칭으로 끝나는
                                    것이 아니라,{" "}
                                    <span className="intro-darkmark">
                                        3개의 수상 팀
                                    </span>
                                    은 상금과 함께 실리콘 밸리 출신의 전문가들이
                                    참여하는{" "}
                                    <span className="intro-darkmark">
                                        AngelHack 글로벌 인큐베이션 프로그램
                                    </span>
                                    에 참여할 수 있습니다.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
