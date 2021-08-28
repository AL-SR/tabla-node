
const  argv  =  require ( 'yargs' )
.options('b',{
    alias: 'base',
    type:'number',
    demandOption: true,
    description: 'this base of table - type of: number'
})
.option('l',{
    alias: 'listar',
    type:'boolean',
    default: false,
    description: 'show the multiplication table'
})
.option('h',{
    alias: 'hasta',
    type:'number',
    default: 10,
    demandOption: true,
    description: 'shows up to the number we indicate'
})
.check((argv, options)=>{

    if(isNaN(argv.b || argv.h)){
        throw 'the base must be a number'
    }
    return true;
})
.argv;


module.exports = argv;