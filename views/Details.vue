<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        {{ property.reference }}
      </h3>
      <p class="max-w-2xl mt-1 text-sm leading-5 text-gray-500">
        {{ property.line1 }}
      </p>
    </div>
    <div class="px-4 py-5 sm:px-6">
      <dl class="grid grid-cols-1 row-gap-8 col-gap-4 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium leading-5 text-gray-500">
            Full name
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900">
            {{ property.propertyType }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium leading-5 text-gray-500">
            Application for
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900">
            {{ property.town }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium leading-5 text-gray-500">
            Email address
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900">
            {{ property.listingType }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium leading-5 text-gray-500">
            Salary expectation
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900">
            &pound; {{ property.price }} {{ property.priceType }}
          </dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="text-sm font-medium leading-5 text-gray-500">
            About
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900">
            {{ property.description }}
          </dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="text-sm font-medium leading-5 text-gray-500">
            Attachments
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900">
            <ul class="border border-gray-200 rounded-md">
              <li
                class="flex items-center justify-between py-3 pl-3 pr-4 text-sm leading-5"
              >
                <div class="flex items-center flex-1 w-0">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="flex-1 w-0 ml-2 truncate">
                    resume_back_end_developer.pdf
                  </span>
                </div>
                <div class="flex-shrink-0 ml-4">
                  <a
                    href="#"
                    class="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500"
                  >
                    Download
                  </a>
                </div>
              </li>
              <li
                class="flex items-center justify-between py-3 pl-3 pr-4 text-sm leading-5 border-t border-gray-200"
              >
                <div class="flex items-center flex-1 w-0">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="flex-1 w-0 ml-2 truncate">
                    coverletter_back_end_developer.pdf
                  </span>
                </div>
                <div class="flex-shrink-0 ml-4">
                  <a
                    href="#"
                    class="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500"
                  >
                    Download
                  </a>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup="props">
import { computed, watch, ref, unref, toRaw } from "vue"
import { useRoute } from "vue-router"
// import { useFetch } from "vue-composable"
// https://gracemiller.landmax.pro/api/lettings
// `http://www.gracemiller.co.uk/data/all-proposals.json`
// async function fetchData(url) {
//   return fetch(url).then(d => d.json())
// }
export default {
  props: {
    id: { type: String, default: "RA012" },
  },
}
import properties from "/.data/properties.json"

const xdata = {
  agencyName: "Grace Miller Rustamli",
  intro:
    "Grace Miller & Co. are specialists in block management and estate\
          management in South West London, Surrey and beyond. We work with\
          Residents Management Companies and Freeholders who are responsible for\
          the management of their development.",
}
// const route = useRoute()
// let properties = await fetchData("/.data/properties.json")

console.log(properties, props.id)

// console.log(unref(property), unref(id))

// export const property = {}
export const property = computed(() =>
  properties.find(x => x.reference === props.id)
)
export const agencyName = xdata.agencyName
</script>
