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
 * Describes scaling information of a SKU.
 *
 */
class ResourceSkuCapacity {
  /**
   * Create a ResourceSkuCapacity.
   * @member {number} [minimum] The minimum capacity.
   * @member {number} [maximum] The maximum capacity that can be set.
   * @member {number} [default] The default capacity.
   * @member {string} [scaleType] The scale type applicable to the sku.
   * Possible values include: 'automatic', 'manual', 'none'
   */
  constructor() {
  }

  /**
   * Defines the metadata of ResourceSkuCapacity
   *
   * @returns {object} metadata of ResourceSkuCapacity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResourceSkuCapacity',
      type: {
        name: 'Composite',
        className: 'ResourceSkuCapacity',
        modelProperties: {
          minimum: {
            required: false,
            readOnly: true,
            serializedName: 'minimum',
            type: {
              name: 'Number'
            }
          },
          maximum: {
            required: false,
            readOnly: true,
            serializedName: 'maximum',
            type: {
              name: 'Number'
            }
          },
          default: {
            required: false,
            readOnly: true,
            serializedName: 'default',
            type: {
              name: 'Number'
            }
          },
          scaleType: {
            required: false,
            readOnly: true,
            serializedName: 'scaleType',
            type: {
              name: 'Enum',
              allowedValues: [ 'automatic', 'manual', 'none' ]
            }
          }
        }
      }
    };
  }
}

module.exports = ResourceSkuCapacity;