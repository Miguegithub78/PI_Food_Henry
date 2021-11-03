require("dotenv").config();
const server = require('./src/app.js');
const { conn, Diet } = require('./src/db.js');
const { PORT } = process.env;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    const dietas = ["gluten free","paleolithic", "vegetarian", "lacto ovo vegetarian","vegan","pescatarian","paleo","primal","whole 30", "fodmap friendly", "fruitarian", "dairyFree"];
    dietas.forEach(async (element) => await Diet.create({name: element}));
    console.log('Tipos de dieta pre-cargadas')
  });
});
