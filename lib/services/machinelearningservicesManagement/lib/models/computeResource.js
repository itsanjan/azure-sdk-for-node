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
 * Machine Learning compute object wrapped into ARM resource envelope.
 *
 * @extends models['Resource']
 */
class ComputeResource extends models['Resource'] {
  /**
   * Create a ComputeResource.
   * @member {object} [properties] Compute properties
   * @member {string} [properties.computeLocation] Location for the underlying
   * compute
   * @member {string} [properties.provisioningState] The provision state of the
   * cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and
   * Failed. Possible values include: 'Unknown', 'Updating', 'Creating',
   * 'Deleting', 'Succeeded', 'Failed', 'Canceled'
   * @member {string} [properties.description] The description of the Machine
   * Learning compute.
   * @member {date} [properties.createdOn] The date and time when the compute
   * was created.
   * @member {date} [properties.modifiedOn] The date and time when the compute
   * was last modified.
   * @member {string} [properties.resourceId] ARM resource id of the compute
   * @member {array} [properties.provisioningErrors] Errors during provisioning
   * @member {string} [properties.computeType] Polymorphic Discriminator
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ComputeResource
   *
   * @returns {object} metadata of ComputeResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ComputeResource',
      type: {
        name: 'Composite',
        className: 'ComputeResource',
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
          identity: {
            required: false,
            readOnly: true,
            serializedName: 'identity',
            type: {
              name: 'Composite',
              className: 'Identity'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
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
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'computeType',
                clientName: 'computeType'
              },
              uberParent: 'Compute',
              className: 'Compute'
            }
          }
        }
      }
    };
  }
}

module.exports = ComputeResource;