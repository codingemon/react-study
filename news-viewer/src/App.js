import React, { useCallback, useState } from 'react';
import Cotegories from './components/Cotegories';
import NewsList from './components/NewsList';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Cotegories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
