<script setup>
import { ref, computed } from 'vue'
import Alerta from './Alerta.vue'
import cerrando from '../assets/img/cerrar.svg'

const error = ref('')


const emit = defineEmits(['cerrar-modal', 'save-gasto', 'delete-gasto', 'update:nombre',
       'update:cantidad', 'update:categoria', ])

const props = defineProps({
  modal: {
    type: Object,
    required: true
  },
  nombre: {
    type: String,
    required: true

  },
  cantidad: {
    type: [String, Number],
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  disponible: {
    type: Number,
    required: true
  },
  id: {
      type: [String, null],
      required: true
      }

})

const old = props.cantidad


const addGasto = () => {
        // Validar que no haya campos vacios
  const { nombre, cantidad, categoria, disponible, id } = props
  if([nombre, cantidad, categoria].includes('')) {
      error.value = 'Todos los campos son obligatorios'
        setTimeout(() => {
        error.value = ''
        }, 3000);
        return
  }

        // Validar la cantidad
  if(cantidad <= 0) {
     error.value = 'Cantidad no válida'
     setTimeout(() => {
     error.value = ''
     }, 3000);
    return
    }

        // Validar que el usuario no gaste más de lo disponible
    if(id) {
            // Tomar en cuenta el gasto ya realizado
    if( cantidad > old + disponible) {
        error.value = 'Has excedido el Presupuesto'
        setTimeout(() => {
        error.value = ''
        }, 3000);
        return 
      }
      } else {
        if(cantidad > disponible) {
          error.value = 'Has excedido el Presupuesto'
          setTimeout(() => {
          error.value = ''
          }, 3000);
          return
        }
  }
  emit('save-gasto')
}

const editing = computed(() => {
  return props.id
})




</script>

<template>
  <div class="modal">
    <div class="cerrar-modal">
      <img :src="cerrando" alt="icono cerrar"
      @click="$emit('cerrar-modal', 'update:nombre',
       'update:cantidad', 'update:categoria')"
      />
    </div>

    <div class="contenedor contenedor-formulario"
    :class="[modal.animar ? 'animar' : 'cerrar']"
    >
    <form
       class="nuevo-gasto"
       @submit.prevent="addGasto"
      >
        <legend> {{editing ? 'Guardar Cambios' : 'Añadir Gasto'}}</legend>
        <Alerta v-show="
        error">  {{error}}
        </Alerta>

        

        

        <div class="campo">
          <label for="nombre"> Nombre Gasto: </label>
          <input 
          type="text"
          id="nombre"
          placeholder="Añade nombre de gasto"
          :value="nombre"
          @input="$emit('update:nombre', $event.target.value )"
          >
        </div>
        <div class="campo">
          <label for="cantidad"> Cantidad: </label>
          <input 
          type="number"
          id="cantidad"
          placeholder="Añade cantidad del gasto, ej. 300"
          :value="cantidad"
          min="0"
          @input="$emit('update:cantidad', +$event.target.value )"
          >
        </div>

        <div class="campo">
          <label for="categoria"> Categoria </label>
          <select 
          id="categoria"
          :value="categoria"
          @input="$emit('update:categoria', $event.target.value )"
          >
          <option value="">-- Seleccione --</option>
          <option value="ahorro">Ahorro</option>
          <option value="comida">Comida</option>
          <option value="casa">Casa</option>
          <option value="gastos">Gastos Varios</option>
          <option value="ocio">Ocio</option>
          <option value="salud">Salud</option>
          <option value="suscripciones">Suscripciones</option>
          </select>
          
        </div>
        <input 
        type="submit" 
        :value="[editing ? 'Guardar cambios' : 'Añadir Gastos']" 
        >


      </form>

      <button 
      type="button"
      class="btn-eliminar-gasto"
      v-if="editing"
      @click="$emit('delete-gasto')"
      >

      Eliminar Gasto

      </button>


    </div>
  </div>
</template>







<style scoped>
.modal {
  position: absolute;
  background-color: rgb(0, 0, 0, 0.9);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

}

.cerrar-modal {
  position: absolute;
  right: 3rem;
  top: 3rem;
}


.cerrar-modal img {
  width: 3rem;
  cursor: pointer;
}

.contenedor-formulario {
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease-in;
  opacity: 0;
}

.contenedor-formulario.animar {
 
  opacity: 1;
}

.contenedor-formulario.cerrar {
 
 opacity: 0;
}

.nuevo-gasto {
margin: 10rem auto 0 auto;
display: grid;
gap: 1rem;
}
.campo {
  display: grid;
  gap: 2rem;
}
.nuevo-gasto legend {
  text-align: center;
  color: var(--blanco);
  font-size: 3rem;
  font-weight: 450;

}

.nuevo-gasto input,
.nuevo-gasto select {
  background-color: whitesmoke;
  border-radius: 1rem;
  padding: 1rem;
  border: none;
  font-size: 1.6rem;
}

.nuevo-gasto label{
color: var(--blanco);
font-size: 2.8rem;
}
.nuevo-gasto input[type="submit"] {
  background-color: var(--azul);
  color: var(--blanco);
  font-weight: 500;
  cursor: pointer;
}

.btn-eliminar-gasto {
  border: none;
  padding: 2rem;
  width: 100%;
  background-color: #ef4444;
  font-weight: 800;
  font-size: 1.4rem;
  color: var(--blanco);
  margin-top: 5rem;
  cursor: pointer;

}
</style>