import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.css';
import { JudgeItem } from 'components/JudgeItem';

export class Judges extends React.Component {
	public render() {
		return (
			<section id='judges'>
				<Container>
					<h1 className='judges-heading'>심사위원</h1>
					<p className='judges-message'>
						이 해커톤에는 각 분야의 8명의 전문가들이 심사위원으로
						참여하고 있습니다.
					</p>
					<Row>
						<Col>
							<JudgeItem />
						</Col>
						<Col>
							<JudgeItem />
						</Col>
						<Col>
							<JudgeItem />
						</Col>
					</Row>
					<Row>
						<Col>
							<JudgeItem />
						</Col>
						<Col>
							<JudgeItem />
						</Col>
						<Col>
							<JudgeItem />
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}
