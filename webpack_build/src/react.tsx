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
  // dd
  return (
    <div className={s.container}>React_ts {props.name}
      <div className={s.box}></div>
    </div>
  )
}

export default React_ts
