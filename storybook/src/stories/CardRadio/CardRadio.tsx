import { Radio, Stack, SxProps, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

type RadioPosition = 'left' | 'right';
type Radiostate = 'active' | 'disabled' | 'default';
type CardRadioColors = 'primary' | 'secondary';

export interface CardRadioProps {
  RadioPosition?: RadioPosition;
  topRadioPosition?: boolean;
  state?: Radiostate;
  media?: React.ReactNode;
  header?: React.ReactNode | string;
  content?: React.ReactNode | string;
  color?: CardRadioColors;
  onChange: (value: string | number) => void;
  value: string | number;
  checked?: boolean;
  sx?: SxProps;
  sxContent?: SxProps;
}

export const CardRadio: FC<CardRadioProps> = ({
  RadioPosition = 'right',
  state = 'default',
  media,
  header,
  content,
  topRadioPosition = false,
  color = 'primary',
  value,
  onChange,
  checked,
  sx,
  sxContent
}) => {
  const [isChecked, setIsChecked] = useState(
    (checked || state === 'active') ?? false
  );
  const [isActive] = useState(state === 'active');

  const handleClick = () => {
    if (state === 'disabled') return;
    setIsChecked(!isChecked);
    onChange(value);
  };

  const getBackgroundColor = () => {
    if (state === 'disabled') return '';
    return isChecked || isActive
      ? color === 'primary'
        ? '#E4ECF4'
        : color === 'secondary'
          ? '#00BCD414'
          : '#FBFBFB'
      : 'transparent';
  };

  const getBorderColor = () => {
    return isChecked || isActive
      ? color === 'primary'
        ? '#2063A080'
        : color === 'secondary'
          ? '#00BCD480'
          : '#00BCD4'
      : '#0000001F';
  };
  const getHoverColor = () => {
    return color === 'primary'
      ? '#2063A00A'
      : color === 'secondary'
        ? '#00BCD40A'
        : 'FBFBFB';
  };
  useEffect(() => {
    if (checked !== undefined) setIsChecked(checked);
  }, [checked]);

  return (
    <Stack
      data-testid="card-radio"
      padding={'8px 16px'}
      borderRadius={1}
      border={`solid 1px ${getBorderColor()}`}
      sx={{
        '&:hover': {
          backgroundColor: checked
            ? 'none'
            : state === 'disabled'
              ? 'inherit'
              : getHoverColor(),
        },
        cursor: 'pointer',
        ...sx
      }}
      bgcolor={getBackgroundColor()}
      onClick={handleClick}
    >
      <Stack
        justifyContent={'space-between'}
        flexDirection={RadioPosition === 'right' ? 'row' : 'row-reverse'}
        gap={RadioPosition === 'left' ? 1 : 0}
        sx={{ ...sxContent }}
      >
        <Stack flexDirection={'row'} padding={'0px 16px 0 0'} gap={1}>
          {media && <Stack>{media}</Stack>}
          <Stack>
            {header && (
              <Typography
                variant="subtitle2"
                color={
                  state === 'disabled'
                    ? 'text.disabled'
                    : isActive
                      ? 'text.primary'
                      : 'text.primary'
                }
              >
                {header}
              </Typography>
            )}
            {content && (
              <Typography
                variant="caption"
                color={
                  state === 'disabled'
                    ? 'text.disabled'
                    : isActive
                      ? 'text.secondary'
                      : 'text.secondary'
                }
              >
                {content}
              </Typography>
            )}
          </Stack>
        </Stack>
        <Stack
          justifyContent={topRadioPosition === true ? 'flex-start' : 'center'}
        >
          <Radio
            checked={isChecked || isChecked}
            color={color}
            disabled={state === 'disabled'}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
