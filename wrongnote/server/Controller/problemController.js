const problemModel = require("../db/models/problemModel");

async function createProblem(req, res, next) {
    const { problem, answer, description, currentUser } = req.body
    try {
        const userId = currentUser

        const newProblem = new problemModel({
            problem,
            answer,
            description,
            user: userId
        })
        const savedProblem = await newProblem.save()
        res.status(200).json(savedProblem)
    } catch (error) {
        console.error('failed to save problem', error)
        next(error);
    }
}

async function searchProblem(req, res, next) {
    try {
        const { q, userId } = req.query;
        let query = {}
        if(q){
            query = {
                $and: [
                    {user: userId}
                ],
                $or: [
                    //문제에 검색어가 포함되는경우
                    {problem: { $regex : q, $options: 'i'}},
                    //답에 검색어가 포함되는경우
                    {answer : { $regex: q, $options: 'i'}},
                    //해설에 검색어가 포함되는경우
                    {description : { $regex: q, $options: 'i'}},
                ]
            }
        }
        let problems = await problemModel.find(query)
        

        res.status(200).json(problems)
    } catch (error) {
        next(error);
    }
}

async function getUserProblems(req, res, next) {
    try {
        console.log('getUserProblems', req.params, req.params.userId)
        const userId = req.params.userId
        const userProblems = await problemModel.find({user: userId})
        res.status(200).json(userProblems)
    } catch (error) {
        next(error)
        res.status(500).json({message : 'failed to fetch user problems'})
    }
}



async function getProblem(req, res, next){
    try {
        const problem = await problemModel.findById(req.params.id)
        if(!problem){
            return res.status(404).json({message: 'problem not found'})
        }
        res.json(problem)
    } catch (error) {
        next(error)
    }
}


async function updateProblem(req, res, next) {
    try {
        const { _id, problem, answer, description } = req.body


        const updateProblem = await problemModel.findByIdAndUpdate(_id, {
            problem,
            answer,
            description
        }, { new : true})

        if(!updateProblem){
            return res.status(404).json({error : 'Problem not found'})
        }
        
        res.status(200).json(updateProblem)
    } catch (error) {
        next(error)
    }
}

async function deleteProblem(req, res, next){
    try {
        const { _id } = req.body

        const deleteProblem = await problemModel.findByIdAndDelete(_id)

        if(!deleteProblem){
            return res.status(404).json({ message : 'Problem not found'})
        }
        res.status(200).json({ message: 'Problem deleted successfully'})

    } catch (error) {
        next(error)
    }
}


module.exports = {
    createProblem,
    getProblem,
    getUserProblems,
    updateProblem,
    deleteProblem,
    searchProblem
}