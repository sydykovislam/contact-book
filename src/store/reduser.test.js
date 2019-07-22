import reducer from "./reducer";
import * as t from "./actionTypes";

describe("contactbooks-reducer", () => {
  const initialState = {
    contacts: [{}, {}],
    fullContact: {
      opened: false,
      name: "",
      phone: ""
    }
  };
  it("ADD_CONTACT", () => {
    const action = {
      type: t.ADD_CONTACT,
      contact: { name: "", phone: "" }
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      contacts: [...initialState.contacts, action.contact]
    });
  });

  it("DELETE_CONTACT", () => {
    const action = {
      type: t.DELETE_CONTACT
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      contacts: [{}]
    });
  });

  it("EDIT_CONTACT", () => {
    const action = {
      type: t.EDIT_CONTACT,
      contact: {}
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      contacts: [{}, action.contact]
    });
  });

  it("OPEN_FULL_CONTACT", () => {
    const action = {
      type: t.OPEN_FULL_CONTACT,
      contact: {
        name: "",
        phone: ""
      }
    };
    let fullCon = {
      name: action.contact.name,
      phone: action.contact.phone,
      opened: !initialState.fullContact.opened
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      fullContact: fullCon
    });
  });
});
