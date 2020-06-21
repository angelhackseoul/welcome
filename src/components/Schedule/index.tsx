import React from 'react';
import { Wrapper } from './Wrapper';
import slider from 'images/slider.png';

import { makeStyles } from '@material-ui/core/styles';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const dum = [
	{
		LeftText: '06월 24일 (수)',
		RightText: '참가 신청 시작',
	},
	{
		LeftText: '참가 신청 종료',
		RightText: '07월 08일 (수)',
	},
	{
		LeftText: '07월 10일 (금) 오전',
		RightText: '슬랙 초대',
	},
	{
		LeftText: '팀 빌딩 및 확정',
		RightText: '07월 10일 (금) ~ 07월 12일 (일) ',
	},
	{
		LeftText: '07월 13일 (월)',
		RightText: '온라인 해커톤 시작',
	},
	{
		LeftText: '웨비나 1,2',
		RightText: '추후 공개',
	},
	{
		LeftText: '07월 19일 (일) 23:59 KST',
		RightText: `프로젝트 제출
        • PPT
        • 데모시연영상 (2분 이내)
        • 피칭 영상 (5분 이내)`,
	},
	{
		LeftText: '심사 기간',
		RightText: '07월 20일 (월) ~ 07월 22일 (수)',
	},
	{
		LeftText: '07월 22일 (수)',
		RightText: '최종 우승 팀 발표',
	},
	{
		LeftText: '행사 종료',
		RightText: '07월 22일 (수)',
	},
];

const timeLineRenderer = () =>
	dum.map(({ LeftText, RightText }) => {
		return (
			<TimelineItem>
				<TimelineOppositeContent>
					<Typography variant='body2' color='textSecondary'>
						{LeftText}
					</Typography>
				</TimelineOppositeContent>

				<TimelineSeparator>
					<img
						src={slider}
						//  srcset="img/slider@2x.png 2x,
						//  img/slider@3x.png 3x"
						className='slider'
						alt='slider'
					/>
					<TimelineConnector />
				</TimelineSeparator>

				<TimelineContent>
					<Paper elevation={3}>
						<Typography>{RightText}</Typography>
					</Paper>
				</TimelineContent>
			</TimelineItem>
		);
	});

export const Schedule = () => {
	return (
		<Wrapper>
			<p className='text1'>일정</p>
			<Timeline align='alternate'>
				{timeLineRenderer()}

				{/* <TimelineItem>
					<TimelineOppositeContent>
						<Typography variant='body2' color='textSecondary'>
							10:00 am
						</Typography>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<img
							src={slider}
							//  srcset="img/slider@2x.png 2x,
							//  img/slider@3x.png 3x"
							className='slider'
							alt='slider'
						/>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Paper elevation={3} className={classes.paper}>
							<Typography variant='h6' component='h1'>
								Code
							</Typography>
							<Typography>Because it&apos;s awesome!</Typography>
						</Paper>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<img
							src={slider}
							//  srcset="img/slider@2x.png 2x,
							//  img/slider@3x.png 3x"
							className='slider'
							alt='slider'
						/>
						<TimelineConnector className={classes.secondaryTail} />
					</TimelineSeparator>
					<TimelineContent>
						<Paper elevation={3} className={classes.paper}>
							<Typography variant='h6' component='h1'>
								Sleep
							</Typography>
							<Typography>Because you need rest</Typography>
						</Paper>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<img
							src={slider}
							//  srcset="img/slider@2x.png 2x,
							//  img/slider@3x.png 3x"
							className='slider'
							alt='slider'
						/>
					</TimelineSeparator>
					<TimelineContent>
						<Paper elevation={3} className={classes.paper}>
							<Typography variant='h6' component='h1'>
								Repeat
							</Typography>
							<Typography>
								Because this is the life you love!
							</Typography>
						</Paper>
					</TimelineContent>
				</TimelineItem>*/}
			</Timeline>
		</Wrapper>
	);
};
