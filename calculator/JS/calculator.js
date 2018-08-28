
var list = document.getElementsByTagName('input');
var output = document.getElementById('output');
var answers = document.getElementById('answers');

function ok(){
   for(let i=0;i<list.length;i++){
   	  list[i].onclick = function(){
     		if(i==0){
  			   output.value = '';
     		} else if(i==1){
        	 var value = output.value;
    			 var str = value.substring(0,value.length-1);
    			 output.value = str;
       }else{
        var str2 = list[i].value;
		    
        if(str2=='='){
          answers.value = counts(output.value);
          output.value = '';
        }else{
          output.value += str2;
        }
        
     		}
   	  }
   }
}
ok()
function counts(string1){
     var array1 = string1.split(/[-,+]/);
     var array3 = [];
     for(let j =0;j<array1.length;j++){
        var x = array1[j];
            var array2 = x.split(/[X,÷]/);
            if(array2.length>1){
              var y = x;
              var k = 0;
              var result =  parseFloat(array2[0]);
              do{
                var len1 =array2[0].length;
                if(y[len1]=='X'){
                result =result* parseFloat(array2[1+k]);
                }
                if(y[len1]=='÷'){
                result =result/ parseFloat(array2[1+k]);
                }
                y = y.substr(len1+1);
                k++;
              }
              while( k < array2.length-1)
              array3.push(result+'');
            } else{
              array3.push(x);
              console.log(array3);
            }
     }
      if(array1.length>1){
        var y1 = string1;
        var k1 = 0;
       var    result1 =  parseFloat(array3[0]);
              do{
                var z = array1[k1];
                var len2 =z.length;
                if(y1[len2]=='+'){
                result1 =result1 + parseFloat(array3[1+k1]);
                }
                if(y1[len2]=='-'){
                result1 =result1 - parseFloat(array3[1+k1]);
                }
                y1 = y1.substr(len2+1);
                k1++;
              }
              while( k1 < array1.length-1)
      }else{
        result1 = array3;
      }
  return result1;
  }