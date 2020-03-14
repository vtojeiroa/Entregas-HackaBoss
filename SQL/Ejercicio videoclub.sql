create database videoclub;

use videoclub;

-- Estamos en 1995 y vamos a diseñar una solución para un videoclub que un amigo va a abrir en nuestro pueblo. Para empezar va a ser un sistema
-- muy básico que le permita principalmente gestionar los alquileres de las películas y mostrar el catálogo de películas en una futura web.

-- Necesitamos tener la información de las películas, lo básico para poder gestionar los alquileres, y más información para el catálogo web:
-- nombre descripción, PEGI y a mayores una carátula, director y actores o actrices. Sabemos que una película va a tener 1 o más directores 
-- y 1 o más actores/actrices.

-- Para que el videoclub sea rentable, podemos tener 1 o varias copias de la misma película y esas copias pueden estar en 2 formatos: VHS y DVD.
--  Necesitamos poder identificar las películas de manera única y del mismo modo identificar las copias de cada película.

-- El videoclub también va a disponer de varias tarifas, de inicio van a ser: ESTRENOS, ESTÁNDAR y ANTIGUAS. El precio será el mismo 
-- independientemente del formato, es decir, se le cobra lo mismo al cliente si se lleva el VHS o el DVD.

-- El videoclub va a tener socios, y una persona para poder alquilar una película debe ser socio. Se pueden registrar como socios la 
-- primera vez que alquilan una película, con los siguientes datos: un código único, nombre completo, dni, tlf, email y fecha de nacimiento.

-- Necesitamos llevar un registro de los alquileres de las películas y guardaremos la información cuando un socio alquila una película, que 
-- copia de la película es y cuando la devuelve.
-- Al mismo tiempo, necesitamos saber qué películas tenemos disponibles en cada momento en el videoclub y qué copias de cada una de esas películas.
-- También vamos a necesitar consultar en un momento qué películas tiene un socio alquiladas y pendiente de pagar, o qué películas alquiló en el pasado.
-- Los socios podrán alquilar varias películas a la vez, no tienen por qué devolver una películas antes de alquilar otra, pero sí que una determinada
--  copia de una películas sólo puede estar alquilada por un solo socio en un determinado momento.

-- A modo informativo, nos interesa también tener un listado de proveedores con la siguiente información para cada uno: nombre completo, tlf, dni, 
-- email y poder identificarlos de forma única. Llevaremos un registro de las copias de las películas que nos vendió cada uno, por si necesitáramos
-- hacer más pedidos. La parte de contabilidad o gestión de pagos, facturas, albaranes o cuentas del videoclub no está incluída.

-- Por último, vamos a empezar a recoger datos sobre la valoración de los socios cuando alquilan una película. Nos interesa saber para cada película 
-- que alquila un socio, que nos diga cuando la devuelven que nota le dan del 1 al 5 y opcionalmente que dejen un comentario. Esto se usará en el
-- futuro para mostrar la nota media de las películas y/o los comentarios en la web.

create table proveedor (
id int primary key auto_increment,
nombre varchar(255) not null,
dni_nif varchar(9) not null,
telefono int not null
);

create table director_ora (
id int primary key auto_increment,
nombre varchar(255) not null
);

create table actor_actriz (
id int primary key auto_increment,
nombre varchar(255) not null
);

create table pelicula(
id int primary key auto_increment,
nombre varchar(255) not null,
descripcion varchar(255) not null,
pegi smallint not null,
caratula blob not null,
id_director_ora int not null,
id_actor_actriz int not null,
constraint fk_direccion foreign key(id_director_ora) references director_ora(id),
constraint fk_interpretes foreign key (id_actor_actriz) references actor_actriz(id),
id_proveedor int not null,
constraint fk_proveedor foreign key(id_proveedor) references proveedor(id)
);

create table copia(
id int primary key auto_increment,
formato enum ('dvd','vhs'),
tarifa enum('estreno','estandar','antiguas'),
id_pelicula int not null,
constraint fk_pelicula foreign key (id_pelicula) references pelicula(id)
);

create table socio (
id int primary key auto_increment,
nombre varchar(255) not null,
dni varchar(9) not null,
telefono int not null,
email varchar(90) not null,
fecha_nacimiento date not null
);

create table alquiler (
id_socio int not null,
id_copia int not null,
fecha_alquiler date not null,
fecha_devolucion date,
constraint fk_socio foreign key (id_socio) references socio(id),
constraint fk_copia foreign key (id_copia) references copia(id)
);

create table valoracion (
id_pelicula int not null,
id_socio int not null,
nota smallint not null,
comentario varchar(255),
 foreign key (id_pelicula) references pelicula(id),
 foreign key (id_socio) references socio(id)

);