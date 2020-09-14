const StoryblokClient = require('storyblok-js-client')
const config = require('./config.json')

const items = require('./initial-properties.json').items

const Storyblok = new StoryblokClient({
  oauthToken: config.oauthToken
})

Storyblok.post(`spaces/${config.spaceId}/stories`, {
    "story": {
      "name": "All Properties",
      "slug": "all-properties",
      "is_folder": true
    },
    "publish": 1
}).then(response => {
    console.log(response)
    
    items.forEach(item => {
        Storyblok.post(`spaces/${config.spaceId}/stories`, {
            "story": {
            "name": item.reference + ' ' + item.line1,
            "slug": item.reference,
            "parent_id": response.data.story.id,
            "content": {
                "component": "propertylisting",
                ...item
            }
            },
            "publish": 1
        }).then(response => {
            console.log(response)
        }).catch(error => { 
            console.log(error)
        })
    })

}).catch(error => { 
    console.log(error)
})