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
 * Common metadata for migration projects
 *
 */
class DataMigrationProjectMetadata {
  /**
   * Create a DataMigrationProjectMetadata.
   * @property {string} [sourceServerName] Source server name
   * @property {string} [sourceServerPort] Source server port number
   * @property {string} [sourceUsername] Source username
   * @property {string} [targetServerName] Target server name
   * @property {string} [targetUsername] Target username
   * @property {string} [targetDbName] Target database name
   * @property {boolean} [targetUsingWinAuth] Whether target connection is
   * Windows authentication
   * @property {array} [selectedMigrationTables] List of tables selected for
   * migration
   */
  constructor() {
  }

  /**
   * Defines the metadata of DataMigrationProjectMetadata
   *
   * @returns {object} metadata of DataMigrationProjectMetadata
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataMigrationProjectMetadata',
      type: {
        name: 'Composite',
        className: 'DataMigrationProjectMetadata',
        modelProperties: {
          sourceServerName: {
            required: false,
            readOnly: true,
            serializedName: 'sourceServerName',
            type: {
              name: 'String'
            }
          },
          sourceServerPort: {
            required: false,
            readOnly: true,
            serializedName: 'sourceServerPort',
            type: {
              name: 'String'
            }
          },
          sourceUsername: {
            required: false,
            readOnly: true,
            serializedName: 'sourceUsername',
            type: {
              name: 'String'
            }
          },
          targetServerName: {
            required: false,
            readOnly: true,
            serializedName: 'targetServerName',
            type: {
              name: 'String'
            }
          },
          targetUsername: {
            required: false,
            readOnly: true,
            serializedName: 'targetUsername',
            type: {
              name: 'String'
            }
          },
          targetDbName: {
            required: false,
            readOnly: true,
            serializedName: 'targetDbName',
            type: {
              name: 'String'
            }
          },
          targetUsingWinAuth: {
            required: false,
            readOnly: true,
            serializedName: 'targetUsingWinAuth',
            type: {
              name: 'Boolean'
            }
          },
          selectedMigrationTables: {
            required: false,
            readOnly: true,
            serializedName: 'selectedMigrationTables',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MigrationTableMetadataElementType',
                  type: {
                    name: 'Composite',
                    className: 'MigrationTableMetadata'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DataMigrationProjectMetadata;