//create custom render function
function renderCustom(reactElements,container) {
    const domElement = document.createElement(reactElements.type);
    domElement.innerHTML = reactElements.Children
    for (let prop in reactElements.props){
        domElement.setAttribute(prop,reactElements.props[prop])
    }
    container.appendChild(domElement)
};
//create a react elements:
const reactElements = {
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    Children:"click to go google"

};

const mainContainer = document.querySelector("#root")
renderCustom(reactElements,mainContainer)