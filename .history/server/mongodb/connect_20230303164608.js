import mongoose from 'mongoose'

const connectDB=async(url)=>{
  mongoose.set('strictQuery',true)

  mongoose.connect(url)
  .then(()=>{
    console.log('Mongo DB connected')
  })
  .catch((err)=>{
    console.log(err)
  })
}