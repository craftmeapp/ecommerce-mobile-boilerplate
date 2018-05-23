// @flow

import React from 'react';
import {Text} from 'react-native';


const CategoryItem = ({item}) => (
  <Text key={item.id}>
    {item.title}
  </Text>
);


export default CategoryItem;
