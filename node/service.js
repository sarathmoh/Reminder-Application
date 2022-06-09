const database=require('./databaseconnect')
const register=(uname,password,mobile)=>{
return database.Reminduser.findOne({uname})
.then(user=>{
if(user){
 return {
 statusCode:400,
 status:false,
message:"username already exist....."}
    
        }
        else{
            const newUser=new database.Reminduser({
    
    uname,
    password,
    mobile,
    events:[]
    
            })
            newUser.save();
            return{
                statusCode:200,
                status:true,
                message:"Successfuly registered...."
              }
          
        }
    })
}

module.exports={
    register
}