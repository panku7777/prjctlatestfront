const mongoose=require("mongoose")
var mongoUrl="mongodb+srv://gauthamsajus686:123@cluster0.odyrbgz.mongodb.net/Elibrary"
mongoose.connect(mongoUrl)
.then(()=>{
    console.log("Database Connected")

})

.catch(err =>
    {
        console.log(err)
    })

    module.exports=mongoose