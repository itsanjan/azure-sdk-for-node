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
 * The localizable string class.
 *
 */
class LocalizableString {
  /**
   * Create a LocalizableString.
   * @member {string} value the invariant value.
   * @member {string} [localizedValue] the locale specific value.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LocalizableString
   *
   * @returns {object} metadata of LocalizableString
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LocalizableString',
      type: {
        name: 'Composite',
        className: 'LocalizableString',
        modelProperties: {
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          },
          localizedValue: {
            required: false,
            serializedName: 'localizedValue',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LocalizableString;
