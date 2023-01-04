import React from 'react';
import ReactDOM from 'react-dom/client';
import Primeiro from './Primeiro';
import BomDia from './BomDia';
import { BoaNoite, BoaTarde } from './Multiplos';
import Saudacao from './Saudacao';
import Pai from './Pai';
import Filho from './Filho';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Pai nome= "João" sobrenome= "Souza">
      <Filho nome= "Roselinda" sobrenome= "Souza"></Filho>
      <Filho nome= "Amaro"></Filho>
      <Filho nome= "Ruando"></Filho>
    </Pai>
)