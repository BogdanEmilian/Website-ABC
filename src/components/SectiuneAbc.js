import React from 'react';

export default function SectiuneAbc(props) {
  const bg = props.bg ? props.bg : 'rgba(20,123,255,.04)';
  return (
    <>
      <div class="col-md-12" id={props.id}>
        <div
          style={{
            background: bg,
            padding: 30,
            marginTop: 100,
            marginBottom: 20,
            borderRadius: 4,
          }}
        >
          <img src={props.img} style={{height:"85px"}} />
          <h4 class="subtitle">{props.title}</h4>
          <p>{props.content}</p>
        </div>
      </div>
    </>
  );
}
