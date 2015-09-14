function getRelationship(x, y) {
	var str1 = "Can't compare relationships because";
	var str2;
	if (x === undefined || Number.isFinite(x) === false) {
		str1 = str1 + " " + x;
		str2 = "is";
	}

	if (y === undefined || Number.isFinite(y) === false) {
		if (str2 === undefined) {
			str1 += " " + y;
			str2 = "is";
		} else {
			str1 = str1 + " " + "and" + " " + y;
			str2 = "are";
		}
	}

	if (str2 !== undefined) {
		if (str2 === "is") {
			return str1 + " " + str2 + " " + "not numbers";
		} else {
			return str1 + " " + str2 + " " + "not a number";
		}
	} else {
		if (x === y) {
			return "==";
		} else if (x > y) {
			return ">";
		} else {
			return "<";
		}
	}
}

console.log(getRelationship(1, 4));
console.log(getRelationship(1, 1));
console.log(getRelationship("that", 2));
console.log(getRelationship("this", " something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
	var retVal = [];
	names.forEach(function (val, index, array) {
		var names = val.split(/\s+/);
		retVal.push(names[1] + ", " + names[0]);
	});
	retVal.sort();
	return retVal;
}


// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
	var retVal = [];

	function find(array, obj) {
		for (var property in obj) {
			if (obj.hasOwnProperty(property)) {
				if (property === "localizedRuleName") {
					array.push(obj[property]);
				} else if (typeof obj[property] === "object") {
					console.log(property);
					find(array, obj[property]);
				}
			}
		}
	}
	find(retVal, results);
	return retVal;
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
	return parseInt(results.pageStats.totalRequestBytes, 10) + parseInt(results.pageStats.htmlResponseBytes, 10) + parseInt(results.pageStats.cssResponseBytes, 10) + parseInt(results.pageStats.imageResponseBytes, 10) + parseInt(results.pageStats.javascriptResponseBytes, 10) + parseInt(results.pageStats.otherResponseBytes, 10);
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
	"kind": "pagespeedonline#result",
	"id": "/speed/pagespeed",
	"responseCode": 200,
	"title": "PageSpeed Home",
	"score": 90,
	"pageStats": {
		"numberResources": 22,
		"numberHosts": 7,
		"totalRequestBytes": "2761",
		"numberStaticResources": 16,
		"htmlResponseBytes": "91981",
		"cssResponseBytes": "37728",
		"imageResponseBytes": "13909",
		"javascriptResponseBytes": "247214",
		"otherResponseBytes": "8804",
		"numberJsResources": 6,
		"numberCssResources": 2
	},
	"formattedResults": {
		"locale": "en_US",
		"ruleResults": {
			"AvoidBadRequests": {
				"localizedRuleName": "Avoid bad requests",
				"ruleImpact": 0.0
			},
			"MinifyJavaScript": {
				"localizedRuleName": "Minify JavaScript",
				"ruleImpact": 0.1417,
				"urlBlocks": [
					{
						"header": {
							"format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
							"args": [
								{
									"type": "BYTES",
									"value": "1.3KiB"
        },
								{
									"type": "INT_LITERAL",
									"value": "0"
        }
       ]
						},
						"urls": [
							{
								"result": {
									"format": "Minifying $1 could save $2 ($3% reduction).",
									"args": [
										{
											"type": "URL",
											"value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
										{
											"type": "BYTES",
											"value": "717B"
          },
										{
											"type": "INT_LITERAL",
											"value": "1"
          }
         ]
								}
       },
							{
								"result": {
									"format": "Minifying $1 could save $2 ($3% reduction).",
									"args": [
										{
											"type": "URL",
											"value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
										{
											"type": "BYTES",
											"value": "258B"
          },
										{
											"type": "INT_LITERAL",
											"value": "0"
          }
         ]
								}
       }
      ]
     }
    ]
			},
			"SpriteImages": {
				"localizedRuleName": "Combine images into CSS sprites",
				"ruleImpact": 0.0
			}
		}
	},
	"version": {
		"major": 1,
		"minor": 11
	}
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));


articleList = $('.article-list');

h1 = articleList.sibling("h1");

kids = articleList.children();

parents = articleList.parents();