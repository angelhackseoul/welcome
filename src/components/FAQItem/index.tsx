import React from 'react';
import { Wrapper } from './Wrapper';

interface Props {
	question: string;
}

export const FAQItem = ({ question }: Props) => {
	return (
		<Wrapper>
			<div className='brick' />
			<p className='cross'>+</p>
			<p className='text'>{question}</p>
		</Wrapper>
	);
};
