///<reference types='cypress'/>
class Blog_4 {
    Page_7(){
        var Partnership_ModelHref = '/The-Partnership-Model-for-NGD-Systems-NVMe-Computational-Storage-Products'
        var Partnership_ModelTitle = 'The Partnership Model for NGD Systems NVMe Computational Storage Products'
        var Partnership_ModelDate = 'Thursday, November 8 2018'
        var Partnership_ModelAuthor = 'NGD Systems'
        var Commodity_ComputingHref = '/HighPerformance-Computing:-Moving-From-Expensive-to-Commodity-Computing'
        var Commodity_ComputingTitle = 'High-Performance Computing: Moving From Expensive to Commodity Computing'
        var Commodity_ComputingDate = 'Wednesday, November 7 2018'
        var Commodity_ComputingAuthor = 'NGD Systems'
        var Other_BioscienceHref = '/Other-Bioscience-Use-Cases-for-NVMe-Computational-Storage'
        var Other_BioscienceTitle = 'Other Bioscience Use Cases for NVMe Computational Storage'
        var Other_BioscienceDate = 'Thursday, November 1 2018'
        var Other_BioscienceAuthor = 'NGD Systems'
        var Market_PartnershipsHref = '/Go-to-Market-Partnerships--Helping-Each-Other-Sell'
        var Market_PartnershipsTitle = 'Go to Market Partnerships – Helping Each Other Sell'
        var Market_PartnershipsDate = 'Wednesday, October 31 2018'
        var Market_PartnershipsAuthor = 'NGD Systems'
        var Accelerating_CDNHref = '/Finding-that-Pumpkin-Cutout-Template-Faster-%E2%80%93-Reducing-Servers-Accelerating-CDN-Applications'
        var Accelerating_CDNTitle = 'Finding that Pumpkin Cutout Template Faster – Reducing Servers, Accelerating CDN Applications'
        var Accelerating_CDNDate = 'Tuesday, October 30 2018'
        var Accelerating_CDNAuthor = 'NGD Systems'
        var CDN_CompetitivenessHref = '/New-Storage-Technologies-That-Can-Improve-CDN-Competitiveness'
        var CDN_CompetitivenessTitle = 'New Storage Technologies That Can Improve CDN Competitiveness'
        var CDN_CompetitivenessDate = 'Tuesday, October 23 2018'
        var CDN_CompetitivenessAuthor = 'NGD Systems'
        var ImpactCDN_CompetitivenessHref = '/How-Hyperscale-Companies-and-Telecom-Carriers-Impact-CDN-Competitiveness'
        var ImpactCDN_CompetitivenessTitle = 'How Hyperscale Companies and Telecom Carriers Impact CDN Competitiveness'
        var ImpactCDN_CompetitivenessDate = 'Thursday, October 18 2018'
        var ImpactCDN_CompetitivenessAuthor = 'NGD Systems'
        var BLASTing_AnalysisHref = '/BLASTing-the-Analysis-of-Protein-Sequencing'
        var BLASTing_AnalysisTitle = 'BLASTing the Analysis of Protein Sequencing'
        var BLASTing_AnalysisDate = 'Tuesday, October 16 2018'
        var BLASTing_AnalysisAuthor = 'NGD Systems'
        var Technology_PartnershipsHref = '/The-Science-of-Technology-Partnerships'
        var Technology_PartnershipsTitle = 'The Science of Technology Partnerships'
        var Technology_PartnershipsDate = 'Thursday, October 11 2018'
        var Technology_PartnershipsAuthor = 'NGD Systems'
        var Metrics_CDNHref = '/The-Metrics-of-the-Content-Delivery-Network-Business'
        var Metrics_CDNTitle = 'The Metrics of the Content Delivery Network Business'
        var Metrics_CDNDate = 'Tuesday, October 9 2018'
        var Metrics_CDNAuthor = 'NGD Systems'
        var Computation_BioScienceHref = '/Is-Computation-for-BioScience-Still-Hot'
        var Computation_BioScienceTitle = 'Is Computation for BioScience Still Hot?'
        var Computation_BioScienceDate = 'Thursday, October 4 2018'
        var Computation_BioScienceAuthor = 'NGD Systems'
        var Evolution_CDNHref = '/The-Evolution-of-the-Content-Delivery-Network-Business'
        var Evolution_CDNTitle = 'The Evolution of the Content Delivery Network Business'
        var Evolution_CDNDate = 'Wednesday, October 3 2018'
        var Evolution_CDNAuthor = 'NGD Systems'
        var StorageDev_ConferenceHref = '/NVMe-Computational-Storage-and-the-Storage-Developer-Conference'
        var StorageDev_ConferenceTitle = 'NVMe Computational Storage and the Storage Developer Conference'
        var StorageDev_ConferenceDate = 'Tuesday, September 25 2018'
        var StorageDev_ConferenceAuthor = 'NGD Systems'
        var NGD_AwardedNSFHref = '/NGD-Systems-Awarded-NSF-Phase-IIB-SBIR'
        var NGD_AwardedNSFTitle = 'NGD Systems Awarded NSF Phase IIB SBIR'
        var NGD_AwardedNSFDate = 'Thursday, September 20 2018'
        var NGD_AwardedNSFAuthor = 'NGD Systems'
       

        cy.get('[class="container blogs"]').contains(Partnership_ModelTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Partnership_ModelHref)
        cy.get('[id="post_title"]').should('contain', Partnership_ModelTitle)
        cy.get('[id="post_date"]').should('contain', Partnership_ModelDate)
        cy.get('[id="post_author"]').should('contain', Partnership_ModelAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Commodity_ComputingTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Commodity_ComputingHref)
        cy.get('[id="post_title"]').should('contain', Commodity_ComputingTitle)
        cy.get('[id="post_date"]').should('contain', Commodity_ComputingDate)
        cy.get('[id="post_author"]').should('contain', Commodity_ComputingAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Other_BioscienceTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Other_BioscienceHref)
        cy.get('[id="post_title"]').should('contain', Other_BioscienceTitle)
        cy.get('[id="post_date"]').should('contain', Other_BioscienceDate)
        cy.get('[id="post_author"]').should('contain', Other_BioscienceAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Market_PartnershipsTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Market_PartnershipsHref)
        cy.get('[id="post_title"]').should('contain', Market_PartnershipsTitle)
        cy.get('[id="post_date"]').should('contain', Market_PartnershipsDate)
        cy.get('[id="post_author"]').should('contain', Market_PartnershipsAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Accelerating_CDNTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Accelerating_CDNHref)
        cy.get('[id="post_title"]').should('contain', Accelerating_CDNTitle)
        cy.get('[id="post_date"]').should('contain', Accelerating_CDNDate)
        cy.get('[id="post_author"]').should('contain', Accelerating_CDNAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(CDN_CompetitivenessTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',CDN_CompetitivenessHref)
        cy.get('[id="post_title"]').should('contain', CDN_CompetitivenessTitle)
        cy.get('[id="post_date"]').should('contain', CDN_CompetitivenessDate)
        cy.get('[id="post_author"]').should('contain', CDN_CompetitivenessAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(ImpactCDN_CompetitivenessTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',ImpactCDN_CompetitivenessHref)
        cy.get('[id="post_title"]').should('contain', ImpactCDN_CompetitivenessTitle)
        cy.get('[id="post_date"]').should('contain', ImpactCDN_CompetitivenessDate)
        cy.get('[id="post_author"]').should('contain', ImpactCDN_CompetitivenessAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(BLASTing_AnalysisTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',BLASTing_AnalysisHref)
        cy.get('[id="post_title"]').should('contain', BLASTing_AnalysisTitle)
        cy.get('[id="post_date"]').should('contain', BLASTing_AnalysisDate)
        cy.get('[id="post_author"]').should('contain', BLASTing_AnalysisAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Technology_PartnershipsTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Technology_PartnershipsHref)
        cy.get('[id="post_title"]').should('contain', Technology_PartnershipsTitle)
        cy.get('[id="post_date"]').should('contain', Technology_PartnershipsDate)
        cy.get('[id="post_author"]').should('contain', Technology_PartnershipsAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Metrics_CDNTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Metrics_CDNHref)
        cy.get('[id="post_title"]').should('contain', Metrics_CDNTitle)
        cy.get('[id="post_date"]').should('contain', Metrics_CDNDate)
        cy.get('[id="post_author"]').should('contain', Metrics_CDNAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Computation_BioScienceTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Computation_BioScienceHref)
        cy.get('[id="post_title"]').should('contain', Computation_BioScienceTitle)
        cy.get('[id="post_date"]').should('contain', Computation_BioScienceDate)
        cy.get('[id="post_author"]').should('contain', Computation_BioScienceAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Evolution_CDNTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',Evolution_CDNHref)
        cy.get('[id="post_title"]').should('contain', Evolution_CDNTitle)
        cy.get('[id="post_date"]').should('contain', Evolution_CDNDate)
        cy.get('[id="post_author"]').should('contain', Evolution_CDNAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(StorageDev_ConferenceTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',StorageDev_ConferenceHref)
        cy.get('[id="post_title"]').should('contain', StorageDev_ConferenceTitle)
        cy.get('[id="post_date"]').should('contain', StorageDev_ConferenceDate)
        cy.get('[id="post_author"]').should('contain', StorageDev_ConferenceAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(NGD_AwardedNSFTitle).click({force:true}) 
        cy.wait(1000)
        cy.url().should('include',NGD_AwardedNSFHref)
        cy.get('[id="post_title"]').should('contain', NGD_AwardedNSFTitle)
        cy.get('[id="post_date"]').should('contain', NGD_AwardedNSFDate)
        cy.get('[id="post_author"]').should('contain', NGD_AwardedNSFAuthor)
        cy.go('back')

        cy.get('[class="pagination"]').contains('8').click()
        cy.wait(2000)
        cy.url().should('include','?page=8')
        cy.wait(3000)



    }

    Page_8(){
        var CDN_LikeHref = '/Why-Content-Delivery-Networks-Like-NVMe-Computational-Storage'
        var CDN_LikeTitle = 'Why Content Delivery Networks Like NVMe Computational Storage'
        var CDN_LikeDate ='Tuesday, September 11 2018'
        var CDN_LikeAuthor = 'NGD Systems'
        var Microsoft_ResearchHref = '/Is-NVMe-Computational-Storage-Real-Microsoft-Research-Thinks-It-Is'
        var Microsoft_ResearchTitle = 'Is NVMe Computational Storage Real? Microsoft Research Thinks It Is'
        var Microsoft_ResearchDate ='Friday, August 24 2018'
        var Microsoft_ResearchAuthor = 'NGD Systems'
        var TechnologyPartnerships_ImportantHref = '/Why-Technology-Partnerships-are-Important'
        var TechnologyPartnerships_ImportantTitle = 'Why Technology Partnerships are Important'
        var TechnologyPartnerships_ImportantDate ='Monday, August 13 2018'
        var TechnologyPartnerships_ImportantAuthor = 'NGD Systems'
        var Summit_2018Href = '/NGD-Systems-Recognized-at-Flash-Memory-Summit-2018-for-Product-Innovation'
        var Summit_2018Title = 'NGD Systems Recognized at Flash Memory Summit 2018 for Product Innovation'
        var Summit_2018Date ='Thursday, August 9 2018'
        var Summit_2018Author = 'NGD Systems'
        var NVMe_DifferenceHref = '/Where-Can-NVMe-Computational-Storage-Make-a-Difference'
        var NVMe_DifferenceTitle = 'Where Can NVMe Computational Storage Make a Difference?'
        var NVMe_DifferenceDate ='Friday, August 3 2018'
        var NVMe_DifferenceAuthor = 'NGD Systems'
        var Storage_DUMBHref = '/I-May-Be-Ugly-But-Your-Storage-is-DUMB%E2%80%A6'
        var Storage_DUMBTitle = 'I May Be Ugly But Your Storage is DUMB…..'
        var Storage_DUMBDate ='Friday, August 3 2018'
        var Storage_DUMBAuthor = 'NGD Systems'
        var impact_NVMeHref = '/The-impact-of-NVMe-Computational-Storage-on-petabyte-scale-workloads'
        var impact_NVMeTitle = 'The impact of NVMe Computational Storage on petabyte-scale workloads'
        var impact_NVMeDate ='Monday, July 23 2018'
        var impact_NVMeAuthor = 'NGD Systems'
        var Storage_worksHref = '/How-NVMe-Computational-Storage-works'
        var Storage_worksTitle = 'How NVMe Computational Storage works'
        var Storage_worksDate ='Thursday, July 19 2018'
        var Storage_worksAuthor = 'NGD Systems'
        var Problem_datasetsHref = '/How-big-is-the-problem-for-petabytescale-datasets'
        var Problem_datasetsTitle = 'How big is the problem for petabyte-scale datasets?'
        var Problem_datasetsDate ='Monday, July 16 2018'
        var Problem_datasetsAuthor = 'NGD Systems'
        var Support_ContainersHref = '/NGD-Systems-Catalina2-Now-Support-Containers'
        var Support_ContainersTitle = 'NGD Systems Catalina-2 Now Support Containers'
        var Support_ContainersDate ='Thursday, July 12 2018'
        var Support_ContainersAuthor = 'NGD Systems'
        var Relevant_metricsHref = '/Relevant-storage-metrics-for-petabytescale-datasets'
        var Relevant_metricsTitle = 'Relevant storage metrics for petabyte-scale datasets'
        var Relevant_metricsDate ='Monday, July 9 2018'
        var Relevant_metricsAuthor = 'NGD Systems'
        

        cy.get('[class="container blogs"]').contains(CDN_LikeTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',CDN_LikeHref)
        cy.get('[id="post_title"]').should('contain', CDN_LikeTitle)
        cy.get('[id="post_date"]').should('contain', CDN_LikeDate)
        cy.get('[id="post_author"]').should('contain', CDN_LikeAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Microsoft_ResearchTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Microsoft_ResearchHref)
        cy.get('[id="post_title"]').should('contain', Microsoft_ResearchTitle)
        cy.get('[id="post_date"]').should('contain', Microsoft_ResearchDate)
        cy.get('[id="post_author"]').should('contain', Microsoft_ResearchAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(TechnologyPartnerships_ImportantTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',TechnologyPartnerships_ImportantHref)
        cy.get('[id="post_title"]').should('contain', TechnologyPartnerships_ImportantTitle)
        cy.get('[id="post_date"]').should('contain', TechnologyPartnerships_ImportantDate)
        cy.get('[id="post_author"]').should('contain', TechnologyPartnerships_ImportantAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Summit_2018Title).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Summit_2018Href)
        cy.get('[id="post_title"]').should('contain', Summit_2018Title)
        cy.get('[id="post_date"]').should('contain', Summit_2018Date)
        cy.get('[id="post_author"]').should('contain', Summit_2018Author)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(NVMe_DifferenceTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',NVMe_DifferenceHref)
        cy.get('[id="post_title"]').should('contain', NVMe_DifferenceTitle)
        cy.get('[id="post_date"]').should('contain', NVMe_DifferenceDate)
        cy.get('[id="post_author"]').should('contain', NVMe_DifferenceAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Storage_DUMBTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Storage_DUMBHref)
        cy.get('[id="post_title"]').should('contain', Storage_DUMBTitle)
        cy.get('[id="post_date"]').should('contain', Storage_DUMBDate)
        cy.get('[id="post_author"]').should('contain', Storage_DUMBAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(impact_NVMeTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',impact_NVMeHref)
        cy.get('[id="post_title"]').should('contain', impact_NVMeTitle)
        cy.get('[id="post_date"]').should('contain', impact_NVMeDate)
        cy.get('[id="post_author"]').should('contain', impact_NVMeAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Storage_worksTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Storage_worksHref)
        cy.get('[id="post_title"]').should('contain', Storage_worksTitle)
        cy.get('[id="post_date"]').should('contain', Storage_worksDate)
        cy.get('[id="post_author"]').should('contain', Storage_worksAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Problem_datasetsTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Problem_datasetsHref)
        cy.get('[id="post_title"]').should('contain', Problem_datasetsTitle)
        cy.get('[id="post_date"]').should('contain', Problem_datasetsDate)
        cy.get('[id="post_author"]').should('contain', Problem_datasetsAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Support_ContainersTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Support_ContainersHref)
        cy.get('[id="post_title"]').should('contain', Support_ContainersTitle)
        cy.get('[id="post_date"]').should('contain', Support_ContainersDate)
        cy.get('[id="post_author"]').should('contain', Support_ContainersAuthor)
        cy.go('back')

        cy.get('[class="container blogs"]').contains(Relevant_metricsTitle).click({force:true}) 
        cy.wait(2000)
        cy.url().should('include',Relevant_metricsHref)
        cy.get('[id="post_title"]').should('contain', Relevant_metricsTitle)
        cy.get('[id="post_date"]').should('contain', Relevant_metricsDate)
        cy.get('[id="post_author"]').should('contain', Relevant_metricsAuthor)
        cy.go('back')

    }
   


}export default Blog_4