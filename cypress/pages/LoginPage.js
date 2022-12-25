class loginPage {
  elements = {
    usernameField: () => cy.get('input#user-name'),
    passwordField: () => cy.get('input#password'),
    loginButton: () => cy.get('input#login-button'),    
  };

 login(name, pass) {
  if(name){
    this.elements.usernameField().type(name)
  }
  if(pass){
    this.elements.passwordField().type(pass)
  }     
  this.elements.loginButton().click()
}

}

module.exports = new loginPage();
