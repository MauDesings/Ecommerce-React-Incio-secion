import {updateImages} from './updateImages.js'

updateImages().then(()=>{
    console.log('Proceso de actualización completado.')
}).catch((error)=>{
    console.error('Error en el proceso de actualización:', error)
})