import React from "react";
import Wrapper from "./Wrapper";
import Parteneri from "./Parteneri";

export default function Footer() {
  return (
    <>
      <footer>
        <Wrapper>
          <div class="col-md-6 mb">
            <h4>Un proiect marca OSUT</h4>
            Organizația Studenților din Universitatea de Vest din Timișoara
            <ul>
              <li>bd. Vasile Pârvan nr. 4, etaj 2, cam. 247</li>
              <li>
                <img
                  src="phone-icon.png"
                  style={{
                    width: "28px",
                    marginRight: "3%",
                    marginBottom: "10px",
                    marginLeft: "1.2%",
                  }}
                />
                <a href="tel:0256 592 181">(+40) 256 592 181 </a>
              </li>
              <li>
                <img
                  src="e-mail.png"
                  style={{
                    width: "36px",
                    marginRight: "2%",
                    marginBottom: "10px",
                  }}
                />
                <a href="mailto:office@osut.ro">office@osut.ro </a>
              </li>
            </ul>
          </div>
          <div class="col-md-6 mb" class="delimitator-footer" id="sm-display">
            {/* <Parteneri /> */}
            {/* <img src="logo_alb2.png" class="logo-parteneri" /> */}
          </div>
          <div class="col-md-2 mb">
            <h4>Social</h4>
            <a
              target="_blank"
              href="https://www.facebook.com/abcdarul.carierei"
            >
              <img class="logo-social" src="fb-icon.png" />
            </a>
            &nbsp;
            <a
              target="_blank"
              href="https://www.instagram.com/abecedarulcarierei/"
            >
              <img class="logo-social" src="insta-icon.png" />
            </a>
            &nbsp;
            <a target="_blank" href="https://abc.osut.ro">
              <img
                class="logo-social"
                src="site-icon.png"
                style={{
                  width: "36px",
                  marginLeft: "5px",
                  border: "1px solid black",
                  background: "black",
                  borderRadius: "50%",
                }}
              />
            </a>
            <br />
            <img
              src="e-mail.png"
              style={{
                width: "36px",
                marginRight: "2%",
                marginBottom: "10px",
                marginLeft: "1.5%",
              }}
            />
            <a href="mailto:abc@osut.ro">abc@osut.ro</a>
          </div>
        </Wrapper>
      </footer>
    </>
  );
}
