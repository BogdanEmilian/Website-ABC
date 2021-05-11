import "./App.css";
import Slider from "./components/Slider";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Section from "./components/Section";
import Premii from "./components/Premii";
import SectiuneAbc from "./components/SectiuneAbc";
import Eveniment from "./components/Eveniment";
import Team from "./components/Team";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";
import Parteneri from "./components/Parteneri";

function App() {
  return (
    <>
      <Header />
      {/* <Slider /> */}
      <FrontPage />
      <Wrapper>
        <Section
          title="Ce este Abecedarul Carierei?"
          content="Abecedarul Carierei este un proiect realizat de Organizația Studenților din Universitatea de Vest din Timișoara (OSUT), cu scopul de a ghida tinerii aflați la început de drum spre o carieră de succes.
          <br />
          Inițiativa care a luat naștere în 2014, ajunge anul acesta la cea de a VIII-a ediție și aduce cu ea din ce în ce mai multe oportunități de dezvoltare pentru curioși."
        />
        <Premii />

        <Section title="Secțiunile Abecedarului Carierei" />

        {/* ABC-UL ANGAJĂRII */}
        <SectiuneAbc
          // title="ABC-ul angajării"
          content="„ABC-ul angajării” este secțiunea care anul acesta are la bază diversitatea și pasiunea. Astfel, în această ediție a Abecedarului Carierei ni se alătură oameni de succes care ne vor demonstra că din pasiune se poate creea o carieră incredibilă."
          img="./img/abc.png"
          id="abc-ul"
        />
        <Eveniment
          title="Viața dincolo de reflectoare"
          om="Dan Negru"
          data="12 Aprilie, ora 17:00"
          poza="./img/evenimente/DanNegru.png"
          descriere1="Dan Negru este unul dintre cei mai cunoscuți prezentatori și singurul moderator european de televiziune care a prezentat 21 de ani consecutiv revelioane televizate, toate lider de audiență. În cadrul workshopului susținut, el va împărtăși cu noi tainele carierei sale, motivația și drumul parcurs către succes."
          link=""
        />
        <Eveniment
          title="Managementul de Proiect"
          om="Leaders Being Heard"
          data="13 Aprilie, ora 20:00"
          poza="./img/evenimente/leaders.png"
          descriere1="Cu toții am participat în cadrul unui proiect și ne-am bucurat de activitățile organizate, dar v-ați întrebat și ce se află în spatele lor? "
          descriere2="În cadrul acestui eveniment vom face o trecere în revistă a celor mai importante concepte de management de proiect, iar apoi vom face o aplicare practică sub formă de atelier interactiv pe un proiect ales împreună cu voi."
          link=""
        />
        <Eveniment
          title="Orice calificare poate deveni o carieră în domeniul spațial"
          om="Daciana Sferle"
          data="15 Aprilie, ora 19:00"
          poza="./img/evenimente/Daciana-sferle.png"
          descriere1="Conferința este o introducere în domeniul spațial pentru participanți, prezentându-le marile instituții și principalii actori ai domeniului spațial, precum și proiecte de viitor. Avem nevoie de toată ingeniozitatea umană, adunată într-un efort colaborativ, pentru a proteja mediul de pe Terra și pentru ca oamenii să-și depășească limitele actuale."
          link=""
        />
        <Eveniment
          title="Branding personal"
          om="Centrul de Consiliere și Orientare în Carieră (CCOC) al UVT"
          data="16 Aprilie, ora 16:10"
          poza="./img/evenimente/ccoc.png"
          descriere1="Brandul personal reprezintă ceea ce văd, cred și gândesc cei din jurul tău despre tine. Fie că îți dorești să fii freelancer, angajat/antreprenor, imaginea ta joacă un rol esențial pentru a te prezenta ca profesionist."
          descriere2="În cadrul acestui webinar poți afla mai multe despre cum să te promovezi mai bine și să îți îmbunătățești imaginea în mediul public."
          link=""
        />
        <Eveniment
          title="Bazele unui influencer în online"
          om="Corina Tamaș"
          data="16 Aprilie, ora 19:00"
          poza="img/evenimente/CorinaTamas.png"
          descriere1="Articolele de pe blogul său stârnesc curiozități și controverse pe rețelele de socializare. Poți ghici cine e? EXACT! Corina Tamaș! Ea este gazda unei emisiuni radio, Joy FM, iar în cadrul workshopul său ne va povesti cum a ajuns în acest domeniu, care sunt pașii pe care trebuie să îi urmezi, precum și tot ceea ce reprezintă „New Media”. "
          link=""
        />
        <Eveniment
          title="Tips & tricks pentru un interviu de succes"
          om="EY România"
          data="19 Aprilie, ora 19:30"
          poza="./img/evenimente/ey-mediu.png"
          descriere1="Cei de la EY România au pregătit un webinar destinat studenților determinați să afle cum pot trece peste una dintre cele mai mari provocări ale vieții: interviul de angajare."
          descriere2="Astfel, ne vom răspunde cu toții la întrebări precum: cum scriu cel mai bun CV, cum impresionez un angajator în timpul interviului, cum îmi gestionez emoțiile."
          link=""
        />
        <Eveniment
          title="Orientare vocațională"
          om="Centrul de Consiliere și Orientare în Carieră (CCOC) al UVT"
          data="23 Aprilie, ora 14:40"
          poza="./img/evenimente/ccoc.png"
          descriere1="Cariera reprezintă un element esențial în viața noastră de zi cu zi, ne construim această carieră prin ceea ce facem, prin lucrurile de care suntem interesați și pasionați."
          descriere2="Pentru a afla mai multe, te invităm să participi la Webinarul de orientare vocațională - care își planifică să te susțină în descoperirea propriilor interese, valori și competențe."
          link=""
        />

        {/* ANTREPRENORIATUL DE LA A LA TINE */}
        <SectiuneAbc
          // title="Antreprenoriatul de la A la Tine"
          content="„Antreprenoriatul de la A la Tine” susține dezvoltarea spiritului antreprenorial în rândul tinerilor, constituind „puntea” dintre mediul universitar și cel socio-economic. Secțiunea reprezintă punctul de plecare ideal în crearea unei afaceri."
          img="./img/antreprenoriat.png"
          id="antreprenoriatul"
        />
        <Eveniment
          title="Antreprenoriatul în domeniul tehnologic: eșecul ca experiență personală de învățare"
          om="Growceanu - Radu Ticiu"
          data="14 Aprilie, ora 18:00"
          poza="./img/evenimente/RaduTiciu.png"
          descriere1="Radu Ticiu, în calitate de facilitator ecosistem antreprenorial, împreuna cu invitații Alin Tuhuț și Ionuț Antiu au pregătit un subiect de interes pentru tinerii antreprenori. Începutul unei afaceri și tot parcursul acesteia are suișuri și coborâșuri, dar cum le gestionăm și ne menținem motivați? "
          descriere2="În cadrul acestui workshop ne vom răspune cu toții la întrebarea „Cum o iau de la capăt?”."
          link=""
        />
        <Eveniment
          title="Antreprenoriatul de succes - de la dorință la realitate"
          om="Ovidiu Șandor"
          data="14 Aprilie, ora 20:00"
          poza="./img/evenimente/ovidiu-sandor.png"
          descriere1="Ovidiu Șandor este un antreprenor de succes din Timișoara care a dezvoltat proiecte imobiliare atât la nivel local, cât și la nivel național, devenind astfel cunoscut datorită ambiției și perseverenței sale."
          descriere2="În cadrul webinarului susținut, Ovidiu ne va povesti despre motivația sa pentru a aborda acest domeniu dar și drumul parcurs spre succes."
          link=""
        />
        <Eveniment
          title="Social media pentru afacerea sau ONG-ul tău"
          om="Minds Hub - Lipovan Georgiana"
          data="20 Aprilie, ora 19:00"
          poza="./img/evenimente/Lipovan-Mihaela.png"
          descriere1="Social media pentru afacerea sau ONG-ul tău este un training care pornește de la fundamentele utilizării rețelelor sociale pentru asigurarea vizibilității și a succesului, până la înțelegerea întregului proces din spatele creării unei prezențe în online."
          descriere2="Toate conceptele vor fi exemplificate, astfel încât vei putea aplica informațiile prezentate în viața de zi cu zi."
          link=""
        />
        <Eveniment
          title="Tips & tricks pentru dezvoltare profesională"
          om="Undelucram.ro - Andra Pintican"
          data="26 Aprilie, ora 19:00"
          poza="./img/evenimente/undelucram.png"
          descriere1="Workshopul „Tips&tricks pentru dezvoltare profesională“ este destinat oricărei persoane pasionate de munca sa."
          descriere2="Fiecare își propune să evolueze, atât pe plan profesional, cât și pe plan personal, iar Andra Pintican va susține acest workshop pentru a ne oferi sfaturi în acest proces."
          link=""
        />

        {/* ECONOMIA DE LA A LA NOI */}
        <SectiuneAbc
          // title="Economia de la A la Noi"
          content="„Economia de la A la Noi” abordează teme actuale din sfera economică. Astfel, participanții își vor putea creea o idee de ansamblu asupra unor subiecte precum: gestionarea unui buget, educația financiară sau principiile de bază ale TVA-ului."
          img="./img/economia.png"
          id="economia"
        />
        <Eveniment
          title="Cum să investești la bursă"
          om="Rareș Mihăilă"
          data="21 Aprilie, ora 18:00"
          poza="./img/evenimente/Rares-Mihaila.png"
          descriere1="Ti-ai dorit vreodata sa investesti, dar nu știai de unde sa incepi? De asta se va ocupa Rareș Mihăilă, el a pornit un proiect de educație bursieră (Investestelabursa.ro) care a ajutat sute de persoane să facă pasul către universul investițiilor la bursă."
          descriere2="În cadrul acestui workshop,  Rareș, este pregătit să te învețe cum să investești la bursa."
          link=""
        />
        <Eveniment
          title="Cum gestionăm fondurile europene?"
          om="Alexandra Petcu"
          data="21 Aprilie, ora 20:00"
          poza="./img/evenimente/Alexandra-petcu.png"
          descriere1="Ai auzit de ele, însă nu știi cum le poți accesa pentru a-ți pune ideile în aplicare?"
          descriere2="În cadrul trainingului „Cum gestionam fondurile europene?”, Alexandra Petcu ne va prezenta posibilitățile pe care le oferă acest tip de finanțare, dar și cum le putem folosi într-un mod eficient pentru a ne transforma visele în realitate."
          link=""
        />
        <Eveniment
          title="Educație Financiară"
          om="Cristian Chifoi"
          data="22 Aprilie, ora 18:00"
          poza="./img/evenimente/Cristian-crifoi.png"
          descriere1="Cristian Chifoi este un antreprenor la început de drum care a dezvoltat conceptele Bubble Waffles, Take Five Coffee și Notorius (educatie financiara)."
          descriere2="El își propune să îndrume cât mai mulți tineri în domeniul financiar, iar în cadrul workshopului va susține o discuție liberă alături de participanți cu intenția de a aborda teme de interes din domeniu."
          link=""
        />
        <Eveniment
          title="Economia digitală"
          om="Alexandru Roja"
          data="23 Aprilie, ora 18:00"
          poza="./img/evenimente/Roja-alexandru.png"
          descriere1="Alexandru Roja este lector universitar în cadrul Facultății de Economie și de Administrare a Afacerilor din Timișoara. 
          El este dedicat dezvoltării ecosistemelor antreprenoriale și tehnologice bazate pe inovare, transfer tehnologic și transformare digitală."
          descriere2="Prezentarea sa abordează subiecte din sfera economică și digitală îmbinată cu antreprenoriatul."
          link=""
        />
        <Eveniment
          title="Cum să economisești deștept"
          om="Banometru - Cornel Ionescu și Oana Mitruț"
          data="25 Aprilie, ora 18:00"
          poza="./img/evenimente/banometru.png"
          descriere1="Invitații noștri de la Banometru sunt pregătiți să ne țină un training despre economisirea inteligentă a banilor. Ți-ai dorit să descoperi metode de a economisi mai eficient veniturile?"
          descriere2="Ei bine, acest eveniment este pentru tine! Fiind pasionați de educație financiară și non-formală, abia așteaptă curiozitățile tale legate de domeniul economic și independența financiară!"
          link=""
        />
        <Team />
        <Parteneri />
      </Wrapper>
      <Footer />
    </>
  );
}
export default App;
