"use client"

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const WINDOW_WIDTH = 3840;
const WINDOW_HEIGHT = 2160;
const CHARACTER_WIDTH = 30;
const CHARACTER_HEIGHT = 30;

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



const Terminal = () => {
	// The position of the cursor.
	const [inputPosition, setInputPosition] = useState(0);
	// Drawing characters triggered by state change.
	const [characters, setCharacters] = useState<Array<string>>([]);
	// To access the element of the rendered component.
	const windowRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (windowRef.current) {
			const window = windowRef.current;

			const rows = Math.floor(WINDOW_HEIGHT / CHARACTER_HEIGHT);
			const columns = Math.floor(WINDOW_WIDTH / CHARACTER_WIDTH);

			const characterCount = rows * columns;

			// The range of ASCII codes.
			const randomCharacters = Array.from({ length: characterCount }, () =>
				String.fromCharCode(Math.floor(Math.random() * (0x10FFFF - 0x21) + 0x21))
			);

			// Update the state to trigger a re-render.
			setCharacters(randomCharacters);
			// Set the cursor position to the end of the window.
			window.addEventListener("keydown", (event) => {
				if (event.key === "ArrowLeft" || event.key === "h") {
					setInputPosition((position) => Math.max(0, position - 1));
				} else if (event.key === "ArrowRight" || event.key === "l") {
					setInputPosition((position) => Math.min(characterCount - 1, position + 1));
				} else if (event.key === "ArrowUp" || event.key === "k") {
					setInputPosition((position) => Math.max(0, position - columns));
				} else if (event.key === "ArrowDown" || event.key === "j") {
					setInputPosition((position) => Math.min(characterCount - 1, position + columns));
				}
			});
		}
	}, []);

	return (
		<div>
		<TerminalContainer>
			<TerminalWindow ref={windowRef}>
				{characters.map((character, index) => (
					<TerminalCharacter key={index}>
						{index === inputPosition ? "_" : character}
					</TerminalCharacter>
				))}
			</TerminalWindow>
		</TerminalContainer>
		</div>
	);
};

export default Terminal;
