import styled from "styled-components";

const WINDOW_WIDTH = 640;
const WINDOW_HEIGHT = 480;
const CHARACTER_WIDTH = 10;
const CHARACTER_HEIGHT = 20;

// Window container that wraps the entire component.
export const TerminalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${WINDOW_WIDTH}px;
  height: ${WINDOW_HEIGHT}px;
  background-color: darkslategray`;

// The window is filled with random characters.
export const TerminalWindow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${WINDOW_WIDTH}px;
  height: ${WINDOW_HEIGHT}px;
  line-height: ${CHARACTER_HEIGHT}px;
  font-size: 18px;
`;

// The unicode to be applied to the window is as follows.
export const TerminalCharacter = styled.span`
  width: ${CHARACTER_WIDTH}px;
  height: ${CHARACTER_HEIGHT}px;
  color: darkgrey;
`;
