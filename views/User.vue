<template>
  <label for="components">Choose a component:</label>
  <select v-model="selectedComp" name="components" id="components">
    <option value="volvo">Simple</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="vauxhall">Vauxhall</option>
    <option value="audi">Audi</option>
    <option value="ford">Ford</option>
    <option value="toyota">Toyota</option>
    <option value="tesla">TESLA</option>
  </select>
  <div>Component: {{ comp.name }}</div>
  <textarea
    v-if="selectedComp == 'tesla'"
    v-model="textComp"
    rows="4"
    cols="50"
  ></textarea>

  <hr />
  <component :is="comp.component" />
  <hr />
  <br />Schema data:
  <q>{{ xdata }}</q>
  <br />
  Value:{{ d("source") }}
</template>

<script>
import { getCurrentInstance, defineComponent, resolveDynamicComponent,defineAsyncComponent, h } from "vue"
import About from "/components/base/About.vue"

export default defineComponent({
  props: ["id"],
  components: { About , Contact: () => import("/components/base/Contact.vue") },
  data: cx => {
    console.log(cx,  getCurrentInstance())
    return {
      selectedComp: "volvo",
      textComp: "<div>TESAL MAMA</div>",
    }
  },
  computed: {
    comp() {
      let x = this.getTemplate()
      console.log(`hahahah `, this.selectedComp, x)
      if (x.asyncLoader)
        x.component = defineAsyncComponent({
          loader: x.asyncLoader,
          suspensible: false,
          errorComponent: () => "THIS IS BAD",
          onError(error, retry, fail) {
            console.log("EEEEEEEEERER")
            console.log("EEEEEEEEERER", error, retry, fail)
          },
        })
      else if (x.loader) x.component = defineComponent(x.loader)

      console.log(`HARES `, x)
      return x
    },
  },
  methods: {
    getTemplate() {
      let type = this.selectedComp

      // debugger
      switch (type) {
        case "volvo":
          return {
            name: "Volvo - simple template based component ",
            component: {
              template: "<div>Home component</div>",
            },
          }
        case "audi":
          return {
            name: "Audi - simple template based component via loader",
            loader: { template: "<div>Audi  component</div>" },
          }
        case "saab":
          return {
            name: "Saab - async loaded dynamic component",
            asyncLoader: () => import(`/components/base/Team.vue`),
          }
        case "opel":
          return { name: "Opel - render function component", loader: { render: () => "<div>HELLO RENDER</div>" } }
        case "vauxhall":
          return { name: "Vauxhall - render function component", loader: { render: () => h("div",{id:"papa"}, h("div",{id:"mama"},"hello")) } }
        case "ford":
          return { name: "Ford - previously loaded component", component:"About" } 
        case "toyota":
            return {
              name: "Toyota - previously declared async loaded component" ,
              asyncLoader: resolveDynamicComponent("Contact"),
            }
        case "tesla":
          return {
            name: "TESLA" + this.textComp.length,
            asyncLoader: () =>
              new Promise(resolve => resolve({ template: this.textComp })),
          }
      }
      // return ntemplate))
    },
  },
})
</script>

