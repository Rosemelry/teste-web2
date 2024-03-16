
const horarioMiddleware = (req, res, next) => {
    const horaAtual = new Date();
    const dayOfWeek = horaAtual.getDay();
    const hour = horaAtual.getHours();
    
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 8 && hour < 17) {
      next();
    } else {
      res.status(403).send('Acesso Permitido Entre 08:00 e 17:00!');
    }
  };
  
  module.exports = {horarioMiddleware};