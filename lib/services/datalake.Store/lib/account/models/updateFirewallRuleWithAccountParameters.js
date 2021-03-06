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
 * The parameters used to update a firewall rule while updating a Data Lake
 * Store account.
 *
 */
class UpdateFirewallRuleWithAccountParameters {
  /**
   * Create a UpdateFirewallRuleWithAccountParameters.
   * @property {string} name The unique name of the firewall rule to update.
   * @property {string} [startIpAddress] The start IP address for the firewall
   * rule. This can be either ipv4 or ipv6. Start and End should be in the same
   * protocol.
   * @property {string} [endIpAddress] The end IP address for the firewall
   * rule. This can be either ipv4 or ipv6. Start and End should be in the same
   * protocol.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdateFirewallRuleWithAccountParameters
   *
   * @returns {object} metadata of UpdateFirewallRuleWithAccountParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdateFirewallRuleWithAccountParameters',
      type: {
        name: 'Composite',
        className: 'UpdateFirewallRuleWithAccountParameters',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          startIpAddress: {
            required: false,
            serializedName: 'properties.startIpAddress',
            type: {
              name: 'String'
            }
          },
          endIpAddress: {
            required: false,
            serializedName: 'properties.endIpAddress',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UpdateFirewallRuleWithAccountParameters;
