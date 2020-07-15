import "./src/styles/global.css"
export { default as wrapRootElement } from "./src/redux/reduxWrapper"

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {
    addScript("https://js.createsend1.com/javascript/copypastesubscribeformlogic.js")
   
  }
}
