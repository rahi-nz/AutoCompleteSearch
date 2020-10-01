import styled from 'styled-components';

export const Container = styled.section`
  padding: 20px;
  width: 70%;
  text-align: center;
  margin: 100px auto auto;
  background-color: #3b6978;
  border-radius: 6px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemContainer = styled.section`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 300px;
  background: #204051;
  border-radius: 6px;
  margin: 5px;
  position: relative;
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
    color: #84a9ac;
  }
`;

export const Close = styled.div`
  position: absolute;
  right: -6px;
  top: -6px;
  cursor: pointer;
`;
