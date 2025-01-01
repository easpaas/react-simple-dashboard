import * as React from 'react';
import { Box, AppBar, Typography, Toolbar } from '@mui/material';


export default function NavBar({title}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant='h6'>{title}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
