const fs = require("fs");
const path = require('path');

const User = {
  fileName: path.resolve(__dirname, "../data/users.json"),

  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
  },
  buscarTodos: function () {
    return this.getData();
  },
  generarId: function () {
    let allUser = this.buscarTodos();
    let ultimoUser = allUser.pop();
    if (ultimoUser) {
      return ultimoUser.id + 1;
    }
    return 1;
  },
  buscarPK: function (id) {
    let allUser = this.buscarTodos();
    let userEncontrado = allUser.find((usuario) => usuario.id === id);
    return userEncontrado;
  },

  crear: function (userData) {
    let allUser = this.buscarTodos();
    let nuevoUser = {
        id: this.generarId(),
        ...userData,
        categoria: 'user'
    }
    allUser.push(nuevoUser);
    fs.writeFileSync(this.fileName, JSON.stringify(allUser, null, " "));
    return true;
  },

  buscarXtodo: function (field, text) {
    let allUser = this.buscarTodos();
    let userEncontrado = allUser.find((usuario) => usuario[field] === text);
    return userEncontrado;
  },
  eliminar : function(id){
    let allUser = this.buscarTodos();
    let usuariosfinal = allUser.filter(usuario => usuario.id !== id)
    fs.writeFileSync(this.fileName, JSON.stringify(usuariosfinal, null, " "));
    return true;
  }
};
module.exports = User