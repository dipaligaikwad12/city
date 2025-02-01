import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Card from "./Card"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <div className='flex justify-center'>
    <Card title="Harishchandragad" image="https://cdn.s3waas.gov.in/s345fbc6d3e05ebd93369ce542e8f2322d/uploads/bfi_thumb/2018030786-olw8sq9jgj2pnldtlvqgh1iz0cfeczr6domdnh4ute.jpg"/>
    <Card title="Shirdi Sai Baba" image="https://www.tourmyindia.com/images/shirdi-sai.jpg"/>
    <Card title="Bhandardara" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DlN_Az_7FOz9eiNoPnKyFQYXF9exHVcX-g&s"/>
    </div>
    </>

);
