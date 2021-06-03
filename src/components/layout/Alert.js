import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert-${alert.type}`}>
        <i className='fas fa-info-circle' style={{ margin: "20px" }} />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
