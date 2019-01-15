global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('../src/data.js');

const data = window.POKEMON.pokemon;

describe('data', () => {
  it('debería ser un objeto', () => {
    expect(typeof window.pokemones).toBe('object');
  });
});

describe('filterPokemon', () => {
  it('it should be a function', ()=> {
    expect(typeof window.pokemones.filterPokemon).toBe('function');
  });
  it('it should return as first pokemon with a condition type Water Squirtle', () => {
    expect(window.pokemones.filterPokemon(data, "Water")[0].name).toEqual('Squirtle');
  });
  it('it should return as second pokemon with a condition type Fighting Primeape', () => {
    expect(window.pokemones.filterPokemon(data, "Fighting")[1].name).toEqual('Primeape');
  });
});
describe('orderPokemon', () => {
  it('it should be a function', ()=> {
    expect(typeof window.pokemones.orderPokemon).toBe('function');
  });
  it('it should return the pokemon name: Abra from the first array with order A-Z', () => {
    expect(window.pokemones.orderPokemon(data, "name", "az")[0].name).toEqual('Abra');
  });
  it('it should return the pokemon name: Zubat from the first array with order Z-A', () => {
    expect(window.pokemones.orderPokemon(data, "name", "za")[0].name).toEqual('Zubat');
  });
  it('it should return the pokemon num: 001 from the first array with order 1-151', () => {
    expect(window.pokemones.orderPokemon(data, "num", "small-big")[0].num).toEqual('001');
  });
  it('it should return the pokemon num: 151 from the first array with order 151-1', () => {
    expect(window.pokemones.orderPokemon(data, "num", "big-small")[0].num).toEqual('151');
  });
});
describe('computeStats', () => {
  it('it should be a function', ()=> {
    expect(typeof window.pokemones.computeStats).toBe('function');
  });
  it('it should return 32 as the sum of all Water type pokemons', () => {
    expect(window.pokemones.computeStats(data, 'Water')).toEqual(32);
  });
});
