import React from "react";

interface Props {
}

const Header: React.FC<Props> = () => {
  return (
    <tr>
      <th>Email</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>ZIP Code</th>
    </tr>
  );
};

export default Header;
