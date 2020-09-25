// Core
import { useEffect, useState } from 'react';
import { observable, autorun } from 'mobx';

type StorageType = {
  authorized: boolean;
}

const storage = observable<StorageType>({
  authorized: false,
});

type ReturnType = {
  authorized: boolean;
  setAuthorized: (value: boolean) => void;
}

export const useAuthorizedStorage = (): ReturnType => {
  const [authorized, setAuthorized] = useState(storage.authorized);

  useEffect(() => autorun(() => {
    setAuthorized(storage.authorized);
  }), []);

  const handleChange = (value: boolean): void => {
    storage.authorized = value;
  };

  return {
    authorized,
    setAuthorized: handleChange,
  };
};
