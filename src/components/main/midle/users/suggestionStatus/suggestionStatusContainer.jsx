import { connect } from 'react-redux';
import SuggestionStatus from './suggestionStatus.jsx';

const mapStateToProps = (state) => {
    return {
      name: state.usersSubscrip.usersName,
    }
  };

const SuggestionStatusContainer = connect(mapStateToProps)(SuggestionStatus);

export default SuggestionStatusContainer;