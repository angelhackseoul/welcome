import React from "react";
import { Wrapper } from "./Wrapper";
import slider from "images/slider.svg";
import { Container } from "reactstrap";
import { Grid } from "@material-ui/core";

import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
} from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";

const dum = [
    {
        LeftText: "06월 24일 (수)",
        RightText: "참가 신청 시작",
    },
    {
        LeftText: "참가 신청 종료",
        RightText: "07월 10일 (금)",
    },
    {
        LeftText: "07월 10일 (금) 오전",
        RightText: "슬랙 초대",
    },
    {
        LeftText: "팀 빌딩 및 확정",
        RightText: "07월 10일 (금) ~ 07월 12일 (일) ",
    },
    {
        LeftText: "07월 13일 (월)",
        RightText: "온라인 해커톤 시작",
    },
    {
        LeftText: "강연과 멘토링",
        RightText: "추후 공개",
    },
    {
        LeftText: "07월 19일 (일) 23:59 KST",
        RightText: `프로젝트 제출 • PPT • 데모 영상 (2분 내) • 피칭 영상 (3분 이내)`,
    },
    {
        LeftText: "심사 기간",
        RightText: "07월 20일 (월) ~ 07월 22일 (수)",
    },
    {
        LeftText: "07월 22일 (수)",
        RightText: "최종 우승 팀 발표",
    },
    {
        LeftText: "행사 종료",
        RightText: "07월 22일 (수)",
    },
];

const timeLineRenderer = () => {
    return dum.map(({ LeftText, RightText }, idx) => {
        const isBubble: boolean = idx % 2 === 0;

        return (
            <TimelineItem>
                {isBubble ? (
                    <TimelineOppositeContent
                        className={
                            isBubble ? "normalText" : "bubble-chat-right"
                        }
                    >
                        <Typography className="text">{LeftText}</Typography>
                    </TimelineOppositeContent>
                ) : (
                    <TimelineContent
                        className={isBubble ? "bubble-chat-left" : "normalText"}
                    >
                        <Typography className="text">{RightText}</Typography>
                    </TimelineContent>
                )}

                <TimelineSeparator>
                    {/* {idx === 0 && <TimelineConnector className='connector' />} */}
                    <img src={slider} className="slider" alt="slider" />
                    <TimelineConnector className="connector" />
                </TimelineSeparator>

                {isBubble ? (
                    <TimelineContent
                        className={isBubble ? "bubble-chat-left" : "normalText"}
                    >
                        <Typography className="text">{RightText}</Typography>
                    </TimelineContent>
                ) : (
                    <TimelineOppositeContent
                        className={
                            isBubble ? "normalText" : "bubble-chat-right"
                        }
                    >
                        <Typography className="text">{LeftText}</Typography>
                    </TimelineOppositeContent>
                )}
            </TimelineItem>
        );
    });
};

export const Calendar = () => {
    return (
        <Wrapper id="calendar">
            <Container>
                <h1 className="calendar-heading">일정</h1>
                <Grid
                    className="container1"
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    // alignContent='space-around'
                    spacing={3}
                >
                    <Timeline align="alternate">{timeLineRenderer()}</Timeline>
                </Grid>
            </Container>
        </Wrapper>
    );
};
