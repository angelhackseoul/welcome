import React from 'react';
// import { Zeplin } from 'components/Zeplin';
import { Wrapper } from './Wrapper';
import AngelHack_Logo from 'images/AngelHack_Logo.png';
import Down from 'images/down.png';
import sdefault from 'images/s-default.png';

export const TopMenu = () => (
	<Wrapper>
		<span className='tab1'>
			<img className='Logo' src={AngelHack_Logo} alt='AngelHack_Logo' />
		</span>
		<span className='tab2'>
			<p className='Tab'>참여방법</p>
		</span>

		<span className='tab3'>
			<p className='Tab'>도전과제</p>
		</span>

		<span className='tab4'>
			<p className='Tab'>상금</p>
		</span>

		<span className='tab5'>
			<p className='Tab'>일정</p>
		</span>
		<span className='tab6'>
			<p className='Tab'>심사기준</p>
		</span>
		<span className='Language-Menu'>
			<p className='Tab'>한국어</p>
			<img
				alt='language-select'
				src={Down}
				// srcset='images/down@2x.png 2x,img/down@3x.png 3x'
				className='Down'
			/>
		</span>
		<img className='-Sdefault' src={sdefault} alt='등록하기' />
	</Wrapper>
);

export default TopMenu;
