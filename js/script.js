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
    for(let i = 0; i < 4; i++){
      axios.get(this.boolean_mail_API)
      .then(resp => {
        this.mail = resp.data.response;
        this.mail_list.push(this.mail);
      }).catch(err => {
        console.log(err);
      });
      
      console.log(this.mail);
    }   
    console.log(this.mail_list);
  },  
  methods: {
  
  },
});