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
 * Class representing a JitNetworkAccessPoliciesList.
 */
class JitNetworkAccessPoliciesList extends Array {
  /**
   * Create a JitNetworkAccessPoliciesList.
   * @member {string} [nextLink] The URI to fetch the next page.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JitNetworkAccessPoliciesList
   *
   * @returns {object} metadata of JitNetworkAccessPoliciesList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JitNetworkAccessPoliciesList',
      type: {
        name: 'Composite',
        className: 'JitNetworkAccessPoliciesList',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JitNetworkAccessPolicyElementType',
                  type: {
                    name: 'Composite',
                    className: 'JitNetworkAccessPolicy'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = JitNetworkAccessPoliciesList;