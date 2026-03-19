import { selectablesPage } from "../pageObjects/selectables";

describe('DEMO QA', () => {
    context('Selectable tests', () => {
        beforeEach(() => {
            cy.visit('/selectable');
        });

        it('Click grids and validate', () => {
            const numbers = {
                one: 'One',
                two: 'Two',
                three: 'Three',
                four: 'Four',
                five: 'Five',
                six: 'Six',
                seven: 'Seven',
                eight: 'Eight',
                nine: 'Nine'
            };

            // Open Grid
            selectablesPage.openGrid.click();
            // Click Two
            selectablesPage.getNumber(numbers.two).click();
            // Click Four
            selectablesPage.getNumber(numbers.four).click();
            // Click Six
            selectablesPage.getNumber(numbers.six).click();
            // Click Eight
            selectablesPage.getNumber(numbers.eight).click();
            // Validate clicked
            // Two
            selectablesPage.numberHighlighted(numbers.two);
            // Four
            selectablesPage.numberHighlighted(numbers.four);
            // Six
            selectablesPage.numberHighlighted(numbers.six);
            //Eight
            selectablesPage.numberHighlighted(numbers.eight);
            // Validate not clicked
            // One
            selectablesPage.notHighlighted(numbers.one);
            // Three
            selectablesPage.notHighlighted(numbers.three);
            // Five
            selectablesPage.notHighlighted(numbers.five);
            // Seven
            selectablesPage.notHighlighted(numbers.seven);
            // Nine
            selectablesPage.notHighlighted(numbers.nine);
        });
    });
});