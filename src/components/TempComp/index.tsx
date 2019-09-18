import React, { Fragment } from 'react';

interface TempCompProp {
  name: string;
  age: number;
}

const TempComp = ({ name, age }: TempCompProp) => {
  return <Fragment>{name} {age}岁了...</Fragment>
}

export default TempComp
