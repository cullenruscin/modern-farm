
let plants = [];

//Pushes a plant to the above array. Has the ability (in the case of corn) to extract objects from arrays
export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const item of seed) {
            plants.push(item)
        }
    } else {
        plants.push(seed)
    }
}


//Returns the plants array when it's needed
export const usePlants = () => {
    return plants
}