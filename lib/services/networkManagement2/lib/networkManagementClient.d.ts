/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClient, ServiceClientOptions, ServiceCallback, HttpOperationResponse, ServiceClientCredentials } from 'ms-rest';
import { AzureServiceClient, AzureServiceClientOptions } from 'ms-rest-azure';
import * as models from "./models";
import * as operations from "./operations";

export default class NetworkManagementClient extends AzureServiceClient {
  /**
   * Initializes a new instance of the NetworkManagementClient class.
   * @constructor
   *
   * @class
   * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {string} subscriptionId - The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: ServiceClientCredentials, subscriptionId: string, baseUri?: string, options?: AzureServiceClientOptions);

  credentials: ServiceClientCredentials;

  subscriptionId: string;

  apiVersion: string;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;

  generateClientRequestId: boolean;

  // Operation groups
  applicationGateways: operations.ApplicationGateways;
  applicationSecurityGroups: operations.ApplicationSecurityGroups;
  ddosProtectionPlans: operations.DdosProtectionPlans;
  availableEndpointServices: operations.AvailableEndpointServices;
  expressRouteCircuitAuthorizations: operations.ExpressRouteCircuitAuthorizations;
  expressRouteCircuitPeerings: operations.ExpressRouteCircuitPeerings;
  expressRouteCircuitConnections: operations.ExpressRouteCircuitConnections;
  expressRouteCircuits: operations.ExpressRouteCircuits;
  expressRouteServiceProviders: operations.ExpressRouteServiceProviders;
  expressRouteCrossConnections: operations.ExpressRouteCrossConnections;
  expressRouteCrossConnectionPeerings: operations.ExpressRouteCrossConnectionPeerings;
  loadBalancers: operations.LoadBalancers;
  loadBalancerBackendAddressPools: operations.LoadBalancerBackendAddressPools;
  loadBalancerFrontendIPConfigurations: operations.LoadBalancerFrontendIPConfigurations;
  inboundNatRules: operations.InboundNatRules;
  loadBalancerLoadBalancingRules: operations.LoadBalancerLoadBalancingRules;
  loadBalancerNetworkInterfaces: operations.LoadBalancerNetworkInterfaces;
  loadBalancerProbes: operations.LoadBalancerProbes;
  networkInterfaces: operations.NetworkInterfaces;
  networkInterfaceIPConfigurations: operations.NetworkInterfaceIPConfigurations;
  networkInterfaceLoadBalancers: operations.NetworkInterfaceLoadBalancers;
  networkSecurityGroups: operations.NetworkSecurityGroups;
  securityRules: operations.SecurityRules;
  defaultSecurityRules: operations.DefaultSecurityRules;
  networkWatchers: operations.NetworkWatchers;
  packetCaptures: operations.PacketCaptures;
  connectionMonitors: operations.ConnectionMonitors;
  operations: operations.Operations;
  publicIPAddresses: operations.PublicIPAddresses;
  routeFilters: operations.RouteFilters;
  routeFilterRules: operations.RouteFilterRules;
  routeTables: operations.RouteTables;
  routes: operations.Routes;
  bgpServiceCommunities: operations.BgpServiceCommunities;
  usages: operations.Usages;
  virtualNetworks: operations.VirtualNetworks;
  subnets: operations.Subnets;
  virtualNetworkPeerings: operations.VirtualNetworkPeerings;
  virtualNetworkGateways: operations.VirtualNetworkGateways;
  virtualNetworkGatewayConnections: operations.VirtualNetworkGatewayConnections;
  localNetworkGateways: operations.LocalNetworkGateways;


  /**
   * Checks whether a domain name in the cloudapp.azure.com zone is available for
   * use.
   *
   * @param {string} location The location of the domain name.
   *
   * @param {string} domainNameLabel The domain name to be verified. It must
   * conform to the following regular expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DnsNameAvailabilityResult>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  checkDnsNameAvailabilityWithHttpOperationResponse(location: string, domainNameLabel: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DnsNameAvailabilityResult>>;

  /**
   * Checks whether a domain name in the cloudapp.azure.com zone is available for
   * use.
   *
   * @param {string} location The location of the domain name.
   *
   * @param {string} domainNameLabel The domain name to be verified. It must
   * conform to the following regular expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DnsNameAvailabilityResult} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DnsNameAvailabilityResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DnsNameAvailabilityResult} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  checkDnsNameAvailability(location: string, domainNameLabel: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.DnsNameAvailabilityResult>;
  checkDnsNameAvailability(location: string, domainNameLabel: string, callback: ServiceCallback<models.DnsNameAvailabilityResult>): void;
  checkDnsNameAvailability(location: string, domainNameLabel: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DnsNameAvailabilityResult>): void;
}

export { NetworkManagementClient, models as NetworkManagementModels };
