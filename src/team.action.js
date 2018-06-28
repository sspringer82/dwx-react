export const addTeam = team => ({
  type: 'ADD_TEAM',
  payload: team,
});

export const removeTeam = team => ({
  type: 'REMOVE_TEAM',
  payload: team,
});
