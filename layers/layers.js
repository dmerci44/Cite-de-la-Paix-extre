var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Citedelapaix_1 = new ol.format.GeoJSON();
var features_Citedelapaix_1 = format_Citedelapaix_1.readFeatures(json_Citedelapaix_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Citedelapaix_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Citedelapaix_1.addFeatures(features_Citedelapaix_1);
var lyr_Citedelapaix_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Citedelapaix_1, 
                style: style_Citedelapaix_1,
                popuplayertitle: 'Cite de la paix',
                interactive: true,
                title: '<img src="styles/legend/Citedelapaix_1.png" /> Cite de la paix'
            });
var format_numero_2 = new ol.format.GeoJSON();
var features_numero_2 = format_numero_2.readFeatures(json_numero_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_numero_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_numero_2.addFeatures(features_numero_2);
var lyr_numero_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_numero_2, 
                style: style_numero_2,
                popuplayertitle: 'numero',
                interactive: true,
                title: '<img src="styles/legend/numero_2.png" /> numero'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Citedelapaix_1.setVisible(true);lyr_numero_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Citedelapaix_1,lyr_numero_2];
lyr_Citedelapaix_1.set('fieldAliases', {'cite': 'cite', });
lyr_numero_2.set('fieldAliases', {'num': 'num', });
lyr_Citedelapaix_1.set('fieldImages', {'cite': '', });
lyr_numero_2.set('fieldImages', {'num': '', });
lyr_Citedelapaix_1.set('fieldLabels', {'cite': 'inline label - always visible', });
lyr_numero_2.set('fieldLabels', {'num': 'inline label - always visible', });
lyr_numero_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});