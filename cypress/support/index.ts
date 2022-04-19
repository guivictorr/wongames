// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

// Alternatively you can use CommonJS syntax:
// require('./commands')
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to check if showcase is rendered correctly
       * @example cy.shouldRenderShowcase()
       */
      shouldRenderShowcase(attr: ShowcaseAttributes): Chainable<Element>
    }
  }
}
