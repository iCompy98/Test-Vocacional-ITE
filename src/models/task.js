const mongoose =require ('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema({
    question: { type: String, required: true },
    group : { type: String, required: true }
});

module.exports = mongoose.model('Question', TaskSchema);