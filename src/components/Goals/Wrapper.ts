import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 1440px;
	height: 1184px;
	background-color: #ffffff;

	.text1 {
		line-height: 2;
		text-align: center;
		margin: 0px;
		padding: 128px 544px 0px 544px;
		width: 352px;
		height: 128px;
		font-family: Helvetica;
		font-size: 68px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		letter-spacing: normal;
		color: #222222;
	}
	.AngelHack-Seoul-2020-Online-17- {
		padding: 0px 192px;
		width: 1056px;
		height: 80px;
		font-family: Helvetica;
		font-size: 18px;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.33;
		letter-spacing: normal;
		color: #222222;

		.text-style-1 {
			font-weight: bold;
			color: #222222;
		}

		.text-style-2 {
			color: #e21c1c;
		}
	}

	.holder {
		margin-top: 40px;
		display: grid;
		grid-template-columns: 320px 320px 320px;
		grid-column-gap: 48px;
		grid-row-gap: 48px;
		margin-left: 192px;

		.image {
			background-color: black;
			height: 320px;
			width: 320px;
			border-radius: 10px;
			.text {
				line-height: 3;
				text-align: center;
				margin: 215px 40px 0px 40px;
				width: 240px;
				height: 80px;
				font-family: Helvetica;
				font-size: 32px;
				font-weight: bold;
				font-stretch: normal;
				font-style: normal;
				letter-spacing: normal;
				color: #ffffff;
			}
			.Down {
				width: 16px;
				height: 8px;
				object-fit: contain;
				display: block;
				margin-left: auto;
				margin-right: auto;
			}
		}
	}
`;
