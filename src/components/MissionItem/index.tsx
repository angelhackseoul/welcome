import React from 'react';
import down from 'images/down.svg';

import styled from 'styled-components';

export const MissionItem = ({ name }: any) => {
	return (
		<Wrapper>
			<div className='brick' />
			<p className='text'>{name}</p>
			<img src={down} className='down' alt='detailForEachGoal' />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 320px;
	background-color: black;
	margin-right: 48px;
	margin-bottom: 48px;
	text-align: center;

	.brick {
		padding-bottom: 240px;
	}

	.text {
		height: 35px;
		margin: 0px;
		font-family: Helvetica;
		font-size: 32px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.5;
		letter-spacing: normal;
		color: #ffffff;
	}
	.down {
		height: 8px;
		object-fit: contain;
	}
`;
