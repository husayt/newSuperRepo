
  import list from "/.data/routes.json"

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = list.map(({ path, component, meta }) => ({
  path,
  component: () => import(`./views/${component}.vue`),
  meta: meta || { title: component },
}))

