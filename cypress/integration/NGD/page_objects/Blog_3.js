///<reference types='cypress'/>
class Blog_3 {
    Page_5(){
        var MWC_19Href = '/Mobile-World-Congress-2019:-5G-Autonomous-Vehicles-and-How-These-Demand-New-Storage-and-Processing-Solutions'
        var MWC_19Title = 'Mobile World Congress 2019: 5G, Autonomous Vehicles, and How These Demand New Storage and Processing Solutions'
        var MWC_19Date ='Tuesday, February 26 2019'
        var MWC_19Author = 'NGD Systems'
        var Using_NVMeHref = '/Using-NVMe-Computational-Storage-to-Help-Reduce-Data-Movement-for-Real-Time-Analytic-Solutions'
        var Using_NVMeTitle = 'Using NVMe Computational Storage to Help Reduce Data Movement for Real-Time Analytic Solutions'
        var Using_NVMeDate ='Thursday, February 21 2019'
        var Using_NVMeAuthor = 'NGD Systems'
        var Bringing_IntelligenceHref = '/NVMe-Computational-Storage--A-Compelling-Solution-for-Bringing-Intelligence-to-the-Edge'
        var Bringing_IntelligenceTitle = 'NVMe Computational Storage- A Compelling Solution for Bringing Intelligence to the Edge'
        var Bringing_IntelligenceDate ='Tuesday, February 19 2019'
        var Bringing_IntelligenceAuthor = 'NGD Systems'
        var Advanced_PlatformHref = '/The-NGD-Systems-Newport:-The-Most-Advanced-Platform-Today-for-NVMe-Computational-Storage'
        var Advanced_PlatformTitle = 'The NGD Systems Newport: The Most Advanced Platform Today for NVMe Computational Storage'
        var Advanced_PlatformDate ='Thursday, February 7 2019'
        var Advanced_PlatformAuthor = 'NGD Systems'
        var Data_MovementHref = '/Data-Movement%E2%80%99s-Impact-on-Performance-of-Realtime-Analytic-Solutions'
        var Data_MovementTitle = 'Data Movement’s Impact on Performance of Realtime Analytic Solutions'
        var Data_MovementDate ='Tuesday, February 5 2019'
        var Data_MovementAuthor = 'NGD Systems'
        var Simplifying_ApplicationHref = '/Simplifying-Application-Porting'
        var Simplifying_ApplicationTitle = 'Simplifying Application Porting'
        var Simplifying_ApplicationDate ='Thursday, January 31 2019'
        var Simplifying_ApplicationAuthor = 'NGD Systems'
        var Storage_isPersistentHref = '/Why-the-Need-for-NVMe-Computational-Storage-Is-Persistent'
        var Storage_isPersistentTitle = 'Why the Need for NVMe Computational Storage Is Persistent'
        var Storage_isPersistentDate ='Tuesday, January 29 2019'
        var Storage_isPersistentAuthor = 'NGD Systems'
        var Moving_ApplicationsHref = '/The-Hurdles-to-Moving-Applications-from-One-Compute-Platform-to-Another'
        var Moving_ApplicationsTitle = 'The Hurdles to Moving Applications from One Compute Platform to Another'
        var Moving_ApplicationsDate ='Thursday, January 24 2019'
        var Moving_ApplicationsAuthor = 'NGD Systems'
        var Compute_GapHref = '/NVMe-Computational-Storage-as-a-Bridge-of-the-Compute-Storage-Gap'
        var Compute_GapTitle = 'NVMe Computational Storage as a Bridge of the Compute-Storage Gap'
        var Compute_GapDate ='Tuesday, January 22 2019'
        var Compute_GapAuthor = 'NGD Systems'
        var EmergenceHref = '/The-Emergence-of-RealTime-Analytics-for-Business-Intelligence'
        var EmergenceTitle = 'The Emergence of Real-Time Analytics for Business Intelligence'
        var EmergenceDate ='Thursday, January 17 2019'
        var EmergenceAuthor = 'NGD Systems'
        var Gap_betweenHref = '/The-Gap-Between-Storage-Capacity-and-CFI-Bus-and-PCI-Express'
        var Gap_betweenTitle = 'The Gap Between Storage Capacity, and CFI Bus, and PCI Express'
        var Gap_betweenDate ='Tuesday, January 15 2019'
        var Gap_betweenAuthor = 'NGD Systems'
        var Applications_endHref = '/Why-Applications-End-Up-on-Specific-Compute-Platforms'
        var Applications_endTitle = 'Why Applications End Up on Specific Compute Platforms'
        var Applications_endDate ='Thursday, January 10 2019'
        var Applications_endAuthor = 'NGD Systems'

        //Cannot be open
        // var Edge_computingHref = '/NVMe-Computational-Storage--A-Compelling-Solution-for-Bringing-Intelligence-to-the-Edge'
        // var Edge_computingTitle = 'NVMe Computational Storage- A Compelling Solution for Bringing Intelligence to the Edge'
        // var Edge_computingDate ='Tuesday, February 19 2019'
        // var Edge_computingAuthor = 'NGD Systems'



        cy.get('[class="container blogs"]').contains(MWC_19Title).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',MWC_19Href)
        cy.get('[id="post_title"]').should('contain', MWC_19Title)
        cy.get('[id="post_date"]').should('contain', MWC_19Date)
        cy.get('[id="post_author"]').should('contain', MWC_19Author)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Using_NVMeTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Using_NVMeHref)
        cy.get('[id="post_title"]').should('contain', Using_NVMeTitle)
        cy.get('[id="post_date"]').should('contain', Using_NVMeDate)
        cy.get('[id="post_author"]').should('contain', Using_NVMeAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Bringing_IntelligenceTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Bringing_IntelligenceHref)
        cy.get('[id="post_title"]').should('contain', Bringing_IntelligenceTitle)
        cy.get('[id="post_date"]').should('contain', Bringing_IntelligenceDate)
        cy.get('[id="post_author"]').should('contain', Bringing_IntelligenceAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Bringing_IntelligenceTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Bringing_IntelligenceHref)
        cy.get('[id="post_title"]').should('contain', Bringing_IntelligenceTitle)
        cy.get('[id="post_date"]').should('contain', Bringing_IntelligenceDate)
        cy.get('[id="post_author"]').should('contain', Bringing_IntelligenceAuthor)
        cy.go('back')

        //BLOG CANNOT BE OPEN
        // cy.get('[class="container blogs"]').contains(Edge_computingTitle).click({force:true}) 
        // cy.wait(2000)
        // cy.url().should('include',Edge_computingHref)
        // cy.get('[id="post_title"]').should('contain', Edge_computingTitle)
        // cy.get('[id="post_date"]').should('contain', Edge_computingDate)
        // cy.get('[id="post_author"]').should('contain', Edge_computingAuthor)
        // cy.go('back')

        cy.get('[class="container blogs"]').contains(Advanced_PlatformTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Advanced_PlatformHref)
        cy.get('[id="post_title"]').should('contain', Advanced_PlatformTitle)
        cy.get('[id="post_date"]').should('contain', Advanced_PlatformDate)
        cy.get('[id="post_author"]').should('contain', Advanced_PlatformAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Data_MovementTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Data_MovementHref)
        cy.get('[id="post_title"]').should('contain', Data_MovementTitle)
        cy.get('[id="post_date"]').should('contain', Data_MovementDate)
        cy.get('[id="post_author"]').should('contain', Data_MovementAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Simplifying_ApplicationTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Simplifying_ApplicationHref)
        cy.get('[id="post_title"]').should('contain', Simplifying_ApplicationTitle)
        cy.get('[id="post_date"]').should('contain', Simplifying_ApplicationDate)
        cy.get('[id="post_author"]').should('contain', Simplifying_ApplicationAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Storage_isPersistentTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Storage_isPersistentHref)
        cy.get('[id="post_title"]').should('contain', Storage_isPersistentTitle)
        cy.get('[id="post_date"]').should('contain', Storage_isPersistentDate)
        cy.get('[id="post_author"]').should('contain', Storage_isPersistentAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Moving_ApplicationsTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Moving_ApplicationsHref)
        cy.get('[id="post_title"]').should('contain', Moving_ApplicationsTitle)
        cy.get('[id="post_date"]').should('contain', Moving_ApplicationsDate)
        cy.get('[id="post_author"]').should('contain', Moving_ApplicationsAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Compute_GapTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Compute_GapHref)
        cy.get('[id="post_title"]').should('contain', Compute_GapTitle)
        cy.get('[id="post_date"]').should('contain', Compute_GapDate)
        cy.get('[id="post_author"]').should('contain', Compute_GapAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(EmergenceTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',EmergenceHref)
        cy.get('[id="post_title"]').should('contain', EmergenceTitle)
        cy.get('[id="post_date"]').should('contain', EmergenceDate)
        cy.get('[id="post_author"]').should('contain', EmergenceAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Gap_betweenTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Gap_betweenHref)
        cy.get('[id="post_title"]').should('contain', Gap_betweenTitle)
        cy.get('[id="post_date"]').should('contain', Gap_betweenDate)
        cy.get('[id="post_author"]').should('contain', Gap_betweenAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Applications_endTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Applications_endHref)
        cy.get('[id="post_title"]').should('contain', Applications_endTitle)
        cy.get('[id="post_date"]').should('contain', Applications_endDate)
        cy.get('[id="post_author"]').should('contain', Applications_endAuthor)
        cy.go('back')

        cy.get('[class="pagination"]').contains('6').click()
        cy.wait(2000)
        cy.url().should('include','?page=6')
        cy.wait(3000)

    }

    Page_6(){
        var Technology_InflectionsHref = '/Why-Technology-Inflections-and-Innovations-are-Often-Driven-by-Performance-Mismatches'
        var Technology_InflectionsTitle = 'Why Technology Inflections and Innovations are Often Driven by Performance Mismatches'
        var Technology_InflectionsDate ='Wednesday, January 9 2019'
        var Technology_InflectionsAuthor = 'NGD Systems'
        var Embedded_ComputingHref = '/Using-NVMe-Computational-Storage-to-Solve-the-Issues-with-Embedded-Computing'
        var Embedded_ComputingTitle = 'Using NVMe Computational Storage to Solve the Issues with Embedded Computing'
        var Embedded_ComputingDate ='Thursday, December 20 2018'
        var Embedded_ComputingAuthor = 'NGD Systems'
        var Looking_2019Href = '/NGD-Systems:-Looking-forward-to-2019'
        var Looking_2019Title = 'NGD Systems: Looking forward to 2019'
        var Looking_2019Date ='Tuesday, December 18 2018'
        var Looking_2019Author = 'NGD Systems'
        var Technology_2018Href = '/Technology:-2018-Was-Great-2019-Will-be-Greater'
        var Technology_2018Title = 'Technology: 2018 Was Great, 2019 Will be Greater!'
        var Technology_2018Date ='Thursday, December 13 2018'
        var Technology_2018Author = 'NGD Systems'
        var Great_Year2018Href = '/2018-Has-Been-A-Great-Year-for-NGD-Systems'
        var Great_Year2018Title = '2018 Has Been A Great Year for NGD Systems!'
        var Great_Year2018Date ='Tuesday, December 11 2018'
        var Great_Year2018Author = 'NGD Systems'
        var Performance_IssuesHref = '/How-Embedded-and-ForwardDeployed-Workloads-Pose-Special-Performance-Issues'
        var Performance_IssuesTitle = 'How Embedded and Forward-Deployed Workloads Pose Special Performance Issues'
        var Performance_IssuesDate ='Thursday, December 6 2018'
        var Performance_IssuesAuthor = 'NGD Systems'
        var Recognizing_asCoolVendorHref = '/Thanks-to-the-Technology-Marketplace-(and-Gartner)-for-Recognizing-NGD-Systems-as-a-Cool-Vendor'
        var Recognizing_asCoolVendorTitle = 'Thanks to the Technology Marketplace (and Gartner) for Recognizing NGD Systems as a Cool Vendor'
        var Recognizing_asCoolVendorDate ='Tuesday, December 4 2018'
        var Recognizing_asCoolVendorAuthor = 'NGD Systems'
        var Gartner_SaysHref = '/Gartner-Says-We-Are-A-Cool-Vendor-Let%E2%80%99s-Get-%E2%80%9CTechy%E2%80%9D-About-It'
        var Gartner_SaysTitle = 'Gartner Says We Are A Cool Vendor. Let’s Get “Techy” About It!'
        var Gartner_SaysDate ='Thursday, November 29 2018'
        var Gartner_SaysAuthor = 'NGD Systems'
        var NGD_Systems_CVHref = '/NGD-Systems-is-a-Cool-Vendor-in-Storage-Technologies-At-Least-According-To-Gartner'
        var NGD_Systems_CVTitle = 'NGD Systems is a “Cool Vendor” in Storage Technologies, At Least According To Gartner'
        var NGD_Systems_CVDate ='Tuesday, November 27 2018'
        var NGD_Systems_CVAuthor = 'NGD Systems'
        var DefenseHref = '/Defense-Intelligence-Petabyte-Scale-Problem'
        var DefenseTitle = 'Defense, Intelligence, Petabyte-Scale Problem'
        var DefenseDate ='Wednesday, November 21 2018'
        var DefenseAuthor = 'NGD Systems'
        var HPC_ProblemsHref = '/What-Types-of-HPC-Problems-Can-NVMe-Computational-Storage-Solve'
        var HPC_ProblemsTitle = 'What Types of HPC Problems Can NVMe Computational Storage Solve?'
        var HPC_ProblemsDate ='Tuesday, November 20 2018'
        var HPC_ProblemsAuthor = 'NGD Systems'
        var HPC_RelevantHref = '/Why-HighPerformance-Computing-Still-is-Relevant'
        var HPC_RelevantTitle = 'Why High-Performance Computing Still is Relevant'
        var HPC_RelevantDate ='Friday, November 16 2018'
        var HPC_RelevantAuthor = 'NGD Systems'
        var Accelerate_HPCHref = '/How-Does-NVMe-Computational-Storage-Accelerate-HPC'
        var Accelerate_HPCTitle = 'How Does NVMe Computational Storage Accelerate HPC?'
        var Accelerate_HPCDate ='Tuesday, November 13 2018'
        var Accelerate_HPCAuthor = 'NGD Systems'
        var SNIA_TechnicalHref = '/NGD-Systems-to-Co-Chair-New-SNIA-Technical-Working-Group-on-NVMe-Computational-Storage'
        var SNIA_TechnicalTitle = 'NGD Systems to Co-Chair New SNIA Technical Working Group on NVMe Computational Storage'
        var SNIA_TechnicalDate ='Monday, November 12 2018'
        var SNIA_TechnicalAuthor = 'NGD Systems'

        cy.get('[class="container blogs"]').contains(Technology_InflectionsTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Technology_InflectionsHref)
        cy.get('[id="post_title"]').should('contain', Technology_InflectionsTitle)
        cy.get('[id="post_date"]').should('contain', Technology_InflectionsDate)
        cy.get('[id="post_author"]').should('contain', Technology_InflectionsAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Embedded_ComputingTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Embedded_ComputingHref)
        cy.get('[id="post_title"]').should('contain', Embedded_ComputingTitle)
        cy.get('[id="post_date"]').should('contain', Embedded_ComputingDate)
        cy.get('[id="post_author"]').should('contain', Embedded_ComputingAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Looking_2019Title).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Looking_2019Href)
        cy.get('[id="post_title"]').should('contain', Looking_2019Title)
        cy.get('[id="post_date"]').should('contain', Looking_2019Date)
        cy.get('[id="post_author"]').should('contain', Looking_2019Author)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Looking_2019Title).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Looking_2019Href)
        cy.get('[id="post_title"]').should('contain', Looking_2019Title)
        cy.get('[id="post_date"]').should('contain', Looking_2019Date)
        cy.get('[id="post_author"]').should('contain', Looking_2019Author)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Technology_2018Title).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Technology_2018Href)
        cy.get('[id="post_title"]').should('contain', Technology_2018Title)
        cy.get('[id="post_date"]').should('contain', Technology_2018Date)
        cy.get('[id="post_author"]').should('contain', Technology_2018Author)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Great_Year2018Title).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Great_Year2018Href)
        cy.get('[id="post_title"]').should('contain', Great_Year2018Title)
        cy.get('[id="post_date"]').should('contain', Great_Year2018Date)
        cy.get('[id="post_author"]').should('contain', Great_Year2018Author)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Performance_IssuesTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Performance_IssuesHref)
        cy.get('[id="post_title"]').should('contain', Performance_IssuesTitle)
        cy.get('[id="post_date"]').should('contain', Performance_IssuesDate)
        cy.get('[id="post_author"]').should('contain', Performance_IssuesAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Recognizing_asCoolVendorTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Recognizing_asCoolVendorHref)
        cy.get('[id="post_title"]').should('contain', Recognizing_asCoolVendorTitle)
        cy.get('[id="post_date"]').should('contain', Recognizing_asCoolVendorDate)
        cy.get('[id="post_author"]').should('contain', Recognizing_asCoolVendorAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Gartner_SaysTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Gartner_SaysHref)
        cy.get('[id="post_title"]').should('contain', Gartner_SaysTitle)
        cy.get('[id="post_date"]').should('contain', Gartner_SaysDate)
        cy.get('[id="post_author"]').should('contain', Gartner_SaysAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(NGD_Systems_CVTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',NGD_Systems_CVHref)
        cy.get('[id="post_title"]').should('contain', NGD_Systems_CVTitle)
        cy.get('[id="post_date"]').should('contain', NGD_Systems_CVDate)
        cy.get('[id="post_author"]').should('contain', NGD_Systems_CVAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(DefenseTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',DefenseHref)
        cy.get('[id="post_title"]').should('contain', DefenseTitle)
        cy.get('[id="post_date"]').should('contain', DefenseDate)
        cy.get('[id="post_author"]').should('contain', DefenseAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(HPC_ProblemsTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',HPC_ProblemsHref)
        cy.get('[id="post_title"]').should('contain', HPC_ProblemsTitle)
        cy.get('[id="post_date"]').should('contain', HPC_ProblemsDate)
        cy.get('[id="post_author"]').should('contain', HPC_ProblemsAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(HPC_RelevantTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',HPC_RelevantHref)
        cy.get('[id="post_title"]').should('contain', HPC_RelevantTitle)
        cy.get('[id="post_date"]').should('contain', HPC_RelevantDate)
        cy.get('[id="post_author"]').should('contain', HPC_RelevantAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Accelerate_HPCTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Accelerate_HPCHref)
        cy.get('[id="post_title"]').should('contain', Accelerate_HPCTitle)
        cy.get('[id="post_date"]').should('contain', Accelerate_HPCDate)
        cy.get('[id="post_author"]').should('contain', Accelerate_HPCAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(SNIA_TechnicalTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',SNIA_TechnicalHref)
        cy.get('[id="post_title"]').should('contain', SNIA_TechnicalTitle)
        cy.get('[id="post_date"]').should('contain', SNIA_TechnicalDate)
        cy.get('[id="post_author"]').should('contain', SNIA_TechnicalAuthor)
        cy.go('back')

        cy.get('[class="pagination"]').contains('7').click()
        cy.wait(2000)
        cy.url().should('include','?page=7')
        cy.wait(3000)
    }

}export default Blog_3