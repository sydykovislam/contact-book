import React from "react";

function MainConInfo(props) {
  let openFll = () => {
    props.openFull({ ...props });
  };
  return (
    <>
      <div className={"mainContactsInfo maincontact-" + props.index}>
        <div className="persons-info">
          <h3 onClick={openFll}>{props.name}</h3>
          <p>Phone number : {props.phone}</p>
        </div>
        <div className="btn-group">
          <button className="btn btn-warning edit-btn" onClick={props.sw}>
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.deleteCon();
              props.closeEdit();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default MainConInfo;
// const mapDispatchToProps = dispatch => {
//   return {
//     openFull: contact => dispatch({ type: "OPEN_FULL_CONTACT", contact })
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(MainConInfo);
