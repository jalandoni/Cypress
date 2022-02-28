///<reference types='cypress'/>
// Turn off detecting Uncaught errors
Cypress.on('uncaught:exception', (err, runnable) => {

    return false
})

describe('Instaprotek', function () {

    it('Testcase 1', function () {
        var dashboard = 'https://instaprotek.dnaqa.net/portal/dashboard'
        var user = 'https://instaprotek.dnaqa.net/portal/user'
        cy.viewport(1920, 1080)
        cy.visit('https://instaprotek.dnaqa.net/login')
        cy.url().should('include', 'https://instaprotek.dnaqa.net/login')
        cy.get('#email').type('testingprotek@dnamicro.com')
        cy.get('#password').type('DNAR0cks!!')
        cy.get('#app-container > div > div > div > div.md-paper.md-paper--1.md-card.md-background--card.screenLogin__card > section > form > div > div.md-cell.md-cell--12.screenLogin__buttons > button')
        .click()
        cy.wait(5000)
        cy.url().should('include', dashboard)
        cy.get('[icon="users"]').click()
        cy.wait(5000)
        cy.url().should('include', user)
        cy.get('#dnaTable2-searchField').type('Hannah')
        cy.wait(5000)
        cy.get('[class="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text override-md-table-row-padding"]')
        .within(() => {
            cy.contains('hanna@dnamicro.com').click()
        })
        cy.wait(5000)
        cy.get('#fullPage__dialog > .md-toolbar--text-white > .md-cell--right').click()
        
    })

    it('Testcase 2', function () {
        var user = 'https://instaprotek.dnaqa.net/portal/user'
        var edit = 'edit'
        cy.viewport(1920, 1080)
        cy.url().should('include', user)
        cy.get('#dnaTable2-searchField').clear()
        // cy.get('#dnaTable2-searchField').type('Tester1')  
        // cy.get('[class="md-icon material-icons md-text--inherit"]').contains(edit).click()
        // cy.url().should('include', editUrl)
        //create new user
     
        
    })



})