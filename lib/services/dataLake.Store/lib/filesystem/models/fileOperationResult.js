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
 * The result of the request or operation.
 *
 */
class FileOperationResult {
  /**
   * Create a FileOperationResult.
   * @member {boolean} [operationResult] the result of the operation or
   * request.
   */
  constructor() {
  }

  /**
   * Defines the metadata of FileOperationResult
   *
   * @returns {object} metadata of FileOperationResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FileOperationResult',
      type: {
        name: 'Composite',
        className: 'FileOperationResult',
        modelProperties: {
          operationResult: {
            required: false,
            readOnly: true,
            serializedName: 'boolean',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = FileOperationResult;