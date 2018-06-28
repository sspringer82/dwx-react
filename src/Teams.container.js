import { connect } from 'react-redux';
import { Teams } from './Teams';
import { addTeam, removeTeam } from './team.action';

const mapStateToProps = state => {
  return {
    teams: state.teams,
  };
};
const mapDispatchToProps = dispatch => ({
  addTeam: team => dispatch(addTeam(team)),
  removeTeam: team => dispatch(removeTeam(team)),
});

export const TeamsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Teams);
