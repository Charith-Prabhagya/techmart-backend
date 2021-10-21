'use strict';

const { default: createStrapi } = require("strapi");
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

   async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.product.create(data, { files });
    } else {
      entity = await strapi.services.product.create(ctx.request.body);
    }
    console.log("creating product..");

    // creating a new category in the same request
    const resp = await strapi.services.category.create({
             name: 'mouse'
    })
      console.log("creating category..");

    return sanitizeEntity(entity, { model: strapi.models.product });
  },

};
