import React from "react";
import { Container } from "reactstrap";
import "./index.css";

export class Hosts extends React.Component {
    public render() {
        return (
            <section id="hosts">
                <Container>
                    <h1 className="hosts-heading">주최</h1>
                </Container>
            </section>
        );
    }
}
