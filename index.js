// Definimos peliculas
let films = [
    {
        name: 'Soy Leyenda',
        years: 13,
    },
    {
        name: 'El Rey León',
        years: 3,
    },
    {
        name: 'La Marca Del Demonio',
        years: 18,
    },
    {
        name: 'A todo Gas',
        years: 8,
    }
];

// Definimos usuarios
let users = [
    {
        name: 'Eudifrasio',
        edad: 3,
    },
    {
        name: 'Juan',
        edad: 18,
    },
    {
        name: 'Pedro',
        edad: 9,
    },
    {
        name: 'Juan Pablo',
        edad: 15,
    }
]

function getFilms(user) {
    let filmsUser = [];
    for (let i = 0; i < films.length; i++) {
        if (films[i].years <= user.edad) {
            filmsUser.push(films[i]);
        }
    }
    return filmsUser;
}

users.forEach(user => {
    console.log('-------------------------------------');
    console.log(`${user.name} tiene ${getFilms(user).length} peliculas a las que puede ir`);    
    getFilms(user).forEach(film => {
        console.log(` - ${film.name}`);
    })
});