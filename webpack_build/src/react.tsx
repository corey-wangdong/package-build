import React from 'react';
// import './react.css';
// import './react.scss';
// import './react.less';

// import s from './react.scss';
import s from './react.less';

interface IProps {
  name: string
}

function React_ts(props: IProps) {
  return (
    <div className={s.container}>React_ts {props.name}</div>
  )
}

export default React_ts
