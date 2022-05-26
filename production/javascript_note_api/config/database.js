const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/javascriptNote', {
    useNewUrlParser: true,
    useUnifiedTopoLogy: true,
    useCreateIndex: true,
}).then(() => console.log('Conexão com o MongoDB realizada com sucesso'))
    .catch((err) => console.log('Erro na conexão com o MongoDB: ' + err));