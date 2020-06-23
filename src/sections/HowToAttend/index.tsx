import React from 'react';
import { Container } from 'reactstrap';
import './index.css';

export class HowToAttend extends React.Component {
	public render() {
		return (
			<section id='how-to-attend'>
				<Container>
					<h1 className='attend-heading'>참여방법</h1>
					<p className='attend-button-wrapper'>
						<button
							onClick={() =>
								window.open(
									'https://forms.gle/gV58UM1VgUhCcjYv5',
								)
							}
						>
							등록하기
						</button>
						<button>멘토 되기</button>
					</p>
					<p className='attend-text'>
						모든 참가팀은 제출 마감시간{' '}
						<b>(2020년 07월 19일 23:59 KST)</b>까지 아래의 모든
						사항을 제출해야 합니다. <br />
						<br />
						<ol>
							<li>제작한 어플리케이션의 GitHub의 링크</li>
							<li>
								2분 미만의 제품 프레젠테이션 비디오 (Vimeo 또는
								YouTube에 슬라이드 쇼 및 음성)
							</li>
							<li>
								프레젠테이션 슬라이드 파일, 기타 개발 관련 문서,
								데모 영상 (있는 경우)
							</li>
							<li>
								제작한 코드는 마감 시간 이내에
								virtual.hackathon.io 시스템에 제출 (구체적인
								방법은 해커톤 기간 내 안내 예정)
							</li>
						</ol>
					</p>
				</Container>
			</section>
		);
	}
}
