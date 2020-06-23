import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: #c4c4c4;

	@media (max-width: 991px) {
		margin-bottom: 16px;
	}

	.level0 {
		width: 100%;
		height: 272px;
	}
	.level1 {
		width: 100%;
		height: 176px;
	}
	.level2 {
		width: 100%;
		height: 128px;
	}
	img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		cursor: pointer;
	}
`;
