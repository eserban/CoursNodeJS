import http, { get } from 'http';
import { getAll, getByName } from './products.mjs';

http.createServer( (req, res) => {

  if (req.url === "/products" && req.method === "GET") {
        //set the response
        res.write(JSON.stringify(getAll()));
        //end the response
        res.end();
    }

    if(req.url.startsWith('/products/') && req.method === "GET") {
      //set the response
        res.write(JSON.stringify(getByName(req.url.split('/')[2])));
        //end the response
        res.end();
    }


}).listen(3000); //the server object listens on port 8080