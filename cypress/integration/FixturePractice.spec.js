///<reference types='cypress'/>
describe('Automation Test Suite - Fixtures', function () {
    it('sample fixture',()=>{
      cy.fixture('audio/promise.mp3', 'base64').then((mp3) => {
      const uri = 'data:audio/mp3;base64,' + mp3
      const audio = new Audio(uri)
      audio.play()
     
      })

  })

})
