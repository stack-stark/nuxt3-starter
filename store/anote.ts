import { defineStore} from 'pinia'

export const useAnoteStore = defineStore('anote',{
  state:() => {
      return {
        visible: false,
      }
  },
  actions:{
    setVisible(show: boolean) {
      this.visible = show
    },
  }
})