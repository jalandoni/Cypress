///<reference types='cypress'/>
// Turn off detecting Uncaught errors
 Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})


const corporate = require('../fixtures/corp');

describe('Corp tech contact ', function() {

    it('URL Assertion', function(){
        cy.viewport(1920,1080)
        cy.visit('https://corporate-tech.dnaqa.net/')
        cy.url().should('include','https://corporate-tech.dnaqa.net/')
    })

    // corporate.forEach((element) => {
    it('validate contact', function() {
        cy.fixture('corp').then(testdata  => {

        testdata.forEach(data => {
        cy.viewport(1920,1080)
        cy.get('.particles-js').scrollIntoView()
        cy.title('What can we help you with?')
        cy.wait(2000)
        cy.log(data.service.simplifying_it)
        cy.contains(data.service.simplifying_it).click({force:true})
        cy.get('#name').type(data.name).should('have.value',data.name)
        cy.get('#business_name').type(data.business_name).should('have.value',data.business_name)
        cy.get('#email').type(data.email).should('have.value',data.email)
        cy.wait(10000)
        cy.get('#phone').type(data.phone).its('length').should('be.eq', 1)
      });
   })
})

// describe('suite', function() {
//     it('URL Assertion', function(){
//         cy.viewport(1920,1080)
//         cy.visit('https://corporate-tech.dnaqa.net/')
//         cy.url().should('include','https://corporate-tech.dnaqa.net/')

//         cy.get('.particles-js').scrollIntoView()
//         var c = cy.get('.active')
//         if(c=="Simplying IT"){
//             cy.contains('Simplying IT').click({force: true})
            
//         }else{
//             cy.get('#root > div > main > div:nth-child(2) > div > div.owl-carousel.owl-theme.owl-loaded > div.owl-nav > button.owl-next').click({force: true})
//             cy.get('.active').nextUntil('#root > div > main > div:nth-child(2) > div > div.owl-carousel.owl-theme.owl-loaded > div.owl-stage-outer > div > div:nth-child(5) > div > div > div.homecard-title')
//         }          
//     }
// )})

})


