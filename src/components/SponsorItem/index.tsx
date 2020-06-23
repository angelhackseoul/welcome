import React from 'react';
import { Wrapper } from './Wrapper';

export const SponsorItem = ({ img, level, url }: any) => {
	// level 0 : 1160
	// level 1 : 176
	// level 2 : 128

	let sponsor: string = '';

	switch (level) {
		case 0: {
			sponsor = 'level0';
			break;
		}
		case 1: {
			sponsor = 'level1';
			break;
		}
		case 2: {
			sponsor = 'level2';
			break;
		}
	}

	//passing props to styled-comp has error
	return (
		<Wrapper
			onClick={() => {
				window.open(url); //This will open Google in a new window.
			}}
		>
			<img className={sponsor} src={img} alt='sponsor-logo' />
		</Wrapper>
	);
};
