import React from 'react';
import { Wrapper } from './Wrapper';

export const CountDown = () => (
	<Wrapper>
		<p className='guideText'>등록 마감까지 남은 시간</p>
		<p className='countDown'>00:00:00</p>
	</Wrapper>
);
