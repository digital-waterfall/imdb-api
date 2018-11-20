const cheerio = require('cheerio');
const axios = require('axios');

exports.handler = (event, context, callback) => {
    console.log('event', JSON.stringify(event));
    axios.get('https://www.imdb.com/title/' + event.imdbId).then(data => {
        const $ = cheerio.load(data.data);
        let json = $('head > script[type="application/ld+json"]').html();
        console.log('json', json);
        const response = {
            statusCode: 200,
            body: JSON.stringify(json),
        };
        callback(null, response);
    });
};
