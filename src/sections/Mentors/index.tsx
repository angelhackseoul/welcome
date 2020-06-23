import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { MentorItem } from 'components/MentorItem';

//1. 소속: 주식회사 내비온 / 직무: 액셀러레이팅, 글로벌 기술사업화,
//FA(투자연계), 컨설팅, 자문 / 직급: 이사(Director)
//2. 소속: 중국 SINOSTEEL TECHNOLOGY INCUBATOR/
//직무: 심사역 / 직급: 파트너
import 박지민 from 'images/mentors/박지민.jpeg';

//롯데카드 / UX기획자
import jinwoo_kim from 'images/mentors/jinwoo_kim.png';

//나눔엔젤스 / 이사
import Donggeon_Lee from 'images/mentors/Donggeon_Lee.png';

//(주)LS네트웍스 / 플랫폼 파트장
import HEE_TAEK_LEE from 'images/mentors/HEE_TAEK_LEE.jpg';

//(주)GS Innovation Facilitator
import jina_kim from 'images/mentors/jina_kim.jpg';

//두산 디지털이노베이션, WoW챕터, 디자인씽킹 퍼실리테이터
import Loren_Jo from 'images/mentors/Loren_Jo.png';

//pxd, Senior Service Designer
import Minwoo_Kim from 'images/mentors/Minwoo_Kim.jpg';

//Vinsmart R&D, Service Platform Architect
import Sang_Jin_Kang from 'images/mentors/Sang_Jin_Kang.jpeg';

//우아한형제들 모바일 개발자
import 강경완 from 'images/mentors/강경완.jpeg';

//데잇걸즈 / 프로덕트 매니저
import 김영웅 from 'images/mentors/김영웅.jpeg';

//(AI혁신학교) 아이펠, 매니저.  하희목
import 하희목 from 'images/mentors/하희목.jpg';

//리디북스 / 선임개발자 정성민/JSpiner (가능하다면 같이 써주세요)
import 정성민 from 'images/mentors/정성민.jpg';

import './index.css';

export class Mentors extends React.Component {
	public render() {
		const md = '8';
		const lg = '2';
		return (
			<section id='mentors'>
				<Container>
					<h1 className='mentors-heading'>멘토</h1>
					<p className='mentors-message'>
						해커톤의 참가팀들을 위해 8명의 현업 멘토들이 멘토로
						참여하고 있습니다.
					</p>
					<Row style={{ marginBottom: '2.3em' }}>
						<Col md={md} lg={lg}>
							<MentorItem img={박지민} />
						</Col>
						<Col md={md} lg={lg}>
							<MentorItem img={jinwoo_kim} />
						</Col>
						<Col md={md} lg={lg}>
							<MentorItem img={Donggeon_Lee} />
						</Col>
						<Col md={md} lg={lg}>
							<MentorItem img={HEE_TAEK_LEE} />
						</Col>
						<Col md={md} lg={lg}>
							<MentorItem img={jina_kim} />
						</Col>
						<Col md={md} lg={lg}>
							<MentorItem img={Loren_Jo} />
						</Col>
					</Row>
					<Row>
						<Col md={md} lg={lg}>
							<MentorItem img={Minwoo_Kim} />
						</Col>
						<Col md={md} lg={lg}>
							<MentorItem img={Sang_Jin_Kang} />
						</Col>
						<Col md={md} lg={lg}>
							<MentorItem img={강경완} />
						</Col>
						<Col md={md} lg={lg}>
							<MentorItem img={김영웅} />
						</Col>
						<Col md={md} lg={lg}>
							<MentorItem img={하희목} />
						</Col>
						<Col md={md} lg={lg}>
							<MentorItem img={정성민} />
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}
