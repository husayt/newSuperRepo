<template>
  <section class="py-20 bg-gray-300">
    <div class="container relative px-4 mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full px-4 pt-6 text-center lg:pt-12 md:w-4/12">
          <div
            class="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg"
          >
            <div class="flex-auto px-4 py-5">
              <IconSelect
                :value="getComponentProperty('feature1.icon')"
                @input="value => setComponentProperty('feature1.icon', value)"
              >
                <div
                  class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-red-400 rounded-full shadow-lg"
                >
                  <i :class="getComponentProperty('feature1.icon')"></i>
                </div>
              </IconSelect>
              <TextEdit
                tag="h6"
                class="text-xl font-semibold"
                :value="getComponentProperty('feature1.title')"
                @input="value => setComponentProperty('feature1.title', value)"
              />

              <TextEdit
                tag="p"
                class="mt-2 mb-4 text-gray-600"
                :value="getComponentProperty('feature1.description')"
                @input="
                  value => setComponentProperty('feature1.description', value)
                "
              />
            </div>
          </div>
        </div>
        <div class="w-full px-4 text-center md:w-4/12">
          <div
            class="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg"
          >
            <div class="flex-auto px-4 py-5">
              <IconSelect
                :value="getComponentProperty('feature2.icon')"
                @input="value => setComponentProperty('feature2.icon', value)"
              >
                <div
                  class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-blue-400 rounded-full shadow-lg"
                >
                  <i :class="getComponentProperty('feature2.icon')"></i>
                </div>
              </IconSelect>
              <TextEdit
                tag="h6"
                class="text-xl font-semibold"
                :value="getComponentProperty('feature2.title')"
                @input="value => setComponentProperty('feature2.title', value)"
              />

              <TextEdit
                tag="p"
                class="mt-2 mb-4 text-gray-600"
                :value="getComponentProperty('feature2.description')"
                @input="
                  value => setComponentProperty('feature2.description', value)
                "
              />
            </div>
          </div>
        </div>
        <div class="w-full px-4 pt-6 text-center md:w-4/12">
          <div
            class="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg"
          >
            <div class="flex-auto px-4 py-5">
              <IconSelect
                :value="getComponentProperty('feature3.icon')"
                @input="value => setComponentProperty('feature3.icon', value)"
              >
                <div
                  class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-green-400 rounded-full shadow-lg"
                >
                  <i :class="getComponentProperty('feature3.icon')"></i>
                </div>
              </IconSelect>
              <TextEdit
                tag="h6"
                class="text-xl font-semibold"
                :value="getComponentProperty('feature3.title')"
                @input="value => setComponentProperty('feature3.title', value)"
              />
              <TextEdit
                tag="p"
                class="mt-2 mb-4 text-gray-600"
                :value="getComponentProperty('feature3.description')"
                @input="
                  value => setComponentProperty('feature3.description', value)
                "
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center mt-32">
        <div class="w-full px-4 ml-auto mr-auto md:w-5/12">
          <IconSelect
            :value="getComponentProperty('work.icon')"
            @input="value => setComponentProperty('work.icon', value)"
          >
            <div
              class="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-gray-600 bg-gray-100 rounded-full shadow-lg"
            >
              <i :class="getComponentProperty('work.icon')" class="text-xl"></i>
            </div>
          </IconSelect>

          <TextEdit
            tag="h3"
            class="text-xl font-semibold"
            :value="getComponentProperty('work.title')"
            @input="value => setComponentProperty('work.title', value)"
          />
          <TextEdit
            tag="p"
            class="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700"
            :value="getComponentProperty('work.description')"
            @input="value => setComponentProperty('work.description', value)"
          />
        </div>
        <div class="w-full px-4 ml-auto mr-auto md:w-4/12">
          <div
            class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white bg-pink-600 rounded-lg shadow-lg"
          >
            <img
              alt="..."
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
              class="w-full align-middle rounded-t-lg"
            />
            <blockquote class="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                class="absolute left-0 block w-full"
                style="height: 95px; top: -94px;"
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  class="text-pink-600 fill-current"
                ></polygon>
              </svg>
              <TextEdit
                tag="h4"
                class="text-xl font-bold text-white"
                :value="getComponentProperty('work.imageTitle')"
                @input="value => setComponentProperty('work.imageTitle', value)"
              />
              <TextEdit
                tag="p"
                class="mt-2 font-light text-white text-md"
                :value="getComponentProperty('work.imageDescription')"
                @input="
                  value => setComponentProperty('work.imageDescription', value)
                "
              />
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {set,get} from "lodash-es"

// function saveToLocalStorage() {
//   localStorage.setItem("page-state", JSON.stringify(page))
// }

// function getFromStorage() {
//   return JSON.parse(localStorage.getItem("page-state"))
// }

export default {
  components: {
    IconSelect: () => import("~/components/content/IconSelect"),
    ColorPicker: () => import("~/components/content/ColorPicker"),
    TextEdit: () => import("~/components/content/TextEdit")
  },
  methods: {
    getComponentProperty(path) {
      return get(this.$attrs, path, "")
    },
    setComponentProperty(path, value) {
      set(this.$attrs, path, value)
      // const componentIndex = page.components.findIndex(
      //   c => c.props.id === this.$attrs.id
      // )
      // const fullPath = `components[${componentIndex}].props.${path}`
      // set(page, fullPath, value)
      // saveToLocalStorage()
      // return page  
    }
  }
}
</script>
