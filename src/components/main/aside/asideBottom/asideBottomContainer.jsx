import { connect } from "react-redux";
import { AsideBottom } from './asideBottom.jsx'

let mapStateToProps = (state) => {
  return {
    users: state.users.userInfo
  }
};

export const AsideBottomContainer = connect(mapStateToProps)(AsideBottom);

