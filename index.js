const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const creatconnect = require('./connectdatabase')
const bodyParser = require('body-parser');
const table = require('./databasetable');
const { upload } = require('./upload');

const app = express()


creatconnect()
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json({limit:'10mb'}))
app.use('/savepic', express.static('savepic'))

app.get('/some' , async(req,res) => {
   
    // const GetData = await table.find({}).exec()
    // res.send(GetData)
    res.send('some')
})

app.post('/gay',upload, async(req,res) => {
    var data = req.body
    if(req.file){
        data.file = req.file.filename
    }
    const save =  await table(data).save()
    res.send(save)
})
app.delete('/gay/:id' ,async(req,res) => {
    const id = req.params.id
    const removed = await BookShema.findOneAndDelete({_id:id}).exec()
    if(removed?.file){
        await fs.unlink('./Picsave/' + removed.file,(err) => {
            if(err)
            {
                console.log(err)
            }
            else{
                console.log("remove")
            }
        })
        res.send(removed)
    }
})

const port = process.env.PORT || 3001
app.listen(port,"0.0.0.0",() => {
    console.log("server running")
})

