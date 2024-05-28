import styled from "styled-components";

export const EventCardContainer = styled.div<{
  bgImageURI: string;
  greyFlag: boolean;
}>`
  background-image: url(${({ bgImageURI }) => bgImageURI});
  background-size: 100% 100%;
  border: 1px solid #636f89;
  position: relative;

  ${({ greyFlag }) =>
    greyFlag === true &&
    `
      filter: grayscale(100%);
    `}
`;
