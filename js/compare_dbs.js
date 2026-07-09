const fs = require('fs');
const path = require('path');
const vm = require('vm');

function loadDb(file, variableName) {
    const ctx = {};
    vm.createContext(ctx);
    const source = fs.readFileSync(path.join(__dirname, file), 'utf8');
    vm.runInContext(`${source}\nthis.__data = ${variableName};`, ctx);
    return ctx.__data;
}

const natureDB = loadDb('db_materiaux.js', 'natureDB');
const natureDetailDB = loadDb('db_materiaux_detail.js', 'natureDetailDB');

const basicNames = natureDB.map(i => i.name);
const detailNames = natureDetailDB.map(i => i.name);

console.log('Basic DB count:', basicNames.length);
console.log('Detail DB count:', detailNames.length);

const missingInDetail = basicNames.filter(name => !detailNames.includes(name));
const missingInBasic = detailNames.filter(name => !basicNames.includes(name));

console.log('\n--- Missing in Detail DB (Link broken) ---');
missingInDetail.forEach(name => {
    console.log(`"${name}"`);
    const closeMatch = detailNames.find(d => d.replace(/['’]/g, '') === name.replace(/['’]/g, ''));
    if (closeMatch) {
        console.log(`   -> Found potential match with different characters: "${closeMatch}"`);
    } else {
        console.log('   -> No close match found');
    }
});

console.log('\n--- In Detail DB but not Basic DB (Orphaned?) ---');
missingInBasic.forEach(name => console.log(`"${name}"`));
