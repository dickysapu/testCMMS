export const login = () => {
  cy.contains("Login", { timeout: 10000 }).should("be.visible");
  cy.get('[name="username"]').type("green");
  cy.get('[name="password"]').type("Password!123");
  cy.get('[type="submit"]', { timeout: 10000 }).click();
  cy.wait(5000);
};
