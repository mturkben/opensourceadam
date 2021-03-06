const Repo = require('../models/Repo')

const addDataToDB = (req, res) => {
    const repo = new Repo({
        userName: 'furkanportakal',
        repoName: 'deneme'
    })

    repo.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

const getAllDataToDB = (req, res) => {
    Repo.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
}
const getSingleDataToDB = (req, res) => {
    Repo.findById('5fde4264f6f6a52c442654c6')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
}
module.exports = { getSingleDataToDB, getAllDataToDB, addDataToDB }