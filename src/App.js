import React, { useState } from "react";
import './app.css'
import { Buttons } from "./components/Buttons";
import { Messages } from "./components/Messages";

function App() {

  const [cookie, setCookie] = useState(false)
  const [image, setImage] = useState(require('../src/images/biscoito.png'))

  return (
    <div id="container">
      <div id="content">

        {/* Componente que mostra a mensagem do biscoito */}
        {
          cookie
          &&
          (
            <Messages msg={cookie} />
          )}

        {/* Mostra a imagem do biscoito */}
        <img
          id="cookie"
          src={image}
        />

        {/* Componente responsavel pelos botoes de ação do biscoito (quebrar e pegar um novo biscoito) */}
        <Buttons
          breakCookie={() => setImage(require('../src/images/biscoitoAberto.png'))}
          newCookie={() => setImage(require('../src/images/biscoito.png'))}
          cookie={() => setCookie(!cookie)}
        />
      </div>
    </div>

  );
}

export default App;
