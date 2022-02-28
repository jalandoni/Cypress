///<reference types='cypress'/>
class Blog_2 {

    Page_3(){
        var Tech_trend5Href = '/Tech-Trend-5--Augmented-Analytics--Horse-and-Buggy-Stage-but-Prospects-for-Automation-Look-Good'
        var Tech_trend5Title = 'Tech Trend #5- Augmented Analytics- Horse and Buggy Stage but Prospects for Automation Look Good'
        var Tech_trend5Date ='Tuesday, June 25 2019'
        var Tech_trend5Author = 'Scott Shadley'
        var Tech_trend4Href = '/Blockchains-is-Tech-Trend-4--In-the-Market-for-a-Used-Airplane-Part'
        var Tech_trend4Title = 'Blockchains is Tech Trend #4- In the Market for a Used Airplane Part?'
        var Tech_trend4Date ='Thursday, June 20 2019'
        var Tech_trend4Author = 'Scott Shadley'
        var Tech_trend3Href = '/Tech-Trend-3-Autonomous-Devices:-Agriculture-Needs-Techies'
        var Tech_trend3Title = 'Tech Trend #3 Autonomous Devices: Agriculture Needs Techies'
        var Tech_trend3Date ='Tuesday, June 18 2019'
        var Tech_trend3Author = 'Scott Shadley'
        var Product_LaunchesHref = '/When-It-Comes-to-Product-Launches-Why-do-the-Marketing-Guys-Have-All-the-Fun'
        var Product_LaunchesTitle = 'When It Comes to Product Launches, Why do the Marketing Guys Have All the Fun?'
        var Product_LaunchesDate ='Thursday, June 13 2019'
        var Product_LaunchesAuthor = 'Richard Mataya'
        var Big_CapablitiesHref = '/Today-Marks-the-Birth-of-Some-Big-Capabilities-in-a-Very-Small-Package'
        var Big_CapablitiesTitle = 'Today Marks the Birth of Some Big Capabilities in a Very Small Package'
        var Big_CapablitiesDate ='Tuesday, June 11 2019'
        var Big_CapablitiesAuthor = 'Scott Shadley'
        var Tech_trend2Href = '/Today-Marks-the-Birth-of-Some-Big-Capabilities-in-a-Very-Small-Package'
        var Tech_trend2Title = 'Today Marks the Birth of Some Big Capabilities in a Very Small Package'
        var Tech_trend2Date ='Tuesday, June 11 2019'
        var Tech_trend2Author = 'Scott Shadley'
        var Nine_techHref = '/Nine-Tech-Trends-and-the-5G-Debate'
        var Nine_techTitle = 'Nine Tech Trends and the 5G Debate'
        var Nine_techDate ='Tuesday, June 4 2019'
        var Nine_techAuthor = 'Eli Tiomkin'
        var Even_MosquitoesHref = '/Even-Mosquitoes-Sort-First-'
        var Even_MosquitoesTitle = 'Even Mosquitoes Sort First'
        var Even_MosquitoesDate ='Thursday, May 30 2019'
        var Even_MosquitoesAuthor = 'Scott Shadley'
        var Real_timeHref = '/RealTime-Data-Analytics-Saves-Lives-'
        var Real_timeTitle = 'Real-Time Data Analytics Saves Lives'
        var Real_timeDate ='Tuesday, May 28 2019'
        var Real_timeAuthor = 'Scott Shadley'
        var OCTANe_TIF2Href = '/The-Evolution-of-Data-and-Technology-OCTANe-TIF-Part-'
        var OCTANe_TIF2Title = 'The Evolution of Data and Technology, OCTANe TIF Part 2'
        var OCTANe_TIF2Date ='Thursday, May 2 2019'
        var OCTANe_TIF2Author = 'Scott Shadley'
        var Innovation_Part1Href = '/Innovation-Part-'
        var Innovation_Part1Title = 'Innovation, Part 1'
        var Innovation_Part1Date ='Tuesday, April 30 2019'
        var Innovation_Part1Author = 'Scott Shadley'
        var Edge_need2Href = '/Edge-Computing%E2%80%99s-Need-for-NVMe-Computational-Storage-Part-2'
        var Edge_need2Title = 'Edge Computing’s Need for NVMe Computational Storage, Part 2'
        var Edge_need2Date ='Thursday, April 25 2019'
        var Edge_need2Author = 'Scott Shadley'
        var Edge_needHref = '/Edge-Computing%E2%80%99s-Need-for-NVMe-Computational-Storage'
        var Edge_needTitle = 'Edge Computing’s Need for NVMe Computational Storage'
        var Edge_needDate ='Tuesday, April 23 2019'
        var Edge_needAuthor = 'Scott Shadley'
        var Big_dataHref = '/Big-Data-Collect-it-All-Sort-it-Later'
        var Big_dataTitle = 'Big Data: Collect it All, Sort it Later?'
        var Big_dataDate ='Thursday, April 18 2019'
        var Big_dataAuthor = 'Scott Shadley'


    
        cy.get('[class="container blogs"]').contains(Tech_trend5Title).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Tech_trend5Href)
        cy.get('[id="post_title"]').should('contain',Tech_trend5Title)
        cy.get('[id="post_date"]').should('contain',Tech_trend5Date)
        cy.get('[id="post_author"]').should('contain',Tech_trend5Author)
        cy.go('back')
        
        cy.get('[class="container blogs"]').contains(Tech_trend4Title).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Tech_trend4Href)
        cy.get('[id="post_title"]').should('contain',Tech_trend4Title)
        cy.get('[id="post_date"]').should('contain',Tech_trend4Date)
        cy.get('[id="post_author"]').should('contain',Tech_trend4Author)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Tech_trend3Title).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Tech_trend3Href)
        cy.get('[id="post_title"]').should('contain',Tech_trend3Title)
        cy.get('[id="post_date"]').should('contain',Tech_trend3Date)
        cy.get('[id="post_author"]').should('contain',Tech_trend3Author)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Product_LaunchesTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Product_LaunchesHref)
        cy.get('[id="post_title"]').should('contain',Product_LaunchesTitle)
        cy.get('[id="post_date"]').should('contain',Product_LaunchesDate)
        cy.get('[id="post_author"]').should('contain',Product_LaunchesAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Big_CapablitiesTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Big_CapablitiesHref)
        cy.get('[id="post_title"]').should('contain',Big_CapablitiesTitle)
        cy.get('[id="post_date"]').should('contain',Big_CapablitiesDate)
        cy.get('[id="post_author"]').should('contain',Big_CapablitiesAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Tech_trend2Title).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Tech_trend2Href)
        cy.get('[id="post_title"]').should('contain',Tech_trend2Title)
        cy.get('[id="post_date"]').should('contain',Tech_trend2Date)
        cy.get('[id="post_author"]').should('contain',Tech_trend2Author)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Nine_techTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Nine_techHref)
        cy.get('[id="post_title"]').should('contain',Nine_techTitle)
        cy.get('[id="post_date"]').should('contain',Nine_techDate)
        cy.get('[id="post_author"]').should('contain',Nine_techAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Even_MosquitoesTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Even_MosquitoesHref)
        cy.get('[id="post_title"]').should('contain',Even_MosquitoesTitle)
        cy.get('[id="post_date"]').should('contain',Even_MosquitoesDate)
        cy.get('[id="post_author"]').should('contain',Even_MosquitoesAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Real_timeTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Real_timeHref)
        cy.get('[id="post_title"]').should('contain',Real_timeTitle)
        cy.get('[id="post_date"]').should('contain',Real_timeDate)
        cy.get('[id="post_author"]').should('contain',Real_timeAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(OCTANe_TIF2Title).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',OCTANe_TIF2Href)
        cy.get('[id="post_title"]').should('contain',OCTANe_TIF2Title)
        cy.get('[id="post_date"]').should('contain',OCTANe_TIF2Date)
        cy.get('[id="post_author"]').should('contain',OCTANe_TIF2Author)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Innovation_Part1Title).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Innovation_Part1Href)
        cy.get('[id="post_title"]').should('contain',Innovation_Part1Title)
        cy.get('[id="post_date"]').should('contain',Innovation_Part1Date)
        cy.get('[id="post_author"]').should('contain',Innovation_Part1Author)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Edge_need2Title).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Edge_need2Href)
        cy.get('[id="post_title"]').should('contain',Edge_need2Title)
        cy.get('[id="post_date"]').should('contain',Edge_need2Date)
        cy.get('[id="post_author"]').should('contain',Edge_need2Author)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Edge_needTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Edge_needHref)
        cy.get('[id="post_title"]').should('contain',Edge_needTitle)
        //cy.get('[id="post_date"]').should('contain',Edge_needDate)
        cy.get('[id="post_author"]').should('contain',Edge_needAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Big_dataTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Big_dataHref)
        cy.get('[id="post_title"]').should('contain',Big_dataTitle)
        cy.get('[id="post_date"]').should('contain',Big_dataDate)
        cy.get('[id="post_author"]').should('contain',Big_dataAuthor)
        cy.go('back')

        cy.get('[class="pagination"]').contains('4').click()
        cy.wait(2000)
        cy.url().should('include','?page=4')
        cy.wait(3000)
    }

    Page_4(){
        var AI_dataHref = '/The-Progress-of-AI-and-Big-Data-in-Business'
        var AI_dataTitle = 'The Progress of AI and Big Data in Business'
        var AI_dataDate ='Tuesday, April 16 2019'
        var AI_dataAuthor = 'Scott Shadley'
        var Data_MachineHref = '/Big-Data-Machine-Learning-and-Newport-NVMe-Computational-Storage'
        var Data_MachineTitle = 'Big Data, Machine Learning, and Newport NVMe Computational Storage'
        var Data_MachineDate ='Thursday, April 11 2019'
        var Data_MachineAuthor = 'Scott Shadley'
        var NAB_showHref = '/NAB-Show-2019-NVMe-Computational-Storage-and-Video-Analytics'
        var NAB_showTitle = 'NAB Show 2019, NVMe Computational Storage and Video Analytics'
        var NAB_showDate ='Tuesday, April 9 2019'
        var NAB_showAuthor = 'Scott Shadley'
        var Eliminate_latencyHref = '/How-NVMe-Computational-Storage-Can-Eliminate-Latency-in-Content-Delivery-Networks'
        var Eliminate_latencyTitle = 'How NVMe Computational Storage Can Eliminate Latency in Content Delivery Networks'
        var Eliminate_latencyDate ='Thursday, April 4 2019'
        var Eliminate_latencyAuthor = 'Scott Shadley'
        var Cost_LatencyHref = '/The-Cost-of-Latency-for-Content-Delivery-Networks'
        var Cost_LatencyTitle = 'The Cost of Latency for Content Delivery Networks'
        var Cost_LatencyDate ='Tuesday, April 2 2019'
        var Cost_LatencyAuthor = 'Scott Shadley'
        var Launches_NewportHref = '/NGD-Launches-the-Newport-U2-SSD-%E2%80%93-The-Most-Advanced-SSD-Available-Today'
        var Launches_NewportTitle = 'NGD Launches the Newport U.2 SSD – The Most Advanced SSD Available Today'
        var Launches_NewportDate ='Monday, April 1 2019'
        var Launches_NewportAuthor = 'NGD Systems'
        var Newport_DesignedHref = '/The-Newport-U2-SSD-%E2%80%93-Designed-for-Today-and-For-the-Future'
        var Newport_DesignedTitle = 'The Newport U.2 SSD – Designed for Today and For the Future'
        var Newport_DesignedDate ='Monday, April 1 2019'
        var Newport_DesignedAuthor = 'NGD Systems'
        var Securely_AcceleratingHref = '/Securely-Accelerating-Content-Delivery-Networks'
        var Securely_AcceleratingTitle = 'Securely Accelerating Content Delivery Networks'
        var Securely_AcceleratingDate ='Thursday, March 28 2019'
        var Securely_AcceleratingAuthor = 'NGD Systems'
        var Private_cloudsHref = '/NVMe-Computational-Storage-and-Data-Security-for-Private-Clouds'
        var Private_cloudsTitle = 'NVMe Computational Storage and Data Security for Private Clouds'
        var Private_cloudsDate ='Tuesday, March 26 2019'
        var Private_cloudsAuthor = 'NGD Systems'
        var Artificial_applicationHref = '/The-NGD-Systems-and-AIC-Solution-for-Artificial-Intelligence-Applications'
        var Artificial_applicationTitle = 'The NGD Systems and AIC Solution for Artificial Intelligence Applications'
        var Artificial_applicationDate ='Thursday, March 21 2019'
        var Artificial_applicationAuthor = 'NGD Systems'
        var GTC_2019Href = '/GTC-2019-Artificial-Intelligence-and-NVMe-Computational-Storage'
        var GTC_2019Title = 'GTC 2019, Artificial Intelligence, and NVMe Computational Storage'
        var GTC_2019Date ='Tuesday, March 19 2019'
        var GTC_2019Author = 'NGD Systems'
        var Open_Project2Href = '/Open-Compute-Project-and-NGD-Systems-NVMe-Computational-Storage--Part-2'
        var Open_Project2Title = 'Open Compute Project and NGD Systems NVMe Computational Storage – Part 2'
        var Open_Project2Date ='Thursday, March 14 2019'
        var Open_Project2Author = 'NGD Systems'
        var Open_ProjectHref = '/Open-Compute-Project-and-NGD-Systems-NVMe-Computational-Storage--A-Perfect-Match'
        var Open_ProjectTitle = 'Open Compute Project and NGD Systems NVMe Computational Storage – A Perfect Match!'
        var Open_ProjectDate ='Tuesday, March 12 2019'
        var Open_ProjectAuthor = 'NGD Systems'

        cy.get('[class="container blogs"]').contains(AI_dataTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',AI_dataHref)
        cy.get('[id="post_title"]').should('contain', AI_dataTitle)
        cy.get('[id="post_date"]').should('contain', AI_dataDate)
        cy.get('[id="post_author"]').should('contain', AI_dataAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Data_MachineTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Data_MachineHref)
        cy.get('[id="post_title"]').should('contain', Data_MachineTitle)
        cy.get('[id="post_date"]').should('contain', Data_MachineDate)
        cy.get('[id="post_author"]').should('contain', Data_MachineAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(NAB_showTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',NAB_showHref)
        cy.get('[id="post_title"]').should('contain', NAB_showTitle)
        cy.get('[id="post_date"]').should('contain', NAB_showDate)
        cy.get('[id="post_author"]').should('contain', NAB_showAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Eliminate_latencyTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Eliminate_latencyHref)
        cy.get('[id="post_title"]').should('contain', Eliminate_latencyTitle)
        cy.get('[id="post_date"]').should('contain', Eliminate_latencyDate)
        cy.get('[id="post_author"]').should('contain', Eliminate_latencyAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Cost_LatencyTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Cost_LatencyHref)
        cy.get('[id="post_title"]').should('contain', Cost_LatencyTitle)
        cy.get('[id="post_date"]').should('contain', Cost_LatencyDate)
        cy.get('[id="post_author"]').should('contain', Cost_LatencyAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Launches_NewportTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Launches_NewportHref)
        cy.get('[id="post_title"]').should('contain', Launches_NewportTitle)
        cy.get('[id="post_date"]').should('contain', Launches_NewportDate)
        cy.get('[id="post_author"]').should('contain', Launches_NewportAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Newport_DesignedTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Newport_DesignedHref)
        cy.get('[id="post_title"]').should('contain', Newport_DesignedTitle)
        cy.get('[id="post_date"]').should('contain', Newport_DesignedDate)
        cy.get('[id="post_author"]').should('contain', Newport_DesignedAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Securely_AcceleratingTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Securely_AcceleratingHref)
        cy.get('[id="post_title"]').should('contain', Securely_AcceleratingTitle)
        cy.get('[id="post_date"]').should('contain', Securely_AcceleratingDate)
        cy.get('[id="post_author"]').should('contain', Securely_AcceleratingAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Private_cloudsTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Private_cloudsHref)
        cy.get('[id="post_title"]').should('contain', Private_cloudsTitle)
        cy.get('[id="post_date"]').should('contain', Private_cloudsDate)
        cy.get('[id="post_author"]').should('contain', Private_cloudsAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Artificial_applicationTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Artificial_applicationHref)
        cy.get('[id="post_title"]').should('contain', Artificial_applicationTitle)
        cy.get('[id="post_date"]').should('contain', Artificial_applicationDate)
        cy.get('[id="post_author"]').should('contain', Artificial_applicationAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(GTC_2019Title).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',GTC_2019Href)
        cy.get('[id="post_title"]').should('contain', GTC_2019Title)
        cy.get('[id="post_date"]').should('contain', GTC_2019Date)
        cy.get('[id="post_author"]').should('contain', GTC_2019Author)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Open_Project2Title).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Open_Project2Href)
        cy.get('[id="post_title"]').should('contain', Open_Project2Title)
        cy.get('[id="post_date"]').should('contain', Open_Project2Date)
        cy.get('[id="post_author"]').should('contain', Open_Project2Author)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Open_ProjectTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Open_ProjectHref)
        cy.get('[id="post_title"]').should('contain', Open_ProjectTitle)
        cy.get('[id="post_date"]').should('contain', Open_ProjectDate)
        cy.get('[id="post_author"]').should('contain', Open_ProjectAuthor)
        cy.go('back')

        //CAN'T BE OPEN BLOG

        // cy.get('[class="container blogs"]').contains(Storage_marketTitle).click({force:true}) 
        // cy.wait(2000)
        // cy.url().should('include',Storage_marketHref)
        // cy.get('[id="post_title"]').should('contain', Storage_marketTitle)
        // cy.get('[id="post_date"]').should('contain', Storage_marketDate)
        // cy.get('[id="post_author"]').should('contain', Storage_marketAuthor)
        // cy.go('back')

        cy.get('[class="pagination"]').contains('5').click()
        cy.wait(2000)
        cy.url().should('include','?page=5')
        cy.wait(3000)
    }
  

}export default Blog_2