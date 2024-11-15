import "./Generales";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Stack } from "@mui/material";
// import { ProgressSinco  } from "@sinco/react";
import { SincoTheme } from "../Theme";
import { ProgressSinco } from "@sinco/react";
// import { ProgressSinco } from "./CircularProgress/ProgressSinco";

const meta: Meta<typeof ProgressSinco> = {
  title: "Sinco React/ProgressSinco",
  component: ProgressSinco,
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Stack height={160}>
          <Story />
        </Stack>
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes:{
    textPorcent: {
      description: "Propiedad para modificar el texto que se muestra durante la carga del componente",
      control: "text"
    }
  }
};

export default meta;

type Story = StoryObj<typeof ProgressSinco>;

export const ProgressSincoStory: Story = {
  name: "ProgressSinco",
  args:{
    textPorcent: "Procesando"
  },
  render: ({textPorcent}) => <ProgressSinco textPorcent={textPorcent} time={1000}  />,
};
