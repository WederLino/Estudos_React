import React from 'react';
import ReactDOM from 'react-dom/client';
import Primeiro from './Primeiro';
import BomDia from './BomDia';
import { BoaNoite, BoaTarde } from './Multiplos';
import Saudacao from './Saudacao';
import Pai from './Pai';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Pai nome= "João" sobrenome= "Souza"></Pai>
)