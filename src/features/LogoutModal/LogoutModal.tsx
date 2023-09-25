'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useAppDispatch, useAppSelector} from "@/tools/redux/hooks";
import {closeLogoutModal, selectOpen} from "@/features/LogoutModal/LogoutModalSlice";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import {useTranslation} from "@/app/i18n/client";

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
  const [t] = useTranslation();
  const handleClose = () => dispatch(closeLogoutModal());

  const handleOk = () => {

  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 }, zIndex: 3000 }}
      maxWidth="xs"
      open={open}
      keepMounted
    >
      <DialogTitle>{t('logout_of_system')}</DialogTitle>
      <DialogContent dividers>
        <Typography>
          {t('logout_message')}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} variant={'outlined'} color={'secondary'}>{t('cancel')}</Button>
        <Button onClick={handleOk} variant={'outlined'} color={'error'}>{t('yes_logout')}</Button>
      </DialogActions>
    </Dialog>
  );
}