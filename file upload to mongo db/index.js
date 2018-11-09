var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bodyParser = require('body-parser')
var imgPath = '/path/yourimage.png';
var app = express()
// new
var path = require('path')
var crypto = require('crypto')
var multer = require('multer')
var GridFsStorage = require('multer-gridfs-storage')
var Grid = require('gridfs-stream')
var methodOverride = require('method-override')


app.use(bodyParser.json())
const conn = mongoose.createConnection('mongodb://localhost/')

let gfs;
conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('uploads')
})

// init storage 




const storage = new GridFsStorage({
    url: 'mongodb://localhost/',
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});


const upload = multer({ storage });





// upload request 

app.post('/api/uploadFile', upload.single('file'), (req, res) => {

    res.json({ file: req.file })
})



// get file object

app.get('/getFiles', (req, res) => {
    gfs.files.find().toArray((err, files) => {
        if (!files || files.length === 0) {
            return res.status(404).json({
                err: 'no file'
            })
        }

        return res.json(files)
    })

})


// get file
app.post('/api/images', (req, res) => {
    console.log(req.body.filename)
    gfs.files.findOne({ filname: req.body.filename }, (err, file) => {

        console.log(file)
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'no file'
            })
        }

        if (file.contentType == 'image/jpeg' || file.contentType == 'image/png') {
            const readStream = gfs.createReadStream(file.filename)
            readStream.pipe(res)
        }
        else {
            res.status(404).json({
                err: 'no file found'
            })
        }
    })

})





var schema = new Schema({
    // img: {
    //     data: {
    //         type: Buffer
    //     },
    //     contentType: {
    //         type: String
    //     },
    // },
    filePath: {
        type: String
    }
});

var A = mongoose.model('A', schema);



var nameSave = new Schema({
    name: {
        type: String
    }
});

var nameSchema = mongoose.model('nameSave', nameSave);













app.post('/api/filePath', (req, res, next) => {




    // A.create({img:{data :req.body.img.data }})

    // res.send(req.body.img.contentType)


    var data = fs.readFileSync(A.filePath);
    // A.img.contentType = 'image/png';
    // A.save(function (err, a) {
    //     if (error) {
    //         res.send(error)
    //     }
    //     else {
    //         res.send(a)
    //     }

    // })

    if (data) {

        res.send('success')
    }









})

app.post('/api/name', (req, respon, next) => {

    respon.send(req.body.name)



    nameSchema.create({ name: req.body.name })
        .then((a) => {
            console.log('saved')
            respon.send(a)
        })
        .catch((error) => {
            console.log('not saved')
            respon.send(error)
        })
})
app.get('/api', (req, res, next) => {

    res.send({ send: 'sididqui' })


    // A.create({})

})


app.use((err, req, res, next) => {

    console.log(err.message)

    res.send(err.message)
    next()
})


app.listen(3500, () => {
    console.log('server is running')
})



// A.remove(function (err) {
//     if (err) throw err;



//     // store an img in binary in mongo
//     var a = new A;
//     a.img.data = fs.readFileSync(imgPath);
//     a.img.contentType = 'image/png';
//     a.save(function (err, a) {
//         if (err) throw err;

//         console.error('saved img to mongo');

//         // start a demo server
//         var server = express.createServer();
//         server.get('/', function (req, res, next) {
//             A.findById(a, function (err, doc) {
//                 if (err) return next(err);
//                 res.contentType(doc.img.contentType);
//                 res.send(doc.img.data);
//             });
//         });

//         server.on('close', function () {
//             console.error('dropping db');
//             mongoose.connection.db.dropDatabase(function () {
//                 console.error('closing db connection');
//                 mongoose.connection.close();
//             });
//         });

//         server.listen(3333, function (err) {
//             var address = server.address();
//             console.error('server listening on http://%s:%d', address.address, address.port);
//             console.error('press CTRL+C to exit');
//         });

//         process.on('SIGINT', function () {
//             server.close();
//         });
//     });
// });

