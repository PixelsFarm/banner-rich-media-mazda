////////////////////////////////////
//
// Main js 990x250 carousel botones
//
////////////////////////////////////





///////////////////
//var
var tlIniAnima, tlNav, tlHome, tlDis, tlEquip, tlLegal, tlGaleria, seccion, getId, item;
var _height = 250;
var menuDiseno = false;
var desdeDiseno = false;

var itemWidth = 708; //ancho item carousel
var itemHeigh = 196; //alto item carousel
var itemsDiseno = 5;
var itemsGaleria = 5;

//video
var conVideo = true; //false para que no salga video
var ordre = 0;
var loadVideo = false;
var youtubeID = '_Zz3CzJu6b0';
 

 

///////////////////
// loader
function cargado(){
	$("#contLoading").delay(500).fadeOut("fast", function(){
		creaGaleria()
		creaTimelines();
		iniAnimacion();
		TweenMax.to('#tapa', .5, {autoAlpha:0}, '+=0');
	});
}
 

 

///////////////////
// animación ini
function iniAnimacion(){
	tlIniAnima.restart();
}
 

 

///////////////////////////////////////////////
// on load
function init(){
	closeIniAnima();
	goHome();
	nav();
	iniButtons();
}
 

 

///////////////////////////////////////////////
// iniButtons
function iniButtons(){
	//disseny click
	$('#diseno .apartado').click(function(){
		desdeDiseno = true;
		$('#carousel').removeClass('gal').addClass('dis');

		if ($(this).is(':nth-child(1)')) {
			ordre = 0;
			EB.userActionCounter("ver_carousel_nuevo_motor");
		}
		else if ($(this).is(':nth-child(2)')) {
			ordre = 1;
			EB.userActionCounter("ver_carousel_dinamismo");
		}
		else if ($(this).is(':nth-child(3)')) {
			ordre = 2;
			EB.userActionCounter("ver_carousel_diseno_ganador");
		}
		else if ($(this).is(':nth-child(4)')) {
			ordre = 3;
			EB.userActionCounter("ver_carousel_tecnologia");
		}
		else if ($(this).is(':nth-child(5)')) {
			ordre = 4;
			EB.userActionCounter("ver_carousel_conectividad");
		}
		
		goCarouselDiseno();
		TweenMax.delayedCall(1, function(){
			TweenMax.set('#sele_items_bg', {autoAlpha:1});
		});
	});
	
	//disseny hover
	$('.apartado').hover(function(){
		$(this).addClass('hover');
		TweenMax.to($(this).children('.bg'), .3, {y:-24});
		TweenMax.to($(this).children('.txt'), .4, {y:-10, ease:Power2.easeInOut});
	},function() {
		TweenMax.to($(this).children('.txt'), .3, {y:0});
		TweenMax.to($(this).children('.bg'), .4, {y:0, ease:Power2.easeInOut});
		$(this).removeClass('hover');
	});
	
	//bt_legal click
	$('#bt_legal').click(function(){
		EB.userActionCounter("ver_legal");			
		tlPopupLegal.restart();
	});
	
	//bt_legal tenca
	$('#popup_legal_cerrar').click(function(){
		tlPopupLegal.reverse();
	});
	
	//bt_legal hover
	$('#bt_legal').hover(function(){
		tlLegal.restart();
	},function() {
		tlLegal.reverse();
	});
	
	//bt_pruebalo
	$('#bt_pruebalo').click(function(){
		EB.clickthrough("pruebalo");
	});
	
	//bt_mas_info
	$('#bt_mas_informacion').click(function(){
		EB.clickthrough("descubrelo");
	});
	
	//cerrar
	$('#cerrar_carousel').click(function(){
		seccion = 'home';
		
		tlGaleria.duration(0.5);
		tlGaleria.reverse();
		tlDis.reverse();
		tlHome.restart();
		
		if (loadVideo) pauseVideo();
		
		TweenMax.to('#nav_bg', .3, {autoAlpha:0});
		TweenMax.to('#home', .4, {autoAlpha:1, delay:.4});
		TweenMax.set('#carousel, #diseno', {autoAlpha:0, delay:1});
		$('.nav').removeAttr('style');
		$('.nav_img').css({'border-color':'#787c82', 'z-index':1});
		TweenMax.set('#sele_items_bg', {autoAlpha:0});
	});
	
	$('.cerrar').hover(function(){
		TweenMax.to($(this).find('.cruz'), .2, {rotation:90});
	},function() {
		TweenMax.to($(this).find('.cruz'), .2, {rotation:0});
	});
}
 

 

//////////////////////
// seguimiento clicks
function seguirClicks(){
	//nav
	EB.userActionCounter("ir_diseno_dinamico");
	EB.userActionCounter("ir_equipamiento");
	EB.userActionCounter("ir_galeria_multimedia");
	
	//carousel diseno
	EB.userActionCounter("ver_carousel_nuevo_motor");
	EB.userActionCounter("ver_carousel_dinamismo");
	EB.userActionCounter("ver_carousel_diseno_ganador");
	EB.userActionCounter("ver_carousel_tecnologia");
	EB.userActionCounter("ver_carousel_conectividad");

	//carousel galeria
	EB.userActionCounter("ver_carousel_galeria_video");			
	EB.userActionCounter("ver_carousel_galeria_segundo_item");			
	EB.userActionCounter("ver_carousel_galeria_tercer_item");			
	EB.userActionCounter("ver_carousel_galeria_cuarto_item");			
	EB.userActionCounter("ver_carousel_galeria_quinto_item");	
}
 

 

///////////////////
// Ini Anima
function closeIniAnima(){
	TweenMax.to('#ini_anima', .5, {autoAlpha:0});
}
 

 

///////////////////
// timelines
function creaTimelines(){
	//timeline ini anima
	tlIniAnima = new TimelineMax({paused:1});
	tlIniAnima.set('#clar', {autoAlpha:0});
	tlIniAnima.set('#fosc', {autoAlpha:0});
	tlIniAnima.set('#lens', {autoAlpha:0});
	tlIniAnima.to('#fosc', .1, {autoAlpha:1}, '+=0');
	tlIniAnima.to('#fosc', .1, {autoAlpha:0}, '+=.035');
	tlIniAnima.to('#fosc', .4, { ease: RoughEase.ease.config({ template:Power0.easeNone, strength:5, points:8, taper:"none", randomize:false, clamp:true}), autoAlpha:1, onComplete:function(){TweenMax.set('#fosc', {autoAlpha:0});}},'+=.3');
	tlIniAnima.to('#clar', 1, {autoAlpha:1, onStart:function(){TweenMax.delayedCall(.4, init);}},'-=.07');
	tlIniAnima.to('#lens', .3, {autoAlpha:1},'+=0');
	
	//timeline nav
	tlNav = new TimelineMax({paused:1});
	tlNav.from('#logo_mazda3', .6, {autoAlpha:0}, '-=.3');
	tlNav.from('#nav_diseno', .6, {autoAlpha:0}, '-=.5');
	tlNav.from('#nav_galeria', .6, {autoAlpha:0}, '-=.5');
	tlNav.from('#nav_equipamiento', .6, {autoAlpha:0}, '-=.5');
	tlNav.from('#cuota', .6, {autoAlpha:0}, '-=.5');
	
	//timeline home
	tlHome = new TimelineMax({paused:1});
	tlHome.from('#logo_mazda', .6, {autoAlpha:0}, '+=.3');
	tlHome.from('#logo_zoom', .6, {autoAlpha:0}, '-=.5');
	tlHome.from('#bt_pruebalo', .6, {autoAlpha:0}, '-=.5');
	
	// timeline diseno
	tlDis = new TimelineMax({paused:1});
	for (i=0; i<itemsDiseno+1; i++) {
		tlDis.to('#diseno_menu'+i, .4, {autoAlpha:1, y:_height}, '-=0.5');
		tlDis.to('#diseno_menu'+i+'_txt', .4, {autoAlpha:1}, '-=.3');
	}
	
	// timeline equipamiento
	tlEquip = new TimelineMax({paused:1});
	tlEquip.from('#equipamiento_bg', .5, {autoAlpha:0}, '+=0');
	tlEquip.from('#equipamiento_txt1', .5, {autoAlpha:0}, '-=.35');
	tlEquip.from('#equipamiento_txt2', .5, {autoAlpha:0}, '-=.35');
	tlEquip.from('#equipamiento_txt3', .5, {autoAlpha:0}, '-=.35');
	tlEquip.from('#bt_legal', .5, {autoAlpha:0}, '-=.35');
	tlEquip.from('#bt_mas_informacion', .5, {autoAlpha:0}, '-=.35');
	tlEquip.from('#logo_flexi', .5, {autoAlpha:0}, '-=.35');
	tlEquip.from('#logo_zoom', .5, {autoAlpha:0}, '-=.35');
	
	//timeline hover legal
	tlLegal = new TimelineMax({paused:1});
	tlLegal.from('#bt_legal_txt', .3, {x:'-=5', ease:Power2.easeOut}, '+=0');
	tlLegal.from('#bt_legal_flecha', .3, {x:'-=5', ease:Power2.easeOut}, '-=.1');
	
	//timeline popup legal
	tlPopupLegal = new TimelineMax({paused:1});
	tlPopupLegal.from('#popup_legal', .5, {autoAlpha:0, y:_height, ease:Power2.easeOut}, '+=0');
	
	//timeline galeria intro
	tlGaleria = new TimelineMax({paused:1});
	for (i=1; i<itemsGaleria+1; i++) {
		tlGaleria.from('#sele_item'+i, .3, {autoAlpha:0}, '-=.2');
	}
	tlGaleria.from('#items', .5, {autoAlpha:0}, '-=.5');
	tlGaleria.from('#cerrar_carousel', .5, {autoAlpha:0}, '-=.2');
}
 

 

///////////////////
// nav

//clicka menu principal esquerra
function nav(){
	//click
	$('.nav').click(function(){
		getId = $(this).attr('id');
		TweenMax.to('#nav_bg', .3, {autoAlpha:1});
		if (loadVideo && getId != 'nav_galeria') pauseVideo();
		
		//reset recuadre a nav seleccionat
		$('.nav').css({'border-color':'#787c82', 'z-index':0});
		$('.nav_img').css({'border-color':'#787c82', 'z-index':1});
		
		//pinta revuadre nav seleccionat
		TweenMax.set($(this), {zIndex:1});
		TweenMax.to($(this), 1, {borderColor:'#fff'});
		$(this).children('.nav_img').css({'border-color':'#fff', 'z-index':1});
		$('#nav_equipamiento .flecha_bg').css({'border-color':'#d68387'});
		
		//torna a inici el popuplegal
		restartPopupLegal();
		
		//pasem a seccions
		if (getId == 'nav_diseno') {
			precargaGaleria();
			goDiseno();
			TweenMax.set('#diseno', {autoAlpha:1});
			TweenMax.to('#home, #equipamiento, #carousel', .5, {autoAlpha:0, delay:.1});
			EB.userActionCounter("ir_diseno_dinamico");
		}
		else if (getId == 'nav_equipamiento') {
			goEquipamiento();
			$('#nav_equipamiento .flecha_bg').css({'border-color':'#fff'});
			TweenMax.to('#home', .5, {autoAlpha:0, delay:1});
			TweenMax.set('#equipamiento', {autoAlpha:1});
			EB.userActionCounter("ir_equipamiento");
		}
		else if (getId == 'nav_galeria') {
			$('#carousel').removeClass('dis').addClass('gal');
			if (desdeDiseno) switchGaleria();
			else {
				ordre = 1;
				precargaGaleria();
				goGaleria();
				TweenMax.set('#carousel', {autoAlpha:1});
			}
			TweenMax.to('#home, #diseno, #equipamiento', .5, {autoAlpha:0});
			EB.userActionCounter("ir_galeria_multimedia");
		}
	});
	
	//hover nav
	$('.bt').hover(function(){
		$(this).addClass('hover');
		TweenMax.to('.hover .txt', .2, {x:4});

	},function() {
		TweenMax.to('.hover .txt', .2, {x:0});
		$(this).removeClass('hover');
	});
}

//pasamos desde menú diseno multimedia a carousel
function goCarouselDiseno(){
	TweenMax.to('#carousel', .2, {autoAlpha:1});
	//console.log('seccion: '+seccion);
	precargaGaleria();
	goGaleria();
	seccion = 'diseno';
}

//pasamos desde carousel diseno multimedia a carousel galería multimedia
function switchGaleria(){
	//console.log('switch galeria');
	getId = 'nav_galeria';
	ordre = 0;
	//seccion = 'diseno';
	TweenMax.set('#diseno', {autoAlpha:0});
	TweenMax.to('#carousel', .5, {autoAlpha:0}); //amaga carousel amb items diseno
	TweenMax.delayedCall(.1, function(){
		precargaGaleria();
		TweenMax.to('#carousel', .5, {autoAlpha:1}); //mostra carousel galeria multimedia
		ordre = 0;
		goGaleria();
	});
	desdeDiseno = false;
}






///////////////////
// home
function goHome(){ 
	seccion = 'home';
	tlNav.restart();
	tlHome.restart();
}

function clickPruebalo(){
	EB.userActionCounter("ir_pruebalo");
} 




///////////////////
// diseno
function goDiseno() {
	seccion = 'diseno';
	
	if (!menuDiseno) {
		tlDis.restart();
	}
	
	menuDiseno = true;
	
}


///////////////////
// equipamiento
function goEquipamiento() {
	if (seccion != 'equipamiento') {
		tlEquip.restart();
		tlDis.pause(0);
	}
	
	seccion = 'equipamiento';
	menuDiseno = false;
}

function btLegal(){
}

function restartPopupLegal(){
	TweenMax.delayedCall(1, function(){
		tlPopupLegal.pause(0);
	});
}


///////////////////
// galeria
function goGaleria(){
	if (seccion != 'galeria') {
		tlHome.reverse();
		tlGaleria.duration(1);
		tlGaleria.restart();
		
		TweenMax.set('.activo', {autoAlpha:0});
		if (ordre == 0) TweenMax.to('#sele_item1 .activo', .3, {autoAlpha:1, delay:.6});
		else if (ordre == 1) TweenMax.to('#sele_item2 .activo', .3, {autoAlpha:1, delay:.6});
		else if (ordre == 2) TweenMax.to('#sele_item3 .activo', .3, {autoAlpha:1, delay:.6});
		else if (ordre == 3) TweenMax.to('#sele_item4 .activo', .3, {autoAlpha:1, delay:.6});
		else if (ordre == 4) TweenMax.to('#sele_item5 .activo', .3, {autoAlpha:1, delay:.6});
		
		seccion = 'galeria';
		menuDiseno = false;
		goCarousel();
		//closeGaleria();
	}
}

function creaGaleria(){
	$('#items').html('');
	$('#sele_items').html('');
	
	for (i=1; i<itemsGaleria+1; i++) {
		$('#items').append('<div id="item'+i+'" class="item_bg"></div>');
		$('#sele_items').append('<div id="sele_item'+i+'" class="item"></div>');
	}
	
	if (conVideo) {
		$('#item1').html('<img class="item_bg" src="images/it1_dis_bg.jpg" alt="" /><img class="item_txt1" src="images/it1_dis_txt1.png" alt="" /><img class="item_txt2" src="images/it1_dis_txt2.png" alt="" /><iframe id="ytvideo" width="'+itemWidth+'" height="'+itemHeigh+'" src="https://www.youtube.com/embed/'+youtubeID+'?version=3&enablejsapi=1&controls=1&fs=0&rel=0&modestbranding=1&showinfo=0" frameborder="0" style="backgroundColor:#f00;"></iframe>');
	}
	else {
		$('#item1').html('<img class="item_bg gal" src="images/it1_gal_bg.jpg" alt="" /><img class="item_bg dis" src="images/it1_dis_bg.jpg" alt="" /><img class="item_txt1 dis" src="images/it1_dis_txt1.png" alt="" /><img class="item_txt2 dis" src="images/it1_dis_txt2.png" alt="" />');
	}
	
	$('#items').append('<div class="click_throught" onclick="handleEBClickthrough()"></div>');
}

//escribim html del carousel segons és de disseny o galeria multimedia
function precargaGaleria(){
	if (seccion != 'galeria') {
		//reiniciem
		$('#cerrar_carousel').removeClass('dis, gal');
		TweenMax.set('#items', {left:0});
		
		if (getId == 'nav_galeria') {
			loadVideo = true;
			ordre = 0;
			
			if (conVideo) {
				$('#item1 iframe').show()
				$('#item1 img').hide()
			}
			else {
				$('#item1 .gal').show();
				$('#item1 .dis').hide();
			}
			
			for (i=1; i<itemsGaleria+1; i++) {
				$('#item'+(i+1)).html('<img class="item_bg" src="images/it'+(i+1)+'_gal_bg.jpg" alt="" />');
				$('#sele_item'+i).html('<img class="thumbnail" src="images/min_it'+i+'_gal.jpg" alt="" /><img class="activo" src="images/min_it'+i+'_gal_ac.jpg" alt="" />');
			}
			
			$('#cerrar_carousel').addClass('gal');
			amagaClickThrought();
			TweenMax.delayedCall(0.5, playVideo);
		}
		else if (getId == 'nav_diseno') {
			loadVideo = false;
			
			if (conVideo) {
				$('#item1 iframe').hide();
				$('#item1 img').show();
			}
			else {
				$('#item1 .gal').hide();
				$('#item1 .dis').show();
			}
			
			for (i=1; i<itemsGaleria+1; i++) {
				$('#item'+(i+1)).html('<img class="item_bg" src="images/it'+(i+1)+'_dis_bg.jpg" alt="" /><img class="item_txt1" src="images/it'+(i+1)+'_dis_txt1.png" alt="" /><img class="item_txt2" src="images/it'+(i+1)+'_dis_txt2.png" alt="" />');
				$('#sele_item'+i).html('<img class="thumbnail" src="images/min_it'+i+'_dis.png" alt="" /><img class="activo" src="images/min_it'+i+'_dis_ac.png" alt="" />');
			}
			
			$('#cerrar_carousel').addClass('dis');
			TweenMax.set('#items', {left:-(ordre*itemWidth)});
		}
	}
}

//funcionamient clicks i hover carousel
function goCarousel(){
	//click
	$('.item .thumbnail').click(function(){
		ordre = $(this).parent().index();
		
		//anima botó
		TweenMax.to($(this), .3, {y:0});
		TweenMax.to('.activo', .3, {autoAlpha:0});
		TweenMax.to('#sele_item'+(ordre+1)+' .activo', .3, {autoAlpha:1, delay:.1});
		
		//mou carousel
		TweenMax.to('#items', 1, {left:-(ordre*itemWidth), ease:Power3.easeInOut});
		
		if (getId == 'nav_galeria'){
			if (ordre == 0) {
				TweenMax.delayedCall(0.5, playVideo);
				EB.userActionCounter("ver_carousel_galeria_video");			
				pauseVideo();
			}
			else {
				pauseVideo();
				if (ordre == 1) EB.userActionCounter("ver_carousel_galeria_segundo_item");			
				else if (ordre == 2) EB.userActionCounter("ver_carousel_galeria_tercer_item");			
				else if (ordre == 3) EB.userActionCounter("ver_carousel_galeria_cuarto_item");			
				else if (ordre == 4) EB.userActionCounter("ver_carousel_galeria_quinto_item");			
			}
		}
		else if (getId == 'nav_diseno') {
			if (ordre == 0) EB.userActionCounter("ver_carousel_nuevo_motor");
			else if (ordre == 1) EB.userActionCounter("ver_carousel_dinamismo");
			else if (ordre == 2) EB.userActionCounter("ver_carousel_diseno_ganador");
			else if (ordre == 3) EB.userActionCounter("ver_carousel_tecnologia");
			else if (ordre == 4) EB.userActionCounter("ver_carousel_conectividad");
		}
		
		amagaClickThrought();
	});
	
	//hover botons galeria disseny dinàmic
	$('#carousel.dis .item .thumbnail').hover(function(){
		TweenMax.to($(this), .3, {y:-8});
	},function() {
		TweenMax.to($(this), .3, {y:0});
	});
	
	//hover botons galeria multimedia
	$('#carousel.gal .item .thumbnail').hover(function(){
		TweenMax.to($(this), .3, {scale:1.1});
	},function() {
		TweenMax.to($(this), .3, {scale:1});
	});
	
	//cerrar galeria
	$('#cerrar_carousel').click(function(){
		seccion = 'home';
		
		tlGaleria.duration(0.5);
		tlGaleria.reverse();
		tlDis.reverse();
		tlHome.restart();
		
		if (loadVideo) pauseVideo();
		
		TweenMax.to('#nav_bg', .3, {autoAlpha:0});
		TweenMax.to('#home', .4, {autoAlpha:1, delay:.4});
		TweenMax.set('#carousel, #diseno', {autoAlpha:0, delay:1});
		$('.nav').removeAttr('style');
		$('.nav_img').css({'border-color':'#787c82', 'z-index':1});
		TweenMax.set('#sele_items_bg', {autoAlpha:0});
	});
}

function pauseVideo(){
	if (conVideo) $('#ytvideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');    
}

function playVideo(){
	if (conVideo) $('#ytvideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');    
}

function closeGaleria() {
}

function amagaClickThrought(){
	if (getId == 'nav_galeria' && ordre == 0) $('#items .click_throught').hide();
	else if (getId == 'nav_galeria' && ordre != 0) $('#items .click_throught').show();
}




