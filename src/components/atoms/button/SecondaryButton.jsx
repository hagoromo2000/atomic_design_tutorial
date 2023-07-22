import React from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

const SecondaryButton = (props) => {
  const { children } = props;
  return (
    <>
      <SButton>{children}</SButton>
    </>
  );
};

export default SecondaryButton;

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
