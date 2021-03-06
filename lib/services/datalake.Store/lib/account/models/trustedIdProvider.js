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
 * Data Lake Store trusted identity provider information.
 *
 * @extends models['SubResource']
 */
class TrustedIdProvider extends models['SubResource'] {
  /**
   * Create a TrustedIdProvider.
   * @property {string} [idProvider] The URL of this trusted identity provider.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of TrustedIdProvider
   *
   * @returns {object} metadata of TrustedIdProvider
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TrustedIdProvider',
      type: {
        name: 'Composite',
        className: 'TrustedIdProvider',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          idProvider: {
            required: false,
            readOnly: true,
            serializedName: 'properties.idProvider',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TrustedIdProvider;
