<script setup>
import cerrando from '../assets/img/cerrar.svg'
const emit = defineEmits(['cerrar-modal'])



</script>

<template>
  <div class="modal">
    <div class="cerrar-modal">
      <img :src="cerrando" alt="icono cerrar"
      @click="$emit('cerrar-modal')"
      />
    </div>

    <div class="contenedor"
    >
      <form class="nuevo-gasto">
        <legend> Añadir gasto </legend>
        <div class="campo">
          <label for="nombre"> Nombre Gasto: </label>
          <input 
          type="text"
          id="nombre"
          placeholder="Añade nombre de gasto"
          >
        </div>
        <div class="campo">
          <label for="cantidad"> Cantidad: </label>
          <input 
          type="number"
          id="cantidad"
          placeholder="Añade cantidad del gasto, ej. 300"
          >
        </div>

        <div class="campo">
          <label for="categoria"> Categoria </label>
          <select 
          id="categoria"
          >
          <option value=""> -- Seleccione </option>
          <option value=""> -- Ahorro </option>
          <option value=""> -- Comida </option>
          <option value=""> -- Gastos Varios </option>
          <option value=""> -- Suscripciones </option>
          <option value=""> -- Salud </option>
          </select>
          >
        </div>
        <input 
        type="submit" 
        value="Añadir Gasto" 
        >


      </form>


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
</style>