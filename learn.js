function to(arr){
      var res={}
      for(let i=0;i<arr.length;i++){
          if(arr[i]){
              
              for (const key in arr[i]) {
                 res[key]=arr[i][key]
              }
          }
      }
            return res
  }

  console.log(1111,to([{a:1},{b:2},{c:2,d:4}])) // { a: 1, b: 2, c: 2, d: 4 }
