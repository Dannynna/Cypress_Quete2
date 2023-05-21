// <refeence types="cypress"/>

describe('Quete2', () => {
    it('Inscription réussie', () => {
        cy.visit('https://preprod.backmarket.fr/fr-fr/register')
        cy.get('[data-qa="accept-cta"] > .MkLAMntR > ._2GvJDBxS').click()
        cy.get('#firstName').type('Dannynnatu')
        cy.get('#lastName').type('Blablou')
        cy.get('#signup-email').type('dannynnaa.test@icloud.com')
        cy.get('#signup-password').type('Vlemotdepase6!')
        cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click()
        
    })

    it('Inscription échouée',() => {
        cy.visit('https://preprod.backmarket.fr/fr-fr/register')
        cy.get('[data-qa="accept-cta"] > .MkLAMntR > ._2GvJDBxS').click()
        cy.get('#firstName').type('Dannynnat')
        cy.get('#lastName').type('mdy')
        cy.get('#signup-email').type('dannynna.test@icloud.com')
        cy.get('#signup-password').type('Voilalemotdepasse6!')
        cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click()
        cy.get('.isolate.mt-7 > .items-baseline').should('contain','Un utilisateur avec cette adresse email existe déjà')

    })
});
