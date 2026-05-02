import fs from 'fs';
import path from 'path';

const inputPath = path.resolve('docs/REPORTE_ESTRATEGICO_SEO.json');
const outputPath = path.resolve('docs/OPORTUNIDADES_SEO_ESTRATEGICAS.json');

async function filterOpportunities() {
    console.log('🔍 Iniciando filtrado inteligente de oportunidades SEO...');

    try {
        // 1. Leer el JSON base
        if (!fs.existsSync(inputPath)) {
            throw new Error('El archivo base JSON no existe. Ejecuta primero el script de conversión.');
        }
        
        const rawData = fs.readFileSync(inputPath, 'utf8');
        const keywords = JSON.parse(rawData);

        // 2. Aplicar filtros estratégicos e intención de búsqueda
        const seenIntents = new Set();
        const opportunities = keywords
            .filter(k => {
                const hasVolume = k.volume > 0;
                const isHighRelevance = k.relevance === 'Alta' || k.relevance === 'Máxima';
                const isPending = k.status === 'Pendiente';
                return hasVolume && isHighRelevance && isPending;
            })
            .sort((a, b) => b.volume - a.volume) // Ordenar por volumen primero para quedarnos con el mejor
            .filter(k => {
                // Normalizar intención: ordenar palabras alfabéticamente
                const words = k.keyword.toLowerCase().trim().split(/\s+/).sort();
                const intentKey = words.join(' ');
                
                if (seenIntents.has(intentKey)) {
                    return false; // Ya tenemos esta intención con igual o mayor volumen
                }
                
                seenIntents.add(intentKey);
                return true;
            });

        // 4. Guardar el nuevo JSON
        fs.writeFileSync(outputPath, JSON.stringify(opportunities, null, 2), 'utf8');

        console.log(`✅ ¡Filtro completado! Se han identificado ${opportunities.length} oportunidades estratégicas.`);
        console.log(`📂 Archivo generado en: ${outputPath}`);

    } catch (error) {
        console.error('❌ Error durante el filtrado:', error.message);
    }
}

filterOpportunities();
