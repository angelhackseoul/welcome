import React from "react";
import { Container, Row, Col } from "reactstrap";
import { MentorItem } from "components/MentorItem";
import "./index.css";

export class Mentors extends React.Component {
    public render() {
        return (
            <section id="mentors">
                <Container>
                    <h1 className="mentors-heading">멘토</h1>
                    <p className="mentors-message">
                        해커톤의 참가팀들을 위해 8명의 현업 멘토들이 멘토로
                        참여하고 있습니다.
                    </p>
                    <Row>
                        <Col>
                            <MentorItem />
                        </Col>
                        <Col>
                            <MentorItem />
                        </Col>
                        <Col>
                            <MentorItem />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <MentorItem />
                        </Col>
                        <Col>
                            <MentorItem />
                        </Col>
                        <Col>
                            <MentorItem />
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
