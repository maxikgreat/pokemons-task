

export const filter = (names, name, parentContainer) => {
    if(names && parentContainer){

        let inputValue = name.toLowerCase();

        if (inputValue.length > 0) {
            for (let j = 0; j < names.length; j++) {
                if (!(inputValue.substring(0, inputValue.length) === names[j].substring(0, inputValue.length).toLowerCase())) {
                    parentContainer.children[j].classList.add('hidden');
                } else {
                    parentContainer.children[j].classList.remove('hidden');
                }
            }
        } else {
            for (let i = 0; i < parentContainer.children.length; i++) {
                parentContainer.children[i].classList.remove('hidden');
            }
        }
    }
};

export const getNames = (array) => {
    return array.map(item => item.name);
};