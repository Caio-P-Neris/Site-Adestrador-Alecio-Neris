const tiempo = 10000 

document.getElementById("radio11").checked = true;
document.getElementById("radio21").checked = true;
var timeout= [setTimeout( function(){
    nextImage(1);
},tiempo),
setTimeout( function(){
    nextImage(2);
},tiempo)]


// function nextImage(){
//     count++;
//     if (count >5){
//         count= 1;
//     }

//     document.getElementById("radio"+count).checked = true;

// }

function nextImage(group){
    let count = document.querySelector('input[name="radio-btn'+group+'"]:checked').value;
    // console.log(('input[name="radio-btn'+group+'"]:checked'))
    count++;
    if (count >5){
        count= 1;
    
    }
    document.getElementById("radio"+group+count).checked = true;
    timeout[group-1] = setTimeout( function(){
        nextImage(group);
    }, tiempo)
}

function resetNextImage(group){
    
    clearInterval(timeout[group-1])
    
    timeout[group-1] = setTimeout( function(){
        nextImage(group);
    }, tiempo)

    
}
