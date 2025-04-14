import styled, { type CSSProperties, Interpolation } from "styled-components";
import { colors } from "../../globals";

type BoxProps = {
  bordered?: boolean;
  centered?: boolean;
  roundedBorder?: boolean;
  paddingType?: "standard" | "tight";
  noMargin?: boolean;
};

const centeredProps: Interpolation<CSSProperties> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const Box = styled.div<BoxProps>`
  background-color: ${colors.background.box};

  border-radius: 0.5rem;
  ${({ bordered }) => bordered && "border: 1px solid hsl(36, 40%, 20%);"}

  padding: ${({ paddingType }) =>
    paddingType === "tight" ? ".25rem .5rem" : "1.25rem 1.75rem"};

  ${({ centered }) => (centered ? centeredProps : undefined)}
`;
