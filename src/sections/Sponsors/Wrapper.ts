import styled from 'styled-components';

export const Wrapper = styled.section`
	padding: 60px 0;
	background-color: white;

	.sponsors-heading {
		font-size: 68px;
		font-family: Helvetica;
		font-weight: bold;
		text-align: center;
		color: black;
	}

	@media (max-width: 991px) {
		.sponsors-heading {
			font-size: 48px;
		}
	}
	.row {
		margin-bottom: 5em;
	}
`;
