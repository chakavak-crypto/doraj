'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useAppDispatch, useAppSelector} from "@/tools/redux/hooks";
import {closeLogoutModal, openLogoutModal, selectOpen} from "@/features/LogoutModal/LogoutModalSlice";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function LogoutModal() {
  const open = useAppSelector(selectOpen)
  const dispatch = useAppDispatch();
  const handleOpen = () => dispatch(openLogoutModal());
  const handleClose = () => dispatch(closeLogoutModal());

  return (
    <div>
      <Modal
        sx={{
          zIndex: 3000
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            خروج از سیستم
          </Typography>
          <Typography id="modal-modal-description" sx={{mt: 2}}>
            برای خروج از سیستم اطمینان دارید؟
          </Typography>
          <Box>
            <Button variant={'outlined'} color={'error'}>بله، خارج می شود</Button>
            <Button variant={'outlined'} color={'secondary'}>انصراف</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}