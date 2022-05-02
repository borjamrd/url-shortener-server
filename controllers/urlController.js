const Url = require('../models/urlModel')
const shortid = require('shortid');
const asyncHandler = require('express-async-handler');

const getUrls = asyncHandler(async (req, res) => {
    const urls = await Url.find();
    res.json(urls);
  });


const createUrl = asyncHandler(async(req, res) =>{
    const {origUrl} = req.body;
    const base = process.env.BASE;
    const urlId = shortid.generate();
    let shortUrl = `${base}/${urlId}`;  

    const urlExist = await Url.findOne({origUrl});

    if (urlExist){
        res.status(400)
        throw new Error('Esta URL ya existe')
    }
    
    const url = await Url.create({
        user: req.user._id,
        origUrl,
        shortUrl,
        urlId,
        date: new Date(),
    })

    console.log(url)
    if (url){
        res.status(201).json({
            _id: url._id,
            origUrl: url.origUrl,
            shortUrl: url.shortUrl,
            date: url.date,
            user: url.user
        })
    } else{
        res.status(400)
        throw new Error ('Hay un error')
    }

})


const getUrlById = asyncHandler(async(req,res)=>{
    const url = await Url.findById(req.params.id);

    if(url){
        res.json(url)
    }else{
        res.status(400).json({message: "URL no encontrada"})
    }
})


const updateUrl = asyncHandler(async(req,res)=>{
    const {origUrl} = req.body;
    const url = await Url.findById(req.params.id)
    if (url.user.toString() !== req.user.id.toString()){
        res.status(401)
        throw new Error('No puedes realizar esta acción')
    }
    if (url){
        url.origUrl = origUrl;
        const updatedurl = await url.save()
        res.json(updatedurl)
    } else{
        res.status(400)
        throw new Error ('Hay un error')
    }

})

const deleteUrl = asyncHandler(async(req, res)=>{
    const url = await Url.findById(req.params.id)
    if (url.user.toString() !== req.user.id.toString()){
        res.status(401)
        throw new Error('No puedes realizar esta acción')
    }
    if (url){
        await url.remove()
        res.json({message: "Url eliminada"})
    } else{
        res.status(400)
        throw new Error ('Hay un error')
    }


})
module.exports = {createUrl, getUrls, getUrlById, updateUrl, deleteUrl}