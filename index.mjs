import http, { get } from 'http';
import routes from './routes.mjs'

http.createServer( async (req, res) => {
  const data = await routes(req)

  console.log(data);
  res.writeHead(data.code, { "Content-Type": data.content ?? "" })
  res.write(data.data);
  res.end();


}).listen(3000);