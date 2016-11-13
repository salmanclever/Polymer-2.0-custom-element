/////////////////////////
// ES6 WITHOUT POLYMER //
/////////////////////////

export default class BoxSearchA extends HTMLElement {
  _boxSearch: string = "Box Search"
  constructor() {
    super()
    let s = document.createElement('style')
    s.innerHTML = `:host { display: block;
                           box-sizing: border-box;
                           border: 1px solid red;
                           margin-top: 10px;
                           padding: 0px 5px; }`
    let p = document.createElement('p')
    p.innerHTML = `Test <slot></slot>`
    // const l = document.querySelector('link[rel="import"]') as HTMLLinkElement
    // if (l.import == null) return;
    // const t = l.import.querySelector('template')
    // if (t == null) return;
    // const c = t.content.cloneNode(true)
    const shadowRoot = this.attachShadow({ mode: 'open' })
    // shadowRoot.appendChild(c)
    shadowRoot.appendChild(s)
    shadowRoot.appendChild(p)
  }
  connectedCallback() { }
  disconnectedCallback() { }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) { }
  adoptedCallback() { }
}
