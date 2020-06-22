import React from 'react';
import { Wrapper } from './Wrapper';
import dummy from 'images/dummy.png';

interface Props {
	title: string;
	description: string[];
}

export const CriteriaItem = ({ title, description }: Props) => {
	return (
		<Wrapper>
			{/* <img src={dummy} alt='dummy' /> */}
			<div>space for img</div>
			<div className='holder'>
				<p className='title'>{title}</p>
				<p className='score'>(0-5점)</p>
			</div>
			<hr className='seperator' />
			<ul>
				{description.map((e) => (
					<li>{e}</li>
				))}
			</ul>
		</Wrapper>
	);
};
