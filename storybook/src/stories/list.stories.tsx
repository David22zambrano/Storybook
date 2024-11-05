/* eslint-disable react-hooks/rules-of-hooks */
import "./Generales";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, Chip, Collapse, FormControl, IconButton, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Divider } from '@mui/material'
import { Close, Drafts, ExpandLess, ExpandMore, Inbox, Send, StarBorder } from '@mui/icons-material';
import { SincoTheme } from "../Theme";
import { useState } from 'react';

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
      control: 'select',
      options: ["Avatar", "Icono", "Vacio", "checkbox", "Icono y checkBox", "Avatar y checkBox"] 
    },
    title: {
      description: "El contenido del título",
      control: "text"
    },
   
  },
};

export default meta;
type Story = StoryObj<typeof List>;

// export const ListStory: Story = {
//   name: "List",
//   args: {
//     dense: false,
//     children: "Vacio", 
//     subheader: "list",
//     title: "list"
//   },
//   render: ({ dense, children, subheader, title }) => {
//     const [checked, setChecked] = useState<number[]>([]);

//     const handleToggle = (value: number) => () => {
//       const currentIndex = checked.indexOf(value);
//       const newChecked = [...checked];

//       if (currentIndex === -1) {
//         newChecked.push(value);
//       } else {
//         newChecked.splice(currentIndex, 1);
//       }

//       setChecked(newChecked);
//     };

//     const renderIcon = () => {
//       switch (children) {
//         case "Avatar":
//           return <Avatar sx={{ width: 20, height: 20 }} />;
//         case "Icono":
//           return <Inbox fontSize="medium" />;
//         case "Icono y checkBox":
//           return (
//             <Box display="flex" alignItems="center" gap={1}>
//               <Checkbox edge="start" disableRipple />
//               <Inbox fontSize="medium" />
//             </Box>
//           );
//         case "Avatar y checkBox":
//           return (
//             <Box display="flex" alignItems="center" gap={1}>
//               <Checkbox edge="start" disableRipple />
//               <Avatar sx={{ width: 20, height: 20 }} />
//             </Box>
//           );
//         case "checkbox":
//           return <Checkbox edge="start" disableRipple />;
//         default:
//           return null;
//       }
//     };

//     return (
//       <Stack width="100%" bgcolor="background.paper">
//         <List dense={dense}>
//           {[0, 1].map((value) => (
//             <ListItem key={value}>
//               <ListItemButton onClick={handleToggle(value)}>
//                 <ListItemIcon>
//                   {children === "AmboIcono y checkBoxs" ? (
//                     <Box display="flex" alignItems="center" gap={1}>
//                       <Checkbox
//                         edge="start"
//                         checked={checked.indexOf(value) !== -1}
//                         tabIndex={-1}
//                         disableRipple
//                       />
//                       <Inbox fontSize="medium" />
//                     </Box>
//                   ) : (
//                     renderIcon()
//                   )}
//                 </ListItemIcon>
//                 <ListItemText primary={title} secondary={subheader} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Stack>
//     );
//   },
// };

export const ListExample: Story = {
  name: "List",
  args: {
    dense: false,
    children: "Vacio", 
    subheader: "list",
    title: "list"
  },
  render: () => {


    return (
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
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
        <List>
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

