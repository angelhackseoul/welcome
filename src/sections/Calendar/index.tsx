import React from "react";
import { Container } from "reactstrap";
import "./index.css";

export class Calender extends React.Component {
    public render() {
        return (
            <section id="calendar">
                <Container>
                    <h1 className="calendar-heading">일정</h1>
                </Container>
            </section>
        );
    }
}
