# Refactor Skateboarding

### Trello:
https://trello.com/b/mFVDvh26/refactorsb

### Descripcion:
Venta de indumentaria y hardware para skateboarding.

### Publico:
Nuestro e-commerce apunta a cualquier persona que practica o quiera empezar a practicar este deporte. Tambien
a todo aquel que quiera complementar su estilo con las mejores marcas que se encuentran compitiendo en el
mercado del skateboarding.

### Integrantes: 
- **Nicolas Garilli**: Estudiante de Informatica en la UNQ. Me gustaria complementar mis conocimientos de programacion adquiridos en la facultad con este curso de programacion web full stack.
- **Tomas Sanchez** : Estudiante de Informatica en la UNQ. Poseo algunos conocimientos de programacion en general aunque tambien me interesa todo lo que envuelve el diseño.

### Páginas como inspiración: 
1. https://underwavebrand.com/
2. https://www.vans.com.ar/homevans/
3. https://www.volcom.com.ar/
4. https://www.dcshoes.com.ar/
5. https://www.quiksilver.com.ar/


# Sprint 6



# Bases de datos y Sequelize

# Diagrama de base de datos

    Les proponemos la siguiente estructura, aunque la pueden ajustar a la necesidad de su proyecto. 😉
    ● Usuarios (recuerden ver los campos sugeridos en el sprint 3).
    ● Productos (recuerden ver los campos sugeridos en el sprint 3).
    ● Tablas secundarias (según lo requiera su proyecto).
    ○ Para productos: categorías, marcas, colores, talles, etc.
    ○ (Opcional) Para usuarios: categorías.
    ● (Opcional) Carrito de compras.
    ○ Con detalle de quién hizo la compra, cantidad de ítems y precio total.
    ● (Opcional) Productos de cada carrito de compras.
Les sugerimos utilizar draw.io ya que es fácil de usar y soporta diagramas DER.




# Entregable: 
    Diagrama de entidad-relación de su base de datos en formato PDF.

# Script de estructura
Tomando como referencia el diagrama del punto anterior, tienen que escribir las
sentencias de SQL que crearán las tablas y sus relaciones.
    ● Deberá incluir la creación de la base de datos (create database…).
    ● Deberá incluir la creación de todas las tablas del sitio (create table…).
    ● Deberá incluir los tipos de datos de los campos y sus restricciones (primary keys,
    (not) null, unique, default, etc).
    ● Deberá incluir las relaciones entre las diferentes tablas (foreign keys).
# Entregable: 
    Archivo structure.sql que permita crear la base de datos completa.

# (Opcional) Script de datos

Ya tenemos la estructura, ahora faltan los datos. El script de datos permite que cualquier
desarrollador (o docente 😉) descargue el proyecto, ejecute el script y ya pueda ver el
sitio funcionado sin más pasos.
El script debería:
    ● Poblar la tabla de usuarios.
    ● Poblar la tabla de productos.
    ● Poblar las tablas secundarias (categorías, marcas, colores, talles, etc).
    ● (Opcional) Poblar la tabla de carrito de compras.
    ● (Opcional) Poblar la tabla de productos de carritos de compras.
Una vez definidos los campos de sus tablas, nuevamente pueden utilizar Mockaroo, pero
esta vez para generar el archivo SQL con datos. 😉☝️
# Entregable: 
Archivo con extensión data.sql que permita poblar la base con datos.

# Creación de carpeta Sequelize y archivos de modelos

Mediante la herramienta sequelize-cli deberán crear la carpeta que contenga los
archivos de configuración de Sequelize. Una vez configurado Sequelize, seguirá crear los
archivos de modelos para explicarle cómo es la estructura de la base de datos.
La carpeta database deberá incluir:
    ● Los archivos de configuración para que Sequelize se conecte a la base de datos.
    ● Los archivos de modelos para representar las tablas de:
    ○ Usuarios.
    ○ Productos.
    ○ Tablas secundarias (categorías, marcas, colores, talles, etc).
    ○ (Opcional) Carrito de compras.
    ○ (Opcional) Productos de cada carrito de compras.
    ● Los modelos deben incluir todas las relaciones existentes en la base de datos.
# Entregable: 

Carpeta database que incluya los archivos de configuración y archivos de
modelos junto con sus relaciones.

# ¡CRUD!

Ya es hora de tener un CRUD como la gente. Qué bueno que tenemos a Sequelize de
nuestro lado. Les pedimos que en su sitio se pueda:
    ● Para productos:
        ○ Crear
        ○ Editar
        ○ Eliminar
        ○ Listar
        ○ Ver el detalle
        ○ Buscar8
        ● Para usuarios:
        ○ Crear
        ○ Editar
        ○ Ver el detalle
        ● (Opcional) CRUDs de tablas secundarias.
        ● (Opcional) Agregar paginado a los listados y buscadores.

# Entregable: 

Rutas, controladores y vistas necesarias para que suceda lo detallado previamente utilizando Sequelize para trabajar con la base de datos.

# > Resumen de entregables

    ● Archivo retro.md con el resultado de la retrospectiva.
    ● (Opcional) Archivo daily.md con sus opiniones sobre las dailys/weeklys.
    ● Tablero de trabajo actualizado.
    ● Diagrama de base de datos.
    ● Script de creación de estructura de base de datos con:
    ○ Creación de la base de datos y de todas sus tablas.
    ○ Tipos de datos de los campos y sus restricciones.
    ○ Relaciones entre las diferentes tablas.
    ● (Opcional) Script de datos de base de datos para:
    ○ Tabla de usuarios.
    ○ Tabla de productos.
    ○ Tablas secundarias (categorías, marcas, colores, talles, etc).
    ○ (Opcional) Tabla de carrito de compras y productos de carritos de compras.
    ● Creación de carpeta Sequelize con:
    ○ Archivos de configuración.
    ○ Modelos con sus relaciones.
    ● CRUD
    ○ De productos.
    ○ De usuarios.
    ○ (Opcional) De tablas secundarias
