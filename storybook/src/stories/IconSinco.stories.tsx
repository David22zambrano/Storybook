import "./Generales";
import * as Icons from "@sinco/react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, SvgIcon, Box, Typography, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { SincoTheme } from "../Theme";
import { BarChartHorizontal } from "@sinco/react";
import { IconsData } from "./Generales";

const meta: Meta<typeof SvgIcon> = {
  title: "Sinco React/SincoIcons",
  component: SvgIcon,
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
    docs: {
      description: {
        story: "Paquete de iconos propios de Sincosoft, alojados en la libreria @sinco/react. \n\n Ejemplo: `<BarChartHorizontal fontSize='large' />` ",
      },
    },
  },
  argTypes: {
    fontSize: {
      description: "El tamaño de fuente que se aplica al ícono. El valor predeterminado es 24 px, pero se puede configurar para heredar el tamaño de fuente. ",
      control: "radio",
      options: ["small", "medium", "large", "inherit"]
    },
  }
};

export default meta;
type Story = StoryObj<typeof SvgIcon>;

export const Icon: Story = {
  name: "Sinco icons library",
  args: {
    fontSize: "large",
  },
  render: (args) => (
    <Box display="flex" gap={1} width={"100%"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
      <BarChartHorizontal {...args} />
      <Typography variant="subtitle2" color="text.primary">BarChartHorizontal</Typography>
    </Box>
  ),
};

// export const AllIcons: Story = {
//   name: "Sinco icons library",
//   args: {
//     fontSize: "large",
//   },
//   render: (args) => (
//     <Box display="flex" gap={1} width={"100%"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
//       <ImageList variant="masonry" cols={3} gap={8}>
//         {IconsData.map((icon) => {
//           const IconComponent = Icons[icon.name]; 
//           return IconComponent ? (
//             <ImageListItem key={icon.name}>
//               <IconComponent fontSize={args.fontSize} />
//               <ImageListItemBar position="below" title={icon.name} />
//             </ImageListItem>
//           ) : (
//             <ImageListItem key={icon.name}>
//               <Typography variant="caption" color="error">
//                 Icono no encontrado: {icon.name}
//               </Typography>
//             </ImageListItem>
//           );
//         })}
//       </ImageList>
//     </Box>
//   ),
// };