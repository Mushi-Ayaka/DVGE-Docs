import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import ffmpeg from 'ffmpeg-static';

const inputDir = 'public/multimedia';
const outputDir = 'public/multimedia/optimized';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.mp4'));

console.log(`🚀 Iniciando optimización de ${files.length} videos...`);

files.forEach(file => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);
  
  console.log(`📦 Procesando: ${file}`);
  
  try {
    execSync(`"${ffmpeg}" -i "${inputPath}" -vf "scale=-2:720" -c:v libx264 -crf 28 -preset fast -an -movflags +faststart "${outputPath}" -y`);
    
    const oldSize = (fs.statSync(inputPath).size / (1024 * 1024)).toFixed(2);
    const newSize = (fs.statSync(outputPath).size / (1024 * 1024)).toFixed(2);
    console.log(`✅ Finalizado: ${file} (${oldSize}MB -> ${newSize}MB)`);
  } catch (err) {
    console.error(`❌ Error procesando ${file}:`, err.message);
  }
});

console.log('\n✨ Optimización completada. Los archivos están en public/multimedia/optimized/');
console.log('Si estás satisfecho, reemplaza los archivos originales con estos.');
