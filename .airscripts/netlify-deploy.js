const NetlifyAPI = require('netlify')
const client = new NetlifyAPI('<API-KEY>')

// client.listSites().then((sites) => {
//     console.log(sites.find(i => i.name === 'x-147'))
// })

const SITE_ID = '1de08d88-d270-4e83-9500-2b290de4a06c'

client.createSiteBuild({
    siteId: SITE_ID
}).then(() => {
    console.log('Done.')
}).catch((err) => {
    console.error(err)
})

