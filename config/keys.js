// module.exports = {
//     MongoURI: 'mongodb+srv://myUser:ukeh11@victor.jba27.mongodb.net/stock_app?retryWrites=true&w=majority'
// }
const mongoose = require('mongoose')
const dotenv = require('dotenv')
// const MongoURI = 'mongodb+srv://myUser:ukeh11@victor.jba27.mongodb.net/stock_app?retryWrites=true&w=majority'
module.exports = () => {
 mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true   
})
.then(() => {'pass', console.log('connected to mongoose')})
.catch(err => { console.log(err)})
}
mongoose.connection.once('open', function(){
    console.log('Conection has been made!');
  }).on('error', function(error){
      console.log('Error is: ', error);
  });
