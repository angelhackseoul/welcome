import styled from 'styled-components';

export const Wrapper = styled.section`
	padding: 60px 0;
	background-color: white;

	.calendar-heading {
		font-size: 68px;
		font-family: Helvetica;
		font-weight: bold;
		text-align: center;
		color: black;
	}

	.connector {
		width: 20%;
		background-color: #222222;
	}
	.text {
		height: 80px;
		font-family: Helvetica;
		font-size: 32px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.5;
		letter-spacing: normal;
		color: #222222;
	}
	.bubble-chat {
		height: 96px;
		box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
		background-color: #be1621;

		position: relative;
		background: #be1621;
		border-radius: 0.4em;

		:after {
			content: '';
			position: absolute;
			left: 0;
			top: 80%;
			width: 0;
			height: 0;
			border: 15px solid transparent;
			border-right-color: #be1621;
			border-left: 0;
			margin-top: -19px;
			margin-left: -12px;
		}
		.text {
			height: 56px;
			font-family: Helvetica;
			font-size: 32px;
			font-weight: bold;
			font-stretch: normal;
			font-style: normal;
			line-height: 1.5;
			letter-spacing: normal;
			color: #ffffff;
		}
	}
`;
