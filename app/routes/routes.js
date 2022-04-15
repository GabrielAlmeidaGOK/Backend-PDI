module.exports = (app) => {
  const Controller = require('../controllers/user');

  app.post(`/api/register`, Controller.register);
  app.get(`/api/getAll`, Controller.getAll);
  app.delete(`/api/delete/:_id`, Controller.delete);
}
