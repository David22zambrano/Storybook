/* eslint-disable react-hooks/rules-of-hooks */
import "./Generales";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Divider } from '@mui/material'
import {  Drafts, Inbox } from '@mui/icons-material';
import { SincoTheme } from "../Theme";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
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
    dense: {
      description: "Si truese utiliza un relleno vertical compacto diseñado para la entrada del teclado y del mouse para la lista y los elementos de la lista, la propiedad está disponible para los componentes descendientes como densecontexto.",
      control: "boolean",
    },
    subheader: {
      description: "El contenido del subtítulo",
      control: "text"
    },
    children: {
      description: "El contenido del componente.",
    },
    title: {
      description: "El contenido del título",
      control: "text"
    },
   
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const ListExample: Story = {
  name: "List",
  args: {
    dense: false,
    subheader: "list",
    title: "list"
  },
  render: ({dense}) => {

    return (
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List dense={dense}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List dense={dense}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
    );
  },
};

