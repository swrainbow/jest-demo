import { mount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'
import Table from '@/components/table.vue'


describe('table.vue', () => {
  it('renders ', () => {
    const wrapper = mount(Table)
    expect(wrapper.contains('button')).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.contains('button')).toBe(true)
  })
})

describe('color', () => {
  it('colors ', () => {
    const wrapper = mount(Table)
    const first = wrapper.find('.first')
    expect(first.exists()).toBe(true)
    console.log(first)
    expect(first.element.style.color).toBe('red')
  })
})

