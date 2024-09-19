import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: url("https://i.postimg.cc/zXb8M0Vn/image.jpg") no-repeat center
    center;
  background-size: cover; // 이미지를 화면에 맞게 조절
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.5); // 약간의 그림자 추가
`;

const StartBtn = styled.div`
  padding: 15px 30px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgba(255, 71, 87, 0.8); // 배경색을 약간 투명하게
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(255, 71, 87, 0.3);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: rgba(228, 65, 24, 0.9);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 10px rgba(255, 71, 87, 0.2);
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: #fff; // 텍스트 색상을 흰색으로 변경
  margin-bottom: 20px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); // 텍스트에 그림자 추가
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <Title>포켓몬 도감</Title>
      <StartBtn
        onClick={() => {
          navigate("/dex");
        }}
      >
        시작하기
      </StartBtn>
    </HomeContainer>
  );
};

export default Home;
