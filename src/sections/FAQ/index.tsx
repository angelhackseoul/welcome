import React from "react";
import { Container } from "reactstrap";
import "./index.css";

export class FAQ extends React.Component {
    public render() {
        return (
            <section id="faq">
                <Container>
                    <h1 className="faq-heading">자주 묻는 질문</h1>
                </Container>
            </section>
        );
    }
}
