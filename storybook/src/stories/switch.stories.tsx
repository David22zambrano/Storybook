import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ThemeProvider,
  Switch,
  FormGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@mui/material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
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
      description: "El color del componente.",
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
      description: "Selecciona entre los tamaños disponibles",
      control: "radio",
      options: ["small", "medium"],
    },
    disabled: {
      description: "Si `true`, el componente está deshabilitado.",
      control: "boolean",
    },
    checked: {
      description: "Si `true`, el componente está marcado.",
      control: "boolean",
    },
    title: {
      description: "El contenido del título",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const SwitchStory: Story = {
  name: "Switch",
  args: {
    color: "primary",
    size: "small",
    disabled: false,
    checked: false,
    title: "text",

  },
  render: ({ color, size, disabled, checked, title, edge }) => (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            color={color}
            size={size}
            disabled={disabled}
            checked={checked}
            title={title}
          />
        }
        label={title}
      />
    </FormGroup>
  ),
};

export const SwitchLabelPlacement: Story = {
  name: "Switch labelPlacement",
  args: {
    color: "primary",
    size: "small",
    disabled: false,
    checked: false,
    title: "text",

  },
  render: () => (
    <FormControl component="fieldset">
      <FormLabel component="legend">Label placement</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label="top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="bottom"
          control={<Switch color="primary" />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label="End"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label="start"
          labelPlacement="start"
        />

      </FormGroup>
    </FormControl>
  ),
};