import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { CriteriaItem } from 'components/CriteriaItem';
import { Wrapper } from './Wrapper';

export const Criteria = () => {
	return (
		<Wrapper id='criteria'>
			<Container>
				<h1 className='criteria-heading'>심사 기준</h1>
				<p className='criteria-message'>
					각 제출물은 <b>최소 점수 0점</b>과 <b>최대 점수 25점</b>
					으로 다음 기준에 따라 각 라운드에서 채점됩니다.{' '}
					<b>최종 점수</b>는 심사위원들의 평균 점수입니다.
				</p>
				<Row>
					<Col>
						<CriteriaItem {...text[0]} />
					</Col>
					<Col>
						<CriteriaItem {...text[1]} />
					</Col>
					<Col>
						<CriteriaItem {...text[2]} />
					</Col>
				</Row>
				<Row>
					<Col>
						<CriteriaItem {...text[3]} />
					</Col>
					<Col>
						<CriteriaItem {...text[4]} />
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</Wrapper>
	);
};

interface TextType {
	title: string;
	description: string[];
}

const text: TextType[] = [
	{
		title: '비즈니스 모델',
		description: [
			`이 아이디어는 어떤 비즈니스 모델과 
        잠재력을 가지고 있나요? 
        `,
			`지속 가능한 비즈니스인가요?`,
		],
	},
	{
		title: '완성도',
		description: [
			`이 아이디어의 핵심을 보여줄 수 있는 
        프로토타입을 얼마나 구현했나요?`,
		],
	},
	{
		title: 'UI/UX',
		description: [
			`외형적인 디자인 뿐만 아니라, 사용자 
        경험이 얼마나 고려되어 있나요?`,
		],
	},
	{
		title: '독창성',
		description: [
			`이 아이디어는 얼마나 독창적이고 
        혁신적인가요?`,
			`
        시장에서 경쟁 우위가 있나요?`,
		],
	},
	{
		title: '팀',
		description: [
			`각 팀원들이 어떤 적절한 역할을 맡았고,
        모두가 결과물에 기여했나요?`,
		],
	},
];
