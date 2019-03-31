import styled from 'styled-components';

export const FileInputStyled = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  visibility: hidden;
`;

export const TextLabel = styled.label`
  height: 120px;
  width: 120px;
  border: 1px dashed;
  border-color: ${({ theme }) => theme.all.gray};
  color: ${({ theme }) => theme.all.grayDark};
  display: flex;
  align-items: center;
  text-align: center;
  font-size: ${({ theme }) => theme.layout.font.xlarge};
  line-height: 22px;
  margin-top: 23px;
  margin-bottom: 16px;
  cursor: pointer;

  &.svg-image {
    border: 2px solid ${({ theme }) => theme.all.grayVeryLight};
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
`;
