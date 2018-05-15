import React from 'react';

const Progress = (props) => {
  let rate = Math.floor(props.onCount / props.onLength * 100);

  return (
    <div className={`${rate != 100 ? 'orange-text darken-4' : 'light-green-text darken-1'}`}>
      <span className="left">{`${rate}%`}</span>
      <span className="right">{`${props.onCount}/${props.onLength}`}</span>
      <div className="progress amber lighten-3">
        <div className={`determinate ${rate != 100 ? 'orange darken-3"' : 'light-green darken-1'}`} style={{ width: rate + '%' }}></div>
      </div>
    </div>
  );
}

export default Progress;