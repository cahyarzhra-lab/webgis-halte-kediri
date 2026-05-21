var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Batas_Administrasi_1 = new ol.format.GeoJSON();
var features_Batas_Administrasi_1 = format_Batas_Administrasi_1.readFeatures(json_Batas_Administrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_1.addFeatures(features_Batas_Administrasi_1);
var lyr_Batas_Administrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Administrasi_1, 
                style: style_Batas_Administrasi_1,
                popuplayertitle: 'Batas_Administrasi',
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_1.png" /> Batas_Administrasi'
            });
var format_AreaPerumahan_2 = new ol.format.GeoJSON();
var features_AreaPerumahan_2 = format_AreaPerumahan_2.readFeatures(json_AreaPerumahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPerumahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPerumahan_2.addFeatures(features_AreaPerumahan_2);
var lyr_AreaPerumahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPerumahan_2, 
                style: style_AreaPerumahan_2,
                popuplayertitle: 'Area Perumahan',
                interactive: true,
                title: '<img src="styles/legend/AreaPerumahan_2.png" /> Area Perumahan'
            });
var format_AreaKomersial_3 = new ol.format.GeoJSON();
var features_AreaKomersial_3 = format_AreaKomersial_3.readFeatures(json_AreaKomersial_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaKomersial_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaKomersial_3.addFeatures(features_AreaKomersial_3);
var lyr_AreaKomersial_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaKomersial_3, 
                style: style_AreaKomersial_3,
                popuplayertitle: 'Area Komersial',
                interactive: true,
                title: '<img src="styles/legend/AreaKomersial_3.png" /> Area Komersial'
            });
var format_AreaPublik_4 = new ol.format.GeoJSON();
var features_AreaPublik_4 = format_AreaPublik_4.readFeatures(json_AreaPublik_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPublik_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPublik_4.addFeatures(features_AreaPublik_4);
var lyr_AreaPublik_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPublik_4, 
                style: style_AreaPublik_4,
                popuplayertitle: 'Area Publik',
                interactive: true,
                title: '<img src="styles/legend/AreaPublik_4.png" /> Area Publik'
            });
var format_AreaPerumahanTerjangkau800MClipAreaPerumahan_5 = new ol.format.GeoJSON();
var features_AreaPerumahanTerjangkau800MClipAreaPerumahan_5 = format_AreaPerumahanTerjangkau800MClipAreaPerumahan_5.readFeatures(json_AreaPerumahanTerjangkau800MClipAreaPerumahan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPerumahanTerjangkau800MClipAreaPerumahan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPerumahanTerjangkau800MClipAreaPerumahan_5.addFeatures(features_AreaPerumahanTerjangkau800MClipAreaPerumahan_5);
var lyr_AreaPerumahanTerjangkau800MClipAreaPerumahan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPerumahanTerjangkau800MClipAreaPerumahan_5, 
                style: style_AreaPerumahanTerjangkau800MClipAreaPerumahan_5,
                popuplayertitle: 'Area Perumahan Terjangkau (800M) — Clip Area Perumahan',
                interactive: true,
                title: '<img src="styles/legend/AreaPerumahanTerjangkau800MClipAreaPerumahan_5.png" /> Area Perumahan Terjangkau (800M) — Clip Area Perumahan'
            });
var format_AreaKomersialTerjangkau400MClipAreaKomersil_6 = new ol.format.GeoJSON();
var features_AreaKomersialTerjangkau400MClipAreaKomersil_6 = format_AreaKomersialTerjangkau400MClipAreaKomersil_6.readFeatures(json_AreaKomersialTerjangkau400MClipAreaKomersil_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaKomersialTerjangkau400MClipAreaKomersil_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaKomersialTerjangkau400MClipAreaKomersil_6.addFeatures(features_AreaKomersialTerjangkau400MClipAreaKomersil_6);
var lyr_AreaKomersialTerjangkau400MClipAreaKomersil_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaKomersialTerjangkau400MClipAreaKomersil_6, 
                style: style_AreaKomersialTerjangkau400MClipAreaKomersil_6,
                popuplayertitle: 'Area Komersial Terjangkau (400M) — Clip Area Komersil',
                interactive: true,
                title: '<img src="styles/legend/AreaKomersialTerjangkau400MClipAreaKomersil_6.png" /> Area Komersial Terjangkau (400M) — Clip Area Komersil'
            });
var format_Jalann_Fix_Bisa_7 = new ol.format.GeoJSON();
var features_Jalann_Fix_Bisa_7 = format_Jalann_Fix_Bisa_7.readFeatures(json_Jalann_Fix_Bisa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalann_Fix_Bisa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalann_Fix_Bisa_7.addFeatures(features_Jalann_Fix_Bisa_7);
var lyr_Jalann_Fix_Bisa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalann_Fix_Bisa_7, 
                style: style_Jalann_Fix_Bisa_7,
                popuplayertitle: 'Jalann_Fix_Bisa',
                interactive: true,
                title: '<img src="styles/legend/Jalann_Fix_Bisa_7.png" /> Jalann_Fix_Bisa'
            });
var format_AreaPublikTerjangkau400MClipAreaPublik_8 = new ol.format.GeoJSON();
var features_AreaPublikTerjangkau400MClipAreaPublik_8 = format_AreaPublikTerjangkau400MClipAreaPublik_8.readFeatures(json_AreaPublikTerjangkau400MClipAreaPublik_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPublikTerjangkau400MClipAreaPublik_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPublikTerjangkau400MClipAreaPublik_8.addFeatures(features_AreaPublikTerjangkau400MClipAreaPublik_8);
var lyr_AreaPublikTerjangkau400MClipAreaPublik_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPublikTerjangkau400MClipAreaPublik_8, 
                style: style_AreaPublikTerjangkau400MClipAreaPublik_8,
                popuplayertitle: 'Area Publik Terjangkau (400M) — Clip Area Publik',
                interactive: true,
                title: '<img src="styles/legend/AreaPublikTerjangkau400MClipAreaPublik_8.png" /> Area Publik Terjangkau (400M) — Clip Area Publik'
            });
var format_HalteKotaKediriHalte_Fixbisa_9 = new ol.format.GeoJSON();
var features_HalteKotaKediriHalte_Fixbisa_9 = format_HalteKotaKediriHalte_Fixbisa_9.readFeatures(json_HalteKotaKediriHalte_Fixbisa_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HalteKotaKediriHalte_Fixbisa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HalteKotaKediriHalte_Fixbisa_9.addFeatures(features_HalteKotaKediriHalte_Fixbisa_9);
var lyr_HalteKotaKediriHalte_Fixbisa_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HalteKotaKediriHalte_Fixbisa_9, 
                style: style_HalteKotaKediriHalte_Fixbisa_9,
                popuplayertitle: 'Halte Kota Kediri — Halte_Fix bisa',
                interactive: true,
                title: '<img src="styles/legend/HalteKotaKediriHalte_Fixbisa_9.png" /> Halte Kota Kediri — Halte_Fix bisa'
            });

lyr_Positron_0.setVisible(true);lyr_Batas_Administrasi_1.setVisible(true);lyr_AreaPerumahan_2.setVisible(true);lyr_AreaKomersial_3.setVisible(true);lyr_AreaPublik_4.setVisible(true);lyr_AreaPerumahanTerjangkau800MClipAreaPerumahan_5.setVisible(true);lyr_AreaKomersialTerjangkau400MClipAreaKomersil_6.setVisible(true);lyr_Jalann_Fix_Bisa_7.setVisible(true);lyr_AreaPublikTerjangkau400MClipAreaPublik_8.setVisible(true);lyr_HalteKotaKediriHalte_Fixbisa_9.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Batas_Administrasi_1,lyr_AreaPerumahan_2,lyr_AreaKomersial_3,lyr_AreaPublik_4,lyr_AreaPerumahanTerjangkau800MClipAreaPerumahan_5,lyr_AreaKomersialTerjangkau400MClipAreaKomersil_6,lyr_Jalann_Fix_Bisa_7,lyr_AreaPublikTerjangkau400MClipAreaPublik_8,lyr_HalteKotaKediriHalte_Fixbisa_9];
lyr_Batas_Administrasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nama Kelur': 'Nama Kelur', 'Nama Kecam': 'Nama Kecam', 'Nama Kab/K': 'Nama Kab/K', 'Nama Provi': 'Nama Provi', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luas (M2)': 'Luas (M2)', 'Luas Kedir': 'Luas Kedir', });
lyr_AreaPerumahan_2.set('fieldAliases', {'NAMZON': 'NAMZON', });
lyr_AreaKomersial_3.set('fieldAliases', {'NAMZON': 'NAMZON', });
lyr_AreaPublik_4.set('fieldAliases', {'NAMZON': 'NAMZON', });
lyr_AreaPerumahanTerjangkau800MClipAreaPerumahan_5.set('fieldAliases', {'NAMZON': 'NAMZON', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Jangkauan': 'Jangkauan', 'LuasM2': 'LuasM2', 'LuasAllM2': 'LuasAllM2', 'Persentase': 'Persentase', });
lyr_AreaKomersialTerjangkau400MClipAreaKomersil_6.set('fieldAliases', {'Zona': 'Zona', 'OBJECTID': 'OBJECTID', 'Nama Halte': 'Nama Halte', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Jangkauan ': 'Jangkauan ', 'Luas (M2)': 'Luas (M2)', 'Luas Total': 'Luas Total', 'Persentase': 'Persentase', });
lyr_Jalann_Fix_Bisa_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Klasifikas': 'Klasifikas', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'Nama Jalan': 'Nama Jalan', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_AreaPublikTerjangkau400MClipAreaPublik_8.set('fieldAliases', {'Zona': 'Zona', 'OBJECTID': 'OBJECTID', 'Nama Halte': 'Nama Halte', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Jangkauan ': 'Jangkauan ', 'Luas (M2)': 'Luas (M2)', 'Luas Total': 'Luas Total', 'Persentase': 'Persentase', });
lyr_HalteKotaKediriHalte_Fixbisa_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nama Halte': 'Nama Halte', 'Jenis': 'Jenis', });
lyr_Batas_Administrasi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nama Kelur': 'TextEdit', 'Nama Kecam': 'TextEdit', 'Nama Kab/K': 'TextEdit', 'Nama Provi': 'TextEdit', 'SUMBER': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luas (M2)': 'TextEdit', 'Luas Kedir': 'TextEdit', });
lyr_AreaPerumahan_2.set('fieldImages', {'NAMZON': 'TextEdit', });
lyr_AreaKomersial_3.set('fieldImages', {'NAMZON': 'TextEdit', });
lyr_AreaPublik_4.set('fieldImages', {'NAMZON': 'TextEdit', });
lyr_AreaPerumahanTerjangkau800MClipAreaPerumahan_5.set('fieldImages', {'NAMZON': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Jangkauan': 'TextEdit', 'LuasM2': 'TextEdit', 'LuasAllM2': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_AreaKomersialTerjangkau400MClipAreaKomersil_6.set('fieldImages', {'Zona': 'TextEdit', 'OBJECTID': 'TextEdit', 'Nama Halte': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Jangkauan ': 'TextEdit', 'Luas (M2)': 'TextEdit', 'Luas Total': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_Jalann_Fix_Bisa_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Klasifikas': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'Nama Jalan': 'TextEdit', 'SBDATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_AreaPublikTerjangkau400MClipAreaPublik_8.set('fieldImages', {'Zona': 'TextEdit', 'OBJECTID': 'TextEdit', 'Nama Halte': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Jangkauan ': 'TextEdit', 'Luas (M2)': 'TextEdit', 'Luas Total': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_HalteKotaKediriHalte_Fixbisa_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nama Halte': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Batas_Administrasi_1.set('fieldLabels', {'OBJECTID': 'no label', 'Nama Kelur': 'no label', 'Nama Kecam': 'no label', 'Nama Kab/K': 'no label', 'Nama Provi': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luas (M2)': 'no label', 'Luas Kedir': 'no label', });
lyr_AreaPerumahan_2.set('fieldLabels', {'NAMZON': 'no label', });
lyr_AreaKomersial_3.set('fieldLabels', {'NAMZON': 'no label', });
lyr_AreaPublik_4.set('fieldLabels', {'NAMZON': 'no label', });
lyr_AreaPerumahanTerjangkau800MClipAreaPerumahan_5.set('fieldLabels', {'NAMZON': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Jangkauan': 'no label', 'LuasM2': 'no label', 'LuasAllM2': 'no label', 'Persentase': 'no label', });
lyr_AreaKomersialTerjangkau400MClipAreaKomersil_6.set('fieldLabels', {'Zona': 'no label', 'OBJECTID': 'no label', 'Nama Halte': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Jangkauan ': 'no label', 'Luas (M2)': 'no label', 'Luas Total': 'no label', 'Persentase': 'no label', });
lyr_Jalann_Fix_Bisa_7.set('fieldLabels', {'OBJECTID': 'no label', 'Klasifikas': 'no label', 'ORDE01': 'no label', 'ORDE02': 'no label', 'ORDE03': 'no label', 'ORDE04': 'no label', 'JNSRSR': 'no label', 'STSJRN': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'Nama Jalan': 'no label', 'SBDATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_AreaPublikTerjangkau400MClipAreaPublik_8.set('fieldLabels', {'Zona': 'no label', 'OBJECTID': 'no label', 'Nama Halte': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Jangkauan ': 'no label', 'Luas (M2)': 'no label', 'Luas Total': 'no label', 'Persentase': 'no label', });
lyr_HalteKotaKediriHalte_Fixbisa_9.set('fieldLabels', {'OBJECTID': 'no label', 'Nama Halte': 'header label - visible with data', 'Jenis': 'no label', });
lyr_HalteKotaKediriHalte_Fixbisa_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});