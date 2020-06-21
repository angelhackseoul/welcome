import React from 'react';
import { Welcome } from 'container/Welcome';

import { TopMenu } from 'components/TopMenu';
import { Intro } from 'components/Intro';
import { CountDown } from 'components/CountDown';
import { DescriptionBad } from 'components/DescriptionBad';
import { DescriptionGood } from 'components/DescriptionGood';
import { HowtoAttend } from 'components/HowtoAttend';
import { Goals } from 'components/Goals';
import { Prize } from 'components/Prize';
import { Schedule } from 'components/Schedule';

import 'index.css';

export default {
	title: 'Welcome',
	// component: Welcome,
};

export const Welcome_ = () => {
	return <Welcome />;
};
export const TopMenu_ = () => {
	return <TopMenu />;
};

export const Intro_ = () => {
	return <Intro />;
};

export const CountDown_ = () => {
	return <CountDown />;
};
export const DescriptionBad_ = () => {
	return <DescriptionBad />;
};
export const DescriptionGood_ = () => {
	return <DescriptionGood />;
};

export const HowtoAttend_ = () => {
	return <HowtoAttend />;
};
export const Goals_ = () => {
	return <Goals />;
};
export const Prize_ = () => {
	return <Prize />;
};

export const Schedule_ = () => {
	return <Schedule />;
};
