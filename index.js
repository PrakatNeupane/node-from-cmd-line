const https = require('https');

const getDataFromApi = async () => {
    return new Promise((resolve, reject) => {
        https.get('https://api.publicapis.org/entries', (res) => { // the callback function is called when the connection is established
            let data = '';
            res.on('data', (chunk) => { // is called when there is a chunk of data
                data += chunk;
            });
            res.on('end', () => { // is called when the connection closes
                resolve(JSON.parse(data));
            });
        })
            .on('error', (err) => {
                console.log(err.message);
                reject(err);
            });
    });
};

const [category, limit] = process.argv.slice(2) || []; // get the arguments passed to the file 

getDataFromApi().then((data) => {
    const filteredData = data?.entries?.filter((res) => res?.Category?.toLowerCase() === category.toLowerCase()).map((data) => data.API) || []; // filteredData is array with the list of API data that is not sorted alphabetically yet
    if (limit < filteredData?.length) {
        result = filteredData.slice(0, limit);
    } else {
        result = filteredData;
    }

    if (result.length) {
        console.log(result.sort((a, b) => a - b)); // sorts alphabetically 
    } else {
        console.log('No results');
    }
});