const http= require("http");
const fs= require("fs");

const PORT = 2000;
const hostname = "localhost";
const home = fs.readFileSync("./index.html","utf-8");

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        return res.end(home);
    }
    if(req.url === "/about"){
        return res.end("<h1>ABOUT PAGE</h1>");
    }
    if(req.url === "/contact"){
        return res.end("<h1>CONTACT PAGE</h1>");
    }
    if(req.url === "/service"){
        return res.end("<h1>SERVICE PAGE</h1>");
    }
    else{
        return res.end("<h1>404 Page Not Found</h1>");
    }

});

server.listen(PORT, hostname, () => {
    console.log(`Server running http://${hostname}:${PORT}`);
});