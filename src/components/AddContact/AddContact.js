import React from "react";
import "./AddContact.css";

import { connect } from "react-redux";

function AddContact(props) {
  let newContact = {
    name: "",
    phone: ""
  };
  let addName = event => {
    newContact.name = event.target.value;
  };
  let addPhone = event => {
    newContact.phone = event.target.value;
  };
  let addContact = () => {
    if (newContact.name != "" && newContact.phone != "") {
      props.addContact(newContact);
      let inputs = document.querySelectorAll(".AddContact input");
      console.log(inputs);
      inputs.forEach(input => {
        input.value = "";
      });
    } else {
      alert("Not enough data!");
    }
  };
  return (
    <div className="AddContact container input-group">
      <input
        type="text"
        class="form-control"
        placeholder="New contacts name"
        onChange={addName}
      />
      <input
        type="text"
        class="form-control"
        placeholder="New contacts phone number"
        onChange={addPhone}
      />

      <div class="input-group-append">
        <button class="btn btn-primary" type="button" onClick={addContact}>
          Add
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addContact: contact => dispatch({ type: "ADD_CONTACT", contact })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddContact);
