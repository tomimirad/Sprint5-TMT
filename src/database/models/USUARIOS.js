module.exports = (sequelize,DataTypes)=>{
    let alias = 'Usuario'

    let cols = {
        usuario_id:{
            autoIncrement:true,
            type:DataTypes.INTEGER(11),
            primaryKey: true
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        apellido:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        img:{
            type:DataTypes.STRING,
            allowNull:false
        },
        contrasena:{
            type:DataTypes.STRING,
            allowNull:false
        },
        telefono:{
            type:DataTypes.INTEGER(15)
        },
        categoria:{
            type:DataTypes.STRING,
            allowNull:false
        }

    }

    let config = {
        tableName:'productos',
        timestamps: false,
        paranoid: true
    }

    let Usuario = sequelize.define(alias,cols,config)

    return Usuario
}