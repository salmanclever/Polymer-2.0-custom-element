//////////////////////
// ES6 POLYMORPHISM //
//////////////////////

import BoxSearchA from "box-search-a"

class BoxSearchB extends BoxSearchA {
  constructor() {
    super()
  }
  connectedCallback() {
    super.connectedCallback()
  }
}

customElements.define('box-search-b', BoxSearchB)
