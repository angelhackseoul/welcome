import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FAQItem } from 'components/FAQItem';
import './index.css';

export class FAQ extends React.Component {
	public render() {
		return (
			<section id='faq'>
				<Container>
					<h1 className='faq-heading'>자주 묻는 질문</h1>
					<Row>
						<Col md='12' lg='6'>
							<FAQItem {...text[0]} />
							<FAQItem {...text[1]} />
							<FAQItem {...text[2]} />
							<FAQItem {...text[3]} />
							<FAQItem {...text[4]} />
						</Col>
						<Col md='12' lg='6'>
							<FAQItem {...text[5]} />
							<FAQItem {...text[6]} />
							<FAQItem {...text[7]} />
							<FAQItem {...text[8]} />
							{null}
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

interface TextTypes {
	question: string;
	description: string;
}

const text: TextTypes[] = [
	{
		question: `직장인도 참여가 가능한가요?`,
		description: `이 해커톤은 누구나 참여할 수 있습니다. 참가 
        자격에 제한은 없으며, 직장인 또는 학생 다양하게 팀을 구성하셔도 됩니다. `,
	},
	{
		question: `행사는 영어로 진행되나요?`,
		description: `이 해커톤은 한국어를 기본으로 진행되지만, 외국인 참가자를 위해 영어를 함께 제공합니다. 해커톤 
        운영진은 한글과 영어를 동시에 지원할 예정이며, 
        언제든 한국어 또는 영어로 질문할 수 있습니다.`,
	},
	{
		question: `이미 팀이 만들어졌을 경우에는 어떻게 하나요?`,
		description: `모든 팀원이 개별적으로 참가 신청을 한 후, 참가 
        신청시 팀 확정 여부란에 꼭 체크를 해주셔야 
        합니다. 잘못 체크하셨다면, 다시 참가 신청 폼으로 들어가 응답을 수정할 수 있습니다.`,
	},
	{
		question: `멘토링 지원이 있나요?`,
		description: `해커톤 기간 안에 멘토들이 멘토링을 지원합니다. 
        자세한 내용은 추후 공개될 예정입니다.`,
	},
	{
		question: `팀은 어떻게 구성되나요?`,
		description: `팀이 확정되지 않은 분들은 슬랙 채널 초대 이후 
        슬랙에서 자신의 아이디어를 홍보하고 팀원을 구할 수 있습니다. `,
	},
	{
		question: `상금은 온라인 시상식 당일에 지급되나요?`,
		description: `상금은 마지막 온라인 시상식 이후 개인계좌를 통해 지급할 예정입니다. 제세공과금을 제한 후 드리오니 참고해주세요.`,
	},
	{
		question: `동시에 두개의 팀으로 참가할 수 있나요?`,
		description: `두개의 팀으로 참가할 수 없습니다. 한 사람은 하나의 팀에만 참여해야 합니다.`,
	},
	{
		question: `참가나 해커톤에 대해 궁금한 점이 있으면 
        어디로 연락하면 되나요?`,
		description: `두개의 팀으로 참가할 수 없습니다. 한 사람은 하나의 팀에만 참여해야 합니다.`,
	},
	{
		question: `평가는 어떻게 진행되나요?`,
		description: `두개의 팀으로 참가할 수 없습니다. 한 사람은 하나의 팀에만 참여해야 합니다.`,
	},
];
