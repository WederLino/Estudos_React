import React from 'react';
import ReactDOM from 'react-dom/client';
import Primeiro from './Primeiro';
import BomDia from './BomDia';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BomDia nome= "Weder" idade={21} ></BomDia>)