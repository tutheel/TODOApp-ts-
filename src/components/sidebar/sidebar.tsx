import { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import { Profile } from '../Profile/profile';
import { CreateTaskForm } from '../createTaskForms/createTaskForm';

export const Sidebar: FC = (): ReactElement => {
  return (
    <Grid
      item
      md={4}
      sx={{
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        backgroundColor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Profile name="Anuradha" />
      <CreateTaskForm />
    </Grid>
  );
};
