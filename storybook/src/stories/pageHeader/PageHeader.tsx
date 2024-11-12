import { Stack, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import React from "react";

export interface PageheaderProperties {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  actions?: React.ReactNode;
  buttonBack?: React.ReactNode;
  fixed?: boolean;
}

export const PageHeaderComponent = ({
  title,
  subtitle,
  actions,
  buttonBack,
  fixed,
}: PageheaderProperties) => {
  return (
    <Stack
      id="main-container"
      height={48}
      position={fixed ? "fixed" : "relative"}
      width={fixed ? "100%" : "inherit"}
      bgcolor="background.paper"
      sx={{
        boxShadow: (theme) => theme.shadows[1],
        zIndex: 10,
      }}
    >
      <Stack
        id="acionts"
        height={40}
        padding={buttonBack ? "4px 24px 4px 6px" : "4px 24px 4px 24px"}
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
      >
        <Stack gap={1} flexDirection="row" alignItems="center" id="action-one">
          {buttonBack}
          <Stack id="title-container" gap={.5}>
            <Typography color="text.primary" variant="h6">
              {title}
            </Typography>
            {subtitle && (
              <Typography color="text.primary" variant="caption">
                {subtitle}
              </Typography>
            )}
          </Stack>
        </Stack>
        {actions && (
          <Stack id="aciont-two" gap={1} alignItems="center" flexDirection="row">
            {actions}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
export { PageHeaderComponent as PageHeader };
