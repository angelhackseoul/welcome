import React from 'react';
import { Wrapper } from './Wrapper';
import popPrizeIcon from 'images/pop-prize-icon.png';

const dum = [
	{
		name: '교육챌린지',
	},
	{
		name: '교육챌린지',
	},
	{
		name: '교육챌린지',
	},
	{
		name: '교육챌린지',
	},
	{
		name: '교육챌린지',
	},
	{
		name: '교육챌린지',
	},
];

export const Prize = () => (
	<Wrapper>
		<p className='text1'>상금</p>
		<p className='text2'>메인 상금 (Main Prize)</p>
		<div className='holder'>
			{dum.map(({ name }) => (
				<div className='box'>
					<div className='item1'>
						<div>
							<p className='p1'>{name}</p>
							<p className='p2'>Presented by</p>
						</div>
						<div>
							<div className='logo'>Sponsor Logo</div>
						</div>
					</div>
					<p className='p3'>xxx만원</p>
					<p className='p4'>(1팀 수상)</p>
				</div>
			))}
		</div>
		<p className='text3'>특별상품 (Pop Prize)</p>
		<div className='holder2'>
			<p className='text4'>
				<b>AngelHack Seoul 2020 Online</b>해커톤에서는 참가자들이
				<br />
				더욱 재밌게 참여할 수 있도록 해커톤 중간 중간에 깜짝 미션
				<br />과 특별한 상품들을 준비하고 있습니다. 자세한 상품 내용은
				<br />
				추후 공개됩니다. 기대해주세요!
			</p>
			<img
				src={popPrizeIcon}
				// srcset='img/pop-prize-icon@2x.png 2x,
				//  img/pop-prize-icon@3x.png 3x'
				class='Pop-Prize-Icon'
				alt='popPrizeIcon'
			></img>
		</div>
	</Wrapper>
);
