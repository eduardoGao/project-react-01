import { useState, useEffect } from 'react';

const getData = (API) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setInfo(data));
  }, []);
  return info;
};

export default getData;
