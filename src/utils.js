export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        return {
            ...acc,
            [constant]: constant,
        };
    }, {});
}