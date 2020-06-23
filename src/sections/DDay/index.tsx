import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Countdown from 'react-countdown';

import './index.css';

export const DDay = () => {
	const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
		if (completed) {
			return <span>참가 신청이 완료되었습니다!</span>;
		} else {
			return (
				<span>
					{days}days {hours}:{minutes}:{seconds}
				</span>
			);
		}
	};
	return (
		<section id='d-day'>
			<Container>
				<Row>
					<Col xs='12' md='6'>
						<span className='dday-heading'>
							등록 마감까지 남은 시간
						</span>
					</Col>
					<Col xs='12' md='6'>
						<span className='dday-heading dday-heading-big'>
							<Countdown
								// zeroPadTime={2}
								date={'2020/07/08 23:59:59'}
								renderer={renderer}
							/>
						</span>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
