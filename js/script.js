/*
 https://flynn.boolean.careers/exercises/api/random/mail 
 
 generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus Far comparire gli indirizzi email solamente quando sono stati tutti generati.
 */

var app = new Vue({
  el: '#app',
  data: {
    boolean_mail_API: 'https://flynn.boolean.careers/exercises/api/random/mail',
    mail_list: [],
    mail: '',
  },
  mounted(){    
    axios.get(this.boolean_mail_API)
    .then(response => {
      this.mail = response;
      console.log(response);
    });
    
  },  
  methods: {
    listExtractos(){
      console.log(this.mail.data.response);
      return this.mail.data.response;
    }
  },
});