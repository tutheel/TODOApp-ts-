import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types';

export const TaskDescriptionField: FC<ITextField> = (
  props
): ReactElement => {
  const {
    onChange = (e) => console.log(e),
    disabled = false,
  } = props;

  return (
    <TextField
      id="Description"
      label="Task Description"
      placeholder="Task Description"
      variant="outlined"
      size="small"
      name="Description"
      multiline
      fullWidth
      rows={4}
      disabled={disabled}
      onChange={onchange}
    ></TextField>
  );
};

TaskDescriptionField.propTypes = {
  onchange: PropTypes.func,
  disabled: PropTypes.bool,
};
