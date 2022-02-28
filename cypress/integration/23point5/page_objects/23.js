///<reference types='cypress'/>
class Crud23point5 {
    //log in
    login(){
        var email = 'takamura@mailinator.com'
        var password = 'DNAR0cks!!'
        cy.viewport(1920, 1080)
        cy.visit('https://23point5-portal.dnaqa.net/login')
        cy.url().should('include','/login')
        cy.get('#email').type(email).should('have.value',email)
        cy.get('#password').type(password).should('have.value',password)
        cy.get(':nth-child(3) > .dnaButtonGroup_col--right > .md-btn').click()
        cy.wait(3000)
        cy.url().should('eq','https://23point5-portal.dnaqa.net/portal/timeline')
    }
    

    // invite(){
    //     var Users = "Users"
    //     var Comp = "Companies"
    //     var Art = "Artists"
    //     var Setting = 'Setting'
    //     cy.contains(Setting).click()
    //     cy.wait(5000)
    //     cy.get('#btn_new').click()
    //     cy.get('#cancel').click()
    //     cy.get('#btn_export_csv').click()
    // }

    add(){
        const corporate = require('../../../fixtures/corp');
        var fab =  'Fabric Types'
        cy.contains('Settings').click()
        cy.contains(fab).click()
        cy.get('[id="btn_new"]').click()
        cy.wait(2000)
        corporate.forEach((element) => {
            cy.get('[id="name"]').type(element.leather).should('have.value',element.leather)
            cy.get('[id="unit_measurement"]').click()  
            cy.contains('Yd').click()
            cy.contains('Save & Close').click()  
         })
    }

//****************************EDIT**********************************
    //Edit method option1
    // edit(){
    //     const corporate = require('../../../fixtures/corp');
    //     var fab =  'Fabric Types'
    //     cy.contains('Settings').click()
    //     cy.contains(fab).click()
    //     cy.get('.dnaTable').within((list) => {
    //         cy.log(list)
    //         cy.contains('Cotton').click()
    //         cy.wait(5000)
    //         // cy.get('dnaicon dnaicon-edit').click()
    //         // cy.get('dnaicon dnaicon-delete').click()
          
    //     })
    //     cy.get('[id="name"]').clear()
    //      corporate.forEach((element) => {
    //         cy.get('#name').type(element.material)
    //      })
    //     cy.get('#save_close').click()
    // }


    //Edit with search option1
    // edit(){
    //     const corporate = require('../../../fixtures/corp');
    //     cy.get('[id="search"]').type('Leather{enter}')
    //     cy.wait(2000)
    //     cy.contains('Leather').click()
    //     cy.get('[id="name"]').clear()
    //      corporate.forEach((element) => {
    //         cy.get('#name').type(element.leather)
    //      })
    //     cy.get('#save_close').click()
    // }

    //Edit with search option2
    edit(){
        const corporate = require('../../../fixtures/corp');
        cy.get('[id="search"]').type('Leather{enter}')
        cy.wait(2000)
        cy.get('[id="edit"]').click()
        cy.get('[id="name"]').clear()
         corporate.forEach((element) => {
            cy.get('#name').type(element.leather)
         })
        cy.get('#save_close').click()

    }

//*******************************DELETE*******************************
    //Delete Method option1
    // delete(){
    //     cy.get('.dnaTable').within((list) => {
    //         cy.log(list)
    //         cy.contains('Leather').click()
    //         cy.wait(5000)

    //     })
    //     cy.get('#btn_delete').click()
    //     cy.contains('Yes').click()

    // }


     //Delete Method option1
    // delete(){
    //     const corporate = require('../../../fixtures/corp');
    //     cy.get('[id="search"]').type('Leather{enter}')
    //     cy.wait(2000)
    //     cy.contains('Leather').click()
    //     cy.get('[id="name"]').clear()
    //      corporate.forEach((element) => {
    //         cy.get('#name').type(element.leather)
    //      })
    //     cy.get('#btn_delete').click()
    //     cy.contains('Yes').click()
    // }



    //Delete Method option2
    delete(){
        const corporate = require('../../../fixtures/corp');
        cy.wait(1000)
        cy.get('[id="search"]').clear()
        corporate.forEach((element) => {
            cy.get('[id="search"]').type(element.leather)
            cy.wait(2000)
         })
       
        cy.get('[id="delete"]').click()
        cy.contains('Yes').click()

    }

    search(){
        const corporate = require('../../../fixtures/corp');
        cy.get('[id="search"]').clear()
         corporate.forEach((element) => {
            cy.get('[id="search"]').type(element.leather)
         })
    }



} export default Crud23point5