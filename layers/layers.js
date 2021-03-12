ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3416").setExtent([-21800.376058, 292253.241094, 306897.878335, 461994.137956]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BuildingConnections_3 = new ol.format.GeoJSON();
var features_BuildingConnections_3 = format_BuildingConnections_3.readFeatures(json_BuildingConnections_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3416'});
var jsonSource_BuildingConnections_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildingConnections_3.addFeatures(features_BuildingConnections_3);
var lyr_BuildingConnections_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BuildingConnections_3,
maxResolution:2.8004466152261966,
 
                style: style_BuildingConnections_3,
                interactive: true,
                title: '<img src="styles/legend/BuildingConnections_3.png" /> Building Connections'
            });
var format_OptimizedNetwork_4 = new ol.format.GeoJSON();
var features_OptimizedNetwork_4 = format_OptimizedNetwork_4.readFeatures(json_OptimizedNetwork_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3416'});
var jsonSource_OptimizedNetwork_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OptimizedNetwork_4.addFeatures(features_OptimizedNetwork_4);
var lyr_OptimizedNetwork_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OptimizedNetwork_4,
maxResolution:2.8004466152261966,
 
                style: style_OptimizedNetwork_4,
                interactive: true,
                title: '<img src="styles/legend/OptimizedNetwork_4.png" /> Optimized Network'
            });
var format_AddressPolygons_5 = new ol.format.GeoJSON();
var features_AddressPolygons_5 = format_AddressPolygons_5.readFeatures(json_AddressPolygons_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3416'});
var jsonSource_AddressPolygons_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AddressPolygons_5.addFeatures(features_AddressPolygons_5);
var lyr_AddressPolygons_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AddressPolygons_5,
maxResolution:2.8004466152261966,
 
                style: style_AddressPolygons_5,
                interactive: true,
                title: '<img src="styles/legend/AddressPolygons_5.png" /> Address Polygons'
            });
var format_AddressPoints_6 = new ol.format.GeoJSON();
var features_AddressPoints_6 = format_AddressPoints_6.readFeatures(json_AddressPoints_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3416'});
var jsonSource_AddressPoints_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AddressPoints_6.addFeatures(features_AddressPoints_6);
var lyr_AddressPoints_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AddressPoints_6,
maxResolution:2.8004466152261966,
 
                style: style_AddressPoints_6,
                interactive: true,
                title: '<img src="styles/legend/AddressPoints_6.png" /> Address Points'
            });
var format_FTTH_7 = new ol.format.GeoJSON();
var features_FTTH_7 = format_FTTH_7.readFeatures(json_FTTH_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3416'});
var jsonSource_FTTH_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FTTH_7.addFeatures(features_FTTH_7);
var lyr_FTTH_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FTTH_7,
maxResolution:56.00893230452392,
 
                style: style_FTTH_7,
                interactive: true,
                title: '<img src="styles/legend/FTTH_7.png" /> FTTH'
            });
var format_DOCSIS_8 = new ol.format.GeoJSON();
var features_DOCSIS_8 = format_DOCSIS_8.readFeatures(json_DOCSIS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3416'});
var jsonSource_DOCSIS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DOCSIS_8.addFeatures(features_DOCSIS_8);
var lyr_DOCSIS_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DOCSIS_8,
maxResolution:56.00893230452392,
 
                style: style_DOCSIS_8,
                interactive: true,
                title: '<img src="styles/legend/DOCSIS_8.png" /> DOCSIS'
            });
var format_xDSL_9 = new ol.format.GeoJSON();
var features_xDSL_9 = format_xDSL_9.readFeatures(json_xDSL_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3416'});
var jsonSource_xDSL_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_xDSL_9.addFeatures(features_xDSL_9);
var lyr_xDSL_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_xDSL_9,
maxResolution:56.00893230452392,
 
                style: style_xDSL_9,
                interactive: true,
                title: '<img src="styles/legend/xDSL_9.png" /> xDSL'
            });
var format_ClusterPolygons_10 = new ol.format.GeoJSON();
var features_ClusterPolygons_10 = format_ClusterPolygons_10.readFeatures(json_ClusterPolygons_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3416'});
var jsonSource_ClusterPolygons_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClusterPolygons_10.addFeatures(features_ClusterPolygons_10);
var lyr_ClusterPolygons_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ClusterPolygons_10, 
                style: style_ClusterPolygons_10,
                interactive: true,
                title: '<img src="styles/legend/ClusterPolygons_10.png" /> Cluster Polygons'
            });
var format_VorarlbergBorder_11 = new ol.format.GeoJSON();
var features_VorarlbergBorder_11 = format_VorarlbergBorder_11.readFeatures(json_VorarlbergBorder_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3416'});
var jsonSource_VorarlbergBorder_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VorarlbergBorder_11.addFeatures(features_VorarlbergBorder_11);
var lyr_VorarlbergBorder_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VorarlbergBorder_11, 
                style: style_VorarlbergBorder_11,
                interactive: false,
                title: '<img src="styles/legend/VorarlbergBorder_11.png" /> Vorarlberg Border'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_BuildingConnections_3.setVisible(true);lyr_OptimizedNetwork_4.setVisible(true);lyr_AddressPolygons_5.setVisible(true);lyr_AddressPoints_6.setVisible(true);lyr_FTTH_7.setVisible(true);lyr_DOCSIS_8.setVisible(true);lyr_xDSL_9.setVisible(true);lyr_ClusterPolygons_10.setVisible(true);lyr_VorarlbergBorder_11.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,lyr_BuildingConnections_3,lyr_OptimizedNetwork_4,lyr_AddressPolygons_5,lyr_AddressPoints_6,lyr_FTTH_7,lyr_DOCSIS_8,lyr_xDSL_9,lyr_ClusterPolygons_10,lyr_VorarlbergBorder_11];
lyr_BuildingConnections_3.set('fieldAliases', {'fid': 'fid', 'ADRCD': 'ADRCD', 'index': 'index', 'GKZ': 'GKZ', 'OKZ': 'OKZ', 'SKZ': 'SKZ', 'STRASSENNAME': 'STRASSENNAME', 'HAUSNR_GANZ': 'HAUSNR_GANZ', 'HAUSNRBEREICH': 'HAUSNRBEREICH', 'PLZ': 'PLZ', 'ORTSNAME': 'ORTSNAME', 'GEMEINDENAME': 'GEMEINDENAME', 'BUNDESLAND': 'BUNDESLAND', 'HAUSNRGEBAEUDEBEZ': 'HAUSNRGEBAEUDEBEZ', 'EIGENSCHAFT': 'EIGENSCHAFT', 'OBJFUNKTION': 'OBJFUNKTION', 'HH': 'HH', 'ENT': 'ENT', 'ACT_ENT': 'ACT_ENT', 'geometry_GEB': 'geometry_GEB', 'geometry_ADR': 'geometry_ADR', 'ANBIETER': 'ANBIETER', 'TECHNIK': 'TECHNIK', 'DOWNLOAD': 'DOWNLOAD', 'geometry': 'geometry', 'cluster_labels': 'cluster_labels', 'center': 'center', 'length_anschluss': 'Length', 'sub_cluster': 'sub_cluster', });
lyr_OptimizedNetwork_4.set('fieldAliases', {'fid': 'fid', 'osmid': 'osmid', 'name': 'name', 'highway': 'highway', 'oneway': 'oneway', 'length': 'length', 'from': 'from', 'to': 'to', 'u': 'u', 'v': 'v', 'key': 'key', 'maxspeed': 'maxspeed', 'ref': 'ref', 'lanes': 'lanes', 'service': 'service', 'bridge': 'bridge', 'junction': 'junction', 'access': 'access', 'tunnel': 'tunnel', 'width': 'width', 'est_width': 'est_width', 'area': 'area', });
lyr_AddressPolygons_5.set('fieldAliases', {'fid': 'fid', 'ADRCD': 'ADRCD', 'index': 'index', 'GKZ': 'GKZ', 'OKZ': 'OKZ', 'SKZ': 'SKZ', 'STRASSENNAME': 'Street Name', 'HAUSNR_GANZ': 'House Number', 'HAUSNRBEREICH': 'House Number (add.)', 'PLZ': 'Postcode', 'ORTSNAME': 'Town', 'GEMEINDENAME': 'Municipality', 'BUNDESLAND': 'Bundesland', 'HAUSNRGEBAEUDEBEZ': 'HAUSNRGEBAEUDEBEZ', 'EIGENSCHAFT': 'Building Type', 'OBJFUNKTION': 'OBJFUNKTION', 'HH': 'HH', 'ENT': 'ENT', 'ACT_ENT': 'ACT_ENT', 'geometry_GEB': 'geometry_GEB', 'geometry_ADR': 'geometry_ADR', 'ANBIETER': 'Provider', 'TECHNIK': 'Connection Type', 'DOWNLOAD': 'Download Speed', 'cluster_labels': 'Cluster Number', 'center': 'center', 'anschluss': 'anschluss', 'length_anschluss': 'length_anschluss', 'sub_cluster': 'Sub Cluster Number', });
lyr_AddressPoints_6.set('fieldAliases', {'fid': 'fid', 'ADRCD': 'ADRCD', 'index': 'index', 'GKZ': 'GKZ', 'OKZ': 'OKZ', 'SKZ': 'SKZ', 'STRASSENNAME': 'Steet Name', 'HAUSNR_GANZ': 'House Number', 'HAUSNRBEREICH': 'House Number (add.)', 'PLZ': 'Postcode', 'ORTSNAME': 'Town', 'GEMEINDENAME': 'Municipality', 'BUNDESLAND': 'Bundesland', 'HAUSNRGEBAEUDEBEZ': 'House Number (add..)', 'EIGENSCHAFT': 'Building Type', 'OBJFUNKTION': 'OBJFUNKTION', 'HH': 'HH', 'ENT': 'ENT', 'ACT_ENT': 'ACT_ENT', 'geometry_GEB': 'geometry_GEB', 'geometry_ADR': 'geometry_ADR', 'ANBIETER': 'Provider', 'TECHNIK': 'Connection Type', 'DOWNLOAD': 'Download Speed', 'cluster_labels': 'Cluster Number', 'center': 'center', 'anschluss': 'anschluss', 'length_anschluss': 'length_anschluss', 'sub_cluster': 'Sub Cluster Number', });
lyr_FTTH_7.set('fieldAliases', {'fid': 'fid', 'l000100v3': 'l000100v3', 'infrastrukturanbieterin': 'Provider', 'technik': 'Connection Type', 'download': 'Download Speed', 'upload': 'Upload Speed', 'bearbeitung_bbb': 'bearbeitung_bbb', 'NAME': 'NAME', });
lyr_DOCSIS_8.set('fieldAliases', {'fid': 'fid', 'l000100v3': 'l000100v3', 'infrastrukturanbieterin': 'Provider', 'technik': 'Connection Type', 'download': 'Download Speed', 'upload': 'Upload Speed', 'bearbeitung_bbb': 'bearbeitung_bbb', 'NAME': 'NAME', });
lyr_xDSL_9.set('fieldAliases', {'fid': 'fid', 'l000100v3': 'l000100v3', 'infrastrukturanbieterin': 'Provider', 'technik': 'Connection Type', 'download': 'Download Speed', 'upload': 'Upload Speed', 'bearbeitung_bbb': 'bearbeitung_bbb', 'NAME': 'NAME', });
lyr_ClusterPolygons_10.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Bundesland': 'Bundesland', 'Gemeinde': 'Municipality', 'Cluster_ID': 'Cluster Number', 'Sub_Cluster_ID': 'Sub_Cluster_ID', 'Buildings': 'Buildings', 'Network_avg (m)': 'Network Avg (m)', 'HH_Cluster': 'Est. Households', 'SOHO_Cluster_1': 'Est. SOHO', 'Large_ENT_Cluster': 'Est. Large Enterprises', 'Network (m)': 'Network Total (m)', 'Anschluss_avg (m)': 'Building Connection Avg (m)', 'Anschluss (m)': 'Anschluss (m)', 'Points (%)': 'Points (%)', '< 10 Mbit/s': '< 10 Mbit/s', '≥ 10 – < 30 Mbit/s': '≥ 10 – < 30 Mbit/s', '≥ 30 – < 100 Mbit/s': '≥ 30 – < 100 Mbit/s', '≥ 100 – < 1000 Mbit/s': '≥ 100 – < 1000 Mbit/s', '≥ 1000 Mbit/s': '≥ 1000 Mbit/s', '< 10 Mbit/s (%)': '< 10 Mbit/s (%)', '≥ 10 – < 30 Mbit/s (%)': '≥ 10 – < 30 Mbit/s (%)', '≥ 30 – < 100 Mbit/s (%)': '≥ 30 – < 100 Mbit/s (%)', '≥ 100 – < 1000 Mbit/s (%)': '≥ 100 – < 1000 Mbit/s (%)', '≥ 1000 Mbit/s (%)': '≥ 1000 Mbit/s (%)', '4G/5G lokal': '4G/5G lokal', 'DOCSIS 1.0/2.0': 'DOCSIS 1.0/2.0', 'DOCSIS 3.0': 'DOCSIS 3.0', 'DOCSIS 3.1': 'DOCSIS 3.1', 'FTTB': 'FTTB', 'FTTH': 'FTTH', 'WLAN': 'WLAN', 'xDSL': 'xDSL', '01. Gebäude mit einer Wohnung (#)': '01. Gebäude mit einer Wohnung (#)', '02. Gebäude mit zwei oder mehr Wohnungen (#)': '02. Gebäude mit zwei oder mehr Wohnungen (#)', '03. Wohngebäude fur Gemeinschaften (#)': '03. Wohngebäude fur Gemeinschaften (#)', '04. Hotels und ähnliche Gebäude (#)': '04. Hotels und ähnliche Gebäude (#)', '05. Bürogebäude (#)': '05. Bürogebäude (#)', '06. Groß- und Einzelhandelsgebäude (#)': '06. Groß- und Einzelhandelsgebäude (#)', '07. Gebäude des Verkehrs- und Nachrichtenwesens (#)': '07. Gebäude des Verkehrs- und Nachrichtenwesens (#)', '08. Industrie- und Lagergebäude (#)': '08. Industrie- und Lagergebäude (#)', '09. Gebäude für Kultur- und Freizeitzwecke (#)': '09. Gebäude für Kultur- und Freizeitzwecke (#)', 'HH (Gemeinde)': 'HH (Gemeinde)', 'ENT (Gemeinde)': 'ENT (Gemeinde)', '01. Gebäude mit einer Wohnung (Gemeinde)': '01. Gebäude mit einer Wohnung (Gemeinde)', '02. Gebäude mit zwei oder mehr Wohnungen (Gemeinde)': '02. Gebäude mit zwei oder mehr Wohnungen (Gemeinde)', '03. Wohngebäude fur Gemeinschaften (Gemeinde)': '03. Wohngebäude fur Gemeinschaften (Gemeinde)', '04. Hotels und ähnliche Gebäude (Gemeinde)': '04. Hotels und ähnliche Gebäude (Gemeinde)', '05. Bürogebäude (Gemeinde)': '05. Bürogebäude (Gemeinde)', '06. Groß- und Einzelhandelsgebäude (Gemeinde)': '06. Groß- und Einzelhandelsgebäude (Gemeinde)', '07. Gebäude des Verkehrs- und Nachrichtenwesens (Gemeinde)': '07. Gebäude des Verkehrs- und Nachrichtenwesens (Gemeinde)', '08. Industrie- und Lagergebäude (Gemeinde)': '08. Industrie- und Lagergebäude (Gemeinde)', '09. Gebäude für Kultur- und Freizeitzwecke (Gemeinde)': '09. Gebäude für Kultur- und Freizeitzwecke (Gemeinde)', 'SOHO_1 (Gemeinde)': 'SOHO_1 (Gemeinde)', 'SOHO_2 (Gemeinde)': 'SOHO_2 (Gemeinde)', 'Large_ENT (Gemeinde)': 'Large_ENT (Gemeinde)', 'ENT_Buildings (#)': 'ENT_Buildings (#)', 'SOHO_Cluster_2 (#)': 'SOHO_Cluster_2 (#)', 'SDU_Factor': 'SDU_Factor', 'MDU_Factor': 'MDU_Factor', 'ENT_Faktor': 'ENT_Faktor', 'Speed1': '< 10 Mbit/s (%)', 'Speed2': '≥ 10 – < 30 Mbit/s (%)', 'Speed3': '≥ 30 – < 100 Mbit/s (%)', 'Speed4': '≥ 100 – < 1000 Mbit/s (%)', 'Speed5': '≥ 1000 Mbit/s (%)', });
lyr_VorarlbergBorder_11.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_BuildingConnections_3.set('fieldImages', {'fid': 'Hidden', 'ADRCD': 'Hidden', 'index': 'Hidden', 'GKZ': 'Hidden', 'OKZ': 'Hidden', 'SKZ': 'Hidden', 'STRASSENNAME': 'Hidden', 'HAUSNR_GANZ': 'Hidden', 'HAUSNRBEREICH': 'Hidden', 'PLZ': 'Hidden', 'ORTSNAME': 'Hidden', 'GEMEINDENAME': 'Hidden', 'BUNDESLAND': 'Hidden', 'HAUSNRGEBAEUDEBEZ': 'Hidden', 'EIGENSCHAFT': 'Hidden', 'OBJFUNKTION': 'Hidden', 'HH': 'Hidden', 'ENT': 'Hidden', 'ACT_ENT': 'Hidden', 'geometry_GEB': 'Hidden', 'geometry_ADR': 'Hidden', 'ANBIETER': 'Hidden', 'TECHNIK': 'Hidden', 'DOWNLOAD': 'Hidden', 'geometry': 'Hidden', 'cluster_labels': 'Hidden', 'center': 'Hidden', 'length_anschluss': 'TextEdit', 'sub_cluster': 'Hidden', });
lyr_OptimizedNetwork_4.set('fieldImages', {'fid': 'Hidden', 'osmid': 'Hidden', 'name': 'Hidden', 'highway': 'Hidden', 'oneway': 'Hidden', 'length': 'Hidden', 'from': 'Hidden', 'to': 'Hidden', 'u': 'Hidden', 'v': 'Hidden', 'key': 'Hidden', 'maxspeed': 'Hidden', 'ref': 'Hidden', 'lanes': 'Hidden', 'service': 'Hidden', 'bridge': 'Hidden', 'junction': 'Hidden', 'access': 'Hidden', 'tunnel': 'Hidden', 'width': 'Hidden', 'est_width': 'Hidden', 'area': 'Hidden', });
lyr_AddressPolygons_5.set('fieldImages', {'fid': 'Hidden', 'ADRCD': 'Hidden', 'index': 'Hidden', 'GKZ': 'Hidden', 'OKZ': 'Hidden', 'SKZ': 'Hidden', 'STRASSENNAME': 'TextEdit', 'HAUSNR_GANZ': 'TextEdit', 'HAUSNRBEREICH': 'TextEdit', 'PLZ': 'TextEdit', 'ORTSNAME': 'TextEdit', 'GEMEINDENAME': 'TextEdit', 'BUNDESLAND': 'TextEdit', 'HAUSNRGEBAEUDEBEZ': 'Hidden', 'EIGENSCHAFT': 'TextEdit', 'OBJFUNKTION': 'Hidden', 'HH': 'Hidden', 'ENT': 'Hidden', 'ACT_ENT': 'Hidden', 'geometry_GEB': 'Hidden', 'geometry_ADR': 'Hidden', 'ANBIETER': 'TextEdit', 'TECHNIK': 'TextEdit', 'DOWNLOAD': 'TextEdit', 'cluster_labels': 'TextEdit', 'center': 'Hidden', 'anschluss': 'Hidden', 'length_anschluss': 'Hidden', 'sub_cluster': 'TextEdit', });
lyr_AddressPoints_6.set('fieldImages', {'fid': 'Hidden', 'ADRCD': 'Hidden', 'index': 'Hidden', 'GKZ': 'Hidden', 'OKZ': 'Hidden', 'SKZ': 'Hidden', 'STRASSENNAME': 'TextEdit', 'HAUSNR_GANZ': 'TextEdit', 'HAUSNRBEREICH': 'TextEdit', 'PLZ': 'TextEdit', 'ORTSNAME': 'TextEdit', 'GEMEINDENAME': 'TextEdit', 'BUNDESLAND': 'TextEdit', 'HAUSNRGEBAEUDEBEZ': 'Hidden', 'EIGENSCHAFT': 'TextEdit', 'OBJFUNKTION': 'Hidden', 'HH': 'Hidden', 'ENT': 'Hidden', 'ACT_ENT': 'Hidden', 'geometry_GEB': 'Hidden', 'geometry_ADR': 'Hidden', 'ANBIETER': 'TextEdit', 'TECHNIK': 'TextEdit', 'DOWNLOAD': 'TextEdit', 'cluster_labels': 'TextEdit', 'center': 'Hidden', 'anschluss': 'Hidden', 'length_anschluss': 'Hidden', 'sub_cluster': 'TextEdit', });
lyr_FTTH_7.set('fieldImages', {'fid': 'Hidden', 'l000100v3': 'Hidden', 'infrastrukturanbieterin': 'TextEdit', 'technik': 'TextEdit', 'download': 'TextEdit', 'upload': 'TextEdit', 'bearbeitung_bbb': 'Hidden', 'NAME': 'Hidden', });
lyr_DOCSIS_8.set('fieldImages', {'fid': 'Hidden', 'l000100v3': 'Hidden', 'infrastrukturanbieterin': 'TextEdit', 'technik': 'TextEdit', 'download': 'TextEdit', 'upload': 'TextEdit', 'bearbeitung_bbb': 'Hidden', 'NAME': 'Hidden', });
lyr_xDSL_9.set('fieldImages', {'fid': 'Hidden', 'l000100v3': 'Hidden', 'infrastrukturanbieterin': 'TextEdit', 'technik': 'TextEdit', 'download': 'TextEdit', 'upload': 'TextEdit', 'bearbeitung_bbb': 'Hidden', 'NAME': 'Hidden', });
lyr_ClusterPolygons_10.set('fieldImages', {'fid': 'Hidden', 'Date': 'Hidden', 'Bundesland': 'TextEdit', 'Gemeinde': 'TextEdit', 'Cluster_ID': 'TextEdit', 'Sub_Cluster_ID': 'Hidden', 'Buildings': 'TextEdit', 'Network_avg (m)': 'TextEdit', 'HH_Cluster': 'TextEdit', 'SOHO_Cluster_1': 'TextEdit', 'Large_ENT_Cluster': 'TextEdit', 'Network (m)': 'TextEdit', 'Anschluss_avg (m)': 'TextEdit', 'Anschluss (m)': 'Hidden', 'Points (%)': 'Hidden', '< 10 Mbit/s': 'Hidden', '≥ 10 – < 30 Mbit/s': 'Hidden', '≥ 30 – < 100 Mbit/s': 'Hidden', '≥ 100 – < 1000 Mbit/s': 'Hidden', '≥ 1000 Mbit/s': 'Hidden', '< 10 Mbit/s (%)': 'Hidden', '≥ 10 – < 30 Mbit/s (%)': 'Hidden', '≥ 30 – < 100 Mbit/s (%)': 'Hidden', '≥ 100 – < 1000 Mbit/s (%)': 'Hidden', '≥ 1000 Mbit/s (%)': 'Hidden', '4G/5G lokal': 'Hidden', 'DOCSIS 1.0/2.0': 'Hidden', 'DOCSIS 3.0': 'Hidden', 'DOCSIS 3.1': 'Hidden', 'FTTB': 'Hidden', 'FTTH': 'Hidden', 'WLAN': 'Hidden', 'xDSL': 'Hidden', '01. Gebäude mit einer Wohnung (#)': 'Hidden', '02. Gebäude mit zwei oder mehr Wohnungen (#)': 'Hidden', '03. Wohngebäude fur Gemeinschaften (#)': 'Hidden', '04. Hotels und ähnliche Gebäude (#)': 'Hidden', '05. Bürogebäude (#)': 'Hidden', '06. Groß- und Einzelhandelsgebäude (#)': 'Hidden', '07. Gebäude des Verkehrs- und Nachrichtenwesens (#)': 'Hidden', '08. Industrie- und Lagergebäude (#)': 'Hidden', '09. Gebäude für Kultur- und Freizeitzwecke (#)': 'Hidden', 'HH (Gemeinde)': 'Hidden', 'ENT (Gemeinde)': 'Hidden', '01. Gebäude mit einer Wohnung (Gemeinde)': 'Hidden', '02. Gebäude mit zwei oder mehr Wohnungen (Gemeinde)': 'Hidden', '03. Wohngebäude fur Gemeinschaften (Gemeinde)': 'Hidden', '04. Hotels und ähnliche Gebäude (Gemeinde)': 'Hidden', '05. Bürogebäude (Gemeinde)': 'Hidden', '06. Groß- und Einzelhandelsgebäude (Gemeinde)': 'Hidden', '07. Gebäude des Verkehrs- und Nachrichtenwesens (Gemeinde)': 'Hidden', '08. Industrie- und Lagergebäude (Gemeinde)': 'Hidden', '09. Gebäude für Kultur- und Freizeitzwecke (Gemeinde)': 'Hidden', 'SOHO_1 (Gemeinde)': 'Hidden', 'SOHO_2 (Gemeinde)': 'Hidden', 'Large_ENT (Gemeinde)': 'Hidden', 'ENT_Buildings (#)': 'Hidden', 'SOHO_Cluster_2 (#)': 'Hidden', 'SDU_Factor': 'Hidden', 'MDU_Factor': 'Hidden', 'ENT_Faktor': 'Hidden', 'Speed1': 'TextEdit', 'Speed2': 'TextEdit', 'Speed3': 'TextEdit', 'Speed4': 'TextEdit', 'Speed5': 'TextEdit', });
lyr_VorarlbergBorder_11.set('fieldImages', {'id': 'Hidden', 'name': 'Hidden', });
lyr_BuildingConnections_3.set('fieldLabels', {'length_anschluss': 'inline label', });
lyr_OptimizedNetwork_4.set('fieldLabels', {});
lyr_AddressPolygons_5.set('fieldLabels', {'STRASSENNAME': 'inline label', 'HAUSNR_GANZ': 'inline label', 'HAUSNRBEREICH': 'inline label', 'PLZ': 'inline label', 'ORTSNAME': 'inline label', 'GEMEINDENAME': 'inline label', 'BUNDESLAND': 'inline label', 'EIGENSCHAFT': 'inline label', 'ANBIETER': 'inline label', 'TECHNIK': 'inline label', 'DOWNLOAD': 'inline label', 'cluster_labels': 'inline label', 'sub_cluster': 'inline label', });
lyr_AddressPoints_6.set('fieldLabels', {'STRASSENNAME': 'inline label', 'HAUSNR_GANZ': 'inline label', 'HAUSNRBEREICH': 'inline label', 'PLZ': 'inline label', 'ORTSNAME': 'inline label', 'GEMEINDENAME': 'inline label', 'BUNDESLAND': 'inline label', 'EIGENSCHAFT': 'inline label', 'ANBIETER': 'inline label', 'TECHNIK': 'inline label', 'DOWNLOAD': 'inline label', 'cluster_labels': 'inline label', 'sub_cluster': 'inline label', });
lyr_FTTH_7.set('fieldLabels', {'infrastrukturanbieterin': 'inline label', 'technik': 'inline label', 'download': 'inline label', 'upload': 'inline label', });
lyr_DOCSIS_8.set('fieldLabels', {'infrastrukturanbieterin': 'inline label', 'technik': 'inline label', 'download': 'inline label', 'upload': 'inline label', });
lyr_xDSL_9.set('fieldLabels', {'infrastrukturanbieterin': 'inline label', 'technik': 'inline label', 'download': 'inline label', 'upload': 'inline label', });
lyr_ClusterPolygons_10.set('fieldLabels', {'Bundesland': 'inline label', 'Gemeinde': 'inline label', 'Cluster_ID': 'inline label', 'Buildings': 'inline label', 'Network_avg (m)': 'inline label', 'HH_Cluster': 'inline label', 'SOHO_Cluster_1': 'inline label', 'Large_ENT_Cluster': 'inline label', 'Network (m)': 'inline label', 'Anschluss_avg (m)': 'inline label', 'Speed1': 'inline label', 'Speed2': 'inline label', 'Speed3': 'inline label', 'Speed4': 'inline label', 'Speed5': 'inline label', });
lyr_VorarlbergBorder_11.set('fieldLabels', {});
lyr_VorarlbergBorder_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});