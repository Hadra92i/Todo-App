import React from "react";
import styled from "styled-components";

const Copyright = styled.div`
  text-align: center;
  color: #fff;
  font-size: 18px;
  margin: 2rem 0;
`;

const Footer = () => {
  return (
    <Copyright>
      <p>Copyrights &copy; {new Date().getFullYear()}. HADRA 92I</p>
    </Copyright>
  );
};

export default Footer;
