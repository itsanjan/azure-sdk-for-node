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
 * Class representing a MigrateSqlServerSqlMITaskOutputDatabaseLevel.
 * @extends models['MigrateSqlServerSqlMITaskOutput']
 */
class MigrateSqlServerSqlMITaskOutputDatabaseLevel extends models['MigrateSqlServerSqlMITaskOutput'] {
  /**
   * Create a MigrateSqlServerSqlMITaskOutputDatabaseLevel.
   * @property {string} [databaseName] Name of the database
   * @property {number} [sizeMB] Size of the database in megabytes
   * @property {string} [state] Current state of migration. Possible values
   * include: 'None', 'InProgress', 'Failed', 'Warning', 'Completed',
   * 'Skipped', 'Stopped'
   * @property {string} [stage] Current stage of migration. Possible values
   * include: 'None', 'Initialize', 'Backup', 'FileCopy', 'Restore',
   * 'Completed'
   * @property {date} [startedOn] Migration start time
   * @property {date} [endedOn] Migration end time
   * @property {string} [message] Migration progress message
   * @property {array} [exceptionsAndWarnings] Migration exceptions and
   * warnings
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MigrateSqlServerSqlMITaskOutputDatabaseLevel
   *
   * @returns {object} metadata of MigrateSqlServerSqlMITaskOutputDatabaseLevel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DatabaseLevelOutput',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'resultType',
          clientName: 'resultType'
        },
        uberParent: 'MigrateSqlServerSqlMITaskOutput',
        className: 'MigrateSqlServerSqlMITaskOutputDatabaseLevel',
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
          databaseName: {
            required: false,
            readOnly: true,
            serializedName: 'databaseName',
            type: {
              name: 'String'
            }
          },
          sizeMB: {
            required: false,
            readOnly: true,
            serializedName: 'sizeMB',
            type: {
              name: 'Number'
            }
          },
          state: {
            required: false,
            readOnly: true,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          stage: {
            required: false,
            readOnly: true,
            serializedName: 'stage',
            type: {
              name: 'String'
            }
          },
          startedOn: {
            required: false,
            readOnly: true,
            serializedName: 'startedOn',
            type: {
              name: 'DateTime'
            }
          },
          endedOn: {
            required: false,
            readOnly: true,
            serializedName: 'endedOn',
            type: {
              name: 'DateTime'
            }
          },
          message: {
            required: false,
            readOnly: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          exceptionsAndWarnings: {
            required: false,
            readOnly: true,
            serializedName: 'exceptionsAndWarnings',
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

module.exports = MigrateSqlServerSqlMITaskOutputDatabaseLevel;