import BasePage from "./basePage";

class WebTablesPage extends BasePage {
    static get url () {
        return "/webtables"
    }
static get recordButton() {
    return cy.get(`[id="addNewRecordButton"]`)
}

static get firstName() {
    return cy.get(`[id="firstName"]`)
}

static get lastName() {
    return cy.get(`[id="lastName"]`)
}

static get eMail() {
    return cy.get(`[id="userEmail"]`)
}

static get age() {
    return cy.get(`[id="age"]`)
}

static get salary() {
    return cy.get(`[id="salary"]`)
}

static get department() {
    return cy.get(`[id="department"]`)
}

static get subbmit() {
    return cy.get(`[id="submit"]`)
}

static get search() {
    return cy.get(`[id="searchBox"]`)
}

static get infoValidation() {
    return cy.get(`[role="rowgroup"]`)
}

static get deleteRows() {
    return cy.get(`[id="delete-record-2"]`)
}

static get deleteRows1() {
    return cy.get(`[id="delete-record-3"]`)
}

static get deleteRows2() {
    return cy.get(`[id="delete-record-1"]`)
}

static get NoRows() {
    return cy.get(`.rt-noData`)
}
}

export default WebTablesPage