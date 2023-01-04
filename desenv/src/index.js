import React from 'react';
import ReactDOM from 'react-dom/client';
import Primeiro from './Primeiro';
import BomDia from './BomDia';
import { BoaNoite, BoaTarde } from './Multiplos';
import Saudacao from './Saudacao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Saudacao nome= "Weder" tipo="Bom Dia">, </Saudacao>
  </div>
)