/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * SKU name, tier, etc.
 *
 */
class AvailableServiceSkuSku {
  /**
   * Create a AvailableServiceSkuSku.
   * @property {string} [name] The name of the SKU
   * @property {string} [family] SKU family
   * @property {string} [size] SKU size
   * @property {string} [tier] The tier of the SKU, such as "Basic", "General
   * Purpose", or "Business Critical"
   */
  constructor() {
  }

  /**
   * Defines the metadata of AvailableServiceSkuSku
   *
   * @returns {object} metadata of AvailableServiceSkuSku
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AvailableServiceSku_sku',
      type: {
        name: 'Composite',
        className: 'AvailableServiceSkuSku',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          family: {
            required: false,
            serializedName: 'family',
            type: {
              name: 'String'
            }
          },
          size: {
            required: false,
            serializedName: 'size',
            type: {
              name: 'String'
            }
          },
          tier: {
            required: false,
            serializedName: 'tier',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AvailableServiceSkuSku;