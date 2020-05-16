import { IAnimal } from '@app/model/animal';

const COWS_KEY = "cows";
const SHEEPS_KEY = "sheeps";
const PIGS_KEY = "pigs";

export const getAnimals = (): Map<string, ReadonlyArray<IAnimal>> => new Map([
    [COWS_KEY, [
        {
            name: 'Milka',
            weight: 720,
            dead: false,
            forMeat: false
        },
        {
            name: 'Krasula',
            weight: 800,
            dead: false,
            forMeat: false
        }
    ]],
    [SHEEPS_KEY, [
        {
            name: 'Dolly',
            weight: 100,
            dead: false,
            forMeat: false
        },
        {
            name: 'Shaun',
            weight: 95,
            dead: false,
            forMeat: false
        }
    ]],
    [PIGS_KEY, [
        {
            name: 'Porky',
            weight: 100,
            dead: false,
            forMeat: true
        },
        {
            name: 'Pumbaa',
            weight: 150,
            dead: false,
            forMeat: true
        },
        {
            name: 'Miss Piggy',
            weight: 70,
            dead: false,
            forMeat: true
        },
        {
            name: 'Little Pig 1',
            weight: 110,
            dead: false,
            forMeat: true
        },
        {
            name: 'Little Pig 2',
            weight: 120,
            dead: false,
            forMeat: true
        },
        {
            name: 'Little Pig 3',
            weight: 130,
            dead: false,
            forMeat: true
        },
        {
            name: 'Peppa',
            weight: 90,
            dead: false,
            forMeat: true
        },
    ]]
])
