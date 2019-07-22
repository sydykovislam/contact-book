import * as t from "./actionTypes";
const initialState = {
  contacts: [
    {
      name: "Person",
      phone: "+999 999 999"
    },
    {
      name: "Person 1",
      phone: "+999 999 999"
    },
    {
      name: "Person 2",
      phone: "+999 999 999"
    },
    {
      name: "Person 3",
      phone: "+999 999 999"
    }
  ],
  fullContact: {
    opened: false,
    name: "",
    phone: ""
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_CONTACT:
      let contacts = [...state.contacts];
      console.log(action);
      contacts.push({ name: action.contact.name, phone: action.contact.phone });
      return { ...state, contacts };

    case t.DELETE_CONTACT:
      console.log(action.contactsIndex);
      let newContacts = [...state.contacts];
      newContacts.splice(action.contactsIndex, 1);
      return {
        ...state,
        contacts: newContacts
      };
    case t.EDIT_CONTACT:
      console.log(action);
      let editedCon = {
        name: action.contact.name,
        phone: action.contact.phone
      };
      let editedContacts = [...state.contacts];
      editedContacts.splice(action.contact.index, 1, editedCon);

      return {
        ...state,
        contacts: editedContacts
      };
    case t.OPEN_FULL_CONTACT:
      let fullCon = {
        name: action.contact.name,
        phone: action.contact.phone,
        opened: !state.fullContact.opened
      };

      return {
        ...state,
        fullContact: fullCon
      };
    default:
      return { ...state };
  }
};
export default reducer;
