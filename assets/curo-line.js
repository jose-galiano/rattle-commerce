/* - ------------------------------------------------------------------   CURO Element */ 
let count_element = 0;
function graphs_element(res_name) {

}
/* - ------------------------------------------------------------------   CURO Model */ 
let count_model = 0;
function graphs_model(res_name) {
  if( count_model <= 0 ){
  if($('#gauges-model').is(':visible')){
   count_model ++ ;
   var ini_clr = '#ffe9b3'; 
   var stp_clr = '#f99b00'; 
  var fm_model = new RadialProgressChart('.fm-model', {
  diameter: 300,
  max: 100,
  round: true,
  series: [{
    value: 90,
    color: [ini_clr, stp_clr]    
  }],
  center: [function(d) {
    return 'Shore D ' + d
  }, 'Hardness'],
});

var fs_model = new RadialProgressChart('.fs-model', {
  diameter: 300,
  max: 1300,
  round: true,
  series: [{
    value: 1200,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return d + ' MPa'
  }, 'Flexural Modulus'],
});
var pt_model = new RadialProgressChart('.pt-model', {
  diameter: 300,
  max: 100,
  round: true,
  series: [{
    value: 70,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return  d
  }, 'Flex. Strength MPa'],
});
var pb_model = new RadialProgressChart('.pb-model', {
  diameter: 300,
  max: 100,
  round: true,
  series: [{
    value: 74,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return  d + ' Parts'
  }, ' Per Bottle 1kg.'],
});
    
  }; 
     
  };

};
/* - ------------------------------------------------------------------  CURO ProDenture */
let count_prodenture = 0;
function graphs_prodenture(res_name) {  
  if( count_prodenture <= 0 ){
    if($('#gauges-prodenture').is(':visible')){
      count_prodenture ++ ;
       var ini_clr = '#ffd2db'; 
       var stp_clr = '#b2727a'; 
var fm_prodenture = new RadialProgressChart('.fm-prodenture', {
  diameter: 300,
  max: 110,
  round: true,
  series: [{
  value: 100,
  color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return d + ' MPa'
  }, 'Flexural Strength'],
});

var fs_prodenture = new RadialProgressChart('.fs-prodenture', {
  diameter: 300,
  max: 5500,
  round: true,
  series: [{
    value: 5000,
      color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return d + ' MPa'
  }, 'Flexural Modulus'],
});
var pt_prodenture = new RadialProgressChart('.pt-prodenture', {
  diameter: 300,
  max: 90,
  round: true,
  series: [{
    value: 80,
   color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return 'Shore D ' + d
  }, 'Hardness'],
});
var pb_prodenture = new RadialProgressChart('.pb-prodenture', {
  diameter: 300,
  max: 65,
  round: true,
  series: [{
    value: 50,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return  d + ' Parts'
  }, ' Per Bottle 500g'],
});
    
  }; 
     
  };
};
/* - ------------------------------------------------------------------   CURO Crown */   
let count_crown = 0;
function graphs_crown(res_name) {
  if( count_crown <= 0 ){
    if($('#gauges-crown').is(':visible')){
       count_crown ++ ;
  var ini_clr = '#fff2e9'; 
  var stp_clr = '#c1b1a7'; 
  var fm_crown = new RadialProgressChart('.fm-crown', {
  diameter: 300,
  max: 100,
  round: true,
  series: [{
    value: 90,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return d + ' MPa'
  }, 'Flexural Strength'],
});

var fs_crown = new RadialProgressChart('.fs-crown', {
  diameter: 300,
  max: 2600,
  round: true,
  series: [{
    value: 2000,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return d + ' MPa'
  }, 'Flexural Modulus'],
});
var pt_crown = new RadialProgressChart('.pt-crown', {
  diameter: 300,
  max: 30,
  round: true,
  series: [{
    value: 20,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return 'Shore D ' + d
  }, 'Hardness'],
});
var pb_crown = new RadialProgressChart('.pb-crown', {
  diameter: 300,
  max: 1300,
  round: true,
  series: [{
    value: 1250,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return  d + ' Parts'
  }, ' Per Bottle'],
});
  }; 
  };
};
/*--- --- ---- ---- ---- ---- ---- ----- ----- ----- ---- ----- ---- ---- ---- ---- ---- CURO ProSplint Soft */
let count_soft = 0;
function graphs_splint(res_name) {
  if( count_soft <= 0 ){
    if($('#gauges-soft').is(':visible')){
         count_soft ++ ;
var ini_clr = '#d3d3d3'; 
var stp_clr = '#686868';       
var fm_soft = new RadialProgressChart('.fs-splint', {
  diameter: 300,
  max: 22,
  round: true,
  series: [{
    value: 15,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return d + ' MPa'
  }, 'Flexural Strength'],
});
var fs_soft = new RadialProgressChart('.fm-splint', {
  diameter: 300,
  max: 780,
  round: true,
  series: [{
    value: 750,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return d + ' MPa'
  }, 'Flexural Modulus'],
});
var pt_soft = new RadialProgressChart('.pt-splint', {
  diameter: 300,
  max: 80,
  round: true,
  series: [{
    value: 60,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return 'Shore D ' + d
  }, 'Hardness'],
});
var pb_soft = new RadialProgressChart('.pb-splint', {
  diameter: 300,
  max: 65,
  round: true,
  series: [{
    value: 50,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return  d + ' Parts'
  }, ' Per Bottle 500g'],
});
  }; 
  };
};
/* --- --- ---- ---- ---- ---- ---- ----- ----- ----- ---- ----- ---- ---- ---- ---- ---- CURO Guide 	 */ 
let count_guide = 0;
function graphs_guide(res_name) {
  if( count_guide <= 0 ){
    if($('#gauges-guide').is(':visible')){
count_guide ++ ;
var ini_clr = '#e8e8e8'; 
var stp_clr = '#898989'; 
var fm_guide = new RadialProgressChart('.fm-guide', {
  diameter: 300,
  max: 100,
  round: true,
  series: [{
    value: 70,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return d + ' MPa'
  }, 'Flexural Strength'],
});

var fs_guide = new RadialProgressChart('.fs-guide', {
  diameter: 300,
  max: 2000,
  round: true,
  series: [{
    value: 1800,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return d + ' MPa'
  }, 'Flexural Modulus'],
});
var pt_guide = new RadialProgressChart('.pt-guide', {
  diameter: 300,
  max: 95,
  round: true,
  series: [{
    value: 75,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return 'Shore D ' + d
  }, 'Hardness'],
});
var pb_guide = new RadialProgressChart('.pb-guide', {
  diameter: 300,
  max: 100,
  round: true,
  series: [{
    value: 75,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return  d + ' Parts'
  }, ' Per Bottle 500g'],
});
  }; 
  };
};
/* --- --- ---- ---- ---- ---- ---- ----- ----- ----- ---- ----- ---- ---- ---- ---- ---- CURO IBT */
let count_ibt = 0;
function graphs_ibt(res_name) {
  if( count_ibt <= 0 ){
    if($('#gauges-ibt').is(':visible')){
count_ibt ++ ;
var ini_clr = '#e5e5e5'; 
var stp_clr = '#9d9fa3'; 

var pt_ibt = new RadialProgressChart('.fm-ibt', {
  diameter: 300,
  max: 110,
  round: true,
  series: [{
    value: 90,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return 'Shore D ' + d
  }, 'Hardness'],
});
var fs_ibt = new RadialProgressChart('.fs-ibt', {
  diameter: 300,
  max: 4000,
  round: true,
  series: [{
    value: 3900,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return d + ' MPa'
  }, 'Viscosity 25??C'],
});
var pb_ibt = new RadialProgressChart('.pt-ibt', {
  diameter: 300,
  max: 170,
  round: true,
  series: [{
    value: 150,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return  d + ' Parts'
  }, ' Per Bottle 500g'],
});
  }; 
  };
};


/* --- --- ---- ---- ---- ---- ---- ----- ----- ----- ---- ----- ---- ---- ---- ---- ---- CURO ProCast */ 	
let count_procast = 0;
function graphs_procast(res_name) {
  if( count_procast <= 0 ){
    if($('#gauges-procast').is(':visible')){
         count_procast ++ ;
 var ini_clr = '#efcbde'; 
 var stp_clr = '#ad326c'; 
  var fm_procast = new RadialProgressChart('.fm-procast', {
  diameter: 300,
  max: 40,
  round: true,
  series: [{
    value: 30,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return d + ' MPa'
  }, 'Flexural Strength'],
});

var fs_procast = new RadialProgressChart('.fs-procast', {
  diameter: 300,
  max: 1500,
  round: true,
  series: [{
    value: 1300,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return d + ' MPa'
  }, 'Flexural Modulus'],
});
var pt_procast = new RadialProgressChart('.pt-procast', {
  diameter: 300,
  max: 75,
  round: true,
  series: [{
    value: 65,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return 'Shore D ' + d
  }, 'Hardness'],
});
var pb_procast = new RadialProgressChart('.pb-procast', {
  diameter: 300,
  max: 1320,
  round: true,
  series: [{
    value: 1250,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return  d + ' Parts'
  }, ' Crowns P/Bottle 500g'],
});
  }; 
  };
};

/* --- --- ---- ---- ---- ---- ---- ----- ----- ----- ---- ----- ---- ---- ---- ---- ---- CURO Gingiva */	
let count_gingiva = 0;
function graphs_gingiva(res_name) {
  if( count_gingiva <= 0 ){
    if($('#gauges-gingiva').is(':visible')){
         count_gingiva ++ ;
var ini_clr = '#fcd4dc'; 
var stp_clr = '#af5262'; 
var fm_gingiva = new RadialProgressChart('.fm-gingiva', {
  diameter: 300,
  max: 75,
  round: true,
  series: [{
    value: 60,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return 'Shore D ' + d
  }, 'Hardness'],
});

var fs_gingiva = new RadialProgressChart('.fs-gingiva', {
  diameter: 300,
  max: 2000,
  round: true,
  series: [{
    value: 1880,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return d + ' MPa'
  }, 'Viscosity 25??C'],
});

var pb_gingiva = new RadialProgressChart('.pt-gingiva', {
  diameter: 300,
  max: 530,
  round: true,
  series: [{
    value: 500,
   color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return  d + ' Parts'
  }, ' Per Bottle 500g'],
});
  }; 
  };
};

/* --- --- ---- ---- ---- ---- ---- --- -- ----- ---- - ---- -- --- ---- -- -- ---- -- -- ---- CURO Tray */	
let count_tray = 0;
function graphs_tray(res_name) {
  if( count_tray <= 0 ){
    if($('#gauges-tray').is(':visible')){
         count_tray ++ ;
  var ini_clr = '#ffd8c7'; 
  var stp_clr = '#ff621d'; 
  var fm_tray = new RadialProgressChart('.fm-tray', { 
  diameter: 300,
  max: 100,
  round: true,
  series: [{
    value: 80,
  color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return d + ' MPa'
  }, 'Flexural Strength'],
});

var fs_tray = new RadialProgressChart('.fs-tray', {
  diameter: 300,
  max: 3300,
  round: true,
  series: [{
    value: 2000,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return d + ' MPa'
  }, 'Flexural Modulus'],
});
var pt_tray = new RadialProgressChart('.pt-tray', {
  diameter: 300,
  max: 100,
  round: true,
  series: [{
    value: 80,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return 'Shore D ' + d
  }, 'Hardness'],
});
var pb_tray = new RadialProgressChart('.pb-tray', {
  diameter: 300,
  max: 100,
  round: true,
  series: [{
    value: 33,
    color: [ini_clr, stp_clr]
  }],
  center: [function(d) {
    return  d + ' Parts'
  }, ' Per Bottle 500g'],
});
  }; 
  };
};


function setAtt(rs) {
  let rr_nm = document.getElementById("btn-back-to-top").getAttribute("data-mdb-target");
  let rx = '#flush-collapse-'+rs;
  document.getElementById("app_menu_tray").getAttribute("data-mdb-target"); 
  document.getElementById("btn-back-to-top").setAttribute("data-mdb-target", rx ); 
}


/* --- --- ---- ---- ---- ---- ---- --- -- ----- ---- - ---- -- --- ---- -- -- ---- -- -- ---- back to top btn */	
//Get the button
let bckbtn = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  
};

function scrollFunction() {
  if (  document.body.scrollTop > 1168 ||   document.documentElement.scrollTop > 1168 ) 
  
  {
    bckbtn.style.display = "block";
  } else {
    bckbtn.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
bckbtn.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 820;
  document.documentElement.scrollTop = 820;
  document.getElementById("btn-back-to-top").setAttribute("data-mdb-target", null ); 
}
/* --- --- ---- ---- ---- ---- ---- --- -- ----- ---- - ---- -- --- ---- -- -- ---- -- -- ---- accordion to top */
$('.collapse').on('shown.bs.collapse', function(e) {
  var $card = $(this).closest('.accordion-item');
  var $open = $($(this).data('parent')).find('.collapse.show');
  
  var additionalOffset = 0;
  if($card.prevAll().filter($open.closest('.accordion-item')).length !== 0)
  {
        additionalOffset =  $open.height();
  }
  $('html,body').animate({
    scrollTop: $card.offset().top - additionalOffset
  }, 2);
});
