const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");
const BadRequest = require("../errors/badrequest.error");

function pingProblemController(req, res) {
    return res.json({message: 'Problem Controller is up'});
}

function addProblem(req, res, next){
    try {
        throw new BadRequest("Problem name missing", {message :"missing problem name"});
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res){
   return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:'Not Implemented'
    });
}

function getProblems(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:'Not Implemented'
    });
}

function deleteProblem(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:'Not Implemented'
    });
}

function updateProblem(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:'Not Implemented'
    });
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}