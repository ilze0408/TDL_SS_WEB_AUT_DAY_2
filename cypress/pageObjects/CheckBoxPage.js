import BasePage from "./basePage";

class CheckBoxPage extends BasePage {
    static get url() {
        return "/checkbox";
    }

    static get expand() {
        return cy.get (`[title="Expand all"]`)
    }

    static get notes() {
        return cy.get (`[for="tree-node-notes"]`)
    }

    static get react() {
        return cy.get (`[for="tree-node-react"]`)
    } 

    static get angular() {
        return cy.get (`[for="tree-node-angular"]`)
    }

    static get general() {
        return cy.get (`[for="tree-node-general"]`)
    }

    static get excelFileDoc() {
        return cy.get (`[for="tree-node-excelFile"]`)
    }

    static get Result() {
        return cy.get (`[id="result"]`)
    }

    static get Office() {
        return cy.get (`[for="tree-node-office"]`)
    }

    static get Result () {
        return cy.get (`[id="result"]`)
    }


}

export default CheckBoxPage