<template>
  <div
    class="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
  >
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative mx-auto max-w-7xl">
      <div class="text-center">
        <h2
          class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          {{ agencyName }}
        </h2>
        <p
          class="max-w-2xl mx-auto mt-3 text-xl leading-7 text-gray-500 sm:mt-4"
        >
          {{ introText }}
        </p>
      </div>
      <div
        class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none"
      >
        <div
          v-for="prop in properties"
          :key="prop.id"
          class="flex flex-col overflow-hidden rounded-lg shadow-lg"
        >
          <div class="flex-shrink-0">
            <img
              class="object-cover w-full h-48"
              :src="prop.photos[0].url"
              alt
            />
          </div>
          <div class="flex flex-col justify-between flex-1 p-6 bg-white">
            <div class="flex-1">
              <p class="text-sm font-medium leading-5 text-indigo-600">
                <a href="#" class="hover:underline">{{
                  prop.address.area || "Wimbledon"
                }}</a>
              </p>
              <a href="#" class="block">
                <h3 class="mt-2 text-xl font-semibold leading-7 text-gray-900">
                  <router-link
                    v-slot="{ navigate, href, isExactActive }"
                    :to="`/${prop.id}`"
                  >
                    {{ prop.title }}
                  </router-link>
                </h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  {{ prop.propertyShortDescription }}
                </p>
              </a>
            </div>
            <div class="flex items-center mt-6">
              <div class="flex-shrink-0">
                <a href="#">
                  <img
                    class="w-10 h-10 rounded-full"
                    :src="prop.photos[0].url"
                    alt
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium leading-5 text-gray-900">
                  <a href="#" class="hover:underline">{{ prop.publishAs }}</a>
                </p>
                <div class="flex text-sm leading-5 text-gray-500">
                  <!-- <time datetime="2020-03-16">
                 {{prop.price}}
                </time>
                <span class="mx-1">
                  &middot;
                  </span>-->
                  <span class="text-red-600"
                    >&pound;{{ prop.price }}{{ prop.priceType }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, watch, ref, toRaw } from "vue"

async function fetchData(url) {
  return fetch(url).then(d => d.json())
}

export default defineComponent({
  async setup() {
    const xdata = {
      agencyName: "Grace Miller Rustamli",
      agencyUrl: "/.data/gracemiller.json",
      intro:
        "Grace Miller & Co. are specialists in block management and estate\
          management in South West London, Surrey and beyond. We work with\
          Residents Management Companies and Freeholders who are responsible for\
          the management of their development.",
    }
    let properties = ref((await fetchData(xdata.agencyUrl)).rows)

    console.log(toRaw(properties.value))
    return { properties, agencyName: xdata.agencyName, introText: xdata.intro }
  },
})
</script>
