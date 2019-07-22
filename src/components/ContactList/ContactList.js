import React, { useState } from "react";
import Contact from "./Contact/Contact";
import "./ContactLIst.css";
import { connect } from "react-redux";
import FullContact from "../FullContact/FullContact";

function ContactLIst(props) {
  let [reload, load] = useState(1);

  console.log(props.contacts);
  let id = 100;
  let ContactList = props.contacts.map(contact => {
    id++;
    let ix = props.contacts.indexOf(contact);

    return (
      <li key={id} className="list-group-item">
        <Contact {...contact} index={ix} load={load} />
      </li>
    );
  });

  return (
    <div className="ContactList container">
      <ul className="list-group-md" />
      {ContactList}
      <FullContact />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  };
};

export default connect(
  mapStateToProps,

  null
)(ContactLIst);
