import * as fs from 'fs';

const filePath = './data/data.json'

function getJsonData(): any | null {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Erreur lors de la lecture ou de l\'analyse du fichier JSON:', error);
        return null;
    }
}

export {getJsonData}
