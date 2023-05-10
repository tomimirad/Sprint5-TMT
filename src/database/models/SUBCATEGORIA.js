module.exports = (sequelize, DataTypes)=>{
    let alias = 'Subcategoria'

    let cols = {
        subCategoria_id:{
            autoIncrement:true,
            type:DataTypes.INTEGER,
            primaryKey: true
        },
        subCategoria:{
            type:DataTypes.STRING,
            allowNull:false
        },
        categoria_id:{
            type:DataTypes.INTEGER
        }
    }

    let config = {
        tableName:'subcategoria',
        timestamps: false,
        paranoid: true
    }
    let Subcategoria = sequelize.define(alias,cols,config)

    Subcategoria.associate = function(models){
        Subcategoria.belongsTo(models.Categoria,{
            foreignKey:"categoria_id",
            as: "categoria"
        }),
        Subcategoria.hasMany(models.Producto,{
            foreignKey: 'subCategoria_id',
            as:'productos'
        })
    }
    return Subcategoria
    }



