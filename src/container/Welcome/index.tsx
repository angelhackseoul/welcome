import React from 'react';
import { Wrapper } from './Wrapper';
import { TopMenu } from 'components/TopMenu';
import { Intro } from 'components/Intro';
import { CountDown } from 'components/CountDown';
import { DescriptionBad } from 'components/DescriptionBad';
import { DescriptionGood } from 'components/DescriptionGood';
import { HowtoAttend } from 'components/HowtoAttend';
import { Goals } from 'components/Goals';
import { Prize } from 'components/Prize';

export const Welcome = () => (
	<Wrapper>
		<TopMenu />
		<Intro />
		<CountDown />
		<span style={{ display: 'flex' }}>
			<DescriptionBad />
			<DescriptionGood />
		</span>
		<HowtoAttend />
		<Goals />
		<Prize />
	</Wrapper>
);

export default Welcome;
