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
 * Azure storage specific job.
 *
 * @extends models['Job']
 */
class AzureStorageJob extends models['Job'] {
  /**
   * Create a AzureStorageJob.
   * @member {moment.duration} [duration] Time elapsed during the execution of
   * this job.
   * @member {array} [actionsInfo] Gets or sets the state/actions applicable on
   * this job like cancel/retry.
   * @member {array} [errorDetails] Error details on execution of this job.
   * @member {string} [storageAccountName] Specifies friendly name of the
   * storage account.
   * @member {string} [storageAccountVersion] Specifies whether the Storage
   * account is a Classic or an Azure Resource Manager Storage account.
   * @member {object} [extendedInfo] Additional information about the job.
   * @member {array} [extendedInfo.tasksList] List of tasks for this job
   * @member {object} [extendedInfo.propertyBag] Job properties.
   * @member {string} [extendedInfo.dynamicErrorMessage] Non localized error
   * message on job execution.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureStorageJob
   *
   * @returns {object} metadata of AzureStorageJob
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureStorageJob',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'jobType',
          clientName: 'jobType'
        },
        uberParent: 'Job',
        className: 'AzureStorageJob',
        modelProperties: {
          entityFriendlyName: {
            required: false,
            serializedName: 'entityFriendlyName',
            type: {
              name: 'String'
            }
          },
          backupManagementType: {
            required: false,
            serializedName: 'backupManagementType',
            type: {
              name: 'String'
            }
          },
          operation: {
            required: false,
            serializedName: 'operation',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          startTime: {
            required: false,
            serializedName: 'startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            serializedName: 'endTime',
            type: {
              name: 'DateTime'
            }
          },
          activityId: {
            required: false,
            serializedName: 'activityId',
            type: {
              name: 'String'
            }
          },
          jobType: {
            required: true,
            serializedName: 'jobType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          duration: {
            required: false,
            serializedName: 'duration',
            type: {
              name: 'TimeSpan'
            }
          },
          actionsInfo: {
            required: false,
            serializedName: 'actionsInfo',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobSupportedActionElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'Invalid', 'Cancellable', 'Retriable' ]
                  }
              }
            }
          },
          errorDetails: {
            required: false,
            serializedName: 'errorDetails',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AzureStorageErrorInfoElementType',
                  type: {
                    name: 'Composite',
                    className: 'AzureStorageErrorInfo'
                  }
              }
            }
          },
          storageAccountName: {
            required: false,
            serializedName: 'storageAccountName',
            type: {
              name: 'String'
            }
          },
          storageAccountVersion: {
            required: false,
            serializedName: 'storageAccountVersion',
            type: {
              name: 'String'
            }
          },
          extendedInfo: {
            required: false,
            serializedName: 'extendedInfo',
            type: {
              name: 'Composite',
              className: 'AzureStorageJobExtendedInfo'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureStorageJob;