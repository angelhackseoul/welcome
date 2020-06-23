import React, { useState } from 'react';
import { Wrapper } from './Wrapper';

interface Props {
	question: string;
	description: string;
}

export const FAQItem = ({ question, description }: Props) => {
	const [isOpen, setisOpen] = useState(false);
	return (
		<Wrapper onClick={() => setisOpen(!isOpen)}>
			<div className='brick' />
			<p className='cross'>{isOpen ? '-' : '+'}</p>
			<p className='text'>
				{question}
				{isOpen && (
					<>
						<br />
						<br />
						<p className='description'>{description}</p>
					</>
				)}
			</p>
		</Wrapper>
	);
};
