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
 * The key restore parameters.
 *
 */
class KeyRestoreParameters {
  /**
   * Create a KeyRestoreParameters.
   * @member {buffer} keyBundleBackup The backup blob associated with a key
   * bundle.
   */
  constructor() {
  }

  /**
   * Defines the metadata of KeyRestoreParameters
   *
   * @returns {object} metadata of KeyRestoreParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'KeyRestoreParameters',
      type: {
        name: 'Composite',
        className: 'KeyRestoreParameters',
        modelProperties: {
          keyBundleBackup: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'Base64Url'
            }
          }
        }
      }
    };
  }
}

module.exports = KeyRestoreParameters;