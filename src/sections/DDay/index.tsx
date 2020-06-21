import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./index.css";

export class DDay extends React.Component {
    public render() {
        return (
            <section id="d-day">
                <Container>
                    <Row>
                        <Col>
                            <span className="dday-heading">
                                등록 마감까지 남은 시간
                            </span>
                        </Col>
                        <Col>
                            <span className="dday-heading dday-heading-big">
                                00 : 00 : 00
                            </span>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
