/** Command-line tool to generate Markov text. */

const { default: axios } = require('axios');
const fs = require('fs');
const argv = process.argv;

function file(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}:
        Error: ENOENT: no such file or directory, open '${path}'`);
            process.exit(1);
        };
        console.log(data);
    });
};


async function url(url) {
    try{
        let res = await axios.get(url);
        console.log(res.data);
    } catch (err) {     
        console.log(`Error fetching ${url}:
        Error: Request failed with status code 404`);
        process.exit(1);
    };
};



if (argv[2] == "url"){
    url(argv[3]);
} else if (argv[2] == "file") {
    file(argv[3]);
} else {
    console.log("Error, not a valid action");
};