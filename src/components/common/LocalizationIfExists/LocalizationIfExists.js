import React, { useEffect } from 'react';

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import {Icon, Style} from 'ol/style';
import {defaults} from 'ol/control';

import mapPin from '../../../../assets/images/map-pin.png';

const LocalizationIfExists = ({ entry, localization }) => {

    if (localization && localization.length === 2) {
  
      const lonLatLocalization = [localization[1], localization[0]];
  
      let iconFeature = new Feature({
        geometry: new Point(lonLatLocalization),
        name: entry
      })
  
      const iconStyle = new Style({
        image: new Icon({
          anchor: [0.5, 0.5],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
          scale: 0.25,
          opacity: 0.6,
          src: mapPin
        })
      })
  
      iconFeature.setStyle(iconStyle)
  
      useEffect(() => {
        const map = new Map({
          layers: [
            new TileLayer({
              source: new OSM()
            }),
            new VectorLayer({
              source: new VectorSource({
                projection: 'EPSG:4326',
                features: [iconFeature]
              })
            })
          ],
          controls: defaults({
            attributionOptions: {
              collapsible: false
            }
          }),
          target: 'map',
          view: new View({
            projection: 'EPSG:4326',
            center: lonLatLocalization,
            zoom: 18
          })
        });
      });
  
      return (
        <div className="term-card__content term-card__content-map">
          <h2 className={'term-card__title-2'}>Localização</h2>
          <div id="map" className="map-size"></div>
        </div>
      );
    } else
      return <></>;
};

export default LocalizationIfExists;
