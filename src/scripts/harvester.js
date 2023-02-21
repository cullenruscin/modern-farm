//Harvester harvests the grown plants and returns the new seeds

//Returns seeds according to the output number on each plant object. Halves the seed output specifically for corn
export const harvestPlants = (planted) => {
    let newSeeds = []
    for (const item of planted) {
        if (item.type === 'Corn') {
            for (let i = 0; i < item.output / 2; i++) {
                newSeeds.push(item)
            }
        } else {
            for (let i = 0; i < item.output; i++) {
                newSeeds.push(item)
            }
        }
    }
    return newSeeds
}