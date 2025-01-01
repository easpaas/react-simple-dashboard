import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/settings" underline='none' color='white'>
            Settings
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
