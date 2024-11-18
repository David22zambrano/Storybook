import { useState } from 'react'
import './App.css'
import { Box, Button, Chip, Collapse, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, Stack, Typography } from '@mui/material'
import { ArrowBack, Close, Delete, Drafts, ExpandLess, ExpandMore, Inbox, Send, StarBorder } from '@mui/icons-material';
import { CardRadio, PageHeader } from '@sinco/react';
import img from "./assets/Ilustracion.svg";

function App() {

  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [prueba, setPrueba] = useState(0);
  return (
    <>
      <PageHeader
        // fixed={fixed}
        subtitle={"subtitle"}
        title={"title"}
        actions={<>
          <Button endIcon={<Delete />}>
            ejemplo prueba
          </Button>                </>
        }
        buttonBack={
          <IconButton color='primary'> < ArrowBack fontSize="small" /> </IconButton >}
      ></PageHeader >
      <Delete  />
      <IconButton  >
        <Delete />
      </IconButton>

      <Chip variant="standard" label="chip default" />
      <Chip variant="standard" color="primary" label="chip default" />
      <Chip variant="standard" color="primary" label="chip default" icon={< ArrowBack fontSize="small" />} />
      <Chip variant="standard" label="chip default" icon={< ArrowBack fontSize="small" />} />

    </>
  )
}

export default App
