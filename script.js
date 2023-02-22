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

       {        
		    title: "Truyền Kỳ Lý Tiểu Long Tập 01 720P VietSub EngSub",
		    description: "Truyền Kỳ Lý Tiểu Long Tập 01 720P VietSub EngSub",
		    image: "https://cdn.vietsubtv.org/images/film/truyen-ky-ly-tieu-long-5726.jpg",
		    sources: [{
		    file: "https://peertube.otakufarms.com/static/streaming-playlists/hls/c4eeaadf-9d35-4238-8657-fdceb0c52d2e/65f033fc-a2c4-44ad-8c1e-3fe081b6af80-480.m3u8",
		      label: '480',
		      'type': 'mp4',
		      primary: 'html5',

		    },{
		    file: "https://peertube.otakufarms.com/static/streaming-playlists/hls/c4eeaadf-9d35-4238-8657-fdceb0c52d2e/857470f0-85b7-45df-838c-9cf001451114-240.m3u8",
		      label: '240p',
		      'type': 'mp4',
		      primary: 'html5',

		    },{
		     file: "https://peertube.otakufarms.com/static/streaming-playlists/hls/c4eeaadf-9d35-4238-8657-fdceb0c52d2e/65f033fc-a2c4-44ad-8c1e-3fe081b6af80-480.m3u8",
		      label: '480p',
		      'type': 'mp4',
		      primary: 'html5',
		    },{
		     file: "https://peertube.otakufarms.com/static/streaming-playlists/hls/c4eeaadf-9d35-4238-8657-fdceb0c52d2e/f20ebbe9-5619-4870-927b-8e5e4bdecb66-720.m3u8",
		      label: '720p',
		      'type': 'mp4',
		      primary: 'html5',
		    }],
		    
		   
		    
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
