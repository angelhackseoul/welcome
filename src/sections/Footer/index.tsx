import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./index.css";
import FacebookIcon from "images/sns_facebook.svg";
import InstagramIcon from "images/sns_instagram.svg";
import TwitterIcon from "images/sns_twitter.svg";

export class Footer extends React.Component {
    public render() {
        return (
            <section id="footer">
                <Container>
                    <Row>
                        <Col>
                            <span className="footer-message">
                                © 2020 AngelHack Seoul. All Rights Reserved.
                            </span>
                        </Col>
                        <Col>
                            <div className="footer-sns-icons">
                                <img src={FacebookIcon} alt="Facebook" />
                                <img src={InstagramIcon} alt="Instagram" />
                                <img src={TwitterIcon} alt="Twitter" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
