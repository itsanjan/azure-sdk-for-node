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
 * Class representing a MigrateMySqlAzureDbForMySqlSyncTaskOutputError.
 * @extends models['MigrateMySqlAzureDbForMySqlSyncTaskOutput']
 */
class MigrateMySqlAzureDbForMySqlSyncTaskOutputError extends models['MigrateMySqlAzureDbForMySqlSyncTaskOutput'] {
  /**
   * Create a MigrateMySqlAzureDbForMySqlSyncTaskOutputError.
   * @property {object} [error] Migration error
   * @property {string} [error.message] Error message
   * @property {string} [error.actionableMessage] Actionable steps for this
   * exception
   * @property {string} [error.filePath] The path to the file where exception
   * occurred
   * @property {string} [error.lineNumber] The line number where exception
   * occurred
   * @property {number} [error.hResult] Coded numerical value that is assigned
   * to a specific exception
   * @property {string} [error.stackTrace] Stack trace
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MigrateMySqlAzureDbForMySqlSyncTaskOutputError
   *
   * @returns {object} metadata of MigrateMySqlAzureDbForMySqlSyncTaskOutputError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorOutput',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'resultType',
          clientName: 'resultType'
        },
        uberParent: 'MigrateMySqlAzureDbForMySqlSyncTaskOutput',
        className: 'MigrateMySqlAzureDbForMySqlSyncTaskOutputError',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          resultType: {
            required: true,
            serializedName: 'resultType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          error: {
            required: false,
            readOnly: true,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'ReportableException'
            }
          }
        }
      }
    };
  }
}

module.exports = MigrateMySqlAzureDbForMySqlSyncTaskOutputError;