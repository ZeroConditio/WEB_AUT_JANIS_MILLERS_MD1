import { selectablesPage } from "../pageObjects/selectables";

describe('DEMO QA', () => {
    context('Selectable tests', () => {
        beforeEach(() => {
            cy.visit('/selectable');
        });

        it('Click grids and validate', () => {
            const evenNumbers = {
            two: 'Two',
            four: 'Four',
            six: 'Six',
            eight: 'Eight'
        }
            // Open Grid
            selectablesPage.openGrid.click();
            // Click Two
            selectablesPage.getNumber(evenNumbers.two).click();
            // Click Four
            selectablesPage.getNumber(evenNumbers.four).click();
            // Click Six
            selectablesPage.getNumber(evenNumbers.six).click();
            // Click Eight
            selectablesPage.getNumber(evenNumbers.eight).click();
            // Validate clicked
            // Two
            selectablesPage.numberHighlighted(evenNumbers.two);
            // Four
            selectablesPage.numberHighlighted(evenNumbers.four);
            // Six
            selectablesPage.numberHighlighted(evenNumbers.six);
            //Eight
            selectablesPage.numberHighlighted(evenNumbers.eight);
            // Validate not clicked
            
        });
    });
});