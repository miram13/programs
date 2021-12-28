const a = [1,2,3,2,3,1,4,5]

function duplicate(a){
 let counts = {}

 for(let i =0; i < a.length; i++){ 
     if (counts[a[i]]){
     counts[a[i]] += 1
     } else {
     counts[a[i]] = 1
     }
    }  
    for (let prop in counts){
        if (counts[prop] >= 2){
            console.log(prop + " counted: " + counts[prop] + " times.")
        }
    }
  console.log(counts)
}

duplicate(a)