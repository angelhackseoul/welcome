import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 1440px;
	height: 1640px;
	background-color: #222222;

	.text1 {
		margin: 0px;
		text-align: center;
		padding: 122px 544px 0px 544px;
		width: 352px;
		height: 128px;
		font-family: Helvetica;
		font-size: 68px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.06;
		letter-spacing: normal;
		color: #ffffff;
	}

	.text2 {
		margin: 0px;
		text-align: center;
		padding: 0px 513px 0px 513px;
		height: 48px;
		font-family: Helvetica;
		font-size: 42px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.14;
		letter-spacing: normal;
		color: #ffffff;
	}

	.holder {
		margin-top: 40px;
		display: grid;
		grid-template-columns: 320px 320px 320px;
		grid-column-gap: 48px;
		grid-row-gap: 48px;
		margin-left: 192px;

		.box {
			width: 320px;
			height: 320px;
			box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
			background-color: #be1621;

			.item1 {
				display: flex;

				.p1 {
					margin: 52px 0px 0px 32px;
					width: 128px;
					height: 36px;
					font-family: Helvetica;
					font-size: 26px;
					font-weight: bold;
					font-stretch: normal;
					font-style: normal;
					line-height: 1.23;
					letter-spacing: normal;
					color: #ffffff;
				}

				.p2 {
					margin: 0px 0px 0px 32px;
					width: 128px;
					height: 32px;
					font-family: Helvetica;
					font-size: 20px;
					font-weight: normal;
					font-stretch: normal;
					font-style: normal;
					line-height: 1.4;
					letter-spacing: normal;
					color: #ffffff;
				}
				.logo {
					margin: 52px 24px 0px 24px;
					width: 104px;
					height: 68px;
					background-color: #c4c4c4;
				}
			}

			.p3 {
				margin: 24px 25px 0px 25px;
				text-align: center;
				width: 270px;
				height: 72px;
				font-family: Helvetica;
				font-size: 68px;
				font-weight: bold;
				font-stretch: normal;
				font-style: normal;
				line-height: 1.06;
				letter-spacing: normal;
				color: #ffffff;
			}

			.p4 {
				margin: 16px 117px 60px 117px;
				text-align: center;
				width: 86px;
				height: 28px;
				font-family: Helvetica;
				font-size: 20px;
				font-weight: normal;
				font-stretch: normal;
				font-style: normal;
				line-height: 1.4;
				letter-spacing: normal;
				color: #ffffff;
			}
		}
	}

	.text3 {
		text-align: center;
		margin: 64px 526px 0px 528px;
		width: 386px;
		height: 48px;
		font-family: Helvetica;
		font-size: 42px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.14;
		letter-spacing: normal;
		color: #ffffff;
	}

	.holder2 {
		display: flex;
		.text4 {
			padding-top: 108px;
			margin: 64px 0px 127px 254px;
			width: 448px;
			height: 311px;
			font-family: Helvetica;
			font-size: 18px;
			font-weight: normal;
			font-stretch: normal;
			font-style: normal;
			line-height: 1.33;
			letter-spacing: normal;
			color: #ffffff;
		}

		.Pop-Prize-Icon {
			margin: 64px 240px 126px 186px;
			width: 312px;
			height: 312px;
			object-fit: contain;
		}
	}
`;
