///<reference types='cypress'/>

describe('Sample in select',()=>{
    beforeEach('first sample',()=>{
        cy.visit('http://practice.automationtesting.in/my-account/')
        cy.get('[name="username"]').type('sample@gmail.com')
        cy.get('#password').type('T3st1ng_123&T3st1ng_123')
        cy.get('[name="login"]').click({force: true})
    })

    afterEach('Check orders',()=>{
        cy.contains('Logout').click()
    })

    it('Click orders',()=>{
        cy.contains('Orders').click()
        cy.wait(3000)
    })

    it('Click downloads',()=>{
        cy.contains('Downloads').click()
        cy.wait(3000)
    })

    it('Click addresses',()=>{
        cy.contains('Addresses').click()
        cy.wait(3000)
    })
})