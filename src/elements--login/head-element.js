import { LitElement,html } from "lit-element";



export class HeadElement extends LitElement{
render(){
    return html`
    
    
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>



    <link rel="stylesheet" href="../CSS/LOGIN.css">
</head>
    
    `
    
 
}


}

customElements.define('head-element',HeadElement);