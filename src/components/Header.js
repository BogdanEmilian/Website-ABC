import React from 'react';

export default function Header() {
  return (
    <>
      <nav
        id="ribbon"
        style={{
          background: 'rgba(255,255,255,.95)',
          backdropFilter: 'blur(10px)',
          lineHeight: '80px',
          textAlign: 'right',
          padding: '0px 30px',
        }}
      >
        <img src="logo.png" id="logo" style={{ height: 50, float: 'left' }} />
        <a href="#abc-ul" class="btn btn-primary btn-md" id="menu1" style={{margin: "0 10px"}}>
         ABC-ul angajării
        </a>
        <a href="#antreprenoriatul" class="btn btn-primary btn-md" id="menu2" style={{margin: "0 10px"}}>
         Antreprenoriatul de la A la Tine
        </a>
        <a href="#economia" class="btn btn-primary btn-md" id="menu3" style={{margin: "0 10px"}}>
          Economia de la A la Noi
        </a>
        <a href="#echipa" class="btn btn-primary btn-md" id="menu4" style={{margin: "0 10px"}}>
          Echipa de management
        </a>
        <a href="#parteneri" class="btn btn-primary btn-md" id="menu5" style={{margin: "0 10px"}}>
          Parteneri
        </a>
      </nav>
    </>
  );
}
