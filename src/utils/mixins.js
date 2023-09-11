export const formMixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  },
  computed: {
    isUpdate() {
      return this.$route.params.id !== 'new'
    },
  }
}
