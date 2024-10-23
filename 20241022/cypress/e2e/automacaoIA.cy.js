/// <reference types="cypress" />

Cypress.Commands.add('searchproduct', (productname)=>{
  cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(2) > a').click()
  cy.get('#search_product').type(productname)
  cy.get('#submit_search').click()
})

describe('automationexercise', () => {
  beforeEach(()=>{
    cy.visit('https://automationexercise.com/')
  })

  it('view tshirt', () => {
    cy.searchproduct('tshirt')
    cy.get('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.choose > ul > li > a').click()
    cy.url().should('contain', '/product_details/')
  })

  it('login', ()=>{
    const [username, password] = ['teste@gmail.com', '123'];

    cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a').click()
    cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)').type(username)
    cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)').type(password)
    cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > button').click()
  })

  it('checkout', ()=>{
    cy.searchproduct('tshirt')
    cy.get('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.productinfo.text-center > a').click()
    cy.get('#cartModal > div > div > div.modal-header > h4').should('contain.text', 'Added')
    cy.get('#cartModal > div > div > div.modal-body > p:nth-child(2) > a').click()
    cy.get('#do_action > div.container > div > div > a').click()
  })
})