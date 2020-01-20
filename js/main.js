  // //Products looping Vue
  var productsFile = 'test.json';
  new Vue ({
    el: '#app',
    data: {
      products: []
    },
    mounted() {
      var self = this
      $.getJson(productsFile, function(data) {
        self.products = data._id
      })
    }
    
});     
  //   }
    // methods: {
    //   fetchProducts() {
    //     fetch('test.json');
    //   }
    // },
    // created() {
    //   this.fetchProducts();
    // }
  //});
  
// new Vue({
//     el: '#app',
//     data: {
//       active: true,
//       products:[]
//     },
//     mounted () {
//         $.getJSON('../js/test.json', json => {
//           this.products = json.data
//           console.log(json.data)
//         })
//       }
//   });