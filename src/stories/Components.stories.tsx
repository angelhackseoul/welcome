import React from 'react';

import { CriteriaItem } from 'components/CriteriaItem';
import { FAQItem } from 'components/FAQItem';
import { JudgeItem } from 'components/JudgeItem';
import { MentorItem } from 'components/MentorItem';
import { PrizeItem } from 'components/PrizeItem';
import { MissionItem } from 'components/MissionItem';

export default {
	title: 'Components',
	// component: Welcome,
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
        지속 가능한 비즈니스인가요?`,
		],
	},
];

interface textForFAQTypes {
	question: string;
	description: string;
}

const textForFAQ: textForFAQTypes[] = [
	{
		question: `직장인도 참여가 가능한가요?`,
		description: '',
	},
];

export const CriteriaItem_ = () => {
	return <CriteriaItem {...text[0]} />;
};

export const FAQItem_ = () => {
	return <FAQItem {...textForFAQ[0]} />;
};

export const MentorItem_ = () => {
	return <MentorItem />;
};
export const JudgeItem_ = () => {
	return <JudgeItem />;
};

export const MissionItem_ = () => {
	return <MissionItem />;
};

export const PrizeItem_ = () => {
	return <PrizeItem />;
};
