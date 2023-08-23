import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function LoginPage() {
  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          my: 'auto',
        }}
      >
        <Box mr={5}>Form Card</Box>
        <Box sx={{display: {xs: 'none', md: 'block'}}} ml={5}>Image</Box>
      </Box>
    </Container>
  );
}
