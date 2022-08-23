import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/CheckBoxPage";
import RadioButtonPage from "../../pageObjects/RadioButtonPage";
import WebTablesPage from "../../pageObjects/WebTablesPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    it("Filling in Text Boxes", () => {
      TextBoxPage.fullName.type("Ilze Gailite");
      // TextBoxPage.fullName.should("have.text", "Ilze Gailite");
      
      TextBoxPage.email.type("ilze@gmail.com");
      // TextBoxPage.email.should("have.text", "ilze@gmail.com");

      TextBoxPage.currentAddress.type("Hanzas4");
      // TextBoxPage.currentAddress.should("have.text", "Hanzas4");

      TextBoxPage.permanentAddress.type("Hanzas4");
      // TextBoxPage.permanentAddress.should("have.text", "Hanzas4"); 

      TextBoxPage.submitButton.click();

      TextBoxPage.pName.should("contains.text", "Ilze Gailite");
      TextBoxPage.pEmail.should("contains.text", "ilze@gmail.com");
      TextBoxPage.pCurrentAddress.should("contains.text", "Hanzas4");
      TextBoxPage.pPermanentAddress.should("contains.text", "Hanzas4");
      
    });
  });

  context("Check box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });
    it("Filling in Text Boxes", () => {

  CheckBoxPage.expand.click();
  CheckBoxPage.notes.click();
  CheckBoxPage.react.click();
  CheckBoxPage.angular.click();
  CheckBoxPage.general.click();
  CheckBoxPage.excelFileDoc.click();
  CheckBoxPage.Result.should("contains.text", "notes");
  CheckBoxPage.Result.should("contains.text", "react");
  CheckBoxPage.Result.should("contains.text", "angular");
  CheckBoxPage.Result.should("contains.text", "general");
  CheckBoxPage.Result.should("contains.text", "excelFile");

    });

    it("Scenario 2", () => {
  CheckBoxPage.expand.click();
  CheckBoxPage.Office.click();
  CheckBoxPage.Result.should("contains.text", "office");
  CheckBoxPage.Result.should("contains.text", "public");
  CheckBoxPage.Result.should("contains.text", "private");
  CheckBoxPage.Result.should("contains.text", "classified");
  CheckBoxPage.Result.should("contains.text", "general");

    })


    // Create CheckBoxPage page object
    // Create checkbox scenario 1:
    // Click the "+"/expand button
    // Click Notes, React, Angular, General, Excel File.doc
    // Validate the clicked checkboxes

    // Create checkbox scenario 2:
    // Click expand button
    // Click Office
    // Validate the checked checkboxes
  });

  

  context("Radio button scenarios", () => {

    beforeEach(() => {
      RadioButtonPage.visit();
    });
    it("ClickYesButton", () => 
    {
    RadioButtonPage.yesButton.click({force: true});
    RadioButtonPage.message.should("contain.text", "Yes");
    RadioButtonPage.impressive.click({force: true});
    RadioButtonPage.message.should("contain.text", "Impressive");
    RadioButtonPage.no.should("have.disabled", "true");
    })

    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled
  });

  context("Web tables scenarios", () => {

    beforeEach(() => {
      WebTablesPage.visit();
    });
    it("Scenario1", () =>
    {
      WebTablesPage.recordButton.click({force: true});
      WebTablesPage.firstName.type("Ilze");
      WebTablesPage.lastName.type("Gailite");
      WebTablesPage.eMail.type("ilze@gmail.com");
      WebTablesPage.age.type("25");
      WebTablesPage.salary.type("3500");
      WebTablesPage.department.type("IT");
      WebTablesPage.subbmit.click();
      WebTablesPage.search.click();
      WebTablesPage.search.type("Ilze");
      WebTablesPage.infoValidation.should("contain.text", "Ilze", "Gailite", "ilze@gmail.com", "25", "3500", "IT");
    })

    it.only("Scenario2", () =>
    {
      WebTablesPage.deleteRows.click({force: true});
      WebTablesPage.deleteRows1.click({force: true});
      WebTablesPage.deleteRows2.click({force: true});
      WebTablesPage.NoRows.should("contain.text", "No rows found");
    }
    )
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
  });

  context("Buttons scenarios", () => {
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
