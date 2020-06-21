import React from "react";
import { Container } from "reactstrap";
import "./index.css";

export class Judges extends React.Component {
    public render() {
        return (
            <section id="judges">
                <Container>
                    <h1 className="judges-heading">심사위원</h1>
                </Container>
            </section>
        );
    }
}
