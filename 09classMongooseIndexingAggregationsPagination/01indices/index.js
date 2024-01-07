import mongoose from 'mongoose'
import users from './users.json' assert { type: 'json' };
import { User } from './models/User.js'

await mongoose.connect('mongodb://localhost/coderhouse').then(()=>{
    console.log('connected to mongodb local')
})


// const response1 = await User.find({ first_name: 'Celia' })
// console.log(response1)


console.log(await User.deleteMany({}))
console.log(await User.insertMany(users))
console.log(await User.countDocuments())

// async function listIndexes() {
//     try {
//       const indexes = await User.collection.listIndexes().toArray();
//       console.log(indexes);
//     } catch (error) {
//       console.error('Error getting indexes:', error.message);
//     }
//   }
  
//   // Call the async function
//   await listIndexes();
  
// try {
//     const result = await User.syncIndexes();
//     console.log(result);
//   } catch (err) {
//     console.error("Error syncing indexes:", err);
// }



// const response = await User.find().explain('executionStats')
// console.log(response)
// console.log(response['executionStats']['executionTimeMillis'])
// console.log(response['queryPlanner']['winningPlan']['queryPlan'])

// const response1 = await User.find({ first_name: 'Celia' }).explain('executionStats')
// console.log(response1['executionStats']['executionTimeMillis'])
// console.log(response1['queryPlanner']['winningPlan']['queryPlan'])

const response2 = await User.find({ last_name: 'Clowney' }).explain('executionStats')
console.log(response2['executionStats']['executionTimeMillis'])
console.log(response2['queryPlanner']['winningPlan']['queryPlan'])

mongoose.connection.close()