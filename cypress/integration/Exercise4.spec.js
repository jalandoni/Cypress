///<reference types='cypress'/>

//imported class
import Resources from "./page_objects/Exercise4_object"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})


describe('Check california resources', () => {
    it('Check resources', () => {
        //instantiating class
        const re = new Resources()
        re.navigateHere()
        re.heroSection()
        re.section1()
        re.section2()
        re.section3()
        re.operatingHours()
        // re.contactDetails()
    })
})