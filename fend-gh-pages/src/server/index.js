var path = require('path')
const express = require('express')
const fetch = require('node-fetch')
const cors=require('cors')
const bodyParser = require('body-parser')



const dotenv = require('dotenv').config({
    path: path.resolve('config.env'),
  })

let data={};

const yargs= require('yargs') //for testing functionality using command line

const app = express()
app.use(cors())


app.use(bodyParser.urlencoded({    
    extended: true,
    defer: true
  }));
app.use(bodyParser.json());



//--------------------------------------------------------------------------------
//TEST CODE
yargs.command({
    command:'get-data', 
    description: 'run NLP tool on input URL',
    builder: {
        url: {
            description: 'user input URL',
            demandOption:true,
            type: "strings"
        }    
    },
    handler(argv){
        console.log(argv.url)
        getData(argv.url)//removed test function
    }
})
yargs.parse();
//-----------------------------------------------------------------------------


app.use(express.static('dist'))




app.get('/', function (req, res) {
    res.sendFile('index.html', { root:'dist' });
})

app.post('/getAnalysis', async (req, res)=> {

    //console.log(req.body.url)//

    console.log(process.env.API_KEY+req.body.url+"&&lang=en")
    

    try{

    await fetch(process.env.API_KEY+req.body.url+"&&lang=en")

    .then(response => response.json())

    .then(function(response) {
        let flag

        if(response.model==undefined)//flag validates if url is a valid article
          flag=0
        else
          flag=1

        let analysis= {

            model:response.model,
            confidence:response.confidence,
            agreement:response.agreement,
            subjectivity: response.subjectivity,
            irony: response.irony,
            flag: flag
        }
        console.log(analysis)
       
        console.log("I got the data!")

        res.json(analysis)
          
    })
}
catch(error){console.log(error)}

})

app.listen(3000, function () {
    console.log('Example app listening on port 3000')
})

module.exports=app;
//console.log(`Your API key is ${process.env.API_KEY}`);