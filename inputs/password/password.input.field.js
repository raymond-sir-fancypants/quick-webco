"use strict"
import template from "./element.template.js"
import templateStyle from "./password.input.style.js"

export default class PasswordField extends HTMLElement{
  constructor(){
    super();

    const shadow = this.attachShadow({mode: "open"});
    shadow.append(template.content.cloneNode(true));
    shadow.append(templateStyle.content.cloneNode(true));

    this.input = shadow.querySelector("input");
    this.conatiner = shadow.querySelector(".container");
    this.visibilityBtn = shadow.querySelector(".password_visibility_btn");
    this.icon = shadow.querySelector("#showPasswordIcon");
    this.label = shadow.querySelector("label");

    this.visibilityBtn.addEventListener("click",() => this.__passwordVisibility__())


    this.conatiner.addEventListener("click",() => this.input.focus());



    this.input.addEventListener("focus",() => this.__focus__())

    this.input.addEventListener("blur", () => this.__blur__())
  }

  __focus__(){
      this.input.classList.add("showInput");
      this.label.classList.add("raiseLabel");
  }

  __blur__(){
    
    if(!this.input.value.trim()){
      this.input.classList.remove("showInput");
      this.label.classList.remove("raiseLabel");
      this.input.value = "";
    }
  }

  __passwordVisibility__(){
      if(this.visibilityBtn.dataset.visibility === "hiden" || this.visibilityBtn.dataset.visibility === undefined){
        this.visibilityBtn.dataset.visibility = "visible";
        this.icon.textContent = "visibility_off"
        this.input.type = "text"
      } else {
        this.visibilityBtn.dataset.visibility = "hiden";
        this.icon.textContent = "visibility"
        this.input.type = "password"
      }
  }

  static get observedAttributes () { return ["password-visibility","value"] }

  attributeChangedCallback(name,oldValue,newValue){ 
    if(name === "value") this.__updateValue__(newValue);

     
    if(name === "password-visibility" && newValue !== null && newValue != "false") this.__passwordVisibility__();
  }

  __updateValue__(value){
    
    if(value.trim()){
      this.input.value = value;
      this.__focus__()
    };

  }
}

customElements.define("password-input", PasswordField)

