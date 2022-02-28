///<reference types='cypress'/>
class About_us {
   
    Hero_section(){
        var header = 'Focused on Bringing Compute to Data'
        var banner = "The company is led by a seasoned executive team that helped deliver the world’s first enterprise storage SSD and shape the storage industry, with decades in leadership positions with storage companies such as Western Digital, STEC, Memtech, ST Micro, M-Systems, Micron and Broadcom."
        cy.viewport(1920, 1080)
        cy.visit('https://www.ngdsystems.com/' )
        cy.get('[class="nav_menu"]').contains('About Us').click()
        cy.url().should('include','/about_us')
        cy.wait(1000)
        cy.get('[class="banner_header"]').should('contain',header)
        cy.get('[class="banner_desc"]').should('contain',banner)
        cy.get('.banner_graphic_src').should('have.attr', 'alt','focused on bringing compute to data, seasoned executive team')
        
    }

    Team_section(){
        var secTitle = "NGD Systems Executive Team"
        var nader = "Nader Salessi"
        var ceo = "CEO, Founder, Chairman of the Board"
        var vla = "Vladimir Alves"
        var cto = "CTO, Co-Founder"
        var rich = "Richard Mataya"
        var evp = "EVP, Co-Founder"
        var mike = "Mike Yousef"
        var svp = 'SVP Sales'
        var eli ="Eli Tiomkin"
        var vp ="VP Business Development"
        var scott ="Scott Shadley"
        var vpm = "VP of Marketing"
         //about investors section

         cy.get('[class="aboutTeamSection section"]').scrollIntoView()
         cy.get('h2').should('contain',secTitle)
         cy.get('.teamCard').within((el) => {
            cy.get('h3').should('contain',nader)
            cy.get('p').should('contain',ceo)
            cy.get('h3').should('contain',vla)
            cy.get('p').should('contain',cto)
            cy.get('h3').should('contain',rich)
            cy.get('p').should('contain',evp)
            cy.get('h3').should('contain',mike)
            cy.get('p').should('contain',svp)
            cy.get('h3').should('contain',eli)
            cy.get('p').should('contain',vp)
            cy.get('h3').should('contain',scott)
            cy.get('p').should('contain',vpm)
          })
     
         cy.get('#TeamSection > div > div.row.row-content > div.upper-team.anima > div:nth-child(1) > div.teamCard_content > button').click()
         cy.wait(1000)
         cy.get('#naderSalessiBio > .modal-dialog > .modal-content > .modal-header > .modal-close > .wtfs').click()
    
     
         cy.get('#TeamSection > div > div.row.row-content > div.upper-team.anima > div:nth-child(2) > div.teamCard_content > button').click({force: true})
         cy.wait(1000)
         cy.get('#vladAlvesBio > .modal-dialog > .modal-content > .modal-header > .modal-close > .wtfs').click({force: true})

         cy.get('#TeamSection > div > div.row.row-content > div.upper-team.anima > div:nth-child(3) > div.teamCard_content > button').click({force: true})
         cy.wait(1000)
         cy.get('#richardMatayaBio > .modal-dialog > .modal-content > .modal-header > .modal-close > .wtfs').click({force: true})

         cy.get('.lower-team > :nth-child(1) > .teamCard_content > .teamCard_content_info').click({force: true})
         cy.wait(1000)
         cy.get('#mikeYousefBio > .modal-dialog > .modal-content > .modal-header > .modal-close > .wtfs').click({force: true})

         cy.get('.lower-team > :nth-child(2) > .teamCard_content > .teamCard_content_info').click({force: true})
         cy.wait(1000)
         cy.get('#eliTiomkinBio > .modal-dialog > .modal-content > .modal-header > .modal-close > .wtfs').click({force: true})

         cy.get('#TeamSection > div > div.row.row-content > div.lower-team.anima > div:nth-child(3) > div.teamCard_content > button').click({force: true})
         cy.wait(1000)
         cy.get('#scottShadleyBio > .modal-dialog > .modal-content > .modal-header > .modal-close > .wtfs').click()
    }

    Investors_section(){
        //Inventors Section
        cy.get('[class="aboutInvestorsSection section"]').scrollIntoView()
        cy.get('[class="section-header style-1"]').contains('Investors').should('be.exist')
        cy.get('[alt="ALCOR MICRO"]').should('have.attr','src','/images/investors/1.png').and('be.exist')
        //cy.get('[alt="Benhamou Global Ventures, BGV"]').should('have.attr','src','/images/investors/2.png').and('be.exist')
        //cy.get('[alt="Benhamou Global Ventures, BGV"]').should('have.attr','src','/images/investors/3.png').and('be.exist')
        cy.get('[alt="partech ventures, POS System"]').should('have.attr','src','/images/investors/4.png').and('be.exist')
        cy.get('[alt="SVB, Silicon Valley Bank, brightest mind in technology"]').should('have.attr','src','/images/investors/5.png').and('be.exist')
        cy.get('[alt="MIG Capital, newport beach, fundamental, ever-changing world"]').should('have.attr','src','/images/investors/6.png').and('be.exist')
        cy.get('[alt="companies thrive, partnering with innovation, Western Digital Capital"]').should('have.attr','src','/images/investors/7.png').and('be.exist')

     
    }

    //Technology Partners
    Technology_section(){
           
           cy.get('[class="partnersTechPartnersSection section"]').scrollIntoView()
           var trenton ="https://www.trentonsystems.com/blog/trenton-systems-partners-with-ngd-systems?hsCtaTracking=6e9c4dd5-0798-4fd6-8eda-c0a5eda86672%7C0f9195f9-0fb9-42a4-9cdf-fa25c2e85591"
           var tren="/images/partners/TrentonLogo.png"
           var microsoft ="https://www.microsoft.com"
           var mic="/images/partners/1.png"
           var kioxia="https://business.kioxia.com/en-jp/memory/bics.html"
           var kio="/images/partners/12.png"
           var marvell="https://www.marvell.com/products/custom-asic.html"
           var marv="/images/partners/13.png"
           var echo="https://echostreams.com"
           var ech="/images/partners/4.png"
           var arm="https://www.arm.com"
           var ar ="/images/partners/3.png"
           var lenovo="https://www.lenovo.com"
           var len="/images/partners/6.png"
           var aic="https://www.aicipc.com"
           var ai="/images/partners/7.png"
           var avnet="https://www.avnet.com"
           var avn="/images/partners/8.png"
           var eminc="http://www.eminc.com"
           var emi = "/images/partners/9.png"
           var green="https://www.greencircuits.com"
           var gree="/images/partners/10.png"
           var virtual="https://www.virtualgraffiti.com"
           var virt = "/images/partners/11.png"
           
           cy.get('#TechPartnersSection > div > div.row-content.row-center.partner.anima > a:nth-child(1)').should('have.attr','href',trenton)
           cy.get('[alt="Trenton Systems"]').should('have.attr','src',tren)
           cy.get('#TechPartnersSection > div > div.row-content.row-center.partner.anima > a:nth-child(2)').should('have.attr','href',microsoft)
           cy.get('[alt="Technology Company, Microsoft Corporation"]').should('have.attr','src',mic)
           cy.get('#TechPartnersSection > div > div.row-content.row-center.partner.anima > a:nth-child(3)').should('have.attr','href',kioxia)
           cy.get('[alt="A research and technology development company, creating a new era of memory for devices."]').should('have.attr','src',kio)
           cy.get('#TechPartnersSection > div > div.row-content.row-center.partner.anima > a:nth-child(4)').should('have.attr','href',marvell)
           cy.get('[alt="A company delivering highly efficient innovations to address critical data infrastructure needs."]').should('have.attr','src',marv)
           cy.get('#TechPartnersSection > div > div.row-content.row-center.partner.anima > a:nth-child(5)').should('have.attr','href',echo)
           cy.get('[alt="Echo Streams Innovative Solutions, 64 Supercharged Cores For the Modern Data Center"]').should('have.attr','src',ech)
           cy.get('#TechPartnersSection > div > div.row-content.row-center.partner.anima > a:nth-child(6)').should('have.attr','href',arm)
           cy.get('[alt="architects the pervasive intelligence, multinational semiconductor and software design company, arm"]').should('have.attr','src',ar)
           cy.get('#TechPartnersSection > div > div.row-content.row-center.partner.anima > a:nth-child(7)').should('have.attr','href',lenovo)
           cy.get('[alt="chinese multinational technology, it designs, develops, manufactures, and sells personal computers, Lenovo"]').should('have.attr','src',len)
           cy.get('#TechPartnersSection > div > div.row-content.row-center.partner.anima > a:nth-child(8)').should('have.attr','href',aic)
           cy.get('[alt="leading provider of both OEM/ODM and COTS and server and storage solutions, expert in house design, manufacturing and validation capabilities, aicipc"]').should('have.attr','src',ai)
           cy.get('#TechPartnersSection > div > div.row-content.row-center.partner.anima > a:nth-child(9)').should('have.attr','href',avnet)
           cy.get('[alt="reach further, avnet, one of the worlds largest distributors of  quality electronic components and embedded solutions"]').should('have.attr','src',avn)
           cy.get('#TechPartnersSection > div > div.row-content.row-center.partner.anima > a:nth-child(10)').should('have.attr','href',eminc)
           cy.get('[alt="Express Manufacturing, Inc. , providing electronics manufacturing services since 1982, world class manufacturing"]').should('have.attr','src',emi)
           cy.get('#TechPartnersSection > div > div.row-content.row-center.partner.anima > a:nth-child(11)').should('have.attr','href',green)
           cy.get('[alt="precision driven performance, greencircuits, quick turn quality"]').should('have.attr','src',gree)
           cy.get('#TechPartnersSection > div > div.row-content.row-center.partner.anima > a:nth-child(12)').should('have.attr','href',virtual)
           cy.get('[alt="Your Source for Technology Solutions, Virtual Graffiti, Inc"]').should('have.attr','src',virt)
    }

        //Press Releases Section
        Press_section(){
            var delivers = 'NGD Systems Delivers Industry-First EDSFF NVMe SSD  Enabled with Computational Storage'
            var storage = 'Top 2019 Enterprise Storage Arrays Win Products of the Year'
            var raises = 'NGD Systems Raises $20 Million in Series C Funding to Accelerate the Deployment of the World’s First NVMe Computational Storage Drive'
            var newport = 'The latest addition to the Newport family of devices enables petabyte-scale for a variety of Edge Computing and 1U Scale-Out Storage Systems'
            var products ='Winners of the 2019 Products of the Year signal a shift from disk to flash storage arrays. Vast Data takes gold, NGD Systems wins silver and DataDirect Networks captures bronze.'
            var investments = 'The latest round includes new investments from MIG Capital and Western Digital Capital Global, Ltd, that enables artificial intelligence, machine learning and edge computing within computational storage.'
            cy.get('[class="aboutPressSection section"]').scrollIntoView()
            //cy.get('[alt="NGD Systems Delivers Industry-First EDSFF NVMe SSD  Enabled with Computational Storage"]').should('have.attr','src','https://www.ngdsystems.com/uploads/collaterals/NGD%20Systems%20Delivers%20Industry-First%20EDSFF%20NVMe%20SSD%20Enabled%20with%20Computational%20Storage.png')
            cy.get('#PressSection > div > div.row.row-content.anima > div:nth-child(1) > div > a > h3').should('contain',delivers).click()
            cy.wait(1000)
            cy.go('back')
            //cy.get('[alt="Top 2019 Enterprise Storage Arrays Win Products of the Year"]').should('have.attr','src','https://www.ngdsystems.com/uploads/press/FEB_19_2020/Poster.png')
            cy.get('#PressSection > div > div.row.row-content.anima > div:nth-child(2) > div > a > h3').should('contain',storage).click()
            cy.wait(1000)
            cy.go('back')
           //cy.get('[alt="NGD Systems Raises $20 Million in Series C Funding to Accelerate the Deployment of the World’s First NVMe Computational Storage Drive"]').should('have.attr','src','https://www.ngdsystems.com/uploads/press/FEB_05_2020/Thumbnail.jpg')
            cy.get('#PressSection > div > div.row.row-content.anima > div:nth-child(3) > div > a > h3').should('contain',raises).click()
            cy.wait(1000)
            cy.go('back')
            cy.get('#PressSection > div > div.row.row-content.anima > div:nth-child(1) > div > p').should('contain',newport)
            cy.get('#PressSection > div > div.row.row-content.anima > div:nth-child(2) > div > p').should('contain',products)
            cy.get('#PressSection > div > div.row.row-content.anima > div:nth-child(3) > div > p').should('contain',investments)
            cy.get('[class="aboutCareersSection section"]').scrollIntoView()
            cy.wait(1000)
            cy.get('[alt="We are searching for variety of talents to join NGD Systems"]').should('have.attr','src','/images/careersAnimation.gif')
            cy.get('#CareersSection > div > div.row.row-header > h2').should('contain','We are searching for variety of talents to join NGD Systems')
            cy.get('#CareersSection > div > div.row.row-header > p').should('contain',"Bring your talent and skills to NGD Systems and we'll help you take your career to greater heights. Join our team in California and enjoy an exciting work environment where you can be the best you.")
            cy.get('#CareersSection > div > div.row.row-content > div > button:nth-child(1) > i').should('be.exist')
            cy.get('#CareersSection > div > div.row.row-content > div > button:nth-child(1) > p').should('contain','Firmware Engineer')
            cy.get('#CareersSection > div > div.row.row-content > div > button:nth-child(2) > i').should('be.exist')
            cy.get('#CareersSection > div > div.row.row-content > div > button:nth-child(2) > p').should('contain','Hardware Engineer')
            cy.get('#CareersSection > div > div.row.row-content > div > button:nth-child(3) > i').should('be.exist')
            cy.get('#CareersSection > div > div.row.row-content > div > button:nth-child(3) > p').should('contain','Software Engineer')
            cy.get('#CareersSection > div > div.row.row-content > div > button:nth-child(4) > i').should('be.exist')
            cy.get('#CareersSection > div > div.row.row-content > div > button:nth-child(4) > p').should('contain','Regional Sales Manager')
        }
        

   

}export default About_us