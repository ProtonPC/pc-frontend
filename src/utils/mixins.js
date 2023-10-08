import { logout } from '@/services/auth';

export const baseMixin = {
  data: function () {
    return {
      title: "Price Calculator"
    }
  },
  computed: {
    id(){
      return this.$route.params.id
    },
    isUpdate() {
      return this.id !== 'new'
    },
    isModal() {
      return this.$route.query.popup;
    },
  },
  methods: {
    logout: logout,
    reload(){
      window.location.reload()
    },
    goBack(){
      history.back()
    }
  }
}
