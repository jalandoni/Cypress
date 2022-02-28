///<reference types='cypress'/>

import About_us from "./page_objects/About_us"
import Contact_us from "./page_objects/Contact_us"
import Blog from "./page_objects/Blog"
import Blog_2 from "./page_objects/Blog_2"
import Blog_3 from "./page_objects/Blog_3"
import Blog_4 from "./page_objects/Blog_4"



describe('check NGD',()=>{
    const ab = new About_us()
    const co = new Contact_us()
    const bl = new Blog()
    const bl2 = new Blog_2()
    const bl3 = new Blog_3()
    const bl4 = new Blog_4()
 



   it('NGD Automation',()=>{
    ab.Hero_section()
    ab.Team_section()
    ab.Investors_section()
    ab.Technology_section()
    ab.Press_section()
    // co.Submit()
    // bl.Page1()
    // bl.Page2()
    // bl2.Page_3()
    // bl2.Page_4()
    // bl3.Page_5()
    // bl3.Page_6()
    // bl4.Page_7()
    // bl4.Page_8()
  
   })
   

 
    
})