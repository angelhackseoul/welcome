import React from 'react';
import DownIcon from 'images/Down.svg';
import UpIcon from 'images/up.svg';

import './index.css';
interface Props {
	name: string;
	desc: string;
	isOpen: boolean;
	openToggle: Function;
}

export const MissionItem = ({ name, desc, isOpen, openToggle }: Props) => {
	return (
		<div
			onClick={() => openToggle(!isOpen)}
			className='mission-item-wrapper'
		>
			<div className='mission-item-brick' />
			<p className='mission-item-text'>{name}</p>
			<img
				src={isOpen ? UpIcon : DownIcon}
				className='mission-item-arrow'
				alt='detailForEachGoal'
			/>
			{isOpen && <p className='mission-detail-text'>{desc}</p>}
		</div>
	);
};
