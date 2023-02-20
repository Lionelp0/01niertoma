jwplayer("container").setup({

		    controls: true,
  
  displaytitle: true,
  displaydescription: true,
  abouttext: "Buy Me a Coffee",
  aboutlink: "   ",


		    skin: {
		    	name: 'Netflix',
		    },

		     
		    captions: {
		        color: '#FFF',
		         fontSize: 14,
		         backgroundOpacity: 0,
		         edgeStyle: 'raised' 
		    },

		  playlist: [
        ,
        //Begin Movies Truyen Ky Ly Tieu Long Tap 1
       {        
		    title: "   ",
		    description: "   ",
		    image: "   ",
		    sources: [{
		    file: "https://peertube.otakufarms.com/static/streaming-playlists/hls/c4eeaadf-9d35-4238-8657-fdceb0c52d2e/f20ebbe9-5619-4870-927b-8e5e4bdecb66-720.m3u8",
		      label: 'HD',
		      'type': 'mp4',
		      primary: 'html5',

		    },
],
		    
		 
		  }//end of movies
      ]
		});
jwplayer("container").setCaptions({
  "back": true,
  "backgroundOpacity": "32",
  "edgeStyle": "dropshadow",
  "fontSize": 14,
  "fontOpacity": 100,
  "fontScale": 0.05,
  "windowOpacity": 0,
  "color": "#ffff00"
});