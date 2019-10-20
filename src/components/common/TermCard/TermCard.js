import React, { useEffect } from 'react';
import Markdown from '../Markdown/Markdown';

import './TermCard.css';
import mapPin from '../../../../assets/images/map-pin.png';

import PropTypes from 'prop-types';

import 'ol/ol.css';
import Map from 'ol/Map';
import {transform} from 'ol/proj';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import {Icon, Style} from 'ol/style';
import {defaults} from 'ol/control';


const Examples = ({ entry, examples }) =>
  examples.map((ex, index) => (
    <li className={'term-card__list-phrase'} key={`${entry}${index}`}>
      {ex}
    </li>
  ));

const ExamplesIfExists = ({ entry, examples }) => {
  if (examples.length === 0)
    return (
      <p>
        Esse termo ainda não possui aplicações em frase cadastradas. Caso saiba
        alguma,{' '}
        <a href="https://github.com/OpenDevUFCG/glossario-ufcg/blob/master/CONTRIBUTING.md">
          faça uma contribuição!
        </a>
      </p>
    );
  return (
    <ul className={'term-card__list-phrase'}>
      <Examples entry={entry} examples={examples} />
    </ul>
  );
};

const LocalizationIfExists = ({ entry, localization }) => {

  if (localization && localization.length === 2) {

    const lonLatLocalization = [localization[1], localization[0]];

    let iconFeature = new Feature({
      geometry: new Point(lonLatLocalization),
      name: entry
    })

    let iconStyle = new Style({
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
      <div className="term-card__content">
        <h2 className={'term-card__title-2'}>Localização</h2>
        <div id="map" className="map__height"></div>
      </div>
    );
  } else
    return (<div/>);
};

const TermCard = ({ term }) => (
  <div className={'term-card__container'}>
    <h1 className={'term-card__title-1'}>{term.entry}</h1>
    <span className={'term-card__subtitle'}>{term.type}</span>

    <div className="term-card__content">
      <h2 className={'term-card__title-2'}>Descrição</h2>
      <Markdown src={term.meaning} />
    </div>

    <div className="term-card__content">
      <h2 className={'term-card__title-2'}>Aplicações em frase</h2>
      <ExamplesIfExists entry={term.entry} examples={term.examples} />
    </div>

    <LocalizationIfExists entry={term.entry} localization={term.localization} />
  </div>
);

TermCard.propTypes = {
  term: PropTypes.shape({
    entry: PropTypes.string,
    meaning: PropTypes.meaning,
    type: PropTypes.string,
    examples: PropTypes.arrayOf(PropTypes.string),
    acronym: PropTypes.string,
    localization: PropTypes.arrayOf(PropTypes.number),
  }),
};

export default TermCard;
