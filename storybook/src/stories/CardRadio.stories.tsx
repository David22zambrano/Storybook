import { useState } from "react";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import img from "../assets/Ilustracion.svg";
import { Stack, ThemeProvider } from "@mui/material";
import { SincoTheme } from "../Theme";
import "./Generales";
import { CardRadio } from "./CardRadio/CardRadio";
// import { CardRadio } from "@sinco/react";

const meta: Meta<typeof CardRadio> = {
  title: "sinco react/Card Radio",
  component: CardRadio,
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
  argTypes: {
    checked: {
      description: "Controla si es componente esta o no en estado seleccionado",
      control: "boolean"
    },
    topRadioPosition: {
      description: "Modifica la alineacion del radio button del componente",
      control: "boolean"
    },
    RadioPosition: {
      description: "Alinea en eje x la posicion del radio button",
      control: "select",
      options: ["left", "right"]
    },
    state: {
      description: "",
      control: "select",
      options: ["active", "disabled"]
    },
    color: {
      description: "Aplica el color del componente",
      control: "select",
      options: ["primary", "secondary"]
    },
    media: {
      description: "Img que se muestra dentro del componente"
    },
    header: {
      table: {
        disable: true
      },
    }
  }
};

export default meta;

type Story = StoryFn | StoryObj<typeof CardRadio>;

export const CardRadioExample: Story = {
  name: "Card Radio ",
  args: {
    checked: false,
    topRadioPosition: false,
    RadioPosition: "left",
    color: "primary",
  },
  render: ({ checked, RadioPosition, topRadioPosition, color, state }) => {
    return (
      <>
        <CardRadio
          header="Header title CardRadio"
          content="Content text card radio"
          media={<img src={img} alt="a" style={{ height: 40, width: 40 }} />}
          sx={{}}
          sxContent={{}}
          color={color}
          state={state}
          RadioPosition={RadioPosition}
          topRadioPosition={topRadioPosition}
          onChange={() => { }}
          checked={checked}
          value={0}
        />
      </>
    )
  }
}

export const CardRadioOptions: Story = () => {
  const [prueba, setPrueba] = useState(0);

  return (
    <Stack flexDirection={"row"} gap={1}>
      <CardRadio
        sx={{}}
        sxContent={{}}
        media={<img src={img} alt="a" style={{ height: 40, width: 40 }} />}
        header="Header title CardRadio"
        color="primary"
        state="disabled"
        RadioPosition="left"
        topRadioPosition={true}
        content="Content text card radio"
        onChange={(value: number | string) => setPrueba(value as number)}
        checked={true}
        value={0}
      />
      <CardRadio
        sx={{}}
        sxContent={{}}
        header="Header title CardRadio"
        color="primary"
        state="disabled"
        RadioPosition="right"
        topRadioPosition={false}
        content="Content text card radio"
        onChange={(value: number | string) => setPrueba(value as number)}
        media={<img src={img} alt="a" style={{ height: 40, width: 40 }} />}
        checked={prueba === 1}
        value={1}
      />
    </Stack>
  );
};
