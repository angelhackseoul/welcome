import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { MissionItem } from 'components/MissionItem';
import './index.css';

export class Missions extends React.Component {
	public render() {
		return (
			<section id='missions'>
				<Container>
					<h1 className='missions-heading'>도전과제</h1>
					<p className='missions-message'>
						<b>AngelHack Seoul 2020 Online</b> 해커톤은{' '}
						<span className='missions-emphasis'>
							유엔이 제안하는 17가지의 지속 가능한 개발
							목표(Sustainable Development Goals)
						</span>
						을 바탕으로 설계되었으며, 이 해커톤에서는 아래 6개의
						선택 주제를 참가자들에게 제안합니다.
					</p>
					<Row>
						<Col>
							<MissionItem name='교육' />
						</Col>
						<Col>
							<MissionItem name='보건/의료' />
						</Col>
						<Col>
							<MissionItem name='환경' />
						</Col>
					</Row>
					<Row>
						<Col>
							<MissionItem name='행정' />
						</Col>
						<Col>
							<MissionItem name='불평등' />
						</Col>
						<Col>
							<MissionItem name='경제' />
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}
