describe('searchPokemonByName', () => {
  it('it should be a function', ()=> {
    expect(typeof window.loadAllPokemon.searchPokemonByName).toBe('function');
  });
  it('it should return as first pokemon with a condition name Pikachu', () => {
    expect(window.loadAllPokemon.searchPokemonByName(data, "Pikachu")[24].name).toEqual('Pikachu');
  });
});
describe('sortPokemonBy', () => {
  it('it should be a function', ()=> {
    expect(typeof window.loadAllPokemon.sortPokemonBy).toBe('function');
  });
  it('it should return the pokemon name: Abra from the first array with order A-Z', () => {
    expect(window.loadAllPokemon.sortPokemonBy(data, "name", "az")[0].name).toEqual('Abra');
  });
});
