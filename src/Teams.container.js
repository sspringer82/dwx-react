import { connect } from 'react-redux';
import { Teams } from './teams';
import { addTeam, removeTeam } from './actions';

const mapStateToProps = state => ({
  teams: state.teams,
});
const mapDispatchToProps = dispatch => ({
  addTeam: team => dispatch(addTeam(team)),
  removeTeam: team => dispatch(removeTeam(team)),
});

export const TeamsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Teams);
