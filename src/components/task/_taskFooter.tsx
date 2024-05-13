import {
  Box,
  Button,
  FormControlLabel,
  Switch,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { Status } from '../createTaskForms/enums/Status';
import { ITaskFooter } from './interfaces/ITaskFooter';
import PropTypes from 'prop-types';

export const TaskFooter: FC<ITaskFooter> = (
  props
): ReactElement => {
  const {
    id,
    status,
    onStatusChange = (e) => console.log(e),
    onclick = (e) => console.log(e),
  } = props;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            onChange={(e) => {
              onStatusChange(e, id);
            }}
            color="warning"
            defaultChecked={status === Status.inProgress}
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={(e) => {
          onclick(e, id);
        }}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  id: PropTypes.string,
  status: PropTypes.string,
  onStatusChange: PropTypes.func,
  onclick: PropTypes.func,
};
