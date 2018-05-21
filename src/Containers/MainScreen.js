/* @flow */


import React from 'react';

import CategoryItem from '../Components/CategoryItem';
import CategoryList from '../Components/CategoryList';


const data = [{
  title: 'Row 1',
  id: 1,
}, {
  title: 'Row 2',
  id: 2,
}];

const MainScreen = () => (
  <CategoryList
    data={data}
    renderItem={CategoryItem}
  />
);


export default MainScreen;
