import React from 'react';
import { Wrapper } from './Wrapper';

interface Props {
	ruleName: string;
	description: string;
}

export const RuleItem = ({ description, ruleName }: Props) => {
	return (
		<Wrapper>
			<p>{ruleName}</p>
			<p>{description}</p>
		</Wrapper>
	);
};
