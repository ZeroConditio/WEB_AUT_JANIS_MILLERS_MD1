export class selectablesPage{
    static get url(){
        return '/selectable';
    }

    static get openGrid(){
        return cy.get('#demo-tab-grid')
    }

}