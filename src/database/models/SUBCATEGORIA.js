module.exports=(sequelize,DataTypes)=>{
    let alias = 'Subcategoria'

    let cols = {
        subCategoria_id:{
            autoIncrement:true,
            type:DataTypes.INTEGER,
            primaryKey:true
        },
        subCategoria:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }

    let config = {
        tableName:'subcategoria',
        timestamps: false
    }

    let Subcategoria = sequelize.define(alias,cols,config)

    Subcategoria.associate = function(models){
        Subcategoria.belongsTo(models.Categoria,{
            foreignKey:'categoria_id',
            as:'categoria'
        })
        Subcategoria.hasMany(models.Producto,{
            foreignKey: 'subCategoria_id',
            as:'producto'
        })
    }

    return Subcategoria

}