import React from 'react';
import { Wrapper } from './Wrapper';

export const MentorItem = ({ img }: any) => {
	return (
		<Wrapper>
			<img src={img} alt={`mentor's profile`} />
		</Wrapper>
	);
};
