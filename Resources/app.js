// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var headscreen = Titanium.UI.createWindow({  
    title:'Activeringssysteem',
    backgroundColor:'#fff',
    layout: 'vertical'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Welcome Tab',
    window:headscreen
});

var knop1 = Titanium.UI.createButton({
	title:'Hit it!',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	top:20,
	height: 50,
	width: 150
});

var knop2 = Titanium.UI.createButton({
	title: 'Stop',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	top:20,
	height: 50,
	width: 150
});
var pichuList = [];
for(var i=1; i<3; i++){
	pichuList.push('images/hitIt'+i+'.png');
}

var pichu = Titanium.UI.createImageView({
	images: pichuList,
	//image:'images/hitIt1.png',
	height: 'auto',
	top: 25,
	duration: 150,
	repeatCount: 0
});

pichu.addEventListener('load', function(e){
	pichu.start();
});

knop1.addEventListener('click',function(){
	headscreen.remove(knop1);
	headscreen.add(knop2);
	headscreen.add(pichu);
	
});
knop2.addEventListener('click',function(){
	headscreen.remove(pichu);
	headscreen.remove(knop2);
	headscreen.add(knop1);
});

headscreen.add(knop1);


//
//  add tabs
//
tabGroup.addTab(tab1);  


// open tab group
tabGroup.open();
