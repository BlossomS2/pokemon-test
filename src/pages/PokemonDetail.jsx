import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../mock";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: white;
`;
const StartBtn = styled.div`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #ff0000;
  color: white;
  border: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #cc0000;
  }
`;
const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
`;
const PokemonName = styled.h2`
  margin: 20px 0;
  color: white;
`;

// const BackBtutton = styled.button`
//   margin-top: 20px;
//   padding: 10px 20px;
//   font-size: 16px;
//   cursor: pointer;
// `;

const PokemonDetail = () => {
  const navigate = useNavigate();
  const location = new URLSearchParams(useLocation().search);
  const pokemonId = parseInt(location.get("id"));
  const selectedPokemon = MOCK_DATA.find((pokemon) => pokemon.id == pokemonId);

  console.log("selectedPokemon", selectedPokemon);
  return (
    <HomeContainer>
      <PokemonImage
        src={selectedPokemon.img_url}
        alt={selectedPokemon.korean_name}
      />
      <PokemonName>{selectedPokemon.korean_name}</PokemonName>
      <deps>타입:{selectedPokemon.types.join("", "")}</deps>
      <deps>{selectedPokemon.description}</deps>
      <StartBtn onClick={() => navigate("/dex")}>도감으로 돌아가기</StartBtn>
    </HomeContainer>
  );
};

export default PokemonDetail;
