jwplayer("container").setup({

		    controls: true,
		    displaytitle: true,
		    
		    primary: 'html5',
		  
		    

		    skin: {
		    	name: 'ZonAnime',
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
		    title: "  ",
		    description: "  ",
		    image: " ",
		    sources: [{
		    file: "https://peertube.otakufarms.com/static/webseed/b7f6e081-020e-4a23-b388-fb08d4228043-240.mp4",
		      label: '240p',
		      'type': 'mp4',
		      primary: 'html5',

		    },{
		    file: "https://peertube.otakufarms.com/static/webseed/9202c80c-facc-47d2-bb35-86fb09ae3614-480.mp4",
		      label: '480p',
		      'type': 'mp4',
		      primary: 'html5',


		    },{
		     file: "https://peertube.otakufarms.com/static/webseed/a2202d14-6e76-42b3-96d0-9715e00fd77a-720.mp4",
		      label: '720p',
		      'type': 'mp4',
		      primary: 'html5',
		    },{

		     file: "https://files.catbox.moe/ax0cqs.mp4",

		      label: '720p',

		      'type': 'mp4',

		      primary: 'html5',

		    }],
			    captions: [{
		      file: "https://dl.dropbox.com/s/w0ud0xnqyv5cjrv/%5BSakuraCircle%5D%20Aoharu%20Snatch%20-%2001%20%28DVD%20720x480%20h264%20AAC%29%20%5B76DEC882%5D_English_Spanish.srt.srt",
		      label: 'Esp-Lat',
		      kind: "captions",
		      "default": true,
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
		
