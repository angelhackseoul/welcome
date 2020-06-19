import React from 'react';
import { Wrapper } from './Wrapper';
import nowRegister from 'images/default.png';

export const Intro = () => (
	<Wrapper>
		<p className='ANGELHACK-SEOUL-2020-ONLINE'>
			ANGELHACK SEOUL 2020 ONLINE
		</p>
		<p className='AngelHack-Seoul-2020-Online---COVID-1'>
			<b>AngelHack Seoul 2020 Online - “위기 속의 창의성”</b>은
			COVID-19으로 인한 <br />
			문제에 대처하기 위한 기술 솔루션을 만드는 것을 목표로 하는 온라인
			해커톤입니다.
		</p>
		<img
			src={nowRegister}
			// srcset='img/default@2x.png 2x,
			//  img/default@3x.png 3x'
			className='-default'
			alt='resiter-now'
		/>
	</Wrapper>
);
