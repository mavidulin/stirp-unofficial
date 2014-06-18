var map, bounds,osm,gphy,hybrid,shume,zupanije,controlNavigation, controlZoomBox;
var apiKey = "Aujav2Qfgm8IS-GSIANSkSOULN1CIQ0U3GZTl70lOb2BwCCzrNBUmAyONwO-Mths";

var init = function() {

    bounds = new OpenLayers.Bounds(
        1501685.625, 5219910,
        2163995.5, 5869742.5 
    );
    var options = {
        controls: [],
        restrictedExtent: bounds,
        maxExtent: bounds,
        maxResolution: 2587.14794921875,
        projection: "EPSG:900913",
        units: 'm',
        theme: "css/theme"
    };

     
    map = new OpenLayers.Map("map",options);

    

    osm = new OpenLayers.Layer.OSM(null, null, {transitionEffect: 'resize'});

    hybrid = new OpenLayers.Layer.Bing({
    key: apiKey,
    type: "AerialWithLabels",
    name: "Bing Aerial With Labels"
    }); 

    gphy = new OpenLayers.Layer.Google(
        "Google",
        {mapTypes: google.maps.MapTypeId.TERRAIN}
    ); 

    shume = new OpenLayers.Layer.WMS(
                    "Šume",
                    "http://geoserver.geoinfo.geof.hr/geoserver/stirp/wms",
                    {
                        layers: 'stirp:shume',
                        format: 'image/png',
                        transparent: true,
                        version: '1.3.0'
                    },
                    {
                        singleTile: true,
                        ratio: 1,
                        visibility:true,
                        transitionEffect: 'resize'
                        
                    }
                );
    
    zupanije = new OpenLayers.Layer.WMS(
                    "Županije",
                    "http://geoserver.geoinfo.geof.hr/geoserver/stirp/wms",
                    {
                        layers: 'stirp:zupanije',
                        format: 'image/png',
                        transparent: true,
                        version: '1.3.0'
                    },
                    {
                        singleTile: true,
                        ratio: 1,
                        visibility:true,
                        transitionEffect: 'resize'
                    }
                );


    map.addLayers([osm,hybrid,gphy, shume,zupanije])
    

    Proj4js.defs["EPSG:3765"]= "+proj=tmerc +lat_0=0 +lon_0=16.5 +k=0.9999 +x_0=500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";

    map.addControl(new OpenLayers.Control.MousePosition(
         {
             div: tabs1,
             emptyString: "0,0",
             numDigits:0,
             separator: " ; X=",
             prefix: "Y= ",
             displayProjection: new OpenLayers.Projection("EPSG:3765")
         })
     );

     map.addControl(new OpenLayers.Control.MousePosition(
         {
             div: tabs2,
             emptyString: "0,0",
             numDigits:6,
             separator: " ; X=",
             prefix: "Y= ",
             displayProjection: new OpenLayers.Projection("EPSG:4326")
         })
     );

    controlNavigation = new OpenLayers.Control.Navigation();
    map.addControl(controlNavigation);
    map.addControl(new OpenLayers.Control.Scale());
    controlZoomBox = new OpenLayers.Control.ZoomBox({title: "Zoom in box", out: false, displayClass:"olControlZoomBox"});
    map.addControl(controlZoomBox);

    map.zoomToExtent(bounds);
   };

var priblizi = function(){
    map.zoomIn();
};

var udalji = function(){
    map.zoomOut();
};

var zoomMax = function(){

    map.zoomToExtent(bounds);
};

//PAŽNJA! >>

var zoomBox = function(){
    if (controlZoomBox.active) {
        controlZoomBox.deactivate();
    } else {
        controlZoomBox.activate();
    }
    
};


// <<PAŽNJA!!!
var hand = function(){
    
}


var ch_layer = function(sloj) {

    switch(sloj)
{
case osm:
    map.setBaseLayer(osm);

  break;
case gphy:
    map.setBaseLayer(gphy);
  break;
default:
    map.setBaseLayer(hybrid);  
}


}

var prikaz_sloja = function(overlay) {
    
    if (overlay==shume) {
          if (document.proba.check1.checked==true) {
        shume.setVisibility(true)
    }
    else {
        shume.setVisibility(false)
    }  
    }

    else {
        if (document.proba.check2.checked==true) {
        zupanije.setVisibility(true)
        }
        else {
        zupanije.setVisibility(false)
    }
    }

}


$(document).ready(function(){
    init();
    funkcija();
});