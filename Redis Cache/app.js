'use strict';
const express = require('express');
const app = express();
const redis = require('redis');
const Data = require("./data")
const Client = redis.createClient(6379);


app.get("/v1/user/api", (req, res, next) => {
    res.status(200).send({ body: Data })
})


app.get("/v1/user/api/:id", async (req, res, next) => {
    try {
        (async () => {

            Client.get("dataId" + req.params.id, (err, resp) => {
                if (resp !== null) {
                    return res.json({ resp, msg: "cached" });
                }
                else {
                    for (let i = 0; i < Data.length; i++) {
                        if (Data[i].id == req.params.id) {
                            var data = Data[i]
                            Client.set("dataId" + req.params.id, JSON.stringify(data))
                            return res.status(200).send({ data, msg: "without cache" });
                        }
                    }
                }
            })
        })();

    }


    catch (err) {

        return res.status(500).send(err)

    }
})


app.listen(2500, () => {
    console.log('server running on port 2500')
})