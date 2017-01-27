require({
	aliases:[
	    ["i18n", "dojo/i18n"]
	]
});

dependencies = {
	layers: [
		{
			name: "../metadata/ahtml/FieldsetInput.js",
			layerDependencies: [
			    "../dijit/dijit.js"
			],
			dependencies: [
				"metadata/ahtml/FieldsetInput"
			]
		}
	],

	prefixes: [
		[ "metadata", "../metadata" ],
		[ "maq-metadata-dojo", "../maq-metadata-dojo" ],
	   	[ "system", "../system" ],
	   	[ "preview", "../preview" ],
	   	[ "orion", "../orion" ],
	   	[ "davinci", "../davinci" ],
	   	[ "dijit", "../dijit" ],
	   	[ "dojox", "../dojox" ]
	]
}
