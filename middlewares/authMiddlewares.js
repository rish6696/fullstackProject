import JWT from 'jsonwebtoken'
import config from '../config'

function assignJWT(req,res,next){
    
   const {user} =req
   const jwtToken = JWT.sign({userId:user._id},config.JWT_KEY);
   res.cookie('jwtToken',jwtToken,{httpOnly:true})
   res.status(200).send({result:true});
}

function cookieMiddleWare (req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
}


export default {
    assignJWT,cookieMiddleWare
}
