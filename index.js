import app from './src/app.js'

window.addEventListener('load', (event) => {
  const appElement = document.querySelector(".app");
  app(appElement)
})
