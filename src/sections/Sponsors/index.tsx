import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Wrapper } from './Wrapper';

import { SponsorItem } from 'components/SponsorItem';

//main
import commonComputer from 'images/sponsor/commonComputer.png';

//sub
import fastCampus from 'images/sponsor/fastCampus.png';
import tableManager from 'images/sponsor/tableManager.png';

//others
import beSide from 'images/sponsor/beSide.png';
import dCmap from 'images/sponsor/dCmap.png';

export class Sponsors extends React.Component {
	public render() {
		return (
			<Wrapper id='sponsors'>
				<Container>
					<h1 className='sponsors-heading'>후원</h1>
					<Row>
						<Col md='12' lg='6'>
							<SponsorItem level={0} img={commonComputer} />
						</Col>
						<Col md='12' lg='6'>
							<SponsorItem level={0} img={commonComputer} />
						</Col>
					</Row>
					<Row>
						<Col md='6' lg={{ size: 5, offset: 1 }}>
							<SponsorItem level={1} img={fastCampus} />
						</Col>
						<Col md='6' lg='5'>
							<SponsorItem level={1} img={tableManager} />
						</Col>
					</Row>
					<Row>
						<Col md='4' lg={{ size: 4, offset: 2 }}>
							<SponsorItem level={2} img={beSide} />
						</Col>
						<Col md='4' lg='4'>
							<SponsorItem level={2} img={dCmap} />
						</Col>
					</Row>
				</Container>
			</Wrapper>
		);
	}
}
