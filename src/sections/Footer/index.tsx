import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.css';
import FacebookIcon from 'images/sns_facebook.svg';
import InstagramIcon from 'images/sns_instagram.svg';
import TwitterIcon from 'images/sns_twitter.svg';

export class Footer extends React.Component {
	public render() {
		return (
			<section id='footer'>
				<Container>
					<Row>
						<Col>
							<span className='footer-message'>
								© 2020 AngelHack Seoul. All Rights Reserved.
							</span>
						</Col>
						<Col>
							<div className='footer-sns-icons'>
								<img
									src={FacebookIcon}
									className='Facebook'
									alt='Facebook'
									onClick={() =>
										window.open(
											'https://www.facebook.com/AH2020SEOUL',
										)
									}
								/>
								<img
									src={InstagramIcon}
									className='Instagram'
									alt='Instagram'
									onClick={() =>
										window.open(
											'https://www.instagram.com/angelhackseoul/',
										)
									}
								/>
								<img
									src={TwitterIcon}
									onClick={() =>
										window.open(
											'https://twitter.com/Angelhack2020',
										)
									}
									className='Twitter'
									alt='Twitter'
								/>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}
