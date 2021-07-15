
module.exports = (sequelize, DataTypes) => {
  const Transferencia = sequelize.define('Transferencia', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    monto: DataTypes.INTEGER,
    fecha: DataTypes.DATE
  }, { sequelize, tableName: 'transferencias' });

  Transferencia.associate = models => {
    Transferencia.belongsTo( models.Destinatario , {
      foreignKey: 'destinatario_id'
    });
  }

  return Transferencia;

}; 