// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Compute/locations/westus/publishers/MicrosoftWindowsServer/artifacttypes/vmimage/offers/WindowsServer/skus?api-version=2017-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"2008-R2-SP1\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2008-R2-SP1\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"2012-Datacenter\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-Datacenter\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"2012-R2-Datacenter\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"2016-Nano-Docker-Test\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2016-Nano-Docker-Test\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"2016-Nano-Server-Technical-Preview\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2016-Nano-Server-Technical-Preview\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"2016-Technical-Preview-with-Containers\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2016-Technical-Preview-with-Containers\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"Windows-Server-Technical-Preview\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/Windows-Server-Technical-Preview\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2077',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '45c53ed1-c9a0-4c98-8617-5e9aa2395ce7',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '9948b45d-47dc-4dd4-b56a-9352db08ccc8',
  'x-ms-routing-request-id': 'WESTUS:20160315T015815Z:9948b45d-47dc-4dd4-b56a-9352db08ccc8',
  date: 'Tue, 15 Mar 2016 01:58:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Compute/locations/westus/publishers/MicrosoftWindowsServer/artifacttypes/vmimage/offers/WindowsServer/skus?api-version=2017-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"2008-R2-SP1\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2008-R2-SP1\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"2012-Datacenter\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-Datacenter\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"2012-R2-Datacenter\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"2016-Nano-Docker-Test\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2016-Nano-Docker-Test\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"2016-Nano-Server-Technical-Preview\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2016-Nano-Server-Technical-Preview\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"2016-Technical-Preview-with-Containers\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2016-Technical-Preview-with-Containers\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"Windows-Server-Technical-Preview\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/Windows-Server-Technical-Preview\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2077',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '45c53ed1-c9a0-4c98-8617-5e9aa2395ce7',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '9948b45d-47dc-4dd4-b56a-9352db08ccc8',
  'x-ms-routing-request-id': 'WESTUS:20160315T015815Z:9948b45d-47dc-4dd4-b56a-9352db08ccc8',
  date: 'Tue, 15 Mar 2016 01:58:15 GMT',
  connection: 'close' });
 return result; }]];