module.exports = (sequelize,DataTypes)=>{
    let alias = 'Categoria'

    let cols = {
        categoria_id:{
            autoIncrement:true,
            type:DataTypes.INTEGER,
            primaryKey: true
        },
        categoria:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }

    let config = {
        tableName:'categoria',
        timestamps: false
    }

    let Categoria = sequelize.define(alias,cols,config)
 
    Categoria.associate = function(models){
        Categoria.hasMany(models.Subcategoria,{
            foreingKey:"categoria_id",
            as:"subcategorias"
        })
    }

    return Categoria
}