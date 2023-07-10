const template =  document.createElement("template");

template.innerHTML = `
  <style>
    .container{
      display: flex;
      border: solid 3px #ccc;
      border-radius: 10px;
      height: 40px;
      margin-top: 7px;
      background-color: inherit;
    }
    
    .password_input ,.password_visibility_btn{
      all: unset
    }
    
    .password_cluster{
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      cursor: text;
    }
    
    .label{
      position: absolute;
      padding:0 5px;
      margin-left: 10px;
      margin-bottom: 0px;
      background-color: #fff;
      border-radius: 5px;
      color: back;
      transition: 0.2s;
      transition-timing-function: linear;
    }

    .raiseLabel{
      margin-bottom: 40px;
    }
    
    .password_input{
      height: 0;
      width: 95%;
      font-size: 18px;
      padding-left: 10px;
      text-align: start;
      border-radius: 7px;
    }

    .showInput{
      height: 100%;
      padding-top: 10px;
    }
    
    .password_visibility_btn{
      width: 10%;
      display: inline-flex;
      padding: 3px;
    }
    
    #showPasswordIcon{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 4px;
      font-size: 28px;
      font-family: Material Symbols Rounded;
    }
  </style>
`

export default template;