import { mount } from '@vue/test-utils'
import User from '@/components/User'

const wrapper = mount(User, {
    propsData: {
      source: {
        name:"Ms. Alfonzo Stoltenberg",
        email:"keven@grady.net",
        title:"Direct Implementation Producer",
        city:"Norvalville",
        address:"9138 Stiedemann Ports",
        avatar:"https://robohash.org/possimusdoloresid.png?size=300x300\u0026set=set1"
      },
      query: "ville"
    }
})

test('Renderingthe user name property', () => {
  expect(wrapper.text()).toContain('Ms. Alfonzo Stoltenberg')
})

test('The method highlights', () => {
  expect(wrapper.vm.highlights('Norvalville')).toContain("Norval<span class=\'highlight\'>ville</span>")
})