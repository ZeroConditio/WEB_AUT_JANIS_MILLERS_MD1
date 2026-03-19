import { selectablesPage } from "../pageObjects/selectables";

describe('DEMO QA', () => {
    context('Selectable tests', () => {
        beforeEach(() => {
            cy.visit('/selectable');
        });

        it('Click grids and validate', () => {
            // Open Grid
            selectablesPage.openGrid.click();
            // Click Two
            // Click Four
            // Click Six
            // Click Eight
            // Validate clicked
            // Validate not clicked
        });
    });
});