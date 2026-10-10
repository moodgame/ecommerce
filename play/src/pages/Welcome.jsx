import React from 'react';

const MyComponent = () => {
  return (
    <div className="container">
      <div className="circle bg-dark-red"></div>
      <svg className="svg-icon" viewBox="0 0 74 47"></svg>
      <div className="box small"></div>
      <div className="box bg-gray large"></div>
      <div className="box-container">
        <div className="box bg-light rounded"></div>
        <svg className="svg-icon" viewBox="0 0 147 141"></svg>
        <div className="box small"></div>
        <div className="box rounded bg-light">
          <img src="https://picsum.photos/450/600" alt="Sample" className="image" />
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
