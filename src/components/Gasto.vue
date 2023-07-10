<script setup>
import {formatearCantidad, formatoFecha} from '../helpers/index'
import IconoAhorro from '../assets/img/icono_ahorro.svg'
import IconoCasa from '../assets/img/icono_casa.svg'
import IconoComida from '../assets/img/icono_comida.svg'
import IconoGastos from '../assets/img/icono_gastos.svg'
import IconoOcio from '../assets/img/icono_ocio.svg'
import IconoSalud from '../assets/img/icono_salud.svg'
import IconoSuscripciones from '../assets/img/icono_suscripciones.svg'

const diccionarioIconos = {
        ahorro : IconoAhorro,
        comida : IconoComida,
        casa : IconoCasa,
        gastos : IconoGastos,
        ocio : IconoOcio,
        salud : IconoSalud,
        suscripciones : IconoSuscripciones
    }



const props = defineProps({
  gasto: {
    type: Object,
    required: true
  }
})
</script>


<template>
  <div class="gasto sombra">
    <div class=contenido>
      <img 
      :src="diccionarioIconos[gasto.categoria]" 
      alt="icono-gasto"
      class="icono">
      <div class="detalles">
        <p class="categoria"> {{ gasto.categoria }} </p>
        <p class="nombre">{{ gasto.nombre }} </p>

        <p class="fecha">
          Fecha:
          <span> {{formatoFecha (gasto.fecha)}}</span>
         </p>


      </div>


    </div>
    <p class="cantidad">{{formatearCantidad( gasto.cantidad) }} </p>

  </div>
</template>



<style scoped>


.gasto {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 2rem;

}

.contenido {
display: flex;
align-items: center;
gap: 2rem;
}

.icono {
width: 5rem;
}

.detalles p {
  margin: 0 0 1rem 0;
}

.categoria {
  color: var(--gris);
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 820;
}

.nombre {
color: var(--gris-claro);
font-size: 2.6rem;
font-weight: 730;
cursor: pointer;
}
.fecha {
  font-size: 1.5rem;
  font-weight: 840;
}
.fecha span {
font-weight: 400;
}
.cantidad {
  font-size: 2.5rem;
  font-weight: 870;
  margin: 0;
}


</style>