import React, { useState } from 'react';
import { Check, Copy, Package } from 'lucide-react';
import pluginsData from '../data/plugins.json';

interface Plugin {
  id: string;
  name: string;
  description: string;
  version: string;
  author: string;
  updatedAt: string;
}

const PluginCard = ({ plugin }: { plugin: Plugin }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(plugin.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedDate = new Date(plugin.updatedAt).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'short', day: 'numeric'
  });

  return (
    <div className="plugin-card">
      <div className="plugin-header">
        <div className="plugin-icon">
          <Package size={24} />
        </div>
        <div>
          <h3 className="plugin-name">{plugin.name}</h3>
          <span className="plugin-version">v{plugin.version}</span>
        </div>
      </div>
      <p className="plugin-description">{plugin.description}</p>
      <div className="plugin-footer">
        <div className="plugin-meta">
          <span className="plugin-author">por {plugin.author}</span>
          <span className="plugin-date">{formattedDate}</span>
        </div>
        <button
          className={`copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          title="Copiar ID del plugin"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          <span>{copied ? '¡Copiado!' : plugin.id}</span>
        </button>
      </div>
    </div>
  );
};

const PluginGallery = () => {
  const plugins = pluginsData.plugins as Plugin[];

  return (
    <div className="gallery-wrapper">
      <div className="gallery-header">
        <h2>Ecosistema de Plugins</h2>
        <p>{plugins.length} {plugins.length === 1 ? 'plugin' : 'plugins'} disponibles</p>
      </div>
      <div className="gallery-grid">
        {plugins.map((plugin) => (
          <PluginCard key={plugin.id} plugin={plugin} />
        ))}
      </div>
    </div>
  );
};

export default PluginGallery;
