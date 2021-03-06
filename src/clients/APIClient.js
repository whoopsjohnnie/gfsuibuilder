
// 
// Copyright (c) 2020, 2021, 2022, John Grundback
// All rights reserved.
// 

class APIClient {

	constructor(hostname, port) {

		// console.log(' >> APIClient: hostname: ' + hostname + ', port: ' + port);

		this.hostname = hostname;
		this.port = port;

		this.url = 'http://' + hostname + ':' + port + '/api/v1.0';
		this.jsontype = 'application/json';
		this.yamltype = 'application/yaml';
		this.texttype = 'text/plain';

		// console.log(' >> APIClient: URL: ' + this.url);

	}

	// resourceURL(namespace, resource) {
	resourceURL(resource, namespace, path = null) {
		if( path ) {
			return this.url + '/' + namespace + '/' + resource + '/' + path;
		}
		return this.url + '/' + namespace + '/' + resource;
	}

}

export default APIClient;
