module.exports = DataTypes => ({
  id         : {
    "type"         : DataTypes.INTEGER,
    "primaryKey"   : true,
    "autoIncrement": true
  },
  title     : { type: DataTypes.STRING},
  description: { type: DataTypes.TEXT}
});