import * as React from 'react';

export interface IHelloProps {
  name: string,
  level?:number,
}

export default function Hello ({name,level = 1}: IHelloProps) {
  return (
    <div>
      {name + getExclamationMarks(level)}
      
    </div>
  );
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

