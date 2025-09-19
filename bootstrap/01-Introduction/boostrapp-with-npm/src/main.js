// import './style.css'
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="container mt-5">
    <h1>Welcome to the bootstrap </h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptatum corrupti esse fugiat odit! Explicabo, numquam itaque aliquam maxime, velit cum at nam nobis recusandae iure corporis dolor magni praesentium!</p>
  </div>
`

setupCounter(document.querySelector('#counter'))
