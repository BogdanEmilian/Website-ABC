import React from "react";
import Membru from "./Membru";

export default function Team() {
  return (
    <>
        <div class="container-fluid" id="echipa">
        <h1 style={{textAlign: "center", margin:"80px 0px"}}>Echipa de management</h1>
            <div class="row">
            <Membru poza="./echipa/Adela.png" nume="Adela Dînșorean" functie="Coordonator General" /> 
            <Membru poza="./echipa/Patricia.png" nume="Patricia Văleanu" functie="Vicepreședinte OSUT" /> 
            <Membru poza="./echipa/Ema.png" nume="Alexandra Cârcu" functie="Responsabil PR" /> 
            <Membru poza="./echipa/Laura.png" nume="Laura Chiriță" functie="Responsabil Imagine" /> 
            <Membru poza="./echipa/Tirizica.png" nume="Ionuț Tirizică" functie="Responsabil FR" /> 
            <Membru poza="./echipa/Emi.png" nume="Emilian Bogdan" functie="Responsabil IT" /> 
            <Membru poza="./echipa/Bianca.png" nume="Bianca Brojbă" functie="ABC-ul angajării" /> 
            <Membru poza="./echipa/Daria.png" nume="Daria Negrea" functie="Antreprenoriatul de la A la Tine" /> 
            <Membru poza="./echipa/Sergiu.png" nume="Sergiu Răchițeanu" functie="Economia de la A la Noi" /> 
            <Membru poza="./echipa/George.png" nume="George Guță" functie="Task Manager" /> 
            </div>
        </div>
    </>
  );
}
