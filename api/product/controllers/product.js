'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    console.log("overriding find...");
    const products = await strapi.services.product.find(ctx.query);

    return products.map((product) => product.title);
  }
};

