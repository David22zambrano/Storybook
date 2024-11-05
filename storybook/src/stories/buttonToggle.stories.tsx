/* eslint-disable react-hooks/rules-of-hooks */
import React, {  useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import { SincoTheme } from "../Theme";

export default {
  title: "Components/ToggleButton",
  component: ToggleButtonGroup,
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      description:"Selecciona entre los colores disponibles",
      control: "select",
      options: [
        "primary",
        "secondary",
        "error",
        "warning",
        "info",
        "success",
        "inherit",
      ],
    },
    size: {
      description: "El tamaño del componente. ",
      control: "radio",
      options: ["small", "medium", "large"],
    },
    disabled: {
      description: "Si `true`, el componente está deshabilitado.",
      control: "boolean",
    },
    children:{
      description: "El contenido del componente.",
      control: "boolean"
    }
  },
} as Meta;

type Story = StoryObj<typeof ToggleButtonGroup>;

export const ToggleButtonStorie: Story = {
  name: "Toggle button group",
  args: {
    color: "primary",
    size: "small",
    disabled: false,
    children: false,
  },
  render: ({ color, size, disabled,children }) => {
    const [alignment, setAlignment] = useState("web");

    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string
    ) => {
      setAlignment(newAlignment);
    };

    return (
      <ToggleButtonGroup
        color={color}
        size={size}
        disabled={disabled}
        value={alignment}
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="web">{children ? <Add fontSize="small" /> : "Web"}</ToggleButton>
        <ToggleButton value="android">{children ? <Add fontSize="small" /> : "Android"} </ToggleButton>
        <ToggleButton value="ios">{children ? <Add fontSize="small" /> : "Android"}</ToggleButton>
      </ToggleButtonGroup>
    );
  },
};
