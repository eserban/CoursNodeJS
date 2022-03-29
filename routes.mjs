import { add, getAll, getByName, updateFile } from './products.mjs';

export default async (request) => {
    if (request.url === "/products" && request.method === "GET") {
        return {
            "content": "application/json",
            "code": 200,
            "data": JSON.stringify(getAll())
        }
    } 

    if(request.url.startsWith('/products/') && request.method === "GET") {
        const name = request.url.split('/')[2];
        const pdt = getByName(name);
        return {
            "content": "application/json",
            "code": 200,
            "data": pdt ? JSON.stringify(pdt) : { "message": "Cannot find product with name " + name }
        }
    }

    if (request.url === "/add" && request.method === "POST") {
        let body  = {};

        body = await getReqData(request);
        console.log(body);
        if (body.name && body.quantity){
            add(body.name, body.quantity);
            updateFile();
            return {
                "code": 200,
                "data": "The product has been added successfully"
            }
        }
        return {
            "code": 400,
            "data": "an error occured while adding the product"
        }
    }

    return {
        "code": 404,
        "data": `Cannot ${request.method.toLowerCase()} ${request.url}`
    }

}

function getReqData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = "";
            // listen to data sent by client
            req.on("data", (chunk) => {
                // append the string version to the body
                body += chunk.toString();
            });
            // listen till the end
            req.on("end", () => {
                // send back the data
                resolve(JSON.parse(body));
            });
        } catch (error) {
            reject(error);
        }
    });
}