const NetlifyAPI = require('netlify')
const client = new NetlifyAPI('<API-KEY>')

// client.listSites().then((sites) => {
//     console.log(sites)
// })

client.createSite(
    {
        "body": {
            "name": "x-" + Math.round(Math.random() * 100 + 100),
            "repo":{
                "provider":"github",
                "id":133374090,
                "repo":"projectalif/agencyX",
                "private":false,
                "branch":"master",
                "cmd":"npm run fullbuild",
                "dir":"./dist",
                "deploy_key_id":"5f3dd7e150da3aa88614532b"
            }
        }
    }
).then(() => {
    console.log('Done.');
})

// https://community.netlify.com/t/support-guide-linking-a-repository-via-api/121

// 133374090 - GitHub Repo ID - obtained via View Source and then search for octolytics-dimension-repository_id
// see: https://stackoverflow.com/questions/13902593/how-does-one-find-out-ones-own-repo-id

// 5f3dd7e150da3aa88614532b - run 

// curl -X POST 'https://api.netlify.com/api/v1/deploy_keys' \
//   -H 'authority: api.netlify.com' \
//   -H 'authorization: Bearer be0c96efd65ee4913d3ea974c288afa451b7858bedfd8a60f7902c6b886b028b' \
//   -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36' \
//   -H 'content-type: application/json' \
//   -H 'accept: */*' \
//   -H 'origin: https://app.netlify.com' \
//   -H 'sec-fetch-site: cross-site' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'referer: https://app.netlify.com/sites/cranky-panini-313a16/deploys' \
//   -H 'accept-language: en-US,en;q=0.9,ar;q=0.8,az;q=0.7,el;q=0.6,fr;q=0.5,ru;q=0.4,tr;q=0.3,la;q=0.2' \
//   -H 'if-none-match: W/"4f53cda18c2baa0c0354bb5f9a3ecbe5"' \

// to produce a public_key -- add it in Deploy Keys setting section of the repo
// and use id (i.e. 5f3dd7e150da3aa88614532b in the request)

// ...

// client.deployKeys().then(() => {
//     console.log(arguments)
// })
