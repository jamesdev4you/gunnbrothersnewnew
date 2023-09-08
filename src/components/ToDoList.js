import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import PaidIcon from '@mui/icons-material/Paid';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function ToDoList(props) {
  return (
    <div className='List-grid'>
      <div className='List-item'>
        <props.BoxOne.icon className='To-Do-Icons' />
        <Typography
          className='to-do-list-text'
          sx={{ fontFamily: 'Ubuntu', color: 'black' }}
        >
          {props.BoxOne.details}
        </Typography>
      </div>
      <div className='List-item'>
        <props.BoxTwo.icon className='To-Do-Icons' />
        <Typography
          className='to-do-list-text'
          sx={{ fontFamily: 'Ubuntu', color: 'black' }}
        >
          {props.BoxTwo.details}
        </Typography>
      </div>
      <div className='List-item'>
        <props.BoxThree.icon className='To-Do-Icons' />
        <Typography
          className='to-do-list-text'
          sx={{ fontFamily: 'Ubuntu', color: 'black' }}
        >
          {props.BoxThree.details}
        </Typography>
      </div>
    </div>
  );
}
