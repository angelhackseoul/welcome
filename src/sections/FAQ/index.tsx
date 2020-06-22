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
						<Col>
							<FAQItem {...text[0]} />
						</Col>
						<Col>
							<FAQItem {...text[1]} />
						</Col>
					</Row>
					<Row>
						<Col>
							<FAQItem {...text[2]} />
						</Col>
						<Col>
							<FAQItem {...text[3]} />
						</Col>
					</Row>
					<Row>
						<Col>
							<FAQItem {...text[4]} />
						</Col>
						<Col>
							<FAQItem {...text[5]} />
						</Col>
					</Row>
					<Row>
						<Col>
							<FAQItem {...text[6]} />
						</Col>
						<Col>
							<FAQItem {...text[7]} />
						</Col>
					</Row>
					<Row>
						<Col>
							<FAQItem {...text[8]} />
						</Col>
						<Col>{null}</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

interface TextTypes {
	question: string;
}

const text: TextTypes[] = [
	{
		question: `직장인도 참여가 가능한가요?`,
	},
	{
		question: `행사는 영어로 진행되나요?`,
	},
	{
		question: `이미 팀이 만들어졌을 경우에는 어떻게 하나요?`,
	},
	{
		question: `멘토링 지원이 있나요?`,
	},
	{
		question: `팀은 어떻게 구성되나요?`,
	},
	{
		question: `상금은 온라인 시상식 당일에 지급되나요?`,
	},
	{
		question: `동시에 두개의 팀으로 참가할 수 있나요?`,
	},
	{
		question: `참가나 해커톤에 대해 궁금한 점이 있으면 
        어디로 연락하면 되나요?`,
	},
	{
		question: `평가는 어떻게 진행되나요?`,
	},
];
