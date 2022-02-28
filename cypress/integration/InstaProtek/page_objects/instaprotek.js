///<reference types='cypress'/>
class User {
    
    //log in
    login(){
        cy.pause()
        var email = 'testingprotek@dnamicro.com'
        var password = 'DNAR0cks!!'
        cy.viewport(1920, 1080)
        cy.visit('https://instaprotek.dnaqa.net/login?return_url=/portal')
        cy.url().should('include','/login')
        cy.get('#email').type(email).should('have.value',email)
        cy.get('#password').type(password).should('have.value',password)
        cy.get('[type="submit"]').click()
        cy.wait(5000)
        cy.contains('Users').click()
        cy.wait(5000)
        cy.get('#main-content-demo > div.w_AdvancedFilter > div > div > div > div.md-paper.md-paper--1.md-card.md-background--card.md-cell.md-cell--12.pageTable__table > div.md-cell.md-cell--12').within((list) => {
            cy.log(list)
            cy.contains('Hannah').click()
            cy.wait(5000)
        })
        cy.get('#fullPage__dialog > .md-toolbar--text-white > .md-cell--right > .md-btn').click()
    }

    //creating new user
    createUser(){
        cy.viewport(1920, 1080)
        cy.wait(5000)
        var email = 'banawan111@mailinator.com'
        var fname = 'Brett'
        var lname = 'Meyer'
        var role = 'Agent'
        var affiliate = 'Test Affliate'
        var password = 'Pa$$w0rd!'

        //Create new user
        cy.get('[type="button"]').contains('New').click()
        cy.get('#email').type(email).should('have.value',email)
        cy.get('#first_name').type(fname).should('have.value',fname)
        cy.get('#last_name').type(lname).should('have.value',lname)
        cy.get('#role-toggle > div.md-icon-separator.md-text-field.md-text-field--floating-margin.md-select-field--btn').click()
        cy.contains(role).click()
        cy.get('#react-select-2--value > div.Select-placeholder').click()
        cy.contains(affiliate).click()
        cy.get('#password').type(password).should('have.value',password)
        cy.get('#dialog > footer > button.md-btn.md-btn--flat.md-btn--text.md-pointer--hover.md-text--theme-primary.md-ink--primary.md-inline-block.md-btn--dialog.dialogAction__button--primary').click()
        // cy.get('#snackbar-alert-dialog > p').contains('User successfully created')

    }

    //editing created user
    updateUser(){
        cy.wait(5000)
        var email = 'banawan111@mailinator.com'
        var fname = 'Bretter'
        var lname = 'Mile'
        cy.get('tbody>tr').each((element, index,) => {
            var uniqueEmail = element.text()
            cy.log(uniqueEmail)
            if(uniqueEmail.includes(email)){
                cy.contains(email).click({force: true})
                cy.wait(5000)
                cy.get('#first_name').clear().type(fname).should('have.value',fname)
                cy.get('#last_name').clear().type(lname).should('have.value',lname)
                cy.get("#status-toggle > div.md-icon-separator.md-text-field.md-select-field--btn > span").then(($span) => {
                    // $span is the object that the previous command yielded
                    const accountStat = $span.text();
                    cy.log(accountStat);

                    //check status to update
                    if(accountStat ==='Active'){
                        cy.contains('Active').click({force: true})
                        cy.wait(5000)
                        cy.contains('Inactive').click({force: true})
                        cy.get('[type="button"]').contains('Save & Close').click({force: true})
                        // cy.get('#snackbar-alert-dialog > p').contains('Customer successfully updated.')
                     }else if(accountStat ==='Inactive'){
                         cy.contains('Inactive').click({force: true})
                         cy.wait(5000)
                         cy.contains('Active').click({force: true})
                         cy.get('[type="button"]').contains('Save & Close').click({force: true})
                        //  cy.get('#snackbar-alert-dialog > p').contains('Customer successfully updated.')
     
                     }else if(accountStat ==='Deleted'){
                         cy.contains('Deleted').click({force: true})   
                         cy.wait(5000)
                         cy.contains('Active').click({force: true})
                         cy.get('[type="button"]').contains('Save & Close').click({force: true})
                        //  cy.get('#snackbar-alert-dialog > p').contains('Customer successfully updated.')
                     }else{
                         cy.log('Not specified status')
                     }  
                 
                   })
               
            }else{
                cy.log('mismatch email')
            }   
        })
    }


    //delete created user
    deleteUser(){
        var email = 'banawan111@mailinator.com'
        cy.get('tbody>tr').each((element, index,) => {
            cy.wait(1000)
            var uniqueEmail = element.text()
            cy.log(uniqueEmail)
            if(uniqueEmail.includes(email)){
                cy.contains(email).click({force: true})
               cy.get('#fullPage__dialog > div > div.treeViewer__grid > div.treeViewer__grid--content > div > div.md-paper.md-paper--1.md-card.md-background--card.md-cell.md-cell--12.pageTable__toolbar > header > button.md-btn.md-btn--raised.md-btn--text.md-pointer--hover.md-text.md-inline-block.button-bg--danger > div > span').click({force: true})
               cy.wait(2000)
               cy.contains('Yes').click()
               cy.wait(2000)
            //    cy.get('#snackbar-alert-dialog > p').contains('User successfully deleted')
            }else{
                cy.log('mismatch email')
            }
        
        })

    }


    //check status
    checkDeleted(){
        var email = 'banawan111@mailinator.com'
        var del ='Deleted'
        cy.get('#dnaTable2-searchField').type(del).should('have.value',del).click()
        cy.wait(5000)
        cy.get('tbody>tr').each((element, index,) => {
            cy.wait(1000)
            var uniqueEmail = element.text()
            cy.log(uniqueEmail)
            if(uniqueEmail.includes(email)){
                cy.contains(email).click({force: true})
                cy.get('#status-menu').contains(del)
                cy.wait(1000)
                cy.get('#fullPage__dialog > .md-toolbar--text-white > .md-cell--right > .md-btn').click()
            }else{
                cy.log('mismatch email')
            }
        })

        cy.get('#main-content-demo > div.w_AdvancedFilter > div > div > div > div.md-paper.md-paper--1.md-card.md-background--card.md-cell.md-cell--12.pageTable__table > div.md-cell.md-cell--12 > div.pageTable_datatable').within((list) => {
            cy.log(list)
            cy.contains(email).click()
            cy.wait(5000)
        })
    }

} export default User