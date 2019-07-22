import React from "react";
import "./FullContact.css";
import { connect } from "react-redux";

import "./FullContact.css";

function FullContact(props) {
  let fullConClass = "FullContact";
  let backdropClass = "";
  function switchFlContact(opened) {
    if (opened) {
      fullConClass = "FullContact flConOpened";
      backdropClass = "backdropFullcon";
    } else {
      fullConClass = "FullContact";
      backdropClass = "";
    }
  }
  let obj = {
    name: "",
    phone: ""
  };
  console.log(props.fullCon.opened);
  switchFlContact(props.fullCon.opened);
  let closeConfull = () => {
    props.closeFull(obj);
  };
  return (
    <>
      <div className={fullConClass}>
        <h2>Full information about {props.fullCon.name}:</h2>
        <p>Phone number: {props.fullCon.phone}</p>
      </div>
      <div className={backdropClass} onClick={closeConfull} />
    </>
  );
}
const mapStateToProps = state => {
  return {
    fullCon: state.fullContact
  };
};
const mapDispatchToProps = dispatch => {
  return {
    closeFull: contact => dispatch({ type: "OPEN_FULL_CONTACT", contact })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(FullContact);
