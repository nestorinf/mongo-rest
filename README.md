# API REST Mongo Collection

Esta API REST FULL nos permite realizar operaciones CRUD y Join, Search, ByID, Create Many, Query.
Se debe definir METHOD segun el recurso a utilizar (POST, GET, DELETE, PUT)
...

## Create on Collection (Specifics Collection) POST

Se debe especificar la colleccion y la URL es: hostname:3400/api/create/products
{
"name": "JABON BAÑO III",
"code": "JABON-02",
"status": "Active",
"visible": true,
"price": {
"amount": "129.000",
"tax": "16 %"
}
}

## Update on Collection (Specifics Collection) PUT

Se debe especificar la colleccion y la URL es: hostname:3400/api/update/products
{
"set":{
"status":"Inactive",
"visible":false
},
"query": {
"code":"JABONP-02"
}
}

## Delete on Collection (Specifics Collection) DELETE

Se debe especificar la colleccion y la URL es: hostname:3400/api/remove/products

{
"code":"JABON-02"
}

## List on collection GET

Se debe especificar la colleccion y la URL es: hostname:3400/api/products

# Methods Extra

## Create Many On Collection (Specifics Collection) POST

Se debe especificar la colleccion y la URL es: hostname:3400/api/createmany/products
[
{
"name": "JABON POLVO I",
"code": "JABONP-01",
"status": "Active",
"visible": true,
"price": {
"amount": "129.000",
"tax": "16 %"
}
},
{
"name": "JABON POLVO II",
"code": "JABONP-02",
"status": "Active",
"visible": true,
"price": {
"amount": "149.000",
"tax": "16 %"
}
}
]

## JOIN On Collection (Specifics Collection) POST

Se debe especificar la colleccion y la URL es: hostname:3400/api/join/categories
{
"from": "products",
"localField": "id",
"foreignField": "categories_id",
"as": "productscategories"
}

## Query On Collecton (Specifics Collection) POST

Se debe especificar la colleccion y la URL es: hostname:3400/api/query/products

{
"code": "AR-4",
"status": "Active",
}
