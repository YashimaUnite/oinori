import styled, {css} from "styled-components";

export const CHARACTER_WIDTH = 35;
export const CHARACTER_HEIGHT = 35;


export const CellStyle = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 50px;
  height: 50px;
  background-color: white;
  border: 2px solid #666;
  box-sizing: border-box;
  cursor: pointer;

  ${({ selected }) =>
	selected &&
	css`
      background-color: #666;
      color: white;
    `}
`;

export const LaneStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 4.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  background-color: #333;

  .title {
    font-size: 0.8rem;
    color: #fff;
    text-align: center;
  }

  .steps {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 2rem;
    margin-top: 0.5rem;
  }
`;

export const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  margin: 10px;
`;
