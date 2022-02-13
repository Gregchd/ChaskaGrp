import {Schema, model} from 'mongoose';

const dataSchema = new Schema({
    fecha: {
        type: Date,
        default: new Date()
    },
    temperatura: Number,
    humedad: Number,
    presion: Number,
    gas: Number,
    monoxido: Number,
    uv: Number,
    giroscopio: Number
})

export default model('Data', dataSchema)