function customRender(reactElement,Container){
   
   /* const domelement=document.createElement(reactElement.type)
    domelement.innerHTML=reactElement.children
    domelement.setAttribute('href',reactElement.props.href)
    domelement.setAttribute('target',reactElement.props.target)

    Container.append(domelement);
    // Container.appendChild(domelement); append and appendChild both are same
    */

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    Container.appendChild(domElement)
    
}

const reactElement ={
    type:'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
    children:'CLick me to the visit google'

}


const mainContainer=document.querySelector("#root");

customRender(reactElement,mainContainer)
