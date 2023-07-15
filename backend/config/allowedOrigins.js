let base_url;
if(process.env.NODE_ENV === "production"){
   base_url = `${req.protocol}://${req.get('host')}`
}

const allowedOrigins = [
    'https://www.yoursite.com',
    'http://127.0.0.1:5500',
    'http://localhost:8080',
    'http://localhost:3000',
    base_url
];

module.exports = allowedOrigins;