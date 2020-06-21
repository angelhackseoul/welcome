import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 1440px;
	height: 2797px;
	background-color: #ffffff;

	.text1 {
		text-align: center;
		padding: 123px 544px 0px 545px;
		width: 352px;
		height: 128px;
		font-family: Helvetica;
		font-size: 68px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.06;
		letter-spacing: normal;
		color: #222222;
	}

	.holder {
		display: flex;

		.text {
			margin: 0px;
		}

		.line {
			height: 134px;
			background-color: black;
			/* display: block; */
		}
		.slider {
			width: 40px;
			height: 39px;
			object-fit: contain;
		}
	}
`;
