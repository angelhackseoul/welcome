import React from "react";
import { Container } from "reactstrap";
import "./index.css";

export class Rules extends React.Component {
    public render() {
        return (
            <section id="rules">
                <Container>
                    <h1 className="rules-heading">규칙</h1>
                </Container>
            </section>
        );
    }
}
