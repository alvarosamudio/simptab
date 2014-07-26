
define( ["jquery"], function($){

	getDefault = function () {
		$.ajax({
			type       : "GET",
			timeout    : 2000,
			url        : "http://bing.com",
			success    : function( data ) {
				//console.log(data);
				var begin = data.indexOf( "g_img=" ),
				    end   = data.indexOf( "'};fadeComplete()"),
				    url   = data.substring( begin + 12, end );
				console.log("url = " + url);
				console.log("end = " + end);
				console.log("begin = " + begin);
			}
		});
	}

	getRandom = function () {
		console.log("getRandom")
	}

	return {
		Get: function ( is_random ) {
			if ( is_random ) {
				getRandom();
			}
			else {
				getDefault();
			}
		}
	}
});
