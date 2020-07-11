import React from "react";
import { Container } from "reactstrap";
import "./index.css";

export const Jumbotron = (props: any) => {
    return (
        <section id="jumbotron">
            <Container>
                <span className="jumbotron-heading">
                    ANGELHACK <br />
                    SEOUL 2020 <br />
                    ONLINE
                </span>
                <p className="jumbotron-message">
                    <b>AngelHack Seoul 2020 Online - “위기 속의 창의성”</b>은
                    COVID-19으로 인한 <br />
                    문제에 대처하기 위한 기술 솔루션을 만드는 것을 목표로 하는
                    온라인 해커톤입니다. <br /> <br />
                    <b>
                        참가 신청 : ~ 7월 10일 (금) <br />
                        행사 기간 : 7월 13일 (월) ~ 7월 19일 (일) <br />
                        심사 기간 : 7월 20일 (월) ~ 7월 22일 (수) <br />
                    </b>
                    <button className="jumbotron-register" disabled>
                        등록 마감
                    </button>
                </p>
            </Container>
        </section>
    );
};
