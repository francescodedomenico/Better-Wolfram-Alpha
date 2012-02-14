// ==UserScript==
// @include http://*wolframalpha.com/*
// @include https://*wolframalpha.com/*
// ==/UserScript==

var oexBetterWolframAlfa = function()
{
	// changecss function have been made by Shawn Olson & http://www.shawnolson.net, go to his websites for documentation.
	
	function changecss(theClass,element,value) {
		//Last Updated on July 4, 2011
		//documentation for this script at
		//http://www.shawnolson.net/a/503/altering-css-class-attributes-with-javascript.html
		 var cssRules;


		 for (var S = 0; S < document.styleSheets.length; S++){


			  try{
			  	document.styleSheets[S].insertRule(theClass+' { '+element+': '+value+'; }',document.styleSheets[S][cssRules].length);

			  } catch(err){
			  		try{document.styleSheets[S].addRule(theClass,element+': '+value+';');

					}catch(err){

					 	try{
						    if (document.styleSheets[S]['rules']) {
							  cssRules = 'rules';
							 } else if (document.styleSheets[S]['cssRules']) {
							  cssRules = 'cssRules';
							 } else {
							  //no rules found... browser unknown
							 }

							  for (var R = 0; R < document.styleSheets[S][cssRules].length; R++) {
							   if (document.styleSheets[S][cssRules][R].selectorText == theClass) {
							    if(document.styleSheets[S][cssRules][R].style[element]){
							    document.styleSheets[S][cssRules][R].style[element] = value;
								break;
							    }
							   }
							  }
						  } catch (err){}



					}

			  }


		}
	}
	
	var ads = new Array(
	"tour",
	"newbie",
	"newbie-hat",
	"sponsor-ad"
	);
	
	var styleBorder = new Array(
	".pod",
	"#proSidebar #proside-favorites .heading",
	"#proSidebar #proside-account .heading",
	"#lsidebar .sidebarLeftside",
	".sidebarLeftside .subsection.first",
	".sidebarLeftside .subsection.first .heading",
	"#sidebar aside, #sidebar article, #sidebar > form",
	"#calculatecontain",
	"#input",
	"#calculate",
	"fieldset",
	"#answers",
	"#solutions"
	);
	
	var domRemoved = new Array(
	"headerad-pro-a",
	"headerad-pro-b"
	);
	
  function removeElementByID(id)
    {
      var elem = document.getElementById(id);
      if (elem != null) elem.parentNode.removeChild(elem);
    }
	
  window.addEventListener('DOMNodeInserted', function()
  {
  
	var temp = null;
	
	//hides content in ads
	for (var i=0; i<ads.length; i++){
		temp = document.getElementById(ads[i]);
		if(temp != null){
			temp.style.visibility="hidden";
			temp=null;
		}
	}
	
	//elements to be removed from dom
	for (var i=0; i<domRemoved.length; i++){
		removeElementByID(domRemoved[i]);
	}
	
	//set the border radious to 0px of styleBorder elements
	
	for (var i=0; i<styleBorder.length; i++){
		changecss(styleBorder[i],"border-radius","0px");
	}
	
		
  },false);
  
}();

