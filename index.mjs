import http, { get } from 'http';
import { getAll, getByName } from './products.mjs';

http.createServer( (req, res) => {

  

  if (req.url === "/products" && req.method === "GET") {
        //set the response
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(getAll()));
        //end the response
        res.end();
      }
      
      if(req.url.startsWith('/products/') && req.method === "GET") {
        const name = req.url.split('/')[2];
        const pdt = getByName(name);
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(pdt ? JSON.stringify(pdt) : "Cannot find product with name " + name);
        res.end();
      }
      
      else {
      res.writeHead(404);
      res.write(`Cannot ${req.method.toLowerCase()} ${req.url}`);
      res.end();
    }


}).listen(3000);