import styled from "styled-components";

const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SContainer>
      <SImg height={160} width={160} alt={name} src={image} />
      <SName>{name}</SName>
    </SContainer>
  );
};

export default UserIconWithName;

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
  color: #40514e;
`;
