'use client'

import dynamic from "next/dynamic";

const NewState = ({ state }) => {

  return (
    <div>
      <div>
        <h1>{state}</h1>
      </div>
    </div>
  );
};

export default NewState;
