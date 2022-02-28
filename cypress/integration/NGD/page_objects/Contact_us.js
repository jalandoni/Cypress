///<reference types='cypress'/>
class Contact_us {
   

    Submit(){
        cy.get('[class="nav_menu"]').contains('Contact Us').click({force: true})
        cy.url().should('include','/contact_us')
        cy.wait(1000)
        cy.get('[alt ="Contact Us"]').should('have.attr','src','/images/signUpAnimation.gif')
        cy.get('#main_content > section.contactFormSection.section > div > div > div.col-md-6.col-content > div > h1').should('contain','Still have questions?')
        cy.get('#main_content > section.contactFormSection.section > div > div > div.col-md-6.col-content > div > h5').should('contain',"Write us a message, and we'll get back to you shortly. While waiting, you can also subscribe to our newsletter")

        //validate input field
        cy.get('#contact_first_name').should('have.value', '')
        cy.get('#contact_last_name').should('have.value', '')
        cy.get('#contact_email').should('have.value', '')
        // cy.get('#contact_company').type(' ')
        cy.get('[name="phone"]').type(' ')
        cy.get('#contact_comment').should('have.value', '')
        cy.contains('Submit').click({force: true})
        cy.wait(2000)
    }


}export default Contact_us