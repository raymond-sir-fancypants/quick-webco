"use strict"

const template = document.createElement("template");
template.innerHTML = `
<div class="container">
  <div class="password_cluster">
    <label for="input" class="label"><slot></slot></label>
    <input id="input" autocomplete="current-password" type="password" class="password_input">
  </div>

  <button id="showPassword" class="password_visibility_btn" type="button">
    <span id="showPasswordIcon">visibility</span>
  </button>

</div>
`
export default template 