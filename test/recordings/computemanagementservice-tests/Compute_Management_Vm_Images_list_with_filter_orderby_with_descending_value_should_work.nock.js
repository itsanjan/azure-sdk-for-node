// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Compute/locations/westus/publishers/MicrosoftWindowsServer/artifacttypes/vmimage/offers/WindowsServer/skus/2012-R2-Datacenter/versions?$orderby=name%20desc&api-version=2017-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"4.0.20160229\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter/Versions/4.0.20160229\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"4.0.20160126\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter/Versions/4.0.20160126\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"4.0.20151214\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter/Versions/4.0.20151214\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"4.0.20151120\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter/Versions/4.0.20151120\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'bb918560-5a0f-432d-9473-8fb7b8ec19ae',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'f65397e2-8390-4391-8e1c-a28e067c1a2c',
  'x-ms-routing-request-id': 'WESTUS:20160315T015819Z:f65397e2-8390-4391-8e1c-a28e067c1a2c',
  date: 'Tue, 15 Mar 2016 01:58:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Compute/locations/westus/publishers/MicrosoftWindowsServer/artifacttypes/vmimage/offers/WindowsServer/skus/2012-R2-Datacenter/versions?$orderby=name%20desc&api-version=2017-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"4.0.20160229\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter/Versions/4.0.20160229\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"4.0.20160126\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter/Versions/4.0.20160126\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"4.0.20151214\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter/Versions/4.0.20151214\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"4.0.20151120\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter/Versions/4.0.20151120\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'bb918560-5a0f-432d-9473-8fb7b8ec19ae',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'f65397e2-8390-4391-8e1c-a28e067c1a2c',
  'x-ms-routing-request-id': 'WESTUS:20160315T015819Z:f65397e2-8390-4391-8e1c-a28e067c1a2c',
  date: 'Tue, 15 Mar 2016 01:58:18 GMT',
  connection: 'close' });
 return result; }]];