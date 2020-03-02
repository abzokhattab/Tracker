const joi=require('joi')

module.exports={
    register (req ,res ,next){
        const schema= {
            email:joi.string().email(),
            password:joi.string()
            
        }
        
        const {error,value}=joi.validate(req.body,schema)
        if(error){
       switch(error.details[0].context.key)     {
            case 'email':
           res.status(400).send({
               error:'unvalid email format'
           })
          break
          case 'password': 
          res.status(400).send({
            error:'unvalid email format'

        })
        default:
            res.status(400).send({
                error:'unvalid registration'
            })
    }
        } else {
        next()
    }}
}