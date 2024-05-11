import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types';

export const TaskTitleField: FC<ITextField> = (
  props
): ReactElement => {
  const {
    onChange = (e) => console.log(e),
    disabled = false,
  } = props;

  return (
    <TextField
      id="Title"
      label="Task Title"
      placeholder="Task Title"
      size="small"
      name="Title"
      fullWidth
      disabled={disabled}
      onChange={onchange}
    ></TextField>
  );
};

TaskTitleField.propTypes = {
  onchange: PropTypes.func,
  disabled: PropTypes.bool,
};
