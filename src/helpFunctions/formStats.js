

export const formStats = (pokemon) => {

    const stats = [
        {
            id: 0,
            title: 'experience',
            value: pokemon.base_exp,
            color: 'primary'
        },
        {
            id: 1,
            title: 'happiness',
            value: pokemon.species.base_happiness,
            color: 'primary'
        }
    ];

    const restOfStats = pokemon.stats.map(stat => {

        let color = '';
        let id = null;

        switch(stat.stat.name){
            case 'speed':
                id = 3;
                color = 'warning';
                break;
            case 'special-defense':
                id = 6;
                color = 'success';
                break;
            case 'special-attack':
                id = 4;
                color = 'danger';
                break;
            case 'hp':
                id = 2;
                color = 'danger';
                break;
            case 'attack':
                id = 5;
                color = 'danger';
                break;
            case 'defense':
                id = 7;
                color = 'success';
                break;
            default:
                color = 'primary';
                break;
        }
        return {
            id: id,
            title: stat.stat.name.replace('-',' '),
            value: stat.base_stat,
            color: color
        }
    });



    return [...stats, ...restOfStats].sort((left, right) => {
        return left.id < right.id ? -1 : 1
    });

};