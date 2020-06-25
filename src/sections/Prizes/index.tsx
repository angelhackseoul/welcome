import React from "react";
import { Container, Row, Col } from "reactstrap";
import { PrizeItem } from "components/PrizeItem";

import Beside from "images/prizes/beside.png";
import CommonComputer from "images/prizes/common_computer.png";
import DCamp from "images/prizes/dcamp.png";
import FastCampus from "images/prizes/fast_campus.png";
import TableManager from "images/prizes/table_manager.png";
import Woowa from "images/prizes/woowa.png";

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
                        <Col md="6" lg="3">
                            <PrizeItem image={CommonComputer} />
                        </Col>
                        <Col md="6" lg="3">
                            <PrizeItem image={Woowa} />
                        </Col>
                        <Col md="6" lg="3">
                            <PrizeItem image={FastCampus} />
                        </Col>
                        <Col md="6" lg="3">
                            <PrizeItem image={TableManager} />
                        </Col>
                    </Row>
                    <h2 className="prizes-subheading">특별 상품 (Pop Prize)</h2>
                    <Row>
                        <Col md="6" lg="6">
                            <PrizeItem image={Beside} pop={true} />
                        </Col>
                        <Col md="6" lg="6">
                            <PrizeItem image={DCamp} pop={true} />
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
