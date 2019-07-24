import React, { useEffect } from "react";

function EditTool(props) {
  let editedContact = {
    name: "",
    phone: "",
    index: props.index
  };
  let editName = event => {
    editedContact.name = event.target.value;
    console.log(editedContact.name);
  };
  let editPhone = event => {
    editedContact.phone = event.target.value;
    console.log(editedContact.phone);
  };
  let editCon = () => {
    // if (editedContact.name != "" || editedContact.phone != "") {
    props.editContact(editedContact);
    // } else {
    //   alert("Not enough data or nothing to change.");
    // }
  };
  useEffect(() => {
    let edits = document.querySelector(`.edittool-${props.index}`);
    console.log(edits);
    edits.children[0].value = `${props.name}`;
    edits.children[1].value = `${props.phone}`;
    editedContact = {
      name: edits.children[0].value,
      phone: edits.children[1].value,
      index: props.index
    };
  });

  return (
    <>
      <div
        className={
          "editContactArea container input-group edittool-" + props.index
        }
        style={props.style}
      >
        <input
          type="text"
          class="form-control"
          placeholder="Enter the changed name"
          onChange={editName}
        />
        <input
          type="text"
          class="form-control"
          placeholder="Enter the changed phone"
          onChange={editPhone}
        />

        <div class="input-group-append">
          <button
            class="btn btn-secondary"
            type="button"
            onClick={props.closeEdit}
          >
            Cancel
          </button>
          <button class="btn btn-warning" type="button" onClick={editCon}>
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default EditTool;
// const mapDispatchToProps = dispatch => {
//   return {
//     editContact: contact => dispatch({ type: "EDIT_CONTACT", contact })
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(EditTool);
