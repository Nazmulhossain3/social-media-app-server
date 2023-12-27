const { Abouts } = require("./about.model")

const createAbout = async(req,res)=> {
    try {
        const newAbout = new Abouts(req.body)
        const result = await newAbout.save()
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

const getAllAbout = async(req,res)=> {
    try {
        const result = await Abouts.find()
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

module.exports = {
    createAbout,
    getAllAbout
}