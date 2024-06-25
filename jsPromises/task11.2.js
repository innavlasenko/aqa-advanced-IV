const starshipsName = () => {
    fetch('https://swapi.dev/api/people/14/')
        .then(response => response.json())
        .then(data => {
            const starshipPromises = data.starships.map(url => fetch(url).then(res => res.json()));
            return Promise.all(starshipPromises);
        })
        .then(starships => {
            const starshipNames = starships.map(starship => starship.name);
            console.log(starshipNames);
        })
        .catch(error => {
            console.log('Error: ', error)
        })
}
starshipsName()

const starshipsNameAsync = async () => {
    try {
        const info = await fetch('https://swapi.dev/api/people/14/')
            .then(res => res.json());
        const starships = await Promise.all(info.starships.map(url => fetch(url)
            .then(res1 => res1.json())));
        console.log(starships.map(starship => starship.name))
    }
    catch (error) {
        console.log('Error', error)
    }
};
starshipsNameAsync()

