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
 * ExpressRouteCircuit resource
 *
 * @extends models['Resource']
 */
class ExpressRouteCircuit extends models['Resource'] {
  /**
   * Create a ExpressRouteCircuit.
   * @member {object} [sku] The SKU.
   * @member {string} [sku.name] The name of the SKU.
   * @member {string} [sku.tier] The tier of the SKU. Possible values are
   * 'Standard' and 'Premium'. Possible values include: 'Standard', 'Premium'
   * @member {string} [sku.family] The family of the SKU. Possible values are:
   * 'UnlimitedData' and 'MeteredData'. Possible values include:
   * 'UnlimitedData', 'MeteredData'
   * @member {boolean} [allowClassicOperations] Allow classic operations
   * @member {string} [circuitProvisioningState] The CircuitProvisioningState
   * state of the resource.
   * @member {string} [serviceProviderProvisioningState] The
   * ServiceProviderProvisioningState state of the resource. Possible values
   * are 'NotProvisioned', 'Provisioning', 'Provisioned', and 'Deprovisioning'.
   * Possible values include: 'NotProvisioned', 'Provisioning', 'Provisioned',
   * 'Deprovisioning'
   * @member {array} [authorizations] The list of authorizations.
   * @member {array} [peerings] The list of peerings.
   * @member {string} [serviceKey] The ServiceKey.
   * @member {string} [serviceProviderNotes] The ServiceProviderNotes.
   * @member {object} [serviceProviderProperties] The
   * ServiceProviderProperties.
   * @member {string} [serviceProviderProperties.serviceProviderName] The
   * serviceProviderName.
   * @member {string} [serviceProviderProperties.peeringLocation] The peering
   * location.
   * @member {number} [serviceProviderProperties.bandwidthInMbps] The
   * BandwidthInMbps.
   * @member {string} [provisioningState] Gets the provisioning state of the
   * public IP resource. Possible values are: 'Updating', 'Deleting', and
   * 'Failed'.
   * @member {string} [gatewayManagerEtag] The GatewayManager Etag.
   * @member {string} [etag] Gets a unique read-only string that changes
   * whenever the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ExpressRouteCircuit
   *
   * @returns {object} metadata of ExpressRouteCircuit
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExpressRouteCircuit',
      type: {
        name: 'Composite',
        className: 'ExpressRouteCircuit',
        modelProperties: {
          id: {
            required: false,
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
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
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
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuitSku'
            }
          },
          allowClassicOperations: {
            required: false,
            serializedName: 'properties.allowClassicOperations',
            type: {
              name: 'Boolean'
            }
          },
          circuitProvisioningState: {
            required: false,
            serializedName: 'properties.circuitProvisioningState',
            type: {
              name: 'String'
            }
          },
          serviceProviderProvisioningState: {
            required: false,
            serializedName: 'properties.serviceProviderProvisioningState',
            type: {
              name: 'String'
            }
          },
          authorizations: {
            required: false,
            serializedName: 'properties.authorizations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExpressRouteCircuitAuthorizationElementType',
                  type: {
                    name: 'Composite',
                    className: 'ExpressRouteCircuitAuthorization'
                  }
              }
            }
          },
          peerings: {
            required: false,
            serializedName: 'properties.peerings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExpressRouteCircuitPeeringElementType',
                  type: {
                    name: 'Composite',
                    className: 'ExpressRouteCircuitPeering'
                  }
              }
            }
          },
          serviceKey: {
            required: false,
            serializedName: 'properties.serviceKey',
            type: {
              name: 'String'
            }
          },
          serviceProviderNotes: {
            required: false,
            serializedName: 'properties.serviceProviderNotes',
            type: {
              name: 'String'
            }
          },
          serviceProviderProperties: {
            required: false,
            serializedName: 'properties.serviceProviderProperties',
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuitServiceProviderProperties'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          gatewayManagerEtag: {
            required: false,
            serializedName: 'properties.gatewayManagerEtag',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            readOnly: true,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExpressRouteCircuit;