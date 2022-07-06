import styled from "styled-components";
import React from "react";

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;

  & input {
    padding: 400px;
    font-size: 40px;
    border: black solid 3px;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: black;
    font-size: 20px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;
const ChoosePlaceLabel = styled.span`
  color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;
const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;
const PlaceComponent = (props) => {
  const {  updatelong, updatelat,fetchWeather } = props;
  return (
    <>
      <WelcomeWeatherLogo src={"/icons/perfect-day.svg" } />
      <ChoosePlaceLabel>Find Weather of location</ChoosePlaceLabel>

     <input
          onChange={(e) => updatelong(e.target.value)}
          placeholder="Enter longitude in degrees"
        /> 
        <input
          onChange={(e) => updatelat(e.target.value)}
          placeholder="Enter latitude in degrees"
        />

      <SearchBox onSubmit={fetchWeather}>
        
        
        <button type={"submit"}>Search</button>
      </SearchBox>
    </>
  );
};
export default PlaceComponent;
