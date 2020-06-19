import React from 'react';
import { Wrapper } from './Wrapper';
import down from 'images/down.png';

const dum = [
	{
		name: '교육',
	},
	{
		name: '보건/의료',
	},
	{
		name: '환경',
	},
	{
		name: '행정',
	},
	{
		name: '불평등',
	},
	{
		name: '경제',
	},
];

export const Goals = () => (
	<Wrapper>
		<p className='text1'>도전과제</p>
		<p className='AngelHack-Seoul-2020-Online-17-'>
			<span className='text-style-1'>AngelHack Seoul 2020 Online</span>{' '}
			해커톤은{' '}
			<span className='text-style-2'>
				유엔이 제안하는 17가지의 지속 가능한 개발 목표(Sustainable
				Development Goals)
			</span>
			을 바탕으로
			<br />
			설계되었으며, 이 해커톤에서는 아래 6개의 선택 주제를 참가자들에게
			제안합니다.
		</p>
		<div className='holder'>
			{dum.map(({ name }) => (
				<div className='image'>
					<p className='text'>{name}</p>
					<img
						src={down}
						// srcset='img/down@2x.png 2x,
						//  img/down@3x.png 3x'
						class='Down'
						alt='detailForEachGoal'
					/>
				</div>
			))}
		</div>
	</Wrapper>
);
