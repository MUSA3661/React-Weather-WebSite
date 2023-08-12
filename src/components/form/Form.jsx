import React, { useContext } from "react";
import "./form.css";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { GlobalContext } from "../../context/GlobalSatate";

export default function Form({ sehir,setSehir }) {
  
  const {info,setInfo,setKontrol}=useContext(GlobalContext);

  const sorgula = async () => {
    const api="6f86bfa8778854646fe55353bce82c32"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${sehir}&units=metric&lang=tr&appid=${api}`;
    
    
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setInfo(data); 
        setKontrol(true);
        setSehir("");
      } else {
        console.log("Veri Bulunamadı");
      }
    } catch {
      console.log("Veri Bulunamadı");
    }
  };
  
  return (
    <form onSubmit={(e)=>{e.preventDefault();sorgula()}} className="form">
      <div className="formWrapper">
        <input
          onChange={(e)=>setSehir(e.target.value)}
          value={sehir}
          className="formInput"
          type="text"
          placeholder="ÜLKE / ŞEHİR İSMİ GİRİNİZ"
        />
        <button disabled={sehir===""} type="submit" className="formBtn">
          SORGULA <BsFillSearchHeartFill className="formBtnIcon" />
        </button>
        <h1 className="formSehirText">{info.name}</h1>
      </div>
    </form>
  );
}
