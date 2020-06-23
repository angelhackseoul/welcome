import React from "react";
import { Container, Row, Col } from "reactstrap";
import { PrizeItem } from "components/PrizeItem";
import PopPrizeIcon from "images/pop_prize.svg";
import "./index.css";

export class Prizes extends React.Component {
    public render() {
        return (
            <section id="prizes">
                <Container>
                    <h1 className="prizes-heading">상금</h1>
                    <h2 className="prizes-subheading">
                        메인 상금 (Main Prize)
                    </h2>
                    <Row>
                        <Col>
                            <PrizeItem name="교육 챌린지" />
                        </Col>
                        <Col>
                            <PrizeItem name="교육 챌린지" />
                        </Col>
                        <Col>
                            <PrizeItem name="교육 챌린지" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <PrizeItem name="교육 챌린지" />
                        </Col>
                        <Col>
                            <PrizeItem name="교육 챌린지" />
                        </Col>
                        <Col>
                            <PrizeItem name="교육 챌린지" />
                        </Col>
                    </Row>
                    <h2 className="prizes-subheading">특별 상품 (Pop Prize)</h2>
                    <p className="prizes-message">
                        <b>AngelHack Seoul 2020 Online</b> 해커톤에서는
                        참가자들이 더욱 재밌게 참여할 수 있도록 해커톤 중간
                        중간에 깜짝 미션과 특별한 상품들을 준비하고 있습니다.
                        자세한 상품 내용은 추후 공개됩니다. 기대해주세요!
                    </p>
                </Container>
            </section>
        );
    }
}
