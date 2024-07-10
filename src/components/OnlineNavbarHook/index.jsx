import React from 'react';
import useOnlineStatus from '../../hooks/useOnlineCheckHook'; // Adjust the path as necessary

const index = () => {
  const isOnline = useOnlineStatus();

  return (
    <div>
    {isOnline?
    "":
    (<div>
        <h3  className="statusNav">{`You are currently ${isOnline ? 'Online' : 'Offline'}`}</h3>
    </div>)
    }
    </div>
  );
};

export default index;

