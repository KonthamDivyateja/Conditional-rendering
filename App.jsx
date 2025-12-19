 import React, { useState } from "react";

const ComponentA = () => <h1>Status is TRUE</h1>;
const ComponentB = () => <h1>Status is FALSE</h1>;

const StatusToggle = () => {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <div>
      <button onClick={toggleStatus}>Toggle Status</button>
      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
};

export default StatusToggle;