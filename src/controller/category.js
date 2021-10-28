const req = require("express/lib/request");
const res = require("express/lib/response");
const CategoryProperty = require("../model/categoryProperty");

const getCategories = async(req, res) => {
    try {
        const category = await CategoryProperty.findAll();
        res.json({category});
    } catch (error) {
        res.json(error);
    }
    
}

const createCategory = async(req, res) => {
    try {
        const category = await CategoryProperty.create(req.body);
        res.json({category});
    } catch (error) {
        res.json(error);
    }
}

const updateCategory = async(req, res) => {
    try {
        await CategoryProperty.update(req.body,{
            where : {
                id : req.params.id
            }
        })
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}


const deleteCategory = async(req, res) => {
    try {
        const deleteCat = await CategoryProperty.destroy({
            where : {
                id : req.params.id
            }
        })
        res.json('ok')
    } catch (error) {
        res.json(error)
    }
}


module.exports = {
    getCategories,
    createCategory,
    deleteCategory,
    updateCategory,
}