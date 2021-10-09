import React from 'react';

import './styles/app.css';

export default () => (
    <>
    <h1>Sushi PROJ</h1>
    <img src={new URL('../from-figma/pics/logo4.png', import.meta.url).toString()} alt="logo" />
    </>
);