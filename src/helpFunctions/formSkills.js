

export const formSkills = (skills, listing) => {


    if(skills.length > 0 && listing.length > 0){
        const readyAbilities = [];

        skills.forEach(skill => {
            const ability = {};
            ability.id = skill.id;
            ability.name = skill.name;
            ability.isMainSeries = skill.is_main_series;
            ability.desc = skill.effect_entries[0].short_effect;

            let finded = listing.find((item) => item.id === skill.id);

            ability.img = finded.img;
            ability.color = finded.color;

            readyAbilities.push(ability);
        });

        return readyAbilities;
    }

    return []



};