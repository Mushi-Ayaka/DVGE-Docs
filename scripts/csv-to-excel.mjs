import fs from 'fs';
import path from 'path';
import { utils, writeFile } from 'xlsx';

const csvPath = path.resolve('docs/REPORTE_ESTRATEGICO_SEO.csv');
const excelPath = path.resolve('docs/REPORTE_ESTRATEGICO_SEO.xlsx');
const jsonPath = path.resolve('docs/REPORTE_ESTRATEGICO_SEO.json');

async function convert() {
    console.log('🚀 Iniciando conversión multiformato (CSV -> Excel & JSON)...');

    try {
        // 1. Leer el archivo CSV
        const content = fs.readFileSync(csvPath, 'utf8');
        
        // 2. Parsear y estructurar datos
        const lines = content.split('\n').filter(row => row.trim() !== '');
        const header = lines[0].split(',');
        header.push('WordCount'); 

        const jsonData = [];
        const excelRows = [header.map(h => h === 'WordCount' ? 'Word Count' : h)];

        for (let i = 1; i < lines.length; i++) {
            const row = lines[i].split(',');
            if (row.length < 5) continue; // Seguridad ante líneas vacías o corruptas

            const keyword = row[0];
            const wordCount = keyword.trim().split(/\s+/).length;
            
            // Datos para Excel
            const excelRow = [...row, wordCount];
            excelRows.push(excelRow);

            // Datos para JSON
            jsonData.push({
                keyword: keyword,
                volume: parseInt(row[1]) || 0,
                relevance: row[2],
                status: row[3],
                vertical: row[4],
                wordCount: wordCount
            });
        }

        // 3. Generar Excel
        const wb = utils.book_new();
        const ws = utils.aoa_to_sheet(excelRows);
        ws['!cols'] = [
            { wch: 35 }, // Keyword
            { wch: 10 }, // Volume
            { wch: 15 }, // Relevance
            { wch: 15 }, // Status
            { wch: 20 }, // Vertical
            { wch: 12 }  // Word Count
        ];
        utils.book_append_sheet(wb, ws, 'SEO Strategy');
        writeFile(wb, excelPath);
        console.log(`✅ Excel generado en: ${excelPath}`);

        // 4. Generar JSON
        fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2), 'utf8');
        console.log(`✅ JSON generado en: ${jsonPath}`);

    } catch (error) {
        console.error('❌ Error durante la conversión:', error.message);
    }
}

convert();
