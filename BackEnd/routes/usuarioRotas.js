const usersController = require('../controllers/usersController');
const passport = require('passport');


module.exports = (app, upload) => {

    //GET -> RECEBER DADOS
    //POST -> INSERIR DADOS
    //PUT -> ATUALIZAR DADOS
    //DELETE -> ELIMINAR DADOS

    app.get('/api/users/findDeliveryMen', passport.authenticate('jwt', {session: false}), usersController.findDeliveryMen);

    app.post('/api/users/create', usersController.register);
    app.post('/api/users/createWithImage', upload.array('image', 1), usersController.registerWithImage);
    app.post('/api/users/login', usersController.login);
    
    app.put('/api/users/update', passport.authenticate('jwt', {session: false}), upload.array('image', 1), usersController.updateWithImage);
    app.put('/api/users/updateWithoutImage', passport.authenticate('jwt', {session: false}), usersController.updateWithoutImage);
    app.put('/api/users/updateNotificationToken', passport.authenticate('jwt', {session: false}), usersController.updateNotificationToken);

}