import React from "react";
import { Container } from "reactstrap";
import "./index.css";

export class Calendar extends React.Component {
    public render() {
        return (
            <section id="calendar">
                <Container>
                    <h1 className="calendar-heading">일정</h1>
                    <p>
                        06월 24일 (수): 참가 신청 시작 <br />
                        07월 08일 (수): 참가 신청 종료 <br /> 07월 10일 (금)
                        오전: 슬랙 초대 <br /> 07월 10일 (금) ~ 07월 12일 (일):
                        팀 빌딩 및 확정 <br />
                        07월 13일 (월): 온라인 해커톤 시작 <br /> 추후 공개:
                        웨비나 1, 2 <br />
                        07월 19일 (일) 23:59 KST: 프로젝트 제출
                    </p>
                </Container>
            </section>
        );
    }
}
