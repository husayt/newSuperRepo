<template>
  <!-- Off-canvas menu for mobile -->
  <div v-show="showSideBar" class="md:hidden">
    <div class="fixed inset-0 z-40 flex">
      <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.
      -->
      <transition
        enter-active-class="transition-opacity duration-300 ease-linear"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300 ease-linear"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-show="showSideBar"
          class="fixed inset-0"
          @click="$emit('update:showSideBar', false)"
        >
          <div class="absolute inset-0 bg-gray-600 opacity-75" />
        </div>
      </transition>
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.
      -->
      <transition
        enter-active-class="transition duration-300 ease-in-out transform"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition duration-300 ease-in-out transform"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <div
          v-show="showSideBar"
          class="relative flex flex-col flex-1 w-full max-w-xs bg-indigo-800"
        >
          <div class="absolute top-0 right-0 p-1 -mr-14">
            <button
              class="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600"
              aria-label="Close sidebar"
              @click="$emit('update:showSideBar', false)"
            >
              <svg
                class="w-6 h-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
              <img
                class="w-auto h-8"
                src="/img/logos/workflow-mark-on-dark.svg"
                alt="Workflow"
              />
            </div>
            <nav class="px-2 mt-5">
              <a
                v-for="(item, i) in menuItems"
                :key="`rr${i}`"
                :href="item.route"
                class="flex items-center px-2 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-900 rounded-md group focus:outline-none focus:bg-indigo-700"
              >
                <svg
                  class="w-6 h-6 mr-4 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    :d="item.icon"
                  />
                </svg>
                {{ item.name }}
              </a>
            </nav>
          </div>
          <div class="flex flex-shrink-0 p-4 border-t border-indigo-700">
            <a href="#" class="flex-shrink-0 block group focus:outline-none">
              <div class="flex items-center">
                <div>
                  <img
                    class="inline-block w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt
                  />
                </div>
                <div class="ml-3">
                  <p class="text-base font-medium leading-6 text-white">
                    Tom Cook
                  </p>
                  <p
                    class="text-sm font-medium leading-5 text-indigo-300 transition duration-150 ease-in-out group-hover:text-indigo-100 group-focus:underline"
                  >
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </transition>
      <div class="flex-shrink-0 w-14">
        <!-- Force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div v-show="showSideBar" class="hidden md:flex md:flex-shrink-0">
    <div class="flex flex-col w-64 bg-indigo-800 border-r border-gray-200">
      <div class="flex flex-col flex-1 h-0 pt-5 pb-4 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4">
          <img
            class="w-auto h-8"
            src="/img/logos/workflow-mark-on-dark.svg"
            alt="Workflow"
          />
        </div>
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <nav class="flex-1 px-2 mt-5 bg-indigo-800">
          <a
            v-for="(item, i) in menuItems"
            :key="`r${i}`"
            :href="item.route"
            class="flex items-center px-2 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-900 rounded-md group focus:outline-none focus:bg-indigo-700"
          >
            <svg
              class="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-focus:text-indigo-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="item.icon"
              />
            </svg>
            {{ item.name }}
          </a>
        </nav>
      </div>


      <div class="flex flex-shrink-0 p-4 border-t border-indigo-700">
        <a href="#" class="flex-shrink-0 block w-full group">
          <div class="flex items-center">
            <div>
              <img
                class="inline-block rounded-full h-9 w-9"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt
              />
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium leading-5 text-white">Tom Cook</p>
              <p
                class="text-xs font-medium leading-4 text-indigo-300 transition duration-150 ease-in-out group-hover:text-indigo-100"
              >
                View profile
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    showSideBar: { default: false, type: Boolean },
    curSettings: { required: true, type: Object },
  },
  emits: ["update:showSideBar"],
  data: () => ({
    code: "code",
    menuItems: [
      {
        name: "Dashboard",
        route: "/",
        icon:
          "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      },
      {
        name: "Documents",
        route: "",
        icon:
          "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4",
      },
    ],
  }),
})
</script>
