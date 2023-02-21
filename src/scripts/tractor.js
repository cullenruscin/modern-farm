//Tractor plants the seeds for each plot

//Import the seeds and the field
import { addPlant, usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

//Assign the imported functions to variables
const asparagus = createAsparagus()
const corn = createCorn()
const potato = createPotato()
const soybean = createSoybean()
const sunflower = createSunflower()
const wheat = createWheat()

//Takes in the plan and calls the create function which corrisponds to the plant required for each plot
export const plantSeeds = (plan) => {
    console.log(plan);
    for (const row of plan) {
        for (const item of row) {
            switch (item) {
                case 'Asparagus':
                    addPlant(asparagus);
                    break;
                case 'Corn':
                    addPlant(corn);
                    break;
                case 'Potato':
                    addPlant(potato);
                    break;
                case 'Soybean':
                    addPlant(soybean);
                    break;
                case 'Sunflower':
                    addPlant(sunflower);
                    break;
                case 'Wheat':
                    addPlant(wheat);
                    break;
                }
        }
    }
    return usePlants()
}


