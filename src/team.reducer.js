const defaultState = [
  { name: 'Südkorea', group: 'F' },
  { name: 'Mexiko', group: 'F' },
  { name: 'Deutschland', group: 'F' },
];

export const teams = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TEAM':
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    case 'REMOVE_TEAM':
      return state.filter(team => team.name !== action.payload.name);
    default:
      return state;
  }
};
