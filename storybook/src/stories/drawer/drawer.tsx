import React, { ReactNode, useCallback, useState } from "react";
import { IconButton, Stack, Typography, Drawer, SxProps } from "@mui/material";
import { Close } from "@mui/icons-material";

export type DrawerPosition = "left" | "right";

const borderStyles: Record<
  DrawerPosition,
  { borderTopRightRadius?: string; borderTopLeftRadius?: string }
> = {
  left: { borderTopRightRadius: "0.25rem" },
  right: { borderTopLeftRadius: "0.25rem" },
};

export interface DrawerComponentProperties {
  title: string;
  children: ReactNode;
  actions?: ReactNode;
  width: string;
  color?: string;
  backgroundColor?: string;
  closeIconColor?: string,
  headerColor?: string;
  open: boolean;
  showActions?: boolean;
  onClose: () => void;
  sx?: SxProps;
  sxContent?: SxProps;
  sxActions?: SxProps;
  sxHeader?: SxProps;
  anchor?: DrawerPosition;
  anchorActions: "flex-end" | "flex-start";
}


export const DrawerComponent = ({
  open,
  onClose,
  title,
  width,
  children,
  actions,
  sx,
  sxHeader,
  sxContent,
  sxActions,
  color,
  backgroundColor,
  closeIconColor,
  headerColor,
  anchor = "left",
  anchorActions = "flex-end",
  showActions = false,
}: DrawerComponentProperties) => {

  const [stateActions, setActionsState] = useState(showActions);

  const handleDrawerActions = useCallback(() => {
    setActionsState(true);
  }, []);

  const paperSx: SxProps = borderStyles[anchor];

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "#00000047"
        },

        "& .MuiDrawer-paper": {
          width: width,
          ...paperSx,
        },
        ...sx,
      }}
    >
      <Stack height="100%">
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          py={1.5}
          px={1}
          sx={{
            backgroundColor: "secondary.main" || `${headerColor}.main`,
            ...sxHeader
          }}
        >
          <Typography color={ "background.paper" || color } variant="h6">
            {title}
          </Typography>

          <IconButton onClick={onClose} size="small" sx={{
            color: closeIconColor || "brackground.paper"
          }}>
            <Close
              fontSize="inherit"
            />
          </IconButton>
        </Stack>

        <Stack
          sx={{
            backgroundColor: backgroundColor || "background.paper",
            ...sxContent
          }}
          py={2}
          px={1.5}
          overflow="auto"
          flex={1}
          onClick={handleDrawerActions}
        >
          {children}
        </Stack>

        {stateActions && (
          <Stack
            alignItems={anchorActions}
            gap={1}
            py={1.5}
            px={1}
            bgcolor="background.default"
            sx={sxActions}
          >
            {actions}
          </Stack>
        )}
      </Stack>
    </Drawer>
  );
};
export { DrawerComponent as Drawer };