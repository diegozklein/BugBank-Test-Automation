describe('Testes Login', () => {
    
  before(() => {
    cy.visit('/');
    cy.get('.ihdmxA').click();
    cy.get(':nth-child(2) > .input__default').type('teste@gmail.com', {force: true});
    cy.get(':nth-child(3) > .input__default').type('John Doe', {force: true});
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456789', {force: true});
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456789', {force: true});
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force: true});
    cy.get('#btnCloseModal').click();
  })

  //cy.get('#toggleAddBalance')
  beforeEach(() => {
    cy.visit('/');

  })

  it('Login - Sucesso', () => {
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('teste@gmail.com');
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456789');
        cy.get('.otUnI').click();
        cy.url().should('include', '/home');
        cy.get('#textName').should('contain.text', 'John Doe');
    })

  it('Login - Falha', () => {
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('teste@gmail.com');
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('senhaerrada');
        cy.get('.otUnI').click();
        cy.get('#modalText').should('contain.text', 'Usuário ou senha inválido');
  })
})

describe('Testes Cadastro', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('.ihdmxA').click();
  })

  it('Cadastro - Sucesso', () => {
    cy.get(':nth-child(2) > .input__default').type('teste@gmail.com', {force: true});
    cy.get(':nth-child(3) > .input__default').type('John Doe', {force: true});
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456789', {force: true});
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456789', {force: true});
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force: true});
    cy.get('#modalText').should('contain.text', 'foi criada com sucesso');
  })

  it('Cadastro - Email com formato inválido ', () => {
    cy.get(':nth-child(2) > .input__default').type('teste@gmail', {force: true});
    cy.get('.kOeYBn > .input__warging').should('have.text', 'Formato inválido');
  })

  
})