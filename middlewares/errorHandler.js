import CustomError from "../utils/customError.js"

const errorHandler = (err,req,res,next)=>{
    if(err instanceof CustomError){
        return res.status(err.statusCode).json(err.message)
    }
    console.log(err);
    
    return res.status(500).json({message:"Internal Server Error"})

}

export default errorHandler