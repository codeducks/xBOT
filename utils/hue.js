require('dotenv').config()
const axios = require('axios');

const fetch = require('node-fetch')
const hue_ip = require('./global.json').hue_ip

function put(lID, data) {

    fetch(`http://${hue_ip}/api/${process.env.hue_user}/lights/${String(lID)}/state`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })

}

exports.data = (lID, data) => {

    put(lID, data)

}

exports.group = (gID, data) => {

    fetch(`http://${hue_ip}/api/${process.env.hue_user}/groups/${String(gID)}/action`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })

}
