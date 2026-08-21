import React from 'react';
import { MapPin, Sun, Info, Navigation, Map, Volume2 } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import './CityGuideViewer.css';

const CityGuideViewer = ({ scenario, learningMode, selectedAccent = 'north' }) => {
  const { cityGuides } = scenario;

  if (!cityGuides) {
    return (
      <div className="city-guide-empty">
        <Info size={32} className="empty-icon" />
        <p>{learningMode === 'zh' ? '此情境尚未建置城市指南。' : 'City guide not available for this scenario yet.'}</p>
      </div>
    );
  }

  const handleSpeak = (text) => {
    audioEngine.speak(text, { accent: selectedAccent });
  };

  return (
    <div className="city-guide-container">
      <div className="city-guide-header">
        <div className="guide-title-row">
          <Map className="guide-icon" size={28} />
          <h2>{learningMode === 'zh' ? '北中南越城市指南' : 'Vietnam City Guides'}</h2>
        </div>
        <p className="guide-desc">
          {learningMode === 'zh' ? cityGuides.descriptionZh : cityGuides.descriptionEn}
        </p>
      </div>

      <div className="regions-list">
        {cityGuides.regions.map((region, rIdx) => (
          <div key={rIdx} className="region-card">
            <div className="region-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="region-name">
                {learningMode === 'zh' ? region.nameZh : region.nameEn} 
                <span className="region-name-vi" style={{ cursor: 'pointer', marginLeft: '0.4rem', color: 'var(--brand-primary)' }} onClick={() => handleSpeak(region.nameVi)}>
                  ({region.nameVi}) 🔊
                </span>
              </h3>
            </div>
            
            <div className="region-info">
              <div className="info-block">
                <strong>{learningMode === 'zh' ? '⛅ 氣候：' : '⛅ Climate: '}</strong>
                {learningMode === 'zh' ? region.climateZh : region.climateEn}
              </div>
              <div className="info-block">
                <strong>{learningMode === 'zh' ? '🎭 風土民情：' : '🎭 Culture: '}</strong>
                {learningMode === 'zh' ? region.cultureZh : region.cultureEn}
              </div>
            </div>

            <div className="cities-grid">
              {region.cities.map((city, cIdx) => (
                <div key={cIdx} className="city-box">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <h4 className="city-name" style={{ margin: 0 }}>
                      <MapPin size={16} className="pin-icon"/>
                      {learningMode === 'zh' ? city.nameZh : city.nameEn}
                    </h4>
                    {city.nameVi && (
                      <button
                        className="speaker-btn mini-btn"
                        onClick={() => handleSpeak(city.nameVi)}
                        title="播放城市發音"
                        style={{ padding: '0.25rem' }}
                      >
                        <Volume2 size={14} />
                      </button>
                    )}
                  </div>
                  <p className="city-desc">
                    {learningMode === 'zh' ? city.descZh : city.descEn}
                  </p>
                  <div className="attractions-box">
                    <strong>{learningMode === 'zh' ? '必訪景點' : 'Top Attractions'}:</strong>
                    <ul>
                      {city.attractions.map((attr, aIdx) => (
                        <li key={aIdx}>{attr}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityGuideViewer;
