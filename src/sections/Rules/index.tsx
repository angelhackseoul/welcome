import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.css';
import { RuleItem } from 'components/RuleItem';

export class Rules extends React.Component {
	public render() {
		return (
			<section id='rules'>
				<Container>
					<h1 className='rules-heading'>규칙</h1>
					<p className='rules-desription'>
						아래는 <b>AngelHack Seoul 2020 Online</b>
						해커톤 (이하 엔젤핵)의 7가지 규칙입니다.
					</p>
					<Row>
						<Col>
							<RuleItem {...text[0]} />
						</Col>
						<Col>
							<RuleItem {...text[1]} />
						</Col>
						<Col>
							<RuleItem {...text[2]} />
						</Col>
						<Col>
							<RuleItem {...text[3]} />
						</Col>
					</Row>
					<Row>
						<Col>
							<RuleItem {...text[4]} />
						</Col>
						<Col>
							<RuleItem {...text[5]} />
						</Col>
						<Col>
							<RuleItem {...text[6]} />
						</Col>
						<Col>{null}</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

interface TextType {
	ruleName: string;
	description: string;
}

const text: TextType[] = [
	{
		ruleName: '1. 신선한 코드',
		description: `코딩은 해커톤 시작 이후에 
        해야 합니다. 해커톤 시작하기 이전에 디자인을 먼저 해놓거나 디지털 목업을 준비해 놓거나 오픈소스 프레임워크를 쓰는 등, 모든 것이 괜찮지만 코딩은다른 참가자들과 동시에 시작
        해서 공정하게 끝내야 합니다.`,
	},
	{
		ruleName: '2. 코드 리뷰',
		description: `우승팀은 경기 후나 심사 단계에서 코드 검증을 받습니다. 
        해커톤 동안 짠 코드인지 
        아닌지 전문가들이 검증할 것
        입니다.`,
	},
	{
		ruleName: '3. 소유권과 지적 재산권',
		description: `여러분이 해커톤 동안 만든 
        모든 것들은 여러분의 것
        입니다.여러분의 프로젝트는 
        여러분의 소유권과 지적 재산권을 갖습니다.`,
	},
	{
		ruleName: '4. 팀 사이즈',
		description: `팀은 최대 5명으로 구성됩니다.`,
	},
	{
		ruleName: '5. 제출',
		description: `엔젤핵이 제공하는 제출용 웹
        사이트가 있습니다. 여러분이 만든 프로젝트를 정해진 시간 안에 지정된 페이지에 업로드
        하셔야 합니다. 자세한 내용은 해커톤 중 안내됩니다.`,
	},
	{
		ruleName: '6. 발표',
		description: `최종 발표는 2분동안 진행
        됩니다. 발표 후 심사위원들의 질의응답은 1분간 이뤄집니다.`,
	},
	{
		ruleName: '7. 좋은 동료',
		description: `같이 참가한 동료들에게 좋은 사람이 되어주세요. 안내메일로 보내드린 엔젤핵의 행동 강령을 참고해주세요.`,
	},
];
