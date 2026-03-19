export class selectablesPage{
    static get url(){
        return '/selectable';
    }

    static get openGrid(){
        return cy.get('#demo-tab-grid')
    }

    static get getTwo(){
        return cy.get('#row1')
    }

    static getNumber(label){
        return cy.contains('.list-group-item-action', label)
    }

    // https://docs.cypress.io/api/commands/should#Value
    static numberHighlighted(label){
        this.getNumber(label).should('have.class', 'active')
    }
}