import React from "react";
import { shallow } from "enzyme";
import AddContact from "./AddContact";

describe("Add contact component", () => {
  let newContact = {
    name: "a",
    phone: "b"
  };
  const expectedAction = {
    type: "ADD_CONTACT",
    contact: newContact
  };

  it("add contact func", () => {
    const addContactCom = shallow(<AddContact />);
    expect(addContactCom.find("AddContact")).toEqual(expectedAction);
  });
});
