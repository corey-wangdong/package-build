import React from 'react';
// import './react.css';
import './react.scss';
// import './react.less';

interface IProps {
  name: string
}

function React_ts(props: IProps) {
  return (
    <div className='container'>React_ts {props.name}</div>
  )
}

export default React_ts
