import React from 'react';
import { TopMenu } from 'components/TopMenu';
import { Welcome } from 'container/Welcome';
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
