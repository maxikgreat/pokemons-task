

export const formStats = (pokemon) => {

    const stats = [
        {
            id: 0,
            icon: 'star',
            title: 'experience',
            value: pokemon.base_exp,
            color: 'primary'
        },
        {
            id: 1,
            icon: 'smile',
            title: 'happiness',
            value: pokemon.species.base_happiness,
            color: 'primary'
        }
    ];

    const restOfStats = pokemon.stats.map(stat => {

        let color = '';
        let id = null;
        let icon = '';

        switch(stat.stat.name){
            case 'speed':
                id = 3;
                icon = 'wind';
                color = 'warning';
                break;
            case 'special-defense':
                id = 6;
                icon = 'shield-alt';
                color = 'success';
                break;
            case 'special-attack':
                id = 4;
                icon = 'fire-alt';
                color = 'danger';
                break;
            case 'hp':
                id = 2;
                icon = 'heartbeat';
                color = 'secondary';
                break;
            case 'attack':
                id = 5;
                icon = 'fire-alt';
                color = 'danger';
                break;
            case 'defense':
                id = 7;
                icon = 'shield-alt';
                color = 'success';
                break;
            default:
                color = 'primary';
                break;
        }
        return {
            id: id,
            icon: icon,
            title: stat.stat.name.replace('-',' '),
            value: stat.base_stat,
            color: color
        }
    });



    return [...stats, ...restOfStats].sort((left, right) => {
        return left.id < right.id ? -1 : 1
    });

};