import styled from 'styled-components';

export const Wrapper = styled.section`
	color: white;
	background-color: red;
	height: 504px;

	.holder {
		display: flex;

		.title {
			width: 100%;
			height: 48px;
			font-family: Helvetica;
			font-size: 32px;
			font-weight: bold;
			font-stretch: normal;
			font-style: normal;
			line-height: 2.9em;
			letter-spacing: normal;
		}

		.score {
			/* margin-left: 6.9em; */
			height: 32px;
			width: 30%;
			font-family: Helvetica;
			font-size: 26px;
			font-weight: bold;
			font-stretch: normal;
			font-style: normal;
			line-height: 3.6em;
			letter-spacing: normal;
		}
	}

	.seperator {
		width: 100%;
		border-bottom: 1px solid;
	}
`;
