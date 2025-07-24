const mongoose = require('mongoose')
function dbConnection(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connect to db')
})
.catch((err)=>{
    console.log(err, 'error white connecting to db')
})

}
 module.exports = dbConnection