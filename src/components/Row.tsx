import React from 'react'
import Constituent from '../model/Constituent';

interface Props {
  constituent: Constituent
}

const Row: React.FC<Props> = ({ constituent }) => {
  return (
    <tr>
      <td>{`${constituent.email}`}</td>
      <td>{`${constituent.firstName}`}</td>
      <td>{`${constituent.lastName}`}</td>
      <td>{`${constituent.zipCode}`}</td>
    </tr>
  );
}

export default Row;

