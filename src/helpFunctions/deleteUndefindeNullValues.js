
export const deleteUndefinedNullValues = (sprites) => {

    const filteredSprites = [];

    Object.values(sprites).forEach(sprite => {
        if(sprite) {
            filteredSprites.push(sprite);
        }
    });
    return filteredSprites
};