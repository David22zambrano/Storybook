/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import {
  ThemeProvider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import { SincoTheme } from "../Theme";
import "./Generales";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
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
    open: {
      description: "Si es `true`, el componente se muestra",
    },
    onClose: {
      description: "`function(event: object, reason: string) => void`",
    },
    fullWidth: {
      description: "Si es `true`. Aumenta su ancho hasta el maxWidth definido.",
      control: "boolean",
      options: [true, false]
    },
    maxWidth: {
      description: "Determina el ancho máximo del cuadro de diálogo. El ancho del cuadro de diálogo aumenta con el tamaño de la pantalla. Establezca en falso para desactivar el ancho máximo.",
      control: "radio",
      options: ["xs", "sm", "md", "xl"]
    }
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const DialogStorie: Story = {
  name: "Dialog",
  args: {
    fullWidth: true,
    maxWidth: "xl"
  },
  render: ({maxWidth }) => {
    const [open, setOpen] = useState(false);

    const controlDialog = useCallback(() => {
      setOpen((prev) => !prev);
    }, [setOpen]);
    return (
      <>
        <Button onClick={controlDialog}>Abrir dialog</Button>
        <Dialog fullWidth open={open} onClose={controlDialog} maxWidth={maxWidth}>
          <DialogTitle>Title dialog</DialogTitle>
          <DialogContent>
            <Typography variant="body2" color="text.primary">
              Contenido del dialog
            </Typography>
          </DialogContent>
          <DialogActions>
            <Stack flexDirection={"row"} gap={1}>
              <Button size="small" onClick={controlDialog} color="primary" variant="text">
                Cancelar
              </Button>
              <Button size="small" onClick={controlDialog} color="primary" variant="contained">
                Guardar
              </Button>
            </Stack>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};
