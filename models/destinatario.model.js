
module.exports = (sequelize, DataTypes) => {
  const Destinatario = sequelize.define('Destinatario', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rut: DataTypes.STRING,
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.STRING,
    banco: DataTypes.STRING,
    tipo_cuenta: DataTypes.STRING,
    numero_cuenta: DataTypes.INTEGER
  }, { sequelize, tableName: 'destinatarios' });

  Destinatario.associate = models => {
    Destinatario.hasMany( models.Transferencia , {
      foreignKey: 'destinatario_id'
    });
  }

  return Destinatario;

}; 