# Community_Proyect_Backend

Community project para la gente de Discord

## Minimo producto viable:

- Autenticacion de usuario (login)
- Apenas ingresa, el usuario debera visualizar un home con _starting quizes_: un feed the quizes preelaborados.
- Los “quizes” estan divididos en categorias (lenguajes, perfiles, dsa, ect) pueden tener algunas subcategorias (java, backend, linked lists, etc)
- El usuario puede CREAR un quiz (requiere de un form)
- El usuario puede JUGAR a otro quiz que no sea suyo (caso contrario seria una especie de prueba)
- Dentro del quiz, el usuario puede hacer las sig acciones:
  - Salir del quiz en cualquier momento
  - Seleccionar una de multiples opciones
  - Continuar con o sin reponder
- Terminado el quiz, el usuario deberia ser capaz de recibir feedback (entidad _results_)
- El usuario deberia ser capaz de exportar e importar quizes en formato JSON.

## A futuro

- Crear quizes con inteligencia artificial unicamente dando un tema
- Quizes en tiempo real
- Ranking the players
- Exportar resultados de los players en formatos like .csv

## Diagrama ER

![diagrama_er](https://i.ibb.co/rbbqt3q/db.webp)

## Tecnologias

- Express
- Flutter
- Postgres
