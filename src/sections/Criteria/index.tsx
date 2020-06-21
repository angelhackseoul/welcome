import React from "react";
import { Container } from "reactstrap";
import "./index.css";

export class Criteria extends React.Component {
    public render() {
        return (
            <section id="criteria">
                <Container>
                    <h1 className="criteria-heading">심사 기준</h1>
                </Container>
            </section>
        );
    }
}
