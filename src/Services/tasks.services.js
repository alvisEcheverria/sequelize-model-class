const Categories = require('../models/categories.models');
const Tasks = require('../models/tasks.models');

class TasksServices {

    static async getAll(){
        try {
            const result = await Tasks.findAll({
                attributes: ['id', 'title', 'description', 'isComplete', 'userId', 'createdAt']});
            return result;
        } catch (error) {
            throw error; 
        }
    }

    static async getById(id){
        try {
            const result = await Tasks.findByPk(id,{
                    attributes: ['id', 'title', 'description', 'isComplete', 'userId', 'createdAt']
                    });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async createTask(title, description, isComplete){
        try {
            const result = await Tasks.create(
                title,
                description,
                isComplete
            )
            return result;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = TasksServices;