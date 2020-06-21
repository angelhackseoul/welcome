import React from 'react';
import { Wrapper } from './Wrapper';
import register from 'images/register.png';
import become_a_mento from 'images/become_a_mento.png';

export const HowtoAttend = () => (
	<Wrapper>
		<p className='text1'>참여방법</p>
		<div className='images'>
			<img
				src={register}
				// srcset='img/default@2x.png 2x,
				//  img/default@3x.png 3x'
				className='register'
				alt='register'
			/>
			<img
				src={become_a_mento}
				//  srcset="img/default@2x.png 2x,
				//  img/default@3x.png 3x"
				className='become_a_mento'
				alt='become_a_mento'
			/>
		</div>
		<p className='text2'>
			모든 참가팀은 제출 마감시간 <b>(2020년 07월 19일 23:59 KST)</b>
			까지 아래의 모든 사항을 제출해야합니다.
			<br />
			<br /> 1. 제작한 어플리케이션의 GitHub의 링크 <br />
			2. 2분 미만의 제품 프레젠테이션 비디오 (Vimeo 또는 Youtube에
			슬라이드 쇼 및 음성) <br />
			3. 프레젠테이션 슬라이드 파일, 기타 개발 관련 문서, 데모 영상 (있는
			경우) <br />
			4. 제작한 코드는 마감 시간 이내에 virtual.hackathon.io 시스템에 제출
			(구체적인 방법은 해커톤 기간 내 안내 예정)
		</p>
	</Wrapper>
);
