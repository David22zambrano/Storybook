import type { Meta } from "@storybook/react";
import { Button, IconButton, ThemeProvider } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { SincoTheme } from "../Theme";
import { PageHeader } from "./pageHeader/PageHeader";
import "./Generales";


const meta: Meta<typeof PageHeader> = {
  title: "Sinco React/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <div style={{ height: "56px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    actions: {
      description: "Las acciones que se podran agregar en el pageheader",
    },
    fixed: {
      description: "Ahora el pageHader podrá tener una posición fixed o no",
    },
  },
};
export default meta;

export const PageActions = {
  name: "PageActions",
  args: {
    fixed: false,
    title: "Title",
    subtitle: "Subtitle",
    actions: <Button size="small">Actions</Button>,
    back: (
      <IconButton size="small" color="primary">
        <ArrowBack fontSize="small" />
      </IconButton>
    ),
  },
};