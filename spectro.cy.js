describe('Spectrocoin test', () => {
  it('passes', () => {
    cy.visit('https://spectrocoin.com/en/bitcoin-price-rates.html') //Go to rates page
    cy.contains('Reference currency:').siblings().click() // Click currency dropdown
    cy.contains('GBP').click() // Click GBP currency
    cy.get('tr').contains('td','Banker BNK') // Get the cell, which has Bankera ticker 
                .siblings() // Get Bankera tickers siblings 
                .eq(1) // Select 2nd sibling (24hour price change)
                .children() // Get 24hours children
                .eq(1) // Select the price change
                .invoke('text') // Convert the object to string
                .then(text => +text.replace('%','').trim()) // Remove % symbol and whitespace
                .should('be.gte',0) // Assert if the value is greater than or equal to 0
  })
})