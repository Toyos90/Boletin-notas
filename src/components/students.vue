<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  name: String,
});
const newStudentNota = ref('');
const newStudentName = ref('');
const newStudentMateria = ref('');
const students = ref([]);

const addStudent = () => {
  students.value.push({
    name: newStudentName.value,
    materia: newStudentMateria.value,
    nota: newStudentNota.value,
  });
  newStudentName.value = '';
  newStudentMateria.value = '';
  newStudentNota.value = '';
};
const getNotaDescription = (nota) => {
  if (nota >= 0 && nota < 3) {
    return 'Muy deficiente';
  } else if (nota >= 3 && nota < 5) {
    return 'Insuficiente';
  } else if (nota >= 5 && nota < 6) {
    return 'Suficiente';
  } else if (nota >= 6 && nota < 7) {
    return 'Bien';
  } else if (nota >= 7 && nota < 9) {
    return 'Notable';
  } else if (nota >= 9 && nota <= 10) {
    return 'Sobresaliente';
  } else {
    return '';
  }
};
</script>

<template>
  <div>
    <header></header>
    <main class="mi-clase" id="container">
      <input type="text" v-model="newStudentNota" placeholder="Nota" />
      <input type="text" v-model="newStudentName" placeholder="Nombre del alumno" />
      <input type="text" v-model="newStudentMateria" placeholder="Materia" />
      <button id="boton-anadir" @click="addStudent">Añadir</button>
      <table id="tabla">
  <tr>
    <th>Nombre del alumno</th>
    <th>Materia</th>
    <th>Nota</th>
  </tr>
  <tr v-for="student in students" :key="student.name">
    <td>{{ student.name }}</td>
    <td>{{ student.materia }}</td>
    <td>{{ student.nota }} - {{ getNotaDescription(student.nota) }}</td>
  </tr>
</table>
    </main>
  </div>
</template>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

input[type="text"] {
  margin: 8px 0;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>

