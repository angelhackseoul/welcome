import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Wrapper } from "./Wrapper";

import { SponsorItem } from "components/SponsorItem";

import commonComputer from "images/sponsor/commonComputer.png";
import wooah from "images/sponsor/wooah.png";

import fastCampus from "images/sponsor/fastCampus.png";
import tableManager from "images/sponsor/tableManager.png";

import beSide from "images/sponsor/beSide.png";
import dCmap from "images/sponsor/dCamp.png";

export class Sponsors extends React.Component {
    public render() {
        return (
            <Wrapper id="sponsors">
                <Container>
                    <h1 className="sponsors-heading">후원</h1>
                    <Row>
                        <Col md="12" lg="6">
                            <SponsorItem
                                level={0}
                                img={wooah}
                                url={`https://woowabros.github.io/`}
                                desc={`"우아한형제들은 배달음식을 ‘사랑하는 사람과 나누는 행복한 시간’ 이라고 정의 내립니다.

								우아한형제들에게 배달음식이란 혼자 끼니를 때우기 위해 먹는 음식이 아니라 가족이나 주위 사람들과 즐겁게 먹은 음식 혹은 체험이기 때문입니다.
								
								우리는 사랑하는 사람들과 ‘좋은 음식을 먹고 싶은 곳에서’ 먹기 위해 배달음식을 시킵니다.
								
								우아한형제들은 바로 그 행복한 순간을 만들어가는 회사입니다."`}
                            />
                        </Col>
                        <Col md="12" lg="6">
                            <SponsorItem
                                level={0}
                                img={commonComputer}
                                url={`https://www.comcom.ai`}
                                desc={`커먼컴퓨터는 세상의 모든 사람과 컴퓨터가 만들어내는 가치를 투명하게 측정하고 

								보상 하자는 사명을 가진 개발자들에 의해 시작되었습니다.
								
								현재 블록체인 기술을 핵심으로 하여, 머신러닝 등 대규모 연산이 가능한 
								
								블록체인 **AI Network**와 오픈소스 배포 플랫폼 Ainize®을 서비스 또는 개발 중에 있습니다.`}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" lg={{ size: 5, offset: 1 }}>
                            <SponsorItem
                                level={1}
                                img={fastCampus}
                                url={`https://www.fastcampus.co.kr/`}
                                desc={`패스트캠퍼스는 인생을 바꾸는 교육(Life Changing Educating)이라는 모토하는 성인을 위한 실무교육 회사입니다.
								 
								교육 기회의 불평등을 해소하고 누구나 원하는 분야를 원하는 방식으로 학습하도록 700여개 이상의 온/오프라인 교육 콘텐츠를 제공합니다. 
								
								데이터 사이언스, 프로그래밍, 파이낸스, 비즈니스, 디자인, 마케팅 등 실무 스킬부터 요리, 웹툰, 
								
								헤어 등 직군 맞춤형 교육('콜로소')까지 모든 교육 니즈를 빈틈없이 채워나가고 있습니다.`}
                            />
                        </Col>
                        <Col md="6" lg="5">
                            <SponsorItem
                                level={1}
                                img={tableManager}
                                url={`http://www.tablemanager.io/`}
                                desc={`"테이블매니저㈜는 CRM이 제대로 이루어지지 않는 외식업의 니즈를 충족하기 위해 ‘테이블매니저’ 솔루션을 개발하여 
								국내 미쉐린 가이드에 기재된 특급 레스토랑 및 다양한 F&D 업계와 자영업자들에게 ‘테이블매니저’ 솔루션을 제공하고 있습니다.
								테이블매니저 솔루션은 기본적인 예약관리, 고객관리기능 뿐 아니라 노쇼를 방지하기 위한 예약금 결제 기능, 예약 데이터 분석을 통한 프로모션 제안,
								 각 가맹점들의 데이터를 한 눈에 쉽게 관리할 수 있는 리포트페이지 기능 등 고객사의 원활한 운영 및 매출 증대를 관리하는 
								 ‘매니저’로서의 역할을 충실하게 수행하고 있습니다."`}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4" lg={{ size: 4, offset: 2 }}>
                            <SponsorItem
                                level={2}
                                img={beSide}
                                url={`http://www.bside.best/`}
                                desc={`"IT 종사자를 위한 사이드 프로젝트 플랫폼, 비사이드(B-Side)
								비사이드는 기획자, 디자이너, 개발자가 하나의 팀을 이루어 만들어 보고 싶은 서비스를 직접 만들 수 있습니다. 
								
								다른 회사 동료들과 팀을 이루어 회사에서 할 수 없는 프로젝트를 직접 경험하면서 
								
								스스로 성장할 수 있도록 비사이드에서는 '최적의 팀 빌딩'과 '프로젝트 관리'를 지원 합니다.
								
								비사이드에서 다양한 사람들을 만나고 직접 경험을 통해 계속 성장하세요!"`}
                            />
                        </Col>
                        <Col md="4" lg="4">
                            <SponsorItem
                                level={2}
                                img={dCmap}
                                url={`https://dcamp.kr/dreambank`}
                                desc={`"은행권청년창업재단은 창업지원을 통한 일자리 창출에 기여하고자 
								18개 금융기관의 출연(총 8,450억원)을 통해 설립되었습니다.(2012년 5월) 
								
								재단은 ""디캠프(D.CAMP)""를 개관하여(2013년 3월) '투자', '공간', '네트워크'라는 
								
								창업 생태계의 3대 요소를 유기적으로 연결하여 다양한 창업 생태계 지원 활동을 수행합니다.
								
								또한 디캠프는 미래 성장동력 확보를 위해 추진되는(2020년 7월) 민관 합동사업 프론트원(Front1) 
								
								운영을 통해 금융지원 및 비금융(육성) 프로그램 등의 패키지를 지원 할 예정 입니다."`}
                            />
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        );
    }
}
