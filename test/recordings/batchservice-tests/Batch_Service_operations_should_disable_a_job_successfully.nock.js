// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/HelloWorldJobNodeSDKTest/disable?api-version=2017-05-01.5.0', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 26 May 2017 16:59:35 GMT',
  etag: '0x8D4A4589674D0B5',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '4808a2c0-28bf-4a1e-980e-f4c55b91558d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/disable',
  date: 'Fri, 26 May 2017 16:59:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/HelloWorldJobNodeSDKTest/disable?api-version=2017-05-01.5.0', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 26 May 2017 16:59:35 GMT',
  etag: '0x8D4A4589674D0B5',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '4808a2c0-28bf-4a1e-980e-f4c55b91558d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/disable',
  date: 'Fri, 26 May 2017 16:59:34 GMT',
  connection: 'close' });
 return result; }]];