import React from 'react';
import { Container } from 'reactstrap';
import './index.css';

export const Jumbotron = (props: any) => {
	return (
		<section id='jumbotron'>
			<Container>
				<span className='jumbotron-heading'>
					ANGELHACK <br />
					SEOUL 2020 <br />
					ONLINE
				</span>
				<p className='jumbotron-message'>
					<b>AngelHack Seoul 2020 Online - “위기 속의 창의성”</b>은
					COVID-19으로 인한 <br />
					문제에 대처하기 위한 기술 솔루션을 만드는 것을 목표로 하는
					온라인 해커톤입니다. <br />
					<button
						className='jumbotron-register'
						onClick={() =>
							window.open('https://forms.gle/gV58UM1VgUhCcjYv5')
						}
					>
						지금 등록하기
					</button>
				</p>
			</Container>
		</section>
	);
};
