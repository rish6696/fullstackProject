import authMiddleWare from './authMiddlewares'


function assignJWTMiddleware(){
    return authMiddleWare.assignJWT
}




export default{
    assignJWTMiddleware
}