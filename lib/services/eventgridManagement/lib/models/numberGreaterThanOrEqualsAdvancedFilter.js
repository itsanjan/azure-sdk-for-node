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

const models = require('./index');

/**
 * NumberGreaterThanOrEquals Filter
 *
 * @extends models['AdvancedFilter']
 */
class NumberGreaterThanOrEqualsAdvancedFilter extends models['AdvancedFilter'] {
  /**
   * Create a NumberGreaterThanOrEqualsAdvancedFilter.
   * @member {number} [value] The filter value
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NumberGreaterThanOrEqualsAdvancedFilter
   *
   * @returns {object} metadata of NumberGreaterThanOrEqualsAdvancedFilter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NumberGreaterThanOrEquals',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'operatorType',
          clientName: 'operatorType'
        },
        uberParent: 'AdvancedFilter',
        className: 'NumberGreaterThanOrEqualsAdvancedFilter',
        modelProperties: {
          key: {
            required: false,
            serializedName: 'key',
            type: {
              name: 'String'
            }
          },
          operatorType: {
            required: true,
            serializedName: 'operatorType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = NumberGreaterThanOrEqualsAdvancedFilter;