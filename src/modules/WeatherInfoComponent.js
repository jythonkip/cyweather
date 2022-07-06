import React from "react";
import styled from "styled-components";
import {WeatherIcons} from "../App";

export const WeatherInfoIcons = {
    Temperature: "/react-weather-app/icons/Temperature.svg",
    Humidity: "/react-weather-app/icons/humidity.svg",
    Wind: "/react-weather-app/icons/wind.svg",
    pressure: "/react-weather-app/icons/pressure.svg",
    Cloudcover: "/react-weather-app/icons/Cloudcover.svg",
};


const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;
const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};
const WeatherComponent = (props) => {
    const {weather} = props;
    
    
    return (
        <>
            
            

            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent name={"Temperature"} value={weather?.hourly.temperature_2m[0]}/>
                <WeatherInfoComponent name={"Humidity"} value={weather?.hourly.relativehumidity_2m[0]}/>
                <WeatherInfoComponent name={"Wind"} value={weather?.hourly.windspeed_120m[0]}/>
                <WeatherInfoComponent name={"Cloudcover"} value={weather?.hourly.cloudcover_mid[0]}/>

                


            </WeatherInfoContainer>
        </>
    );
};

export default WeatherComponent;
