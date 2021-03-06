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
 * A Streaming Locator resource
 *
 * @extends models['ProxyResource']
 */
class StreamingLocator extends models['ProxyResource'] {
  /**
   * Create a StreamingLocator.
   * @property {string} assetName Asset Name
   * @property {date} [created] The creation time of the Streaming Locator.
   * @property {date} [startTime] The start time of the Streaming Locator.
   * @property {date} [endTime] The end time of the Streaming Locator.
   * @property {uuid} [streamingLocatorId] The StreamingLocatorId of the
   * Streaming Locator.
   * @property {string} streamingPolicyName Name of the Streaming Policy used
   * by this Streaming Locator. Either specify the name of Streaming Policy you
   * created or use one of the predefined Streaming Policies. The predefined
   * Streaming Policies available are: 'Predefined_DownloadOnly',
   * 'Predefined_ClearStreamingOnly', 'Predefined_DownloadAndClearStreaming',
   * 'Predefined_ClearKey', 'Predefined_MultiDrmCencStreaming' and
   * 'Predefined_MultiDrmStreaming'
   * @property {string} [defaultContentKeyPolicyName] Name of the default
   * ContentKeyPolicy used by this Streaming Locator.
   * @property {array} [contentKeys] The ContentKeys used by this Streaming
   * Locator.
   * @property {string} [alternativeMediaId] Alternative Media ID of this
   * Streaming Locator
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StreamingLocator
   *
   * @returns {object} metadata of StreamingLocator
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StreamingLocator',
      type: {
        name: 'Composite',
        className: 'StreamingLocator',
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
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          assetName: {
            required: true,
            serializedName: 'properties.assetName',
            type: {
              name: 'String'
            }
          },
          created: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'properties.created',
            type: {
              name: 'DateTime'
            }
          },
          startTime: {
            required: false,
            serializedName: 'properties.startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            serializedName: 'properties.endTime',
            type: {
              name: 'DateTime'
            }
          },
          streamingLocatorId: {
            required: false,
            serializedName: 'properties.streamingLocatorId',
            type: {
              name: 'String'
            }
          },
          streamingPolicyName: {
            required: true,
            serializedName: 'properties.streamingPolicyName',
            type: {
              name: 'String'
            }
          },
          defaultContentKeyPolicyName: {
            required: false,
            serializedName: 'properties.defaultContentKeyPolicyName',
            type: {
              name: 'String'
            }
          },
          contentKeys: {
            required: false,
            serializedName: 'properties.contentKeys',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StreamingLocatorContentKeyElementType',
                  type: {
                    name: 'Composite',
                    className: 'StreamingLocatorContentKey'
                  }
              }
            }
          },
          alternativeMediaId: {
            required: false,
            serializedName: 'properties.alternativeMediaId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StreamingLocator;
