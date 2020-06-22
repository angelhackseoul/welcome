import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const PrizeItem = ({ name }: any) => {
	return (
		<Wrapper>
			<Grid
				container
				direction='column'
				justify='space-evenly'
				alignItems='center'
				className='container1'
				alignContent='space-around'
				spacing={3}
				xl='auto'
				xs='auto'
				lg='auto'
				sm='auto'
				md='auto'
			>
				<Grid item>
					<Grid
						container
						direction='row'
						justify='space-evenly'
						alignItems='center'
						alignContent='center'
						spacing={3}
						className='container2'
						xl='auto'
						xs='auto'
						lg='auto'
						sm='auto'
						md='auto'
					>
						<Grid item className='item1'>
							<span className='p1'>{name}</span>
							<br />
							<span className='p2'>Presented by</span>
						</Grid>
						<Grid item>
							<div className='logo'>Sponsor Logo</div>
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<p className='p3'>xxx만원</p>
				</Grid>
				<Grid item>
					<p className='p4'>(1팀 수상)</p>
				</Grid>
			</Grid>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 320px;
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
	background-color: #be1621;
	margin-bottom: 48px;
	text-align: center;

	.container1 {
		.item1 {
		}
		.container2 {
			margin-top: 30px;
		}
	}

	.p1 {
		/* height: 36px; */
		font-family: Helvetica;
		font-size: 26px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.23;
		letter-spacing: normal;
		color: #ffffff;
	}

	.p2 {
		/* height: 32px; */
		font-family: Helvetica;
		font-size: 20px;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.4;
		letter-spacing: normal;
		color: #ffffff;
	}
	.logo {
		height: 68px;
		background-color: #c4c4c4;
	}

	.p3 {
		/* margin: 24px 25px 0px 25px; */
		/* height: 72px; */
		font-family: Helvetica;
		font-size: 68px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.06;
		letter-spacing: normal;
		color: #ffffff;
	}

	.p4 {
		/* margin: 16px 117px 60px 117px; */
		/* height: 28px; */
		font-family: Helvetica;
		font-size: 20px;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.4;
		letter-spacing: normal;
		color: #ffffff;
	}
`;
