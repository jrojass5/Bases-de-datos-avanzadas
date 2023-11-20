/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('TorneoDeportivo');

// Insert a few documents into the sales collection.
db.getCollection('Arbitros').insertMany([
    {
        "_id": 1,
        "Nombre": "Antonio Mateu Lahoz",
        "Apellido": "Lahoz",
        "Fecha de nacimiento": new Date('1977-01-03'),
        "Nacionalidad": "España",
        "FIFA": true
      },
      {
        "_id": 2,
        "Nombre": "Clement Turpin",
        "Apellido": "Turpin",
        "Fecha de nacimiento": new Date('1982-02-16'),
        "Nacionalidad": "Francia",
        "FIFA": true
      },
      {
        "_id": 3,
        "Nombre": "Danny Makkelie",
        "Apellido": "Makkelie",
        "Fecha de nacimiento":new Date('1983-02-18'),
        "Nacionalidad": "Países Bajos",
        "FIFA": true
      },
      {
        "_id": 4,
        "Nombre": "Szymon Marciniak",
        "Apellido": "Marciniak",
        "Fecha de nacimiento": new Date('1981-05-29'),
        "Nacionalidad": "Polonia",
        "FIFA": true
      },
      {
        "_id": 5,
        "Nombre": "Ovidiu Alin Hațegan",
        "Apellido": "Hațegan",
        "Fecha de nacimiento":new Date('1979-10-20'),
        "Nacionalidad": "Rumania",
        "FIFA": true
      }

]);
db.getCollection('Deportistas').insertMany([
    {
        "_id": 1,
        "Nombre": "Lionel Messi",
        "Apellido": "Messi",
        "Fecha de nacimiento":new Date('1987-06-24'),
        "Nacionalidad": "Argentina",
        "Equipo": "Argentina"
      },
      {
        "_id": 2,
        "Nombre": "Cristiano Ronaldo",
        "Apellido": "Ronaldo",
        "Fecha de nacimiento":new Date('1985-02-05'),
        "Nacionalidad": "Portugal",
        "Equipo": "Manchester United"
      },
      {
        "_id": 3,
        "Nombre": "Neymar da Silva Santos Júnior",
        "Apellido": "Neymar",
        "Fecha de nacimiento":new Date('1992-02-05'),
        "Nacionalidad": "Brasil",
        "Equipo": "Paris Saint-Germain"
      },
      {
        "_id": 4,
        "Nombre": "Robert Lewandowski",
        "Apellido": "Lewandowski",
        "Fecha de nacimiento":new Date('1977-08-21'),
        "Nacionalidad": "Polonia",
        "Equipo": "Bayern Múnich"
      },
      {
        "_id": 5,
        "Nombre": "Karim Benzema",
        "Apellido": "Benzema",
        "Fecha de nacimiento":new Date('1977-12-19'),
        "Nacionalidad": "Francia",
        "Equipo": "Real Madrid"
      }
]);
db.getCollection('Encuentros deportivos').insertMany([
    {
        "_id": 1,
        "Equipo 1": "Argentina",
        "Equipo 2": "Manchester United",
        "Fecha":new Date('2023-07-20'),
        "Hora": "20:00",
        "Lugar": "Estadio Monumental, Buenos Aires, Argentina"
      },
      {
        "_id": 2,
        "Equipo 1": "Paris Saint-Germain",
        "Equipo 2": "Bayern Múnich",
        "Fecha":new Date('2023-07-27'),
        "Hora": "21:00",
        "Lugar": "Parc des Princes, París, Francia"
      },
      {
        "_id": 3,
        "Equipo 1": "Real Madrid",
        "Equipo 2": "Liverpool",
        "Fecha":new Date('2023-08-03'),
        "Hora": "20:00",
        "Lugar": "Estadio Santiago Bernabéu, Madrid, España"
      },
      {
        "_id": 4,
        "Equipo 1": "Argentina",
        "Equipo 2": "Paris Saint-Germain",
        "Fecha":new Date('2023-08-10'),
        "Hora": "20:00",
        "Lugar": "Estadio La Bombonera, Buenos Aires, Argentina"
      },
      {
        "_id": 5,
        "Equipo 1": "Manchester United",
        "Equipo 2": "Real Madrid",
        "Fecha":new Date('2023-08-17'),
        "Hora": "21:00",
        "Lugar": "Old Trafford, Manchester, Inglaterra"
      }
]);
db.getCollection('Entrenadores').insertMany([
    {
        "_id": 1,
        "Nombre": "Diego Maradona",
        "Apellido": "Maradona",
        "Fecha de nacimiento": "30-10-1960",
        "Nacionalidad": "Argentina",
        "Equipo": "Argentina"
      },
      {
        "_id": 2,
        "Nombre": "Alex Ferguson",
        "Apellido": "Ferguson",
        "Fecha de nacimiento": "31-12-1941",
        "Nacionalidad": "Escocia",
        "Equipo": "Manchester United"
      },
      {
        "_id": 3,
        "Nombre": "Zinedine Zidane",
        "Apellido": "Zidane",
        "Fecha de nacimiento": "23-06-1972",
        "Nacionalidad": "Francia",
        "Equipo": "Paris Saint-Germain"
      },
      {
        "_id": 4,
        "Nombre": "Julian Nagelsmann",
        "Apellido": "Nagelsmann",
        "Fecha de nacimiento": "23-07-1987",
        "Nacionalidad": "Alemania",
        "Equipo": "Bayern Múnich"
      },
      {
        "_id": 5,
        "Nombre": "Carlo Ancelotti",
        "Apellido": "Ancelotti",
        "Fecha de nacimiento": "10-06-1959",
        "Nacionalidad": "Italia",
        "Equipo": "Real Madrid"
      }

]);
db.getCollection('Resultados y posicione').insertMany([
    {
        "_id": 1,
        "Encuentro": 1,
        "Resultado": "Argentina 3-1 Manchester United",
        "Posiciones": {
          "Argentina": 1,
          "Manchester United": 2
        }
      },
      {
        "_id": 2,
        "Encuentro": 2,
        "Resultado": "Paris Saint-Germain 2-1 Bayern Múnich",
        "Posiciones": {
          "Paris Saint-Germain": 1,
          "Bayern Múnich": 2
        }
      },
      {
        "_id": 3,
        "Encuentro": 3,
        "Resultado": "Real Madrid 1-0 Liverpool",
        "Posiciones": {
          "Real Madrid": 1,
          "Liverpool": 2
        }
      },
      {
        "_id": 4,
        "Encuentro": 4,
        "Resultado": "Argentina 2-2 Paris Saint-Germain",
        "Posiciones": {
          "Argentina": 1,
          "Paris Saint-Germain": 2
        }
      },
      {
        "_id": 5,
        "Encuentro": 5,
        "Resultado": "Manchester United 2-1 Real Madrid",
        "Posiciones": {
          "Manchester United": 1,
          "Real Madrid": 2
        }
      }

]);
