import BasePage from "./basePage";

class RadioButtonPage extends BasePage {
    static get url () {
        return "/radio-button"
    }

static get yesButton () {
    return cy.get(`[id="yesRadio"]`)
}

static get message() {
    return cy.get(`[class="mt-3"]`)
}

static get impressive() {
    return cy.get(`[id="impressiveRadio"]`); 
}

static get no() {
    return cy.get(`[id="noRadio"]`)
}
}

export default RadioButtonPage