export const arduinoPostMessage=async(req,res,next)=>{
    try {
        res.status(200).json({
            message:"message recieved",
            data:req.body
        })
        console.log(req.body)
    } catch (error) {
        res.status(500).json({
            message:"message not received",
        })
    }
}

export const arduinoGetMessage=async(req,res,next)=>{
    try {
        res.status(200).json({
            key1:"hello",
            key2:12345,
            key3:12.00
        })
        console.log("message sent")
    } catch (error) {
        res.status(500).json({
            message:error,
        })
    }
}