import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import AppVue from '../App.vue'
import students from '../components/students.vue'

describe('HomeView', () => {
  test ('verificar si las etiquetas principales están presentes', () => {
    const wrapper = mount(students)
    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('main').exists()).toBe(true)
  })
  test('verificar si un componente hijo está presente', () => {
    const wrapper = mount(AppVue)
    expect(wrapper.findComponent(students).exists()).toBe(true)
  })
  test('verificar si el atributo "class" es correcto', () => {
    const wrapper = mount(students)
    expect(wrapper.find('.mi-clase').exists()).toBe(true)
  })
  test('verificar si los atributos "id" son correctos', () => {
    const wrapper = mount(students)
    expect(wrapper.find('#container').exists()).toBe(true)
  })
  test('verificar que el componente pueda recibir props', () => {
    const wrapper = mount(students, {
      props: { name: 'Nombre del alumno' },
    });
    expect(wrapper.props().name).toBe('Nombre del alumno');
  });
  
  test('verificar que el nombre del alumno aparezca en la tabla después de hacer clic en el botón de añadir', async () => {
    const wrapper = mount(students);
    await wrapper.find('input[type="text"]').setValue('Nombre del alumno');
    await wrapper.find('#boton-anadir').trigger('click');
    expect(wrapper.find('#tabla').text()).toContain('Nombre del alumno');
  });
  
  test('verificar que el nombre de la materia aparezca en la tabla', async () => {
    const wrapper = mount(students);
    await wrapper.findAll('input[type="text"]')[1].setValue('Materia');
    await wrapper.find('#boton-anadir').trigger('click');
    expect(wrapper.find('#tabla').text()).toContain('Materia');
  });

})