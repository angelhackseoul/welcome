import React from "react";
import { Container, Row, Col } from "reactstrap";
import { CriteriaItem } from "components/CriteriaItem";
import "./index.css";

export class Criteria extends React.Component {
    public render() {
        return (
            <section id="criteria">
                <Container>
                    <h1 className="criteria-heading">심사 기준</h1>
                    <p className="criteria-message">
                        각 제출물은 <b>최소 점수 0점</b>과 <b>최대 점수 25점</b>
                        으로 다음 기준에 따라 각 라운드에서 채점됩니다.{" "}
                        <b>최종 점수</b>는 심사위원들의 평균 점수입니다.
                    </p>
                    <Row>
                        <Col>
                            <CriteriaItem />
                        </Col>
                        <Col>
                            <CriteriaItem />
                        </Col>
                        <Col>
                            <CriteriaItem />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CriteriaItem />
                        </Col>
                        <Col>
                            <CriteriaItem />
                        </Col>
                        <Col>
                            <CriteriaItem />
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
