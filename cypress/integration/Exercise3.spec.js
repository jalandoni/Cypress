///<reference types='cypress'/>

describe('Use the Hooks Function to create a script',()=>{

beforeEach('sign in', ()=>{
        cy.viewport(1920,1080)
        cy.visit('https://23point5-consumer.dnaqa.net/')
        cy.get('.header__menu--desktop > .tiJDR > :nth-child(2)').click()
        //without value for two required field
        cy.get('[placeholder="Email"]').should('have.value', '')
        cy.get('[placeholder="Password"]').should('have.value', '')
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(4) > button').click()
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(1) > div > div > div').should('contain','Email is required.')
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(2) > div > div > div').should('contain','Password is required.')


          //without password
          cy.get('[placeholder="Email"').type('kera@mailinator.com')
          cy.get('[placeholder="Password"]').should('have.value', '')
          cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(4) > button').click()
          cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(2) > div > div > div').should('contain','Password is required.')
          cy.get('[placeholder="Email"').clear()
          cy.get('[placeholder="Password"]').clear()

        //without email
        cy.get('[placeholder="Email"').should('have.value', '')
        cy.get('[placeholder="Password"]').type('Pa$$w0rd!')
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(4) > button').click()
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(1) > div > div > div').should('contain','Email is required.')
        cy.get('[placeholder="Email"').clear()
        cy.get('[placeholder="Password"]').clear()

        //incorrect email
        cy.get('[placeholder="Email"').type('j@mailinator.com')
        cy.get('[placeholder="Password"]').type('Pa$$w0rd!')
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(4) > button').click()
        cy.get('#snackbar-alert-dialog').should('contain','Account does not exist')
        cy.get('[placeholder="Email"').clear()
        cy.get('[placeholder="Password"]').clear()


        //incorrect password
        cy.get('[placeholder="Email"').type('kera@mailinator.com')
        cy.get('[placeholder="Password"]').type('Pa$$w0rd!!')
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(4) > button').click()
        cy.get('#snackbar-alert-dialog > p').should('contain','Incorrect password')
        cy.get('[placeholder="Email"').clear()
        cy.get('[placeholder="Password"]').clear()


        //correct password and email
        cy.get('[placeholder="Email"').type('kera@mailinator.com')
        cy.get('[placeholder="Password"]').type('Pa$$w0rd!')
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(4) > button').click()
        cy.wait(5000)
    })

    afterEach('logout',()=>{
        // cy.get('.header__menu--desktop > .tiJDR > :nth-child(2)').trigger('mouseover',{force: true})
        // cy.contains('Logout').click({force:true})
        // cy.get('#yes').click()
        cy.get('.dnaGrid ').contains('Hi').click()
        cy.contains('Logout').click()
        cy.get('#yes').click()
    })


    before('Sign up', ()=>{
        cy.viewport(1920,1080)
        cy.visit('https://23point5-consumer.dnaqa.net/')
        cy.get('.header__menu--desktop > .tiJDR > :nth-child(2)').click()
        cy.get('.mainPage-subheader > .md-btn').click({force:true})

        //without filling in the required fields
        cy.get('[placeholder="First Name"').should('have.value', '')
        cy.get('[placeholder="Last Name"]').should('have.value', '')
        cy.get('[placeholder="Email"]').should('have.value', '')
        cy.get('[placeholder="Password"]').should('have.value', '')
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(6) > button').click()
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(1) > div > div > div').should('contain','First name is required.')
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(3) > div > div > div').should('contain','Email is required.')
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(4) > div > div > div').should('contain','Password is required.')
       
        //Without a first name
        cy.get('[placeholder="First Name"').should('have.value', '');
        cy.get('[placeholder="Last Name"]').type('Sharpe')
        cy.get('[placeholder="Email"]').type('nuhozatob@mailinator.com')
        cy.get('[placeholder="Password"]').type('Pa$$w0rd!')
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(6) > button').click()
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(1) > div > div > div').should('contain','First name is required.')
        cy.get('[placeholder="First Name"').clear()
        cy.get('[placeholder="Last Name"]').clear()
        cy.get('[placeholder="Email"]').clear()   
        cy.get('[placeholder="Password"]').clear()  

        //Without an email
        cy.get('[placeholder="First Name"').type('John')
        cy.get('[placeholder="Last Name"]').type('Sharpe')
        cy.get('[placeholder="Email"]').should('have.value', '')
        cy.get('[placeholder="Password"]').type('Pa$$w0rd!')
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(6) > button').click()
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(3) > div > div > div').should('contain','Email is required.')
        cy.get('[placeholder="First Name"').clear()
        cy.get('[placeholder="Last Name"]').clear()
        cy.get('[placeholder="Email"]').clear() 
        cy.get('[placeholder="Password"]').clear()    

        //With invalid email
        cy.get('[placeholder="First Name"').type('John')
        cy.get('[placeholder="Last Name"]').type('Sharpe')
        cy.get('[placeholder="Email"]').type('john')
        cy.get('[placeholder="Password"]').type('Pa$$w0rd!')
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(6) > button').click()
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(3) > div > div > div').should('contain','Email is invalid.')
        cy.get('[placeholder="First Name"').clear()
        cy.get('[placeholder="Last Name"]').clear()
        cy.get('[placeholder="Email"]').clear() 
        cy.get('[placeholder="Password"]').clear()
        
        //Without password
        cy.get('[placeholder="First Name"').type('John')
        cy.get('[placeholder="Last Name"]').type('Sharpe')
        cy.get('[placeholder="Email"]').type('john')
        cy.get('[placeholder="Password"]').should('have.value', '')
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(6) > button').click()
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(4) > div > div > div').should('contain','Password is required.')
        cy.get('[placeholder="First Name"').clear()
        cy.get('[placeholder="Last Name"]').clear()
        cy.get('[placeholder="Email"]').clear() 
        cy.get('[placeholder="Password"]').clear() 


        //With existing email
        cy.get('[placeholder="First Name"').type('Halla')
        cy.get('[placeholder="Last Name"]').type('Brown')
        cy.get('[placeholder="Email"]').type('topotajo@mailinator.com')
        cy.get('[placeholder="Password"]').type('Pa$$w0rd!')
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(6) > button').click()
        cy.get('#snackbar-alert-dialog > p').should('contain','Email already in use.')
        cy.get('[placeholder="First Name"').clear()
        cy.get('[placeholder="Last Name"]').clear()
        cy.get('[placeholder="Email"]').clear() 
        cy.get('[placeholder="Password"]').clear()

        //creating new account 
        //email should not be taken
        cy.get('[placeholder="First Name"').type('Kera')
        cy.get('[placeholder="Last Name"]').type('Brown')
        cy.get('[placeholder="Email"]').type('kera@mailinator.com')
        cy.get('[placeholder="Password"]').type('Pa$$w0rd!')
        cy.get('#dialog_session > section > div > div > div > div > div.mainPage-fields > div:nth-child(6) > button').click()
        cy.contains('Sign In').click() 
    })

    it('Account is sign in',()=>{
        cy.get('.header__menu--desktop > .tiJDR > :nth-child(2)').trigger('mouseover',{force: true})
        cy.wait(2000)
        cy.contains('Designs').click({force:true})
        cy.go('back')
        // cy.log('login')
    })

    
})