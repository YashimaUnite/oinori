"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const WINDOW_WIDTH = 1920;
const WINDOW_HEIGHT = 1080;
const CHARACTER_WIDTH = 35;
const CHARACTER_HEIGHT = 35;
const ALLOWED_CHARACTERS = "+=.*o";
const ROWS = Math.floor(WINDOW_HEIGHT / CHARACTER_HEIGHT);
const COLUMNS = Math.floor(WINDOW_WIDTH / CHARACTER_WIDTH);

const TerminalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${WINDOW_WIDTH}px;
  height: ${WINDOW_HEIGHT}px;
  background-color: rgba(15, 15, 15, 0.01);
`;

const TerminalWindow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${WINDOW_WIDTH}px;
  height: ${WINDOW_HEIGHT}px;
  line-height: ${CHARACTER_HEIGHT}px;
  font-size: 16px;
  background-color: #0f0f0f;
`;

const TerminalCharacter = styled.span`
  width: ${CHARACTER_WIDTH}px;
  height: ${CHARACTER_HEIGHT}px;
  color: #bdbdbd;
  opacity: 0.3;
`;

const Terminal = () => {
	const [inputPosition, setInputPosition] = useState(0);
	const [characters, setCharacters] = useState<string[]>([]);
	const windowRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (windowRef.current) {
			const window = windowRef.current;
			const characterCount = ROWS * COLUMNS;
			const randomCharacters = Array.from(
				{ length: characterCount },
				() =>
					ALLOWED_CHARACTERS[
						Math.floor(Math.random() * ALLOWED_CHARACTERS.length)
						]
			);
			setCharacters(randomCharacters);

			window.addEventListener("keydown", (event) => {
				if (event.key === "a") {
					setInputPosition((position) => Math.max(0, position - 1));
				} else if (event.key === "d") {
					setInputPosition((position) =>
						Math.min(characterCount - 1, position + 1)
					);
				} else if (event.key === "w") {
					setInputPosition((position) =>
						Math.max(0, position - COLUMNS)
					);
				} else if (event.key === "s") {
					setInputPosition((position) =>
						Math.min(characterCount - 1, position + COLUMNS)
					);
				}
			});
		}
	}, []);

	return (
		<TerminalContainer>
			<TerminalWindow ref={windowRef}>
				{characters.map((character, index) => (
					<TerminalCharacter key={index}>
						{index === inputPosition ? "_" : character}
					</TerminalCharacter>
				))}
			</TerminalWindow>
		</TerminalContainer>
	);
};

export default Terminal;
