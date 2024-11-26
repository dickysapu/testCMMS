const { login } = require("./support");

describe("Pengajuan Pinjaman", () => {
  beforeEach(() => {
    cy.visit("https://cmms.dev.aegislabs.work/#/"); // Ganti URL sesuai dengan URL login Anda
  });

  it("Positive - New Meters", () => {
    login();
    cy.contains("Dashboard", { timeout: 100000 }).should("be.visible");
    cy.wait(3000);
    cy.get('span[role="menuitem"]').eq(1).click();
    cy.wait(3000);
    cy.contains("Meters & Groups", { timeout: 50000 }).click();
    cy.wait(3000);
    cy.contains("Choose Action", { timeout: 50000 }).click();
    cy.wait(3000);
    cy.contains("Filter", { timeout: 10000 }).click();
    cy.wait(3000);
    cy.get("[name='filter-action']", { timeout: 10000 }).click();
    cy.wait(3000);
    cy.get('[id="btn-action-Meter-0"]', { timeout: 10000 }).click();
    cy.wait(3000);
    cy.get('[name="meter_name"]', { timeout: 10000 }).type("tester01");
    cy.wait(3000);
    cy.get('[name="meter_description"]', { timeout: 10000 }).type(
      "description tester01"
    );
    cy.wait(3000);
    cy.get('[id="react-select-2-input"]', { timeout: 10000 }).click();
    cy.wait(3000);
    cy.contains("Gauge", { timeout: 10000 }).click();
    cy.wait(3000);
    cy.get('[id="react-select-3-input"]', { timeout: 10000 }).click();
    cy.wait(3000);
    cy.contains("ACTUAL", { timeout: 10000 }).click();
    cy.wait(3000);
    cy.get('[id="react-select-4-input"]', { timeout: 10000 }).click();
    cy.wait(3000);
    cy.contains("DMCOLLVALIDRESULT", { timeout: 10000 }).click();
    cy.wait(3000);
    cy.get('[id="react-select-5-input"]', { timeout: 10000 }).click();
    cy.wait(3000);
    cy.contains("B34", { timeout: 10000 }).click();
    cy.wait(3000);
    cy.get('[type="submit"]', { timeout: 10000 }).click();
    cy.wait(3000);
    cy.contains("Yes! Confirm", { timeout: 10000 }).click();
    cy.wait(3000);
    cy.contains("OK", { timeout: 10000 }).click();
    cy.wait(3000);
  });

  it("Positive - Update Meters", () => {
    login();
    cy.contains("Dashboard", { timeout: 100000 }).should("be.visible");
    cy.wait(3000);
    cy.get('span[role="menuitem"]').eq(1).click();
    cy.wait(3000);
    cy.contains("Meters & Groups", { timeout: 50000 }).click();
    cy.wait(3000);
    cy.contains("tester01", { timeout: 100000 }).click();
    cy.wait(3000);
    cy.contains("Choose Action", { timeout: 50000 }).click();
    cy.wait(3000);
    cy.get('[id="btn-action-Meter-1"]', { timeout: 10000 }).click();
    cy.wait(3000);
    cy.get('[name="meter_description"]', { timeout: 10000 }).type(
      "description tester01 update"
    );
    cy.wait(3000);
    cy.get('[type="submit"]', { timeout: 10000 }).click();
    cy.wait(3000);
    cy.contains("Yes! Confirm", { timeout: 10000 }).click();
    cy.wait(3000);
    cy.contains("OK", { timeout: 10000 }).click();
    cy.wait(3000);
  });

  it("Positive - Delete Meters", () => {
    login();
    cy.contains("Dashboard", { timeout: 100000 }).should("be.visible");
    cy.wait(3000);
    cy.get('span[role="menuitem"]').eq(1).click();
    cy.wait(3000);
    cy.contains("Meters & Groups", { timeout: 50000 }).click();
    cy.wait(3000);
    cy.contains("tester01", { timeout: 100000 }).should("be.visible");
    cy.wait(3000);
    cy.contains("Choose Action", { timeout: 50000 }).click();
    cy.wait(3000);
    cy.get('[id="btn-action-Meter-2"]', { timeout: 10000 }).click();
    cy.wait(3000);
    cy.get('[class="css-19bb58m"]', { timeout: 10000 }).click();
    cy.wait(5000);
    cy.contains("tester01", { timeout: 10000 }).click();
    cy.wait(3000);
    cy.get('[type="submit"]', { timeout: 10000 }).click();
    cy.wait(3000);
    cy.contains("Yes! Confirm", { timeout: 10000 }).click();
    cy.wait(3000);
    cy.contains("OK", { timeout: 10000 }).click();
    cy.wait(3000);
  });
});
