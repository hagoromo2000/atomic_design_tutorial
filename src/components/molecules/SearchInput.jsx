import React from "react";
import Input from "../atoms/button/input/Input";
import PrimaryButton from "../atoms/button/PrimaryButton";
import styled from "styled-components";

export const SearchInput = () => {
  return (
    <>
      <div>
        <SContainer>
          <Input placeholder="検索条件を入力" />
          <SbuttonWrapper>
            <PrimaryButton>検索</PrimaryButton>
          </SbuttonWrapper>
        </SContainer>
      </div>
    </>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SbuttonWrapper = styled.div`
  padding-left: 8px;
`;
