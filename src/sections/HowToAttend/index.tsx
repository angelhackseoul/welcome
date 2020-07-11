import React from "react";
import { Container } from "reactstrap";
import "./index.css";

export class HowToAttend extends React.Component {
    public render() {
        return (
            <section id="how-to-attend">
                <Container>
                    <h1 className="attend-heading">참여방법</h1>
                    <p className="attend-button-wrapper">
                        <button disabled>참가 등록 마감</button>
                        <button disabled>멘토 등록 마감</button>
                    </p>
                    <p className="attend-text">
                        모든 참가팀은 제출 마감시간{" "}
                        <b>(2020년 07월 19일 23:59 KST)</b>까지 아래의 모든
                        사항을 제출해야 합니다. <br />
                        <br />
                        <ol>
                            <li>제작한 어플리케이션의 GitHub의 링크</li>
                            <li>
                                2분 미만의 데모 영상 (Vimeo/Youtube 업로드 후
                                링크 공유)
                            </li>
                            <li>
                                프레젠테이션 발표 자료와 3분 이내의 피칭 녹화
                                영상 (Vimeo/Youtube 업로드 후 링크 공유)
                            </li>
                            <li>기타 개발 관련한 내용을 설명하는 문서</li>
                            <li>
                                모든 결과물은 마감 시간 내에 제출 (구체적인
                                방법은 해커톤 기간 내에 안내)
                            </li>
                        </ol>
                    </p>
                </Container>
            </section>
        );
    }
}
