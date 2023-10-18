import { EError } from "../enums/EError.js"

export const errorHandler = (error, req,res,next)=>{
    switch(error.code){
        case EError.AUTH_ERROR:
            return res.status(401).json({status:"error", error:error.cause});
        case EError.INVALID_JSON:
            return res.status(401).json({status:"error", error:error.cause});
        case EError.DATABASE_ERROR:
            return res.status(500).json({status:"error", error:error.message});
        case EError.INVALID_PARAM:
            return res.status(400).json({status:"error", error:error.cause});
        default:
<<<<<<< HEAD
            return res.status(500).json({status:"error", error:"se desconoce el error"});
=======
            return res.status(500).json({status:"error", error:"error desconocido"});
>>>>>>> 9d6a1de343ea33f571e6185afc424915f59f33b7
    }
}