import styled from "styled-components";

export const Wrapper = styled.div`
    border-radius: 4px;

    img {
        width: 100%;
        border-radius: 4px;
    }

    .prize-pop {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }

    @media (max-width: 991px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        margin-bottom: 30px;

        .prize-pop {
            width: 100%;
        }
    }
`;
