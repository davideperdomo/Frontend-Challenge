const express = require('express');
const cors = require('cors');
const app = express();

// Porta para subir o servidor
const serverPort = 8001;

// Seta as rotas default da API
const routes = {
	products: {
		get: '/api/products'
	},
	productsi:{
	    get: '/api/productsi'
	}
};

app.use(cors());

app.get(routes.products.get, function (req, res) {
    res.sendFile(__dirname + '/data/products.json');
});


app.use('*', function (req, res) {
    res.redirect(routes.products.get);
});

// Inicia o servidor e avisa o usuário
app.listen(serverPort);
console.log(`[products] API listening on port ${serverPort}.`);
