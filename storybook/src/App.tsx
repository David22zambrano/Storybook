import { useState } from 'react'
import './App.css'
import { Box, Chip, Collapse, FormControl, IconButton, InputLabel, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material'
import { Close, Drafts, ExpandLess, ExpandMore, Inbox, Send, StarBorder } from '@mui/icons-material';

function App() {

  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>

      <IconButton color="default" size="small">
        <Close fontSize="inherit" />
      </IconButton>
      <IconButton size="small">
        <Close fontSize="inherit" />
      </IconButton>

      <Stack width={200} gap={1}>
        <FormControl fullWidth variant='standard' size="small">
          <InputLabel id="demo-simple-select-label">Label</InputLabel>
          <Select
            variant='standard'
            value={age}
            label="Label"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth variant='standard' size="medium">
          <InputLabel id="demo-simple-select-label">Label</InputLabel>
          <Select
            variant='standard'
            value={age}
            label="Label"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth variant="filled">
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

      </Stack>
      <Stack gap={1}>
        <Typography>
          Filled medium
        </Typography>
        <FormControl fullWidth variant='filled' size="medium">
          <InputLabel id="demo-simple-select-label">Label</InputLabel>
          <Select
            // variant="standard"
            value={age}
            label="Label"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Typography>
          Filled small
        </Typography>
        <FormControl fullWidth variant='filled' size="small">
          <InputLabel id="demo-simple-select-label">Label</InputLabel>
          <Select
            variant="filled"
            value={age}
            label="Label"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Stack >
        <Typography>
          outlined medium
        </Typography>
        <FormControl fullWidth size="medium">
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            variant="outlined"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Typography>
          outlined small
        </Typography>
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            variant="outlined"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>


      <Stack gap={1}>
        <Typography pb={1}>
          standard medium
        </Typography>
        <FormControl fullWidth variant='standard' size='medium'>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            variant="standard"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Typography pb={1} >
          standard small
        </Typography>
        <FormControl fullWidth variant='standard' size='small'>
          <InputLabel id="demo-simple-select-label" >Age</InputLabel>
          <Select
            variant="standard"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>   
    </>
  )
}

export default App
