///<reference types='cypress'/>
class Resources {
    //method for navigating to the page
    navigateHere() {
        var url = 'https://california-kids-pediatrics.dnaqa.net/'
        cy.viewport(1920, 1080)
        cy.visit(url)
        cy.contains('Resources').click({ force: true })
        cy.url().should('include', '/resources')
    }

    heroSection() {
        var re = 'Resources'
        cy.viewport(1920, 1080)
        cy.get('.hero_section').should('contain', re)
    }

    section1() {
        var title = 'Dosage Chart'
        var content1 = 'imgs/resources/Dosage_Chart_Resources.png'
        var content2 = 'Acetaminophen and Ibuprofen'
        var content3_1 = 'Use this table to help correctly dose your child\'s Tylenol/Ibuprofen.'
        var content3_2 = 'Do not give Tylenol to children under 3 months of age without first consulting your doctor.'
        var content3_3 = 'Do not use ibuprofen before the age of 6 months.'
        var content4 = 'See Dosage Chart'
        var content5 = '/dossage-chart'
        var content6 = 'imgs/resources/Poison Control_Resources.png'
        var content7 = 'The Poison Control Hotline can give you the most complete, accurate, and immediate advice for almost any ingestion. It is critical to call the hotline immediately upon discovering a potentially harmful ingestion even if your child seems well.'
        var content8 = 'Stop the guessing about poisoning. Call the poison hotline at: 1-800-222-1222.'
        var content9 = 'Learn More About Poisoning'
        var content10 = 'https://poisonhelp.hrsa.gov/'

        cy.viewport(1920, 1080)
        cy.get('.section--1').scrollIntoView()
        cy.get('[class="section_title left"]').contains(title).should('contain', title)
        cy.get('body > main > div.section.section.section--1 > div > div:nth-child(1) > div.section_image > div > img').should('have.attr', 'src', content1)
        cy.get('body > main > div.section.section.section--1 > div > div:nth-child(1) > div.section_details.rsection > p:nth-child(2)').should('contain', content2)
        cy.get('body > main > div.section.section.section--1 > div > div:nth-child(1) > div.section_details.rsection > p:nth-child(3)').should('contain', content3_1, content3_2, content3_3)
        cy.contains(content4).should('exist')
        cy.get('body > main > div.section.section.section--1 > div > div:nth-child(1) > div.section_details.rsection > a').should('have.attr', 'href', content5).click({force: true})
        cy.go('back')
        cy.get('body > main > div.section.section.section--1 > div > div.section_wrapper.baby.reverse > div.section_image.centered > img').should('have.attr', 'src', content6)
        cy.get('body > main > div.section.section.section--1 > div > div.section_wrapper.baby.reverse > div.section_details > p:nth-child(3)').contains(content7).should('contain', content7)

        cy.contains(content9).should('exist')
        // cy.get('body > main > div.section.section--1 > div > div > div:nth-child(2) > div.section_details--2 > a').should('have.attr', 'href', content10)
    }


    section2() {
        var content1 = 'Vaccine and Milestone Information'
        var content2 = 'Get the best information about recommended vaccinations for your infants and children today.'
        var content3 = '/imgs/resources/baby-boy.png'
        var content4 = 'Birth to 6 Years'
        var content5 = '/vaccine-information-birth-to-six-years'
        var content6 = '/imgs/resources/teenager.png'
        var content7 = 'Birth to 18 Years'
        var content8 = '/vaccine-information-birth-to-eighteen-years'
        var content9 = '/imgs/resources/milestone.png'
        var content10 = 'Baby Milestone Check'
        var content11 = '/vaccine-information-mile-stone-check'
        var content12 = 'Useful Links'
        var content13 = 'Know the most useful information about you and your baby’s health. The following links will take you to sites that will help you understand your baby’s health and nutrition so they can grow healthy and strong.'
        var link1 = 'https://www.aap.org/'
        var link2 = 'https://www.healthychildren.org/'
        var link3 = 'https://kidshealth.org/'
        var link4 = 'https://www.cdc.gov/'
        var link5 = 'https://www.cdc.gov/nutrition/index.html'
        cy.viewport(1920, 1080)
        cy.get('.section--2').scrollIntoView()
        cy.get('.section--2 > .container > :nth-child(1) > .section_title').should('contain', content1)
        cy.get('body > main > div.section.section--2 > div > div:nth-child(1) > p').should('contain', content2)
        cy.get('[alt="A baby boy\'s head peach fuzz."]').should('have.attr', 'src', content3)
        cy.get('body > main > div.section.section--2 > div > div:nth-child(2) > div:nth-child(1) > p').should('contain', content4)
        cy.get('body > main > div.section.section--2 > div > div:nth-child(2) > div:nth-child(1) > a').should('have.attr', 'href', content5).click({force: true})
        cy.go('back')
        cy.get('[alt="Animated head of a teenager\'s head."]').should('have.attr', 'src', content6)
        cy.get('body > main > div.section.section--2 > div > div:nth-child(2) > div:nth-child(2) > p').should('contain', content7)
        cy.get('body > main > div.section.section--2 > div > div:nth-child(2) > div:nth-child(2) > a').should('have.attr', 'href', content8).click({force: true})
        cy.go('back')
        cy.get('[alt="Lightbulb with a flag on its center."]').should('have.attr', 'src', content9)
        cy.get('body > main > div.section.section--2 > div > div:nth-child(2) > div:nth-child(3) > p').should('contain', content10)
        cy.get('body > main > div.section.section--2 > div > div:nth-child(2) > div:nth-child(3) > a').should('have.attr', 'href', content11).click({force: true})
        cy.go('back')
        cy.get('body > main > div.section.section--2 > div > div:nth-child(3) > h2').should('contain', content12)
        cy.get('body > main > div.section.section--2 > div > div:nth-child(3) > p').should('contain', content13)
        cy.contains(link1).should('exist')
        cy.contains(link2).should('exist')
        cy.contains(link3).should('exist')
        cy.contains(link4).should('exist')
        cy.contains(link5).should('exist')
    }

    section3() {
        var content1 = 'We have a pediatrician on call 24/7/365 days a year for urgent health issues. Call 424-277-2020 and follow the prompts.'
        var content2 = 'If your child needs to be seen after hours, the doctor on call will direct you to either a local Urgent Care or Emergency Room.'
        var content3 = 'Local Emergency Rooms'
        var content4 = 'UCLA Health - Santa Monica Medical Center'
        var content5_1 = ' Emergency Department'
        var content5_2 = ' 1250 16th Street'
        var content5_3 = ' Santa Monica, CA 90404'
        var content5_4 = ' Hospital Information: 424-259-6000'
        var content5_5 = ' Emergency Department: 424-259-8400'
        var content6 = 'Providence Saint John\'s Health Center'
        var content7_1 = ' Santa Monica Blvd 1st Floor,'
        var content7_2 = ' 2121 Santa Monica Blvd 1st Floor,'
        var content7_3 = ' Santa Monica, CA 90404'
        var content7_4 = ' (310) 829-5511'
        var content8 = 'Ronald Reagan UCLA Medical Center'
        var content9_1 = ' Emergency Department'
        var content9_2 = ' 757 Westwood Plaza'
        var content9_3 = ' Los Angeles, CA 90095'
        var content9_4 = ' Hospital Information: 310-825-9111'
        var content9_5 = ' Emergency Department: 310-825-2111'
        var content10_1 = 'PM Pediatrics Urgent Care'
        var content10_2 = ' 8731 W. Pico Blvd, Los Angeles, CA 90035'
        var content10_3 = ' 310-312-5437'
        var content11_1 = 'Playa Vista - Cedar Sinai - Urgent Care'
        var content11_2 = ' 12746 W Jefferson Blvd. 2nd Floor'
        var content11_3 = ' Playa Vista, CA 90094'
        var content11_4 = ' 424-315-2220'
        var content13_1 = 'Beverly Hills – Cedar Sinai - Urgent Care'
        var content13_2 = ' 8501 Wilshire Blvd. #150'
        var content13_3 = ' Los Angeles, CA 90048'
        // var content14 = '8501 Wilshire Blvd. #150 Los Angeles, CA 90048'
        var content15_1 = 'PM Pediatrics Urgent Care'
        var content15_2 = ' 8731 W. Pico Blvd, Los Angeles, CA 90035'
        var content15_3 = ' 310-312-5437'
        // var content16 = '8731 W. Pico Blvd, Los Angeles, CA 90035 310-312-5437'
        cy.viewport(1920, 1080)
        cy.get('.section--3').scrollIntoView()
        cy.get('body > main > div.section.section--3 > div > div:nth-child(1) > p.section_description.centered').should('contain',content1)
        cy.get('body > main > div.section.section--3 > div > div:nth-child(1) > p:nth-child(3)').should('contain',content2)
        cy.get('body > main > div.section.section--3 > div > div:nth-child(1) > h2:nth-child(4)').should('contain',content3 )
        cy.get('body > main > div.section.section--3 > div > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > p').should('contain',content4 )
        cy.get('body > main > div.section.section--3 > div > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2)').should('contain',content5_1 )
        cy.get('body > main > div.section.section--3 > div > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3)').should('contain',content5_2 )
        cy.get('body > main > div.section.section--3 > div > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4)').should('contain',content5_3 )
        cy.get('body > main > div.section.section--3 > div > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5)').should('contain',content5_4)
        cy.get('body > main > div.section.section--3 > div > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(6)').should('contain',content5_5 )
        cy.get('body > main > div.section.section--3 > div > div:nth-child(2) > div:nth-child(2) > ul > p').should('contain',content6 )
        cy.get('body > main > div.section.section--3 > div > div:nth-child(2) > div:nth-child(2) > ul > li:nth-child(2)').should('contain',content7_1 )
        cy.get('body > main > div.section.section--3 > div > div:nth-child(2) > div:nth-child(2) > ul > li:nth-child(3)').should('contain',content7_2 )
        cy.get('body > main > div.section.section--3 > div > div:nth-child(2) > div:nth-child(2) > ul > li:nth-child(4)').should('contain',content7_3 )
        cy.get('body > main > div.section.section--3 > div > div:nth-child(2) > div:nth-child(2) > ul > li:nth-child(5)').should('contain',content7_4 )
        cy.get('body > main > div.section.section--3 > div > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2)').should('contain',content8 )
        cy.get('body > main > div.section.section--3 > div > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2)').should('contain',content9_1, content9_2,content9_3,content9_4,content9_5 )
        cy.get('body > main > div.section.section--4 > div > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2)').should('contain',content10_1,content10_2, content10_3 )
        cy.get('body > main > div.section.section--4 > div > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1)').should('contain',content11_1, content11_2,content11_3,content11_4)
        // cy.get('body > main > div.section.section--3 > div > div:nth-child(2) > div:nth-child(2) > ul:nth-child(2)').should('contain',content12 )
        cy.get('body > main > div.section.section--4 > div > div:nth-child(2) > div:nth-child(2) > ul').should('contain',content13_1, content13_2, content13_3 )
        //cy.get('body > main > div.section.section--3 > div > div:nth-child(2) > div:nth-child(2) > ul:nth-child(3)').should('contain',content14 )
        cy.get('body > main > div.section.section--4 > div > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2)').should('contain',content15_1,content15_2,content15_3)
        //cy.get('body > main > div.section.section--3 > div > div:nth-child(2) > div:nth-child(2) > ul:nth-child(4)').should('contain',content16 )
    }

    operatingHours() {
        var content1 = 'Hours of Operation'
        var content2 = 'Monday' 
        var content2_1 = ':'
        var content2_2 = '9:00AM - 5:00PM'
        var content3 = 'Tuesday:9:00AM - 5:00PM'
        var content4 = 'Wednesday:9:00AM - 5:00PM'
        var content5 = 'Thursday:9:00AM - 5:00PM'
        var content6 = 'Friday:9:00AM - 5:00PM'
        var content7 = 'A doctor is on-call 24/7/365 days a year.'
        cy.viewport(1920, 1080)
        cy.get('[class="footer"]').scrollIntoView()
        cy.get('body > footer > div > div > div.footer_sched > ul').should('contain',content1 )
        cy.get('body > footer > div > div > div.footer_sched > ul > li:nth-child(1) > span:nth-child(1)').should('contain',content2 )
        cy.get('body > footer > div > div > div.footer_sched > ul > li:nth-child(1) > span:nth-child(2)').should('contain',content2_1 )
        cy.get('body > footer > div > div > div.footer_sched > ul > li:nth-child(1)').should('contain', content2_2)
        cy.get('body > footer > div > div > div.footer_sched > ul > li:nth-child(2)').should('contain', content3 )
        cy.get('body > footer > div > div > div.footer_sched > ul > li:nth-child(3)').should('contain', content4 )
        cy.get('body > footer > div > div > div.footer_sched > ul > li:nth-child(4)').should('contain', content5 )
        cy.get('body > footer > div > div > div.footer_sched > ul > li:nth-child(5)').should('contain', content6)
        cy.get('body > footer > div > div > div.footer_sched > ul > li:nth-child(6)').should('contain', content7)

        var content11 = 'California Kids Pediatrics'
        var content12 = '2990 S. Sepulveda Blvd., Suite 202'
        var content13 = 'Los Angeles, CA 90064'
        var content14 = 'T. 424-277-2020 | F. 310-388-1104'
        var content15 = 'Contact@CalKidsPeds.com'
        var content16 = '/imgs/icons/ckp-logo.png'
        var content17 = '/imgs/icons/facebook-icon.svg'
        var content18 = '/imgs/icons/instagram-icon.svg'
        var content19 = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.625639889142!2d-118.4307679853071!3d34.027819080612616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbae1ac1f6bf%3A0xfdf036a12f8a4832!2sCalifornia%20Kids%20Pediatrics%20-%20Dr.%20Leila%20Bozorgnia!5e0!3m2!1sen!2sph!4v1609277430869!5m2!1sen!2sph'
        cy.viewport(1920, 1080)
        cy.get('.footer').scrollIntoView()
        cy.get('body > footer > div > div > div.footer_contact > ul').should('contain', content11)
        cy.get('body > footer > div > div > div.footer_contact > ul > li:nth-child(1)').should('contain', content12 )
        cy.get('body > footer > div > div > div.footer_contact > ul > li.ftr_list_img > div').should('contain', content13 )
        cy.get('body > footer > div > div > div.footer_contact > ul > li:nth-child(2)').should('contain', content14 )
        cy.get('body > footer > div > div > div.footer_contact > ul > li:nth-child(3)').should('contain', content15 )
        cy.get('.footer_logo').should('have.attr', 'src', content16 )
        cy.get('[alt="Facebook"]').should('have.attr', 'src',content17 )
        cy.get('[alt="Instagram"]').should('have.attr', 'src',content18 )
        cy.get('body > footer > div > div > div.footer_map > iframe').should('have.attr', 'src',content19 )
    }


} export default Resources

