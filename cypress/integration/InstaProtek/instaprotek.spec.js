///<reference types='cypress'/>

import User from "./page_objects/instaprotek"


describe('Within and each assesment',()=>{
    const us = new User()

    //logging in
    before('login', function(){
        us.login()
    
    })

    //test created user's features
    it('create cruds',()=>{
       //Create new user (Email should be unique)
        us.createUser()

       //Modify or Update Created user
        us.updateUser()
        
        //Delete user
        us.deleteUser()
        
        //Check created user if deleted
        us.checkDeleted()

    })
})