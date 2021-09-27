const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true 
    },  
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    
    Score: {
      type: DataTypes.FLOAT
    },
    healthScore:{
      type: DataTypes.FLOAT
    },
    image: {
      type: DataTypes.STRING
    },
    Steps: {
      type: DataTypes.TEXT
    }
  });
};
