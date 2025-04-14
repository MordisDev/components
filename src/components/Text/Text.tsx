import styled from "styled-components";
import { Interpolation } from "styled-components";
import { CSSProperties } from "react";

import { colors } from "../../globals";

export type FontType = "highlighted" | "large" | "medium" | "small" | "muted";

export const lineHeight = {
  spacious: "1.8",
  standard: "1.6",
  compact: "1.2",
};

export const fonts: Record<FontType, Interpolation<CSSProperties>> = {
  highlighted: {
    color: colors.primary,
    fontSize: "1.75rem",
    fontWeight: "bold",
    letterSpacing: "0.2rem",
    lineHeight: lineHeight.standard,
  },
  large: {
    color: colors.text.main,
    fontSize: "1.25rem",
    fontWeight: "bold",
    letterSpacing: "0.15rem",
    lineHeight: lineHeight.spacious,
  },
  medium: {
    color: colors.text.main,
    fontSize: "1rem",
    fontWeight: 600,
    letterSpacing: "0.15rem",
    lineHeight: lineHeight.standard,
  },
  small: {
    color: colors.text.main,
    fontSize: "0.875rem",
    letterSpacing: "0.1rem",
    lineHeight: lineHeight.standard,
  },
  muted: {
    color: colors.text.muted,
    fontSize: "0.875rem",
    letterSpacing: "0.1rem",
    lineHeight: lineHeight.compact,
  },
};

type TextProps = {
  primary?: boolean;
  fontType: FontType;
};

export const Text = styled.p<TextProps>`
  font-family: "Noto Sans", sans-serif;
  ${({ fontType }) => fonts[fontType]}
`;

export const Highlight = styled.span`
  color: ${colors.primary};
  font-size: "1.25rem";
  font-weight: "bold";
`;
