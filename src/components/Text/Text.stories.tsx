import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { breakpoints } from "../../globals";

import { Box } from "../Box";
import { Heading } from "../Heading/Heading";

import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  args: {
    fontType: "medium",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec metus sed nisl tincidunt porta non vitae nisi. Aenean volutpat ex in tellus laoreet dictum. Pellentesque euismod convallis mi, ut convallis sem tempus sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ac sem gravida, consectetur leo eu, egestas ante. Suspendisse in ultricies diam. Sed id ex quam.",
  },
  render: (args) => <Text fontType={args.fontType}>{args.children}</Text>,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    fontType: "large",
  },
};

export const Small: Story = {
  args: {
    fontType: "small",
  },
};

export const Highlighted: Story = {
  args: {
    fontType: "highlighted",
    children: "Lorem ipsum dolor.",
  },
};

export const Muted: Story = {
  args: {
    fontType: "muted",
    children: "Lorem ipsum dolor.",
  },
};

export const FullPageExample: Story = {
  render: () => (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1rem",
        maxWidth: breakpoints.desktop,
        margin: "0 auto",
      }}
    >
      <Heading type="main">Lorem ipsum dolor.</Heading>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: "100%",
        }}
      >
        <Box>
          <Text fontType="large" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
            metus sed nisl tincidunt porta non vitae nisi. Aenean volutpat ex in
            tellus laoreet dictum. Pellentesque euismod convallis mi, ut
            convallis sem tempus sed. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Proin ac sem gravida,
            consectetur leo eu, egestas ante. Suspendisse in ultricies diam. Sed
            id ex quam.
          </Text>
        </Box>
        <Box
          paddingType="tight"
          style={{
            display: "flex",
            flexFlow: "row nowrap",
            gap: "0.5rem",
            padding: ".75rem 6rem",
          }}
        >
          <Box bordered style={{ flex: 1 }}>
            <Text fontType="medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Text fontType="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              id tristique magna, at viverra est. Integer et venenatis nibh, a
              ullamcorper ante. Vestibulum in ullamcorper mi. Curabitur pharetra
              in purus at sagittis. Vestibulum suscipit turpis justo, sed
              accumsan lorem ultricies et. Mauris vitae nulla tellus. Sed eu
              fermentum lorem. Donec odio ipsum, efficitur vel lorem ac,
              tristique posuere orci. Nulla tempus, lorem in congue tincidunt,
              est erat mollis arcu, eu dapibus nisl quam sed massa. Nullam nec
              ornare nibh, vel cursus sapien. Nulla porttitor in orci non
              fringilla. Pellentesque ultrices lectus eros, vitae feugiat leo
              consequat blandit. Maecenas semper neque eu aliquet ullamcorper.
              Aenean ut leo et augue tincidunt convallis sit amet eu dui.
              Phasellus sodales diam quis mi pellentesque, eget tincidunt enim
              dapibus. Fusce aliquam pretium odio, ut posuere mauris elementum
              eu. Quisque vitae enim a lorem viverra sodales eget nec enim. Sed
              maximus augue eget volutpat viverra. Sed convallis enim vitae
              neque aliquet, id tincidunt neque sollicitudin. Pellentesque
              convallis vulputate massa at pellentesque. Curabitur vitae
              fermentum felis. Phasellus egestas felis a mi tempor finibus.
              Nulla non nulla vel odio ullamcorper viverra non et sem. Nulla
              facilisi. Pellentesque pretium eros tellus, et scelerisque metus
              tincidunt quis. Pellentesque imperdiet est dui, in porttitor risus
              suscipit eu. Suspendisse pulvinar at velit non tincidunt. Maecenas
              mi enim, luctus eu maximus euismod, tristique ut nibh. Maecenas
              ullamcorper porttitor magna, at fermentum diam vehicula eu. In
              dolor turpis, pharetra eu dui sed, sollicitudin vestibulum turpis.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              fermentum lacus. Sed gravida nibh nunc, ac accumsan orci ultricies
              vel. Sed a tellus sem. Pellentesque felis dolor, blandit a
              bibendum a, fringilla in dolor. Aliquam consectetur orci nec odio
              faucibus malesuada.
            </Text>
          </Box>
          <Box bordered style={{ flex: 1 }}>
            <Text fontType="medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Text fontType="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              id tristique magna, at viverra est. Integer et venenatis nibh, a
              ullamcorper ante. Vestibulum in ullamcorper mi. Curabitur pharetra
              in purus at sagittis. Vestibulum suscipit turpis justo, sed
              accumsan lorem ultricies et. Mauris vitae nulla tellus. Sed eu
              fermentum lorem. Donec odio ipsum, efficitur vel lorem ac,
              tristique posuere orci. Nulla tempus, lorem in congue tincidunt,
              est erat mollis arcu, eu dapibus nisl quam sed massa. Nullam nec
              ornare nibh, vel cursus sapien. Nulla porttitor in orci non
              fringilla. Pellentesque ultrices lectus eros, vitae feugiat leo
              consequat blandit. Maecenas semper neque eu aliquet ullamcorper.
              Aenean ut leo et augue tincidunt convallis sit amet eu dui.
              Phasellus sodales diam quis mi pellentesque, eget tincidunt enim
              dapibus. Fusce aliquam pretium odio, ut posuere mauris elementum
              eu. Quisque vitae enim a lorem viverra sodales eget nec enim. Sed
              maximus augue eget volutpat viverra. Sed convallis enim vitae
              neque aliquet, id tincidunt neque sollicitudin. Pellentesque
              convallis vulputate massa at pellentesque. Curabitur vitae
              fermentum felis.
            </Text>
          </Box>
          <Box bordered style={{ flex: 1 }}>
            <Text fontType="medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Text fontType="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              id tristique magna, at viverra est. Integer et venenatis nibh, a
              ullamcorper ante. Vestibulum in ullamcorper mi. Curabitur pharetra
              in purus at sagittis. Vestibulum suscipit turpis justo, sed
              accumsan lorem ultricies et. Mauris vitae nulla tellus. Sed eu
              fermentum lorem. Donec odio ipsum, efficitur vel lorem ac,
              tristique posuere orci. Nulla tempus, lorem in congue tincidunt,
              est erat mollis arcu, eu dapibus nisl quam sed massa. Nullam nec
              ornare nibh, vel cursus sapien. Nulla porttitor in orci non
              fringilla. Pellentesque ultrices lectus eros, vitae feugiat leo
              consequat blandit. Maecenas semper neque eu aliquet ullamcorper.
              Aenean ut leo et augue tincidunt convallis sit amet eu dui.
              Phasellus sodales diam quis mi pellentesque, eget tincidunt enim
              dapibus. Fusce aliquam pretium odio, ut posuere mauris elementum
              eu. Quisque vitae enim a lorem viverra sodales eget nec enim. Sed
              maximus augue eget volutpat viverra. Sed convallis enim vitae
              neque aliquet, id tincidunt neque sollicitudin. Pellentesque
              convallis vulputate massa at pellentesque. Curabitur vitae
              fermentum felis. Phasellus egestas felis a mi tempor finibus.
              Nulla non nulla vel odio ullamcorper viverra non et sem. Nulla
              facilisi. Pellentesque pretium eros tellus, et scelerisque metus
              tincidunt quis. Pellentesque imperdiet est dui, in porttitor risus
              suscipit eu. Suspendisse pulvinar at velit non tincidunt. Maecenas
              mi enim, luctus eu maximus euismod, tristique ut nibh. Maecenas
              ullamcorper porttitor magna, at fermentum diam vehicula eu. In
              dolor turpis, pharetra eu dui sed, sollicitudin vestibulum turpis.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              fermentum lacus. Sed gravida nibh nunc, ac accumsan orci ultricies
              vel. Sed a tellus sem. Pellentesque felis dolor, blandit a
              bibendum a, fringilla in dolor. Aliquam consectetur orci nec odio
              faucibus malesuada. Donec egestas lectus eu libero blandit
              suscipit eget non est. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Ut vehicula ante eu dapibus posuere.
              Suspendisse potenti. Suspendisse potenti. Cras euismod posuere
              mauris, rutrum ultricies diam maximus id. Pellentesque ultrices
              mauris felis, a aliquet massa congue malesuada. Mauris elit erat,
              finibus a venenatis ac, accumsan eu urna. Morbi dignissim mauris
              dolor, id mollis elit efficitur eu. Mauris porta lectus odio, non
              pellentesque purus pretium vitae. Cras finibus porta tempor. Donec
              ullamcorper elementum elit, sit amet vehicula massa blandit vel.
              Nulla pretium massa nec elit tempus elementum. Mauris semper
              aliquam lacus eu malesuada.
            </Text>
          </Box>
        </Box>
      </div>
    </main>
  ),
};
