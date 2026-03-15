 /*this is a wrapper function for async functions means we don't need to write all this code again and agian
    for every async function instead we can dirctly call this wrapper function and pass our all async functions
    inside it*/ 

    const asynchandler=(fn)=>
        (req,res,next)=>{
            Promise.resolve(fn(req,res,next))
            .catch((err)=>next(err))
        }
    
    export {asynchandler}

 // THIS IS APPROACH NO.2 OF WRITING A WRAPPER FUNCTION BY USING TRY CATCH BLOCK

 /* we are commenting this code becouse we wrote it just to understand but we are not using it
    
    CODE NO.2 

const asynchandler =  async(fn)=>{async(req,res,next)=>{
      try{
           await fn(req,res,next)
      }
      catch(error){
        res.status(error.code || 500).json({
            success:false,
            message:error.message
        })
      }
}}
      */
  