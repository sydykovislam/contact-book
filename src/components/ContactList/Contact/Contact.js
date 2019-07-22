import React, { useState } from "react";
import "./Contact.css";
import { connect } from "react-redux";
import MainConInfo from "./MainConInfo";
import EditTool from "./EditTool";

function Contact(props) {
  let deleteCon = () => {
    props.deleteContact(props.index);
    console.log(props.index);
  };
  let [editToolOpened, editToolSw] = useState(false);

  let style = {};
  if (!editToolOpened) {
    style = {
      display: "none"
    };
  } else {
    style = {
      display: "flex"
    };
  }
  let editToolSwitch = () => {
    editToolSw(!editToolOpened);
    props.load(2);
  };
  let closeToolSw = () => {
    editToolSw(false);
    props.load(2);
  };

  return (
    <div className="Contact">
      <MainConInfo
        deleteCon={deleteCon}
        {...props}
        sw={editToolSwitch}
        closeEdit={closeToolSw}
        openFull={props.openFull}
      />
      <EditTool
        {...props}
        style={style}
        closeEdit={closeToolSw}
        editContact={props.editContact}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: contactsIndex =>
      dispatch({ type: "DELETE_CONTACT", contactsIndex }),
    editContact: contact => dispatch({ type: "EDIT_CONTACT", contact }),
    openFull: contact => dispatch({ type: "OPEN_FULL_CONTACT", contact })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Contact);
