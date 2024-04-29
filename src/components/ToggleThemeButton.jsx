import React from "react";
import styled from "styled-components";

import { useThemeContext } from "../context/ThemeContext.jsx";

const ToggleThemeButton = () => {
  const { toggleTheme } = useThemeContext();
  return (
    <ToggleThemeContainer onClick={() => toggleTheme?.()}>
      <h1>切換暗色模式</h1>
    </ToggleThemeContainer>
  );
};


const ToggleThemeContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;

`;

export default ToggleThemeButton;
