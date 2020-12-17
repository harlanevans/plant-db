const fetch = require('node-fetch')

const searchController = {};

    const token = "xtx6IVJ7HxQT59FY_Qxqo5dpo7zziGQKP4ErjCQYjZQ";

searchController.searchFunction = (req, res, next) => {
// console.log(res, 'res')
    // console.log(req.body, 'REQBODY')
    // (async () => {
    fetch(`https://trefle.io/api/v1/plants/search?token=${token}&q=${req.body.query}&limit=3`)
        
    // common_name
    // image_url
        .then(res => res.json())
        .then(data => {
                res.locals.query = data
                console.log(data)
                return next()
        }
        )
    .catch(err => console.log("ERROR IN CONTROLLER", err))
    // response.json();
    // console.log(res.locals.query)
    // console.log(json)
        // res.locals.query = json
    // })
        
                
}

// searchController.allPlants = (req, res, next) => {
//     // this grabs alllll plants from trefl
//     fetch('https://trefle.io/api/v1/plants?token=xtx6IVJ7HxQT59FY_Qxqo5dpo7zziGQKP4ErjCQYjZQ',)
//     .then(res => res.json())
//     .then(data => console.log(data, 'myjson'))
// .catch(err => console.log(err, 'did not work'))
// }

module.exports = searchController;