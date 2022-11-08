const TasksServices = require('../Services/tasks.services');

const getAllTasks = async (req, res) =>{
    try {
        const result = await TasksServices.getAll();
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
    
}

const getTaskById = async (req, res) =>{
    try {
        const { id } = req.params;
        const result = await TasksServices.getById(id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}

const createNewTask = async (req, res) =>{
    try {
        const { title, description, isComplete } = req.body;
        const result = await TasksServices.createTask(title, description, isComplete)
        res.status(201).json(result)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {  getAllTasks,
                    getTaskById,
                    createNewTask
                 };