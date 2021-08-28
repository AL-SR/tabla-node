

const fs = require('fs');
const colors = require('colors');



const crearArchivo = async( number = 5, l , h ) => {
    try {

        let salida = ''
        let consola = ''
        
        console.clear();
        
        if(l === true){
            console.log('-------------'.cyan);
            console.log('Tabla del:'.blue, colors.green(number));
            console.log('-------------'.cyan);    
        }
        
        for(let i = 1; i <= h ; i++){
            let multiplicacion = number * i
            salida += (`${number} X ${i} = ${multiplicacion}\n`);
            consola += (`${number} ${'X'.green} ${i} ${'='.green} ${multiplicacion}\n`);

        }
        
        (l === true)?console.log(consola):l=false;

        fs.writeFileSync(`./salida/tabla-${number}.txt`, salida);
        return `tabla-${number}.txt`.brightYellow;
        
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}