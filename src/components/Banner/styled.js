import styled from 'styled-components/native';

export const MainContainer = styled.View`
  background: #fff;
  flex: 1;
  margin-left: 5;
  margin-right: 5;
  margin-top: 20;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
`;

export const ContainerInfo = styled.View`
  flex: 1;
  padding-left: 10px;
  justify-content: center;
  background: red;
`;

export const Title = styled.Text`
  font-size: 20;
  font-family: SourceSansPro-Bold;
  flex: 2.5;
`;

export const Vote = styled.Text`
  font-size: 25;
  margin-top: 10px;
  font-family: SourceSansPro-Black;
`;
