import styled from 'styled-components';

export const ResultContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #dcdcdc;
  justify-content: end;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const Descriptions = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  p {
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }
`;