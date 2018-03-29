/**
 * http://usejsdoc.org/
 */

devices = [	{"id":"D1","name":"DEVICE 1"},
			{"id":"D2","name":"DEVICE 2"},
			{"id":"D3","name":"DEVICE 3"},
			{"id":"D4","name":"DEVICE 4"},
			{"id":"D5","name":"DEVICE 5"}
			];

deviceDetails = 
	{"general":{"distance":"1000","duration":"500"},
		"troubleCodes":[
			{"code":"P0000","details":{"FuelSystem":"not supported",
					"Catalyst":"completed",
					"components":"completed",
					"oxygensensor":"completed",
					"description":"blah"}},
					{"code":"P0401","details":{"FuelSystem":"completed",
					"Catalyst":"completed",
					"components":"completed",
					"oxygensensor":"failed",
					"description":"blah blah"}},
					{"code":"P0230","details":{"FuelSystem":"completed",
					"Catalyst":"completed",
					"components":"failed",
					"oxygensensor":"completed",
					"description":"blah blah blah"}},
					{"code":"P0670","details":{"FuelSystem":"completed",
					"Catalyst":"failed",
					"components":"completed",
					"oxygensensor":"completed",
					"description":"blah blah blah blah"}}
		]
	};


exports.list = function(req, res){
	res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
	res.send(devices);
};

exports.deviceDetails = function(req, res){
	res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    res.send(deviceDetails);
	
	//res.send("No device with the Id" + req.params.id);
};