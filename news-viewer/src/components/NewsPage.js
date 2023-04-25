import React from 'react';
import NewsList from './NewsList';
import Categories from './Categories';
import { useParams } from 'react-router-dom';

const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';
  return (
    <div>
      <>
        <Categories />
        <NewsList category={category} />
      </>
    </div>
  );
};

export default NewsPage;
