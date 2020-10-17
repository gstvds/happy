import React from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapIcon from '../utils/mapIcon';

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';

const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Limeira</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-22.593536,-47.382528]}
        zoom={15}
        style={{ width: '100%', height: '100%'}}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        <Marker
          icon={mapIcon}
          position={[-22.593536,-47.382528]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
            Lar Doce Lar
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="fff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap;