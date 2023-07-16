var wms_layers = [];

var format_Kec_Kota_Mojokerto_0 = new ol.format.GeoJSON();
var features_Kec_Kota_Mojokerto_0 = format_Kec_Kota_Mojokerto_0.readFeatures(json_Kec_Kota_Mojokerto_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kec_Kota_Mojokerto_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kec_Kota_Mojokerto_0.addFeatures(features_Kec_Kota_Mojokerto_0);
var lyr_Kec_Kota_Mojokerto_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kec_Kota_Mojokerto_0, 
                style: style_Kec_Kota_Mojokerto_0,
                interactive: true,
    title: 'Kec_Kota_Mojokerto<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_0.png" /> Bangsal<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_1.png" /> Dawar Blandong<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_2.png" /> Dlanggu<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_3.png" /> Gedek<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_4.png" /> Gondang<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_5.png" /> Jatirejo<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_6.png" /> Jetis<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_7.png" /> Kemlagi<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_8.png" /> Kutorejo<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_9.png" /> Mojoanyar<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_10.png" /> Mojosari<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_11.png" /> Ngoro<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_12.png" /> Pacet<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_13.png" /> Pungging<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_14.png" /> Puri<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_15.png" /> Sooko<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_16.png" /> Trawas<br />\
    <img src="styles/legend/Kec_Kota_Mojokerto_0_17.png" /> Trowulan<br />'
        });
var format_JALAN_LN_25K_1 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_1 = format_JALAN_LN_25K_1.readFeatures(json_JALAN_LN_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_1.addFeatures(features_JALAN_LN_25K_1);
var lyr_JALAN_LN_25K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_25K_1, 
                style: style_JALAN_LN_25K_1,
                interactive: true,
    title: 'JALAN_LN_25K<br />\
    <img src="styles/legend/JALAN_LN_25K_1_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JALAN_LN_25K_1_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JALAN_LN_25K_1_2.png" /> Jalan Lain<br />\
    <img src="styles/legend/JALAN_LN_25K_1_3.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JALAN_LN_25K_1_4.png" /> Jalan Setapak<br />'
        });
var format_SUNGAI_LN_25K_2 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_2 = format_SUNGAI_LN_25K_2.readFeatures(json_SUNGAI_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_2.addFeatures(features_SUNGAI_LN_25K_2);
var lyr_SUNGAI_LN_25K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_25K_2, 
                style: style_SUNGAI_LN_25K_2,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_2.png" /> SUNGAI_LN_25K'
            });

lyr_Kec_Kota_Mojokerto_0.setVisible(true);lyr_JALAN_LN_25K_1.setVisible(true);lyr_SUNGAI_LN_25K_2.setVisible(true);
var layersList = [lyr_Kec_Kota_Mojokerto_0,lyr_JALAN_LN_25K_1,lyr_SUNGAI_LN_25K_2];
lyr_Kec_Kota_Mojokerto_0.set('fieldAliases', {'fid': 'fid', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_JALAN_LN_25K_1.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_LN_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Kec_Kota_Mojokerto_0.set('fieldImages', {'fid': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_JALAN_LN_25K_1.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SUNGAI_LN_25K_2.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_Kec_Kota_Mojokerto_0.set('fieldLabels', {'fid': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_JALAN_LN_25K_1.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_25K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_25K_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});