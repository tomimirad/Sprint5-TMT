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
            type:DataTypes.INTEGER(11)
        },
        cuotas:{
            type:DataTypes.INTEGER(11)
        },
        subCategoria_id:{
            type:DataTypes.INTEGER(11)
        },
        sale:{
            type:DataTypes.STRING
        }

    }

    let config = {
        tableName:'productos',
        timestamps: false,
        paranoid: true
    }

    let Producto = sequelize.define(alias,cols,config)
 
    // Producto.associate = function(models){
    //     Producto.
    // }

    return Producto
}