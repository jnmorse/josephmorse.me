import React from 'react';

export const FaIcon = (props) => {
  let type = props.type === 'freecodecamp' ? 'fire' : props.type;
  let classes = ['fa', 'fa-fw', 'fa-' + type];

  if (props.size) {
    classes.push('fa-' + props.size);
  }

  return (
    <i className={classes.join(' ')}></i>
  );
};
