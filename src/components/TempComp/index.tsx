import React from "react"

interface TempCompProp {
  name: string;
  age: number;
}

const TempComp = ({ name, age }: TempCompProp) => <>{name} {age}岁了...</>

export default TempComp
