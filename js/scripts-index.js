
// import functions

import createHeader from '/bs-shop-cut-version/js/create-header.js'; // header

import createMain from '/bs-shop-cut-version/js/create-main.js'; // main

import createFooter from '/bs-shop-cut-version/js/create-footer.js'; // footer

// <body> inizialisation

const body = document.querySelector('body');

// add <header>

const header = createHeader();
body.append(header); 

// add <main>

const main = createMain();
body.append(main);

// add <footer>

const footer = createFooter(); 
body.append(footer); 
