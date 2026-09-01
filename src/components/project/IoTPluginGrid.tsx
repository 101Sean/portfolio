import React from 'react';
import { Project, IoTPlugin } from '../../types/project';

interface IoTPluginGridProps {
    project: Project | null;
    onPluginClick: (plugin: IoTPlugin) => void;
}

const IoTPluginGrid: React.FC<IoTPluginGridProps> = ({ project, onPluginClick }) => {
    if (!project || !project.plugins) return null;

    return (
        <div className="iot-plugin-grid">
            <h3 className="plugin-grid-title">
                <i className="fas fa-puzzle-piece"></i> {project.plugins.length}개 플러그인
            </h3>
            <div className="plugin-grid">
                {project.plugins.map((plugin, idx) => (
                    <div key={idx} className="plugin-card glass" onClick={() => onPluginClick(plugin)}>
                        <div className="plugin-card-icon">
                            <i className={plugin.icon || 'fas fa-plug'}></i>
                        </div>
                        <h4 className="plugin-card-name">{plugin.name}</h4>
                        <p className="plugin-card-desc">{plugin.description}</p>
                        {plugin.npmLink && (
                            <a href={plugin.npmLink} target="_blank" rel="noopener" className="plugin-card-link">
                                <i className="fab fa-npm"></i>
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IoTPluginGrid;