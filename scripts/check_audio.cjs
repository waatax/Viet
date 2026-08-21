const fs = require('fs');
const path = require('path');
const dataFile = path.join(process.cwd(), 'src', 'data', 'vietnameseData.js');
const scenarioFile = path.join(process.cwd(), 'src', 'data', 'situationalScenarios.js');
const audioDir = path.join(process.cwd(), 'public', 'audio');
let missingAudios = [];
let totalChecked = 0;
function extractAudioPaths(content) {
    const regex = /audioPath:\s*['"](.*?)['"]/g;
    let match;
    const paths = [];
    while ((match = regex.exec(content)) !== null) {
        paths.push(match[1]);
    }
    return paths;
}
try {
    const dataContent = fs.readFileSync(dataFile, 'utf8');
    const scenarioContent = fs.readFileSync(scenarioFile, 'utf8');
    const paths = [...extractAudioPaths(dataContent), ...extractAudioPaths(scenarioContent)];
    paths.forEach(p => {
        totalChecked++;
        const relativePath = p.replace(/^\/?audio\//, '');
        const fullPath = path.join(audioDir, relativePath);
        if (!fs.existsSync(fullPath)) {
            missingAudios.push(p);
        }
    });
    console.log('Total audio paths checked:', totalChecked);
    console.log('Missing audios:', missingAudios.length);
    if (missingAudios.length > 0) {
        console.log('First 10 missing:', missingAudios.slice(0, 10));
    }
} catch (e) {
    console.error(e);
}
