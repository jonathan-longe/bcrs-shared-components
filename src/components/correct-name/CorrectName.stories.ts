import { CorrectName } from './index'

export default {
  title: 'component/CorrectName',
  component: CorrectName,
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CorrectName },
  template: '<correct-name v-bind="$props" />' // $props comes from args below
})

export const correctName = Template.bind({})
correctName.args = {
  businessId: 'BC1234567',
  entityType: 'BC',
  nameRequest: {},
  companyName: 'Old Company Name',
  fetchAndValidateNr: () => {}
}
