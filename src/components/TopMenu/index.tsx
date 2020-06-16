import React from 'react';
import styled from 'styled-components';
import AngelHack_Logo from 'images/AngelHack_Logo.png';

export const TopMenu = () => (
	<Wrapper>
		<span>
			<img className='Logo' src={AngelHack_Logo} alt='AngelHack_Logo' />
		</span>
		<span href='#' className='t1 text'>
			참여방법
		</span>
		<span href='#' className='t2 text'>
			도전과제
		</span>
		<span className='t3 text'>상금</span>
		<span href='#' className='t4 text'>
			일정
		</span>
		<span href='#' className='t5 text'>
			심사기준
		</span>
		<span className='t6'>한국어</span>
		<span className='t7'>
			<span className='text txt'>등록하기</span>
		</span>
	</Wrapper>
);

export const Wrapper = styled.div`
	width: 1440px;
	height: 80px;
	background-color: #222222;
	color: #ffffff;

	.Logo {
		margin: 20px 0px 21px 160px;
		width: 200px;
		height: 39px;
		object-fit: contain;
	}

	.text {
		height: 24px;
		font-family: Helvetica;
		font-size: 16px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.5;
		letter-spacing: normal;
	}

	.t1 {
		width: 59px;
		margin: 28px 0px 28px 21.5px;
	}
	.t2 {
		width: 59px;
	}
	.t3 {
		width: 30px;
	}

	.t4 {
		width: 30px;
	}

	.t5 {
		width: 59px;
	}

	.t7 {
		width: 123px;
		height: 48px;
		object-fit: contain;
		border: solid 2px #e21c1c;

		.txt {
			width: 107px;
		}
	}
`;

export default TopMenu;
