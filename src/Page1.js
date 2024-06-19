import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Page1() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const queryInput = searchParams.get('input') || '';
    setInputValue(queryInput);
  }, [searchParams]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSearchParams({ input: e.target.value });
  };

  return (
    <div>
      <h1>Page 1</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
}

export default Page1;
