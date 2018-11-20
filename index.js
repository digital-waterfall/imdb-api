const cheerio = require('cheerio');
const axios = require('axios');

exports.handler = (event, context, callback) => {
    console.log('event', JSON.stringify(event));
    axios.get('https://www.imdb.com/title/' + event.imdbId).then(data => {
        const $ = cheerio.load(data.data);
        let rawjson = $('head > script[type="application/ld+json"]').html();
        console.log('json', rawjson);
        const response = {
            statusCode: 200,
            body: JSON.parse(rawjson),
        };
        callback(null, response);
    });
};