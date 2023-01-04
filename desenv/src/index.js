import React from 'react';
import ReactDOM from 'react-dom/client';
import Primeiro from './Primeiro';
import BomDia from './BomDia';
import { BoaNoite, BoaTarde } from './Multiplos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BoaTarde nome= "Weder">, </BoaTarde>
    <BoaNoite nome= "Mario">, </BoaNoite>
  </div>
)