import styled from 'styled-components';

export const Wrapper = styled.div`
	/* width: 452px; */
	height: 10vh;
	border-radius: 4px;
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
	background-color: #be1621;
	display: flex;

	.brick {
		margin-top: 1em;
	}

	.cross {
		margin: 0 0.6em 0 2em;
		line-height: 3.8em;
		height: 28px;
		font-family: Helvetica;
		font-size: 20px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		letter-spacing: normal;
		color: white;
	}

	.text {
		/* line-height: 4em; */
		/* height: 28px; */
		padding-top: 1.2em;
		font-family: Helvetica;
		font-size: 20px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		letter-spacing: normal;
		color: white;
	}
`;
