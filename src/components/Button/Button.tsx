import styled from "styled-components";

export type ButtonProps = {
  color?: "default" | "green" | "red";
};

export const Button = styled.button<ButtonProps>`
  padding: 1rem;

  background-color: transparent;
  color: hsl(${({ color }) => getHue(color)}, 45%, 48%);
  cursor: pointer;

  font-size: 1rem;
  font-weight: 600;

  border: 2px solid hsl(${({ color }) => getHue(color)}, 45%, 48%);
  border-radius: 0.5rem;

  &:hover {
    background-color: hsl(${({ color }) => getHue(color)}, 20%, 18%);
  }

  &:active {
    background-color: hsl(${({ color }) => getHue(color)}, 24%, 32%);
    color: hsl(${({ color }) => getHue(color)}, 60%, 48%);
  }
`;

const getHue = (color?: "default" | "green" | "red") => {
  switch (color) {
    case "red":
      return "0";
    case "green":
      return "120";
    case "default":
    default:
      return "36";
  }
};
