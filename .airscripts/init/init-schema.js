const StoryblokClient = require('storyblok-js-client')
const config = require('./config.json')

const schema = require('./schema.json')

const Storyblok = new StoryblokClient({
  oauthToken: config.oauthToken
})

schema.entities.forEach(entity => {    
    const component = {
        "name": entity.name.toLowerCase(),
        "display_name": entity.name,
        "schema": entity.fields.reduce((output, field, index) => {
            field.pos = index
            output[field.name] = field
            return output
        }, {}),
        "is_root": true,
        "is_nestable": false
    }

    Storyblok.post(`spaces/${config.spaceId}/components/`, {
        component
    }).then(response => {
        console.log(response)
    }).catch(error => { 
        console.log(error)
    })
});
