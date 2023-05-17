module.exports = (sequelize,DataTypes)=>{
    let alias = 'Producto'

    let cols = {
        producto_id:{
            autoIncrement:true,
            type:DataTypes.INTEGER(11),
            primaryKey: true
        },
        titulo:{
            type:DataTypes.STRING,
            allowNull:false
        },
        precio:{
            type:DataTypes.FLOAT(12),
            allowNull:false
        },
        descripcion:{
            type:DataTypes.TEXT,
        },
        img:{
            type:DataTypes.STRING,
            allowNull:false
        },
        descuento:{
            type:DataTypes.INTEGER(11),
            allowNull:false
        },
        cuotas:{
            type:DataTypes.INTEGER(11),
            allowNull:false

        },
        sale:{
            type:DataTypes.STRING,
            allowNull:false
        }

    }

    let config = {
        tableName:'productos',
        timestamps: false
    }

    let Producto = sequelize.define(alias,cols,config)
 
    Producto.associate = function(models){
        Producto.belongsTo(models.Subcategoria,{
            as: 'subcategoria',
            foreignKey: 'subCategoria_id'
        })
    }
    return Producto
}



