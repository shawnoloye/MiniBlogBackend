const News = require('../models/news')

const getAllNews = async (req, res) => {
    try {
        const news = await News.find({});

        res.status(200).json({
            status: 'Success',
            count: news.length,
            data: {
                news
            },
        })
        
    } catch (error) {
        console.log(error)
        
    }
}

const createNews = async (req, res) =>{
    try {
        const news = await News.create(req.body)
        res.status(200).json({
            status: 'Success',
            data: {
                news
            }
        })
    } catch (error) {
        console.log(error)
        
    }
}

const getAllSingleUserNews = async (req, res) => {
    try {
        const news = await News.find({ user: req.user.userId })
        res.status(200).json({ news, count: news.length})
        
    } catch (error) {
        console.log(error)
    }
}


const updateNews = async (req, res) => {
    try {
        const news = await News.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidator: true,
        })
        res.status(200).json({
            status: 'Success',
            data: {
                news
            }
        })
        
    } catch (error) {
        console.error(error)
        
    }
}

const deleteNews = async (req, res) => {

    try {
        await News.findByIdAndDelete(req.params.id);
    
        res.status(200).json({
            status: 'Success',
            message: 'News deleted successfully'
        })
        
    } catch (error) {
        console.log(error)
        
    }
}

const getSingleNews  = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
    
        res.status(200).json({
            status: 'Success',
            data: {
                news
            }
        })
        
    } catch (error) {
        console.log(error)
        
    }
}


module.exports = {
    getAllNews,
    getAllSingleUserNews,
    createNews,
    updateNews,
    deleteNews,
    getSingleNews
}