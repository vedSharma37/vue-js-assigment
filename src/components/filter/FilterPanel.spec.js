import { mount } from '@vue/test-utils'
import FilterPanel from './FilterPanel.vue'

describe('FilterPanel', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(FilterPanel)
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<div class="filter-section"></div>')
  })
})
