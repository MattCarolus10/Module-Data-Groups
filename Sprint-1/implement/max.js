function findMax(elements) {
    if(!Array.isArray(elements)) {
        throw new Error("findMax requires an array of numbers");
    };

    if (elements.length === 0) {
        return -infinity;
    };

    
}

module.exports = findMax;
