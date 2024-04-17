import GameSavingLoader from "../js/gameSavingLoader";

test('checking the operation of GameSavingLoader', async () => {
  const data = await GameSavingLoader.load()
  const result = {
    id: 9,
    created: 1546300800,
    userInfo: {
       id: 1,
       name: 'Hitman',
       level: 10,
       points: 2000,
    },
  };
  expect(data).toEqual(result);
})



test('The test should catch the error', async () => {
  try {
    await GameSavingLoader.load();
  } catch (err) {
    expect(err).toBe('Error parsing data');
  }
});