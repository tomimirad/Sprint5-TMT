CREATE DATABASE tmt;
USE tmt;
CREATE TABLE `Productos` (
   `producto_id` INT AUTO_INCREMENT,
   `titulo` VARCHAR(100) NOT NULL,
   `precio` FLOAT NOT NULL,
   `descripcion` TEXT NOT NULL,
   `img` VARCHAR(255) NOT NULL,
   `descuento` INT NOT NULL DEFAULT 0,
   `cuotas` INT NOT NULL DEFAULT 1,
   `subCategoria_id` INT NOT NULL,
   `sale` VARCHAR(10) NOT NULL,
   PRIMARY KEY (`producto_id`)
);

CREATE TABLE `subcategoria` (
   `subCategoria_id` INT NOT NULL AUTO_INCREMENT,
   `subCategoria` VARCHAR(50) NOT NULL,
   `categoria_id` INT,
   PRIMARY KEY (`subCategoria_id`)
);

CREATE TABLE `categoria` (
   `categoria_id` INT AUTO_INCREMENT,
   `categoria` VARCHAR(50),
   PRIMARY KEY (`categoria_id`)
);

CREATE TABLE `usuarios` (
   `usuario_id` INT AUTO_INCREMENT,
   `nombre` VARCHAR(255) NOT NULL,
   `apellido` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `contrasena` VARCHAR(255) NOT NULL,
   `telefono` INT NOT NULL,
   `img` VARCHAR(255) NOT NULL,
   `categoria` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`usuario_id`)
);


ALTER TABLE `Productos` ADD CONSTRAINT `FK_7f0b03f1-dc78-4eeb-ad3e-d4897c03d6be` FOREIGN KEY (`subCategoria_id`) REFERENCES `subcategoria`(`subCategoria_id`)  ;

ALTER TABLE `subcategoria` ADD CONSTRAINT `FK_7e4b9f51-fbef-4e48-b0a6-cb8db26f8fa8` FOREIGN KEY (`categoria_id`) REFERENCES `categoria`(`categoria_id`)  ;