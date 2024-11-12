import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Tab, Tabs, Badge, Box } from "@mui/material";
import { Phone } from "@mui/icons-material";
import { SincoTheme } from "../Theme";
import { useState } from "react";

const meta: Meta<typeof Tab> = {
  title: "Components/Tabs",
  component: Tab,
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
    disabled: {
      description: "Si `true`, el componente está deshabilitado.",
      control: "boolean",
    },
    icon: {
      description: "El icono a mostrar.",
      control: "boolean",
    },
    label: {
      description: "La etiqueta del input. ",
      control: "text",
    },
    iconPosition: {
      description: "La posición del icono con respecto a la etiqueta.",
      control: "radio",
      options: ["start", "top", "end", "bottom"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const TabExample: Story = {
  name: "Tab",
  args: {
    disabled: false,
    label: "RECENTS",
    icon: <></>,
    iconPosition: "start",
  },
  render: ({ disabled, label, icon, iconPosition }) => (
    <Tabs value={1} centered>
      <Tab
        iconPosition={iconPosition}
        disabled={disabled}
        icon={icon ? <Phone fontSize="medium" /> : undefined}
        label={label}
      />
      <Tab
        iconPosition={iconPosition}
        disabled={disabled}
        icon={icon ? <Phone fontSize="medium" /> : undefined}
        label={label}
      />
      <Tab
        iconPosition={iconPosition}
        disabled={disabled}
        icon={icon ? <Phone fontSize="medium" /> : undefined}
        label={label}
      />
    </Tabs>
  ),
};
export const TabWithBadge: Story = {
  name: "Tab width badge",
  render: ({ disabled, icon, iconPosition }) => {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Tabs value={value} centered onChange={handleChange} >
        <Tab
          iconPosition={iconPosition}
          disabled={disabled}
          icon={icon ? <Phone fontSize="medium" /> : undefined}
          label={
            // "Recent"
            <Box display="flex" alignItems="center" justifyContent="center">
              Recent
              <Badge color="success" variant="dot" sx={{ pr: 1 }} />
            </Box>
            // <Badge color="success" variant="dot" sx={{ top: "50%"}}>
            //   RECENTS
            // </Badge>
          } />
        <Tab label="Item two" />
        <Tab label="Item Three" />
      </Tabs>
    )

  },
};

export const TabVertical: Story = {
  name: "Tab vertical",
  render: () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
          
    <Tabs value={value} onChange={handleChange} orientation="vertical" centered>
      <Tab label="Item one" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
)},
};
