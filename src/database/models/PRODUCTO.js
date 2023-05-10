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
        subCategoria_id:{
            type:DataTypes.INTEGER
        },
        sale:{
            type:DataTypes.STRING,
            allowNull:false
        }

    }

    let config = {
        tableName:'productos',
        timestamps: false,
        paranoid: true
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









    // Executing (default): SELECT `Producto`.`producto_id`, `Producto`.`titulo`, `Producto`.`precio`, `Producto`.`descripcion`, `Producto`.`img`, `Producto`.`descuento`, `Product
    // o`.`cuotas`, `Producto`.`subCategoria_id`, `Producto`.`sale`,
    
    //`subcategoria`.`subCategoria_id` AS `subcategoria.subCategoria_id`, `subcategoria`.`subCategoria` AS `subcateg
    // oria.subCategoria`, `subcategoria`.
    
    //`categoria_id` AS `subcategoria.categoria_id`, `subcategoria`.
    
    //`CategoriumCategoriaId` AS `subcategoria.CategoriumCategoriaId` FROM `produ
    // ctos` AS `Producto` LEFT OUTER JOIN `subcategoria` AS `subcategoria` ON `Producto`.`subCategoria_id` = `subcategoria`.`subCategoria_id`;
    // node:internal/process/promises:279
    //             triggerUncaughtException(err, true /* fromPromise */);