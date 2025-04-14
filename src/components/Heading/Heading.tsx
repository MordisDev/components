import React, { type PropsWithChildren } from "react";
import styled from "styled-components";
import { colors } from "../../globals";

export type HeadingProps = {
  type: "main" | "secondary" | "small";
};

export const Heading = ({
  type,
  children,
}: PropsWithChildren<HeadingProps>) => {
  const getTag = () => {
    switch (type) {
      case "main":
        return "h1";
      case "secondary":
        return "h3";
      case "small":
        return "h5";
    }
  };
  return (
    <StyledHeading type={type} as={getTag()}>
      {children}
    </StyledHeading>
  );
};

const StyledHeading = styled.div<HeadingProps>`
  color: ${colors.primary};
  font-size: ${({ type }) => getSize(type)};
  font-weight: ${({ type }) => (type === "main" ? "600" : "700")};
  letter-spacing: ${({ type }) => (type === "small" ? "0.1rem" : "0.2rem")};
  text-align: center;
`;

const getSize = (type: HeadingProps["type"]) => {
  switch (type) {
    case "main":
      return "3rem";
    case "secondary":
      return "2rem";
    case "small":
      return "1.25rem";
  }
};
