const searchController = {};

searchController.searchFunction = (req, res, next) => {
console.log(res, 'res')
console.log(req, 'req')

}

searchController.allPlants = (req, res, next) => {
    // this grabs alllll plants from trefl
    fetch('https://trefle.io/api/v1/plants?token=xtx6IVJ7HxQT59FY_Qxqo5dpo7zziGQKP4ErjCQYjZQ',)
    .then(res => res.json())
    .then(data => console.log(data, 'myjson'))
.catch(err => console.log(err, 'did not work'))
}

module.exports = searchController;