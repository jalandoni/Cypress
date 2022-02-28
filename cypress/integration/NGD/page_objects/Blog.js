///<reference types='cypress'/>
class Blog {

Page1(){
    var search= 'event'
    var ngdBlog= "NGD’s official blog that discusses our product design, hardware architecture and common problems on the data industry."
    var edgeTitle = 'Edge Compute and NVMe Computational Storage – AWS Greengrass'
    var edgeDate = 'Tuesday, October 6 2020'
    var edgeAuthor ='Eli Tiomkin, VP of Business Development'
    var computeHref="/page/Edge-Compute-and-NVMe-Computational-Storage--AWS-Greengrass"
    var edgeSrc = 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/OCT_06_2020/Edge%20Compute%20and%20Computational%20Storage%20%E2%80%93%20AWS%20Greengrass_2x.png'
    var hypeSrc= 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/AUG_14_2020/Thumbnail.jpg'
    var hypeHref = 'https://www.ngdsystems.com/page/Whats-with-All-the-Hype'
    var hypeTitle = 'What\'s with All the Hype'
   var hypeDate ='Friday, July 10 2020'
   var hypeAuthor = 'Scott Shadley'
   var captainSrc = 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/MAY_27_2020/Thumbnail-2.png'
   var captain2Href = '/page/Im-Givin-Her-All-Shes-Got-Captain-2'
   var captainHref="/page/Im-Givin-Her-All-Shes-Got-Captain"
   var captainTitle = 'I’m Givin’ Her All She’s Got Captain!'
   var captain2Date = 'Tuesday, June 2 2020'
   var captainDate = 'Tuesday, May 26 2020'
   var captainAuthor = 'Mike Yousef, SVP'
   var CreatingSrc= 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/MAR_24_2020/Thumbnail.jpg'
   var CreatingHref = '/Creating-an-Edge-Computing-Business-Plan'
   var CreatingTitle = 'Creating an Edge Computing Business Plan'
    var CreatingDate ='Monday, March 23 2020'
    var CreatingAuthor = 'Scott Shadley'
    var NGD_NamedSrc= 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/MAR_12_2020/Thumbnail.jpg'
    var NGD_NamedHref = '/NGD-Named-to-2019-Storage-Products-of-the-Year'
    var NGD_NamedTitle = 'NGD Named to 2019 Storage Products of the Year'
    var NGD_NamedDate ='Thursday, March 12 2020'
    var NGD_NamedAuthor = 'Alicia Hoole'
    var Starting_2020Src= 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/FEB_26_2020/Thumbnail.jpg'
    var Starting_2020Href = '/page/Starting-2020-with-a-Bang--Series-C-Funding-Accelerates-the-Production-and-Deployment-of-NGD%E2%80%99s-NVMe-Computational-Storage-Drives'
    var Starting_2020Title = 'Starting 2020 with a Bang!  Series C Funding Accelerates the Production and Deployment of NGD’s NVMe Computational Storage Drives'
    var Starting_2020Title1='Starting 2020 with a Bang! Series C Funding Accelerates the Production and Deployment of NGD’s NVMe Computational Storage Drives'
    var Starting_2020Date ='Wednesday, February 26 2020'
    var Starting_2020Author = 'Scott Shadley'
    var CompressionSrc= 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/DEC_23_2019/Poster.jpg'
    var CompressionHref = '/Compression-and-Decompression-Is-Bottlenecking-Datacenters:-NVMe-Computational-Storage-Eases-the-Pain'
    var CompressionTitle = 'Compression and Decompression Is Bottlenecking Datacenters: NVMe Computational Storage Eases the Pain'
    var CompressionDate ='Sunday, December 22 2019'
    var CompressionAuthor = 'Scott Shadley'
    var StreamSrc= 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/DEC_19_2019/Thumbnail.jpg'
    var StreamHref = '/Stream-with-Ease-Using-NVMe-Computational-Storage'
    var StreamTitle = 'Stream with Ease Using NVMe Computational Storage'
    var StreamDate ='Wednesday, December 18 2019'
    var StreamAuthor = 'Scott Shadley'
    var WaysSrc= 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/DEC_12_2019/Thumbnail.jpg'
    var WaysHref = '/3-Ways-NVMe-Computational-Storage-Will-Deliver-Big-in-2020'
    var WaysTitle = '3 Ways NVMe Computational Storage Will Deliver Big in 2020'
    var WaysDate ='Wednesday, December 11 2019'
    var WaysAuthor = 'Nader Salessi'
    var Being_ThankfulSrc= 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/DEC_03_2019/Thumbnail.jpg'
    var Being_ThankfulHref = '/Being-Thankful-for-Our-Employees--the-Key-to-Our-Success'
    var Being_ThankfulTitle = 'Being Thankful for Our Employees – the Key to Our Success!'
    var Being_ThankfulDate ='Tuesday, December 3 2019'
    var Being_ThankfulAuthor = 'Nader Salessi'
    var Get_to_KnowSrc= 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/NOV_18_2019/Thumbnail.jpg'
    var Get_to_KnowHref = '/Get-to-Know-NGD-Systems-Executives:-EVP-Edition'
    var Get_to_KnowTitle = 'Get to Know NGD Systems Executives: EVP Edition'
    var Get_to_KnowDate ='Monday, November 18 2019'
    var Get_to_KnowAuthor = 'Richard Mataya'
    var Appointed_BoardSrc= 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/NOV_08_2019/Thumbnail_2.jpg'
    var Appointed_BoardHref = '/Scott-Shadley-of-NGD-Systems-Is-Appointed-Board-Member-for-SNIA'
    var Appointed_BoardTitle = 'Scott Shadley of NGD Systems Is Appointed Board Member for SNIA'
    var Appointed_BoardDate ='Friday, November 8 2019'
    var Appointed_BoardAuthor = 'Scott Shadley'
    var Earning_30thSrc= 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/OCT_22_2019/Thumbnail.jpg'
    var Earning_30thHref = '/NGD-Systems-Makes-Another-Stride-Earning-30th-Patent'
    var Earning_30thTitle = 'NGD Systems Makes Another Stride Earning 30th Patent'
    var Earning_30thDate ='Tuesday, October 22 2019'
    var Earning_30thAuthor = 'Richard Mataya'


    cy.get('[class="nav_menu"]').contains('Blog').click({force: true})
    cy.url().should('include','/blogs')
    cy.wait(1000)
    cy.get('[class="section_header"]').should('have.contain','Blogs')
    cy.get('[class="section_desc"]').should('have.contain',ngdBlog)
    cy.get('[alt="NGD\'s official blogs discusses product design, hardware architecture and common problems on the data industry"]').should('have.attr','src','/images/blogs/bannerGraphic.png')
    cy.get('[placeholder="Search for Blogs"]').type(search)
    cy.get('[class="field_inputIcon"]').click({force: true})
    cy.get('#main_content > section.resourceBlogsSection > div.container.container-wide.pagesearch > div > div > h5').should('contain','Search results for')
    
    cy.get('[class="search"]').scrollIntoView()
    cy.wait(3000)
    cy.get('[class="search"]').should('contain',search)
    cy.go('back')

    //First Page of Blog
    cy.get('[class="lazyImg loaded"][alt="Edge Compute and NVMe Computational Storage – AWS Greengrass"]').should('have.attr','src',edgeSrc)
    cy.get('[class="container blogs"]').contains(edgeTitle).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',computeHref)
    cy.get('[id="post_title"]').should('contain',edgeTitle)
    cy.get('[id="post_date"]').should('contain',edgeDate)
    cy.get('[id="post_author"]').should('contain',edgeAuthor)
    cy.go('back')

    cy.get('[class="lazyImg loaded"][alt="What\'s with All the Hype"]').should('have.attr','src',hypeSrc)
    cy.get('[class="container blogs"]').contains(hypeTitle).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',hypeHref)
    cy.get('[id="post_title"]').should('contain',hypeTitle)
    cy.get('[id="post_date"]').should('contain',hypeDate)
    cy.get('[id="post_author"]').should('contain',hypeAuthor)
    cy.go('back')

    cy.get('[class="lazyImg loaded"][alt= "I’m Givin’ Her All She’s Got Captain!"]').should('have.attr','src',captainSrc)
    cy.get('[href="/page/Im-Givin-Her-All-Shes-Got-Captain-2"]').click({force: true})
    cy.wait(2000)
    cy.url().should('include',captain2Href)
    cy.get('[id="post_title"]').should('contain',captainTitle)
    cy.get('[id="post_date"]').should('contain',captain2Date)
    cy.get('[id="post_author"]').should('contain',captainAuthor)
    cy.go('back')
    
    cy.get('[class="lazyImg loaded"][alt= "I’m Givin’ Her All She’s Got Captain!"]').should('have.attr','src',captainSrc)
    cy.get('[href="/page/Im-Givin-Her-All-Shes-Got-Captain"]').click({force:true})
    cy.wait(2000)
    cy.url().should('include',captainHref)
    cy.get('[id="post_title"]').should('contain',captainTitle)
    cy.get('[id="post_date"]').should('contain',captainDate)
    cy.get('[id="post_author"]').should('contain',captainAuthor)
    cy.go('back')


    //cy.get('[class="lazyImg loaded"][alt="Creating an Edge Computing Business Plan"]').should('have.attr','src',CreatingSrc)
    cy.get('[class="container blogs"]').contains(CreatingTitle).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',CreatingHref)
    cy.get('[id="post_title"]').should('contain',CreatingTitle)
    cy.get('[id="post_date"]').should('contain',CreatingDate)
    cy.get('[id="post_author"]').should('contain',CreatingAuthor)
    cy.go('back')

    //cy.get('[class="lazyImg loaded"][alt="NGD Named to 2019 Storage Products of the Year"]').should('have.attr','src',NGD_NamedSrc)
    cy.get('[class="container blogs"]').contains(NGD_NamedTitle).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',NGD_NamedHref)
    cy.get('[id="post_title"]').should('contain',NGD_NamedTitle)
    cy.get('[id="post_date"]').should('contain',NGD_NamedDate)
    cy.get('[id="post_author"]').should('contain',NGD_NamedAuthor)
    cy.go('back')

    //cy.get('[class="lazyImg loaded"][alt="Starting 2020 with a Bang!  Series C Funding Accelerates the Production and Deployment of NGD’s NVMe Computational Storage Drives"]').should('have.attr','src',Starting_2020Src)
    cy.get('[class="container blogs"]').contains(Starting_2020Title1).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',Starting_2020Href)
    cy.get('[id="post_title"]').should('contain',Starting_2020Title)
    cy.get('[id="post_date"]').should('contain',Starting_2020Date)
    cy.get('[id="post_author"]').should('contain',Starting_2020Author)
    cy.go('back')

    

    //cy.get('[class="lazyImg"][alt="Compression and Decompression Is Bottlenecking Datacenters: NVMe Computational Storage Eases the Pain"]').should('have.attr','src',CompressionSrc)
    cy.get('[class="container blogs"]').contains(CompressionTitle).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',CompressionHref)
    cy.get('[id="post_title"]').should('contain',CompressionTitle)
    cy.get('[id="post_date"]').should('contain',CompressionDate)
    cy.get('[id="post_author"]').should('contain',CompressionAuthor)
    cy.go('back')

    //cy.get('[class="lazyImg loaded"][alt="Stream with Ease Using NVMe Computational Storage"]').find('img').should('have.attr','src',StreamSrc).and('be.visible')
    cy.get('[class="container blogs"]').contains(StreamTitle).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',StreamHref)
    cy.get('[id="post_title"]').should('contain',StreamTitle)
    cy.get('[id="post_date"]').should('contain',StreamDate)
    cy.get('[id="post_author"]').should('contain',StreamAuthor)
    cy.go('back')

      //cy.get('[class="lazyImg loaded"][alt="3 Ways NVMe Computational Storage Will Deliver Big in 2020"]').should('have.attr','src',WaysSrc)
      cy.get('[class="container blogs"]').contains(WaysTitle).click({force:true}) 
      cy.wait(2000)
      cy.url().should('include',WaysHref)
      cy.get('[id="post_title"]').should('contain',WaysTitle)
      cy.get('[id="post_date"]').should('contain',WaysDate)
      cy.get('[id="post_author"]').should('contain',WaysAuthor)
      cy.go('back')

      //cy.get('[class="lazyImg loaded"][alt="Being Thankful for Our Employees – the Key to Our Success!"]').should('have.attr','src',Being_ThankfulSrc)
      cy.get('[class="container blogs"]').contains(Being_ThankfulTitle).click({force:true}) 
      cy.wait(2000)
      cy.url().should('include',Being_ThankfulHref)
      cy.get('[id="post_title"]').should('contain',Being_ThankfulTitle)
      cy.get('[id="post_date"]').should('contain',Being_ThankfulDate)
      cy.get('[id="post_author"]').should('contain',Being_ThankfulAuthor)
      cy.go('back')
    
      
      //cy.get('[class="lazyImg loaded"][alt="Get to Know NGD Systems Executives: EVP Edition"]').should('have.attr','src',Get_to_KnowSrc)
      cy.get('[class="container blogs"]').contains(Get_to_KnowTitle).click({force:true}) 
      cy.wait(2000)
      cy.url().should('include',Get_to_KnowHref)
      cy.get('[id="post_title"]').should('contain',Get_to_KnowTitle)
      cy.get('[id="post_date"]').should('contain',Get_to_KnowDate)
      cy.get('[id="post_author"]').should('contain',Get_to_KnowAuthor)
      cy.go('back')

      //cy.get('[class="lazyImg loaded"][alt="Scott Shadley of NGD Systems Is Appointed Board Member for SNIA"]').should('have.attr','src',Appointed_BoardSrc)
      cy.get('[class="container blogs"]').contains(Appointed_BoardTitle).click({force:true}) 
      cy.wait(2000)
      cy.url().should('include',Appointed_BoardHref)
      cy.get('[id="post_title"]').should('contain',Appointed_BoardTitle)
      cy.get('[id="post_date"]').should('contain',Appointed_BoardDate)
      cy.get('[id="post_author"]').should('contain',Appointed_BoardAuthor)
      cy.go('back')

      //cy.get('[class="lazyImg loaded"][alt="NGD Systems Makes Another Stride Earning 30th Patent"]').should('have.attr','src',Earning_30thSrc)
      cy.get('[class="container blogs"]').contains(Earning_30thTitle).click({force:true}) 
      cy.wait(2000)
      cy.url().should('include',Earning_30thHref)
      cy.get('[id="post_title"]').should('contain',Earning_30thTitle)
      cy.get('[id="post_date"]').should('contain',Earning_30thDate)
      cy.get('[id="post_author"]').should('contain',Earning_30thAuthor)
      cy.go('back')

      cy.get('[class="pagination"]').contains('2').click()
      cy.wait(2000)
      cy.url().should('include','/?page=2')

}

Page2(){
    var SeamlessAlt= 'Seamless and Simple NVMe Computational Storage'
    var SeamlessHref = '/Seamless-and-Simple-NVMe-Computational-Storage'
    var SeamlessTitle = 'Seamless and Simple NVMe Computational Storage'
    var SeamlessDate ='Thursday, October 10 2019'
    var SeamlessAuthor = 'Dr. Vladimir Alves'
    var ExecutivesSrc= 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/OCT_3_2019/Thumbnail.jpg'
    var ExecutivesHref = '/Get-To-Know-NGD-Systems-Executives:-CEO-Edition'
    var ExecutivesTitle = 'Get To Know NGD Systems Executives: CEO Edition'
    var ExecutivesDate ='Thursday, October 3 2019'
    var ExecutivesAuthor = 'Nader Salessi'
    var Receives_HonorsSrc= 'https://www.ngdsystems.com/uploads/NEWS_GRAPHICS/SEPT_27_2019/Thumbnail.jpg'
    var Receives_HonorsHref = '/NGD-Systems-Receives-Honors-From-Analyst-and-Research-Firms'
    var Receives_HonorsTitle = 'NGD Systems Receives Honors From Analyst and Research Firms'
    var Receives_HonorsDate ='Friday, September 27 2019'
    var Receives_HonorsAuthor = 'Nader Salessi'
    var SuperheroSrc= 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/SEPT_19_2019/Thumbnail.jpg'
    var SuperheroHref = '/The-Superhero-of-Storage'
    var SuperheroTitle = 'The Superhero of Storage'
    var SuperheroDate ='Thursday, September 19 2019'
    var SuperheroAuthor = 'Scott Shadley'
    var AI_By_StormSrc = 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/SEPT_11_2019/Thumbnail.jpg'
    var AI_By_StormHref = '/NVMe-Computational-Storage-Takes-AI-By-Storm'
    var AI_By_StormTitle = 'NVMe Computational Storage Takes AI By Storm'
    var AI_By_StormDate ='Wednesday, September 11 2019'
    var AI_By_StormAuthor = 'Scott Shadley'
    var Event_SeasonSrc = 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/SEPT_03_2019/Thumbnail.jpg'
    var Event_SeasonHref = '/Event-Season-in-Full-Bloom:-HPC--AI-On-Wall-Street'
    var Event_SeasonTitle = 'Event Season in Full Bloom: HPC & AI On Wall Street'
    var Event_SeasonDate ='Tuesday, September 3 2019'
    var Event_SeasonAuthor = 'Scott Shadley'
    var Flash_MemorySrc = 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/AUGUST_21_2019/Thumbnail.jpg'
    var Flash_MemoryHref = '/Flash-Memory-Summit-2019:-The-Year-of-NVMe-Computational-Storage'
    var Flash_MemoryTitle = 'Flash Memory Summit 2019: The Year of NVMe Computational Storage'
    var Flash_MemoryDate ='Wednesday, August 21 2019'
    var Flash_MemoryAuthor = 'Scott Shadley'
    var NVMe_ComputationalSrc = 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/AUGUST_14_2019/Poster.jpg'
    var NVMe_ComputationalHref = '/NVMe-Computational-Storage:-What-It-Is-and-Why-You-Need-It'
    var NVMe_ComputationalTitle = 'NVMe Computational Storage: What It Is and Why You Need It'
    var NVMe_ComputationalDate ='Wednesday, August 14 2019'
    var NVMe_ComputationalAuthor = 'Scott Shadley'
    var NGD_SystemsSrc = 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/AUGUST_06_2019/Thumbnail.jpg'
    var NGD_SystemsHref = '/NGD-Systems-is-Heading-to-Flash-Memory-Summit-2019'
    var NGD_SystemsTitle = 'NGD Systems is Heading to Flash Memory Summit 2019!'
    var NGD_SystemsDate ='Tuesday, August 6 2019'
    var NGD_SystemsAuthor = 'Scott Shadley'
    var Survey_RevealsSrc = 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/JULY_30_2019/Thumbnail_V2.jpg'
    var Survey_RevealsHref = '/Survey-Reveals-Challenges-Enterprises-Face-in-Supporting-Growing-Edge-Workloads'
    var Survey_RevealsTitle = 'Survey Reveals Challenges Enterprises Face in Supporting Growing Edge Workloads'
    var Survey_RevealsDate ='Monday, July 29 2019'
    //var Survey_RevealsAuthor = 'Scott Shadley'
    var Tech_Trend_9Src = 'https://www.ngdsystems.com/uploads/BLOG_GRAPHICS/JULY_23_2019/Thumbnail.jpg'
    var Tech_Trend_9Href = '/Tech-Trend-9--Digital-Ethics-and-Privacy'
    var Tech_Trend_9Title = 'Tech Trend #9- Digital Ethics and Privacy'
    var Tech_Trend_9Date ='Tuesday, July 23 2019'
    var Tech_Trend_9Author = 'Scott Shadley'
    var Tech_Trend_8Href = '/Tech-Trend-8--VR-AR-MR--Storage-Real-Time-Analytics-and-Speed-Needs'
    var Tech_Trend_8Title = 'Tech Trend #8- VR, AR, MR- Storage, Real-Time Analytics, and Speed Needs'
    var Tech_Trend_8Date ='Tuesday, July 9 2019'
    var Tech_Trend_8Author = 'Scott Shadley'
    var Tech_Trend_7Href = '/Tech-Trend-7--Enhanced-Edge-Computing--NGD-is-Ahead-of-the-Trend'
    var Tech_Trend_7Title = 'Tech Trend #7- Enhanced Edge Computing- NGD is Ahead of the Trend'
    var Tech_Trend_7Date ='Tuesday, July 2 2019'
    var Tech_Trend_7Author = 'Scott Shadley'
    var Tech_Trend_6Href = '/Tech-Trend-6--Digital-Twins'
    var Tech_Trend_6Title = 'Tech Trend #6- Digital Twins'
    var Tech_Trend_6Date ='Thursday, June 27 2019'
    var Tech_Trend_6Author = 'Scott Shadley'


    //cy.get('[class="lazyImg loaded"]').should('have.attr','alt',SeamlessAlt)
    cy.get('[class="container blogs"]').contains(SeamlessTitle).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',SeamlessHref)
    cy.get('[id="post_title"]').should('contain',SeamlessTitle)
    cy.get('[id="post_date"]').should('contain',SeamlessDate)
    cy.get('[id="post_author"]').should('contain',SeamlessAuthor)
    cy.go('back')

    //cy.get('[alt="Get To Know NGD Systems Executives: CEO Edition"]').should('have.attr','src',ExecutivesSrc)
    cy.get('[class="container blogs"]').contains(ExecutivesTitle).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',ExecutivesHref)
    cy.get('[id="post_title"]').should('contain',ExecutivesTitle)
    cy.get('[id="post_date"]').should('contain',ExecutivesDate)
    cy.get('[id="post_author"]').should('contain',ExecutivesAuthor)
    cy.go('back')

    //cy.get('[alt="NGD Systems Receives Honors From Analyst and Research Firms"]').should('have.attr','src',Receives_HonorsSrc)
    cy.get('[class="container blogs"]').contains(Receives_HonorsTitle).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',Receives_HonorsHref)
    cy.get('[id="post_title"]').should('contain',Receives_HonorsTitle)
    cy.get('[id="post_date"]').should('contain',Receives_HonorsDate)
    cy.get('[id="post_author"]').should('contain',Receives_HonorsAuthor)
    cy.go('back')

    //cy.get('[alt="The Superhero of Storage"]').should('have.attr','src',SuperheroSrc)
    cy.get('[class="container blogs"]').contains(SuperheroTitle).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',SuperheroHref)
    cy.get('[id="post_title"]').should('contain',SuperheroTitle)
    cy.get('[id="post_date"]').should('contain',SuperheroDate)
    cy.get('[id="post_author"]').should('contain',SuperheroAuthor)
    cy.go('back')

    //cy.get('[alt="NVMe Computational Storage Takes AI By Storm"]').should('have.attr','src',AI_By_StormSrc)
    cy.get('[class="container blogs"]').contains(AI_By_StormTitle).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',AI_By_StormHref)
    cy.get('[id="post_title"]').should('contain',AI_By_StormTitle)
    cy.get('[id="post_date"]').should('contain',AI_By_StormDate)
    cy.get('[id="post_author"]').should('contain',AI_By_StormAuthor)
    cy.go('back')

    //cy.get('[alt="Event Season in Full Bloom: HPC & AI On Wall Street"]').should('have.attr','src',Event_SeasonSrc)
    cy.get('[class="container blogs"]').contains(Event_SeasonTitle).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',Event_SeasonHref)
    cy.get('[id="post_title"]').should('contain',Event_SeasonTitle)
    cy.get('[id="post_date"]').should('contain',Event_SeasonDate)
    cy.get('[id="post_author"]').should('contain',Event_SeasonAuthor)
    cy.go('back')

    //cy.get('[alt="Flash Memory Summit 2019: The Year of NVMe Computational Storage"]').should('have.attr','src',Flash_MemorySrc)
    cy.get('[class="container blogs"]').contains(Flash_MemoryTitle).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',Flash_MemoryHref)
    cy.get('[id="post_title"]').should('contain',Flash_MemoryTitle)
    cy.get('[id="post_date"]').should('contain',Flash_MemoryDate)
    cy.get('[id="post_author"]').should('contain',Flash_MemoryAuthor)
    cy.go('back')

    //cy.get('[alt="NVMe Computational Storage: What It Is and Why You Need It"]').should('have.attr','src',NVMe_ComputationalSrc)
    cy.get('[class="container blogs"]').contains(NVMe_ComputationalTitle).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',NVMe_ComputationalHref)
    cy.get('[id="post_title"]').should('contain',NVMe_ComputationalTitle)
    cy.get('[id="post_date"]').should('contain',NVMe_ComputationalDate)
    cy.get('[id="post_author"]').should('contain',NVMe_ComputationalAuthor)
    cy.go('back')

    //cy.get('[alt="NGD Systems is Heading to Flash Memory Summit 2019!"]').should('have.attr','src',NGD_SystemsSrc)
    cy.get('[class="container blogs"]').contains(NGD_SystemsTitle).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',NGD_SystemsHref)
    cy.get('[id="post_title"]').should('contain',NGD_SystemsTitle)
    cy.get('[id="post_date"]').should('contain',NGD_SystemsDate)
    cy.get('[id="post_author"]').should('contain',NGD_SystemsAuthor)
    cy.go('back')

    //cy.get('[alt="Survey Reveals Challenges Enterprises Face in Supporting Growing Edge Workloads"]').should('have.attr','src',Survey_RevealsSrc)
    cy.get('[class="container blogs"]').contains(Survey_RevealsTitle).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',Survey_RevealsHref)
    cy.get('[id="post_title"]').should('contain',Survey_RevealsTitle)
    cy.get('[id="post_date"]').should('contain',Survey_RevealsDate)
    //cy.get('[id="post_author"]').should('contain',Survey_RevealsAuthor)
    cy.go('back')

    //cy.get('[alt="Tech Trend #9- Digital Ethics and Privacy"]').should('have.attr','src',Tech_Trend_9Src)
    cy.get('[class="container blogs"]').contains(Tech_Trend_9Title).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',Tech_Trend_9Href)
    cy.get('[id="post_title"]').should('contain',Tech_Trend_9Title)
    cy.get('[id="post_date"]').should('contain',Tech_Trend_9Date)
    cy.get('[id="post_author"]').should('contain',Tech_Trend_9Author)
    cy.go('back')

    cy.get('[class="container blogs"]').contains(Tech_Trend_8Title).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',Tech_Trend_8Href)
    cy.get('[id="post_title"]').should('contain',Tech_Trend_8Title)
    cy.get('[id="post_date"]').should('contain',Tech_Trend_8Date)
    cy.get('[id="post_author"]').should('contain',Tech_Trend_8Author)
    cy.go('back')

    cy.get('[class="container blogs"]').contains(Tech_Trend_7Title).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',Tech_Trend_7Href)
    cy.get('[id="post_title"]').should('contain',Tech_Trend_7Title)
    cy.get('[id="post_date"]').should('contain',Tech_Trend_7Date)
    cy.get('[id="post_author"]').should('contain',Tech_Trend_7Author)
    cy.go('back')

    cy.get('[class="container blogs"]').contains(Tech_Trend_6Title).click({force:true}) 
    cy.wait(2000)
    cy.url().should('include',Tech_Trend_6Href)
    cy.get('[id="post_title"]').should('contain',Tech_Trend_6Title)
    cy.get('[id="post_date"]').should('contain',Tech_Trend_6Date)
    cy.get('[id="post_author"]').should('contain',Tech_Trend_6Author)
    cy.go('back')

    cy.get('[class="pagination"]').contains('3').click()
    cy.wait(2000)
    cy.url().should('include','?page=3')
}

}export default Blog