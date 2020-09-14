// npm install storyblok-js-client
const StoryblokClient = require("storyblok-js-client")
const fs = require("fs")

// init with access token
const StoryblokRead = new StoryblokClient({
  accessToken: process.env.storyblok_key,
  // accessToken: "WKwMRDNvKlxZINou9JNHxwtt",
  cache: {
    clear: "auto",
    type: "memory",
  },
})

async function getStoryblokDataInFolder(category) {
  try {
    let { data } = await StoryblokRead.get("cdn/stories/", {
      // starts_with: `${category}`,
      starts_with: category,
      per_page: 100,
    })
    console.log(JSON.stringify(data))
    let res = data.stories.map(x => x.content)
    return res
  } catch (e) {
    console.log(e.response)
  }
  // writeFile(category, res)
}

async function writeFileProperties() {
  let properties = await getStoryblokDataInFolder("properties")

  // let res = articles.map(x => ({
  //   link: x.link.url,
  //   title: x.title,
  //   desc: x.description,
  //   image: x.image,
  // }))

  fs.writeFileSync(`.data/properties.json`, JSON.stringify(properties))

  console.log(`=== Saved ${properties.length}  properties ===`)
}

async function run() {
  await writeFileProperties()
}

run()
