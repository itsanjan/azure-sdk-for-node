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
 * Output for connect to Oracle, MySQL type source
 *
 */
class ConnectToSourceNonSqlTaskOutput {
  /**
   * Create a ConnectToSourceNonSqlTaskOutput.
   * @property {string} [id] Result identifier
   * @property {string} [sourceServerBrandVersion] Server brand version
   * @property {object} [serverProperties] Server properties
   * @property {string} [serverProperties.serverPlatform] Name of the server
   * platform
   * @property {string} [serverProperties.serverName] Name of the server
   * @property {string} [serverProperties.serverVersion] Version of the
   * database server
   * @property {string} [serverProperties.serverEdition] Edition of the
   * database server
   * @property {string} [serverProperties.serverOperatingSystemVersion] Version
   * of the operating system
   * @property {number} [serverProperties.serverDatabaseCount] Number of
   * databases in the server
   * @property {array} [databases] List of databases on the server
   * @property {array} [validationErrors] Validation errors associated with the
   * task
   */
  constructor() {
  }

  /**
   * Defines the metadata of ConnectToSourceNonSqlTaskOutput
   *
   * @returns {object} metadata of ConnectToSourceNonSqlTaskOutput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ConnectToSourceNonSqlTaskOutput',
      type: {
        name: 'Composite',
        className: 'ConnectToSourceNonSqlTaskOutput',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          sourceServerBrandVersion: {
            required: false,
            readOnly: true,
            serializedName: 'sourceServerBrandVersion',
            type: {
              name: 'String'
            }
          },
          serverProperties: {
            required: false,
            readOnly: true,
            serializedName: 'serverProperties',
            type: {
              name: 'Composite',
              className: 'ServerProperties'
            }
          },
          databases: {
            required: false,
            readOnly: true,
            serializedName: 'databases',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          validationErrors: {
            required: false,
            readOnly: true,
            serializedName: 'validationErrors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ReportableExceptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ReportableException'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ConnectToSourceNonSqlTaskOutput;