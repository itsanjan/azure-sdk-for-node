// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/nodeagentskus?api-version=2017-05-01.5.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#nodeagentskus\",\"value\":[\r\n    {\r\n      \"id\":\"batch.node.centos 7\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS\",\"sku\":\"7.3\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS\",\"sku\":\"7.2\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS\",\"sku\":\"7.1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS\",\"sku\":\"7.0\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS-HPC\",\"sku\":\"7.1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Oracle\",\"offer\":\"Oracle-Linux\",\"sku\":\"7.2\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Oracle\",\"offer\":\"Oracle-Linux\",\"sku\":\"7.0\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-ads\",\"offer\":\"linux-data-science-vm\",\"sku\":\"linuxdsvm\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.debian 8\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Credativ\",\"offer\":\"Debian\",\"sku\":\"8\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.opensuse 13.2\",\"verifiedImageReferences\":[\r\n        \r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.opensuse 42.1\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"SUSE\",\"offer\":\"openSUSE-Leap\",\"sku\":\"42.1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"SUSE\",\"offer\":\"SLES\",\"sku\":\"12-SP2\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"SUSE\",\"offer\":\"SLES\",\"sku\":\"12-SP1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"SUSE\",\"offer\":\"SLES-HPC\",\"sku\":\"12-SP1\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.ubuntu 14.04\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.5-LTS\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.ubuntu 16.04\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.10\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.windows amd64\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2008-R2-SP1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2016-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2016-Datacenter-with-Containers\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-ads\",\"offer\":\"standard-data-science-vm\",\"sku\":\"standard-data-science-vm\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"windows\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e465a51b-cf32-42e2-b339-5d954792be92',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 16:44:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/nodeagentskus?api-version=2017-05-01.5.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#nodeagentskus\",\"value\":[\r\n    {\r\n      \"id\":\"batch.node.centos 7\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS\",\"sku\":\"7.3\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS\",\"sku\":\"7.2\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS\",\"sku\":\"7.1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS\",\"sku\":\"7.0\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS-HPC\",\"sku\":\"7.1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Oracle\",\"offer\":\"Oracle-Linux\",\"sku\":\"7.2\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Oracle\",\"offer\":\"Oracle-Linux\",\"sku\":\"7.0\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-ads\",\"offer\":\"linux-data-science-vm\",\"sku\":\"linuxdsvm\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.debian 8\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Credativ\",\"offer\":\"Debian\",\"sku\":\"8\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.opensuse 13.2\",\"verifiedImageReferences\":[\r\n        \r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.opensuse 42.1\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"SUSE\",\"offer\":\"openSUSE-Leap\",\"sku\":\"42.1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"SUSE\",\"offer\":\"SLES\",\"sku\":\"12-SP2\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"SUSE\",\"offer\":\"SLES\",\"sku\":\"12-SP1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"SUSE\",\"offer\":\"SLES-HPC\",\"sku\":\"12-SP1\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.ubuntu 14.04\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.5-LTS\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.ubuntu 16.04\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.10\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.windows amd64\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2008-R2-SP1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2016-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2016-Datacenter-with-Containers\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-ads\",\"offer\":\"standard-data-science-vm\",\"sku\":\"standard-data-science-vm\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"windows\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e465a51b-cf32-42e2-b339-5d954792be92',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 16:44:50 GMT',
  connection: 'close' });
 return result; }]];