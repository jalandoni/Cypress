///<reference types='cypress'/>
// Turn off detecting Uncaught errors
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})


import Crud23point5 from "./page_objects/23"


describe('Crud23point5',()=>{
    const cr = new Crud23point5()
    

   it('NGD Automation',()=>{
    cr.login()
    cr.add()
    cr.edit()
    cr.delete()
    cr.search()
  
   })
       
})