import React, { useContext } from "react";
import "./info.css";
import { GlobalContext } from "../../context/GlobalSatate";
import { WiSunset } from "react-icons/wi";
const Info = () => {
  const {info,kontrol} = useContext(GlobalContext);
  
  let havaDurumuImg=null;

  if(kontrol){
    if(info.weather[0].description.toUpperCase()==="AZ BULUTLU" || info.weather[0].description.toUpperCase()==="PARÇALI BULUTLU" || info.weather[0].description.toUpperCase()==="KAPALI"|| info.weather[0].description.toUpperCase()==="PARÇALI AZ BULUTLU"){
      havaDurumuImg="/public-img/bulutt.png"
    }else if(info.weather[0].description.toUpperCase()==="AÇIK"){
      havaDurumuImg="/public-img/gunes.png"
    }else if(info.weather[0].description.toUpperCase()==="HAFIF YAĞMUR"){
       havaDurumuImg="/public-img/yagmur.png"
    }
  }

   
  return (
    <div>
      {kontrol ? (
        <div className="info">
        <div className="infoWrapper">
          <div className="infoTextWrapper">
            <p className="infoText">{info.sys.country} / {info.name.toUpperCase()}</p>
            <p className="infoText"> Sıcaklık : {info.main.temp}&deg;C   <WiSunset className="infoIcon" />  </p>
            <hr className="infoCizgi" />
            <p className="infoText">{info.weather[0].description.toUpperCase()}</p>
            <p className="infoText">Hissedilen : {info.main.feels_like}&deg;C <WiSunset className="infoIcon" /></p>
          </div>
          <div className="infoImg">
            <div className="infoImgKutu">
              {havaDurumuImg && <img className="img" src={havaDurumuImg} alt=""/>}
            </div>
          </div>
        </div>
      </div>
      ) : null }
    </div>
  );
};

export default Info;

