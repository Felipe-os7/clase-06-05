const students=[]

document.getElementById("studentForm").addEventListener("submit",function(e){
 e.preventDefault();

 const name=document.getElementById("name").value.trim();
 const lastName=document.getElementById("lastName").value.trim();
 const grade=parseFloat(document.getElementById("grade").value)
 const date=document.getElementById("date").value

 if(grade<1 || grade>7 ||!name || !lastName || isNaN(grade)){
    alert("Error al ingresar los datos")
    return
 }

 const student={name,lastName,grade,date}
 students.push(student)
addStudentToTable(student);
 this.reset()

});

const promedioDiv=document.getElementById("promedio") 

function calcularpromedio(){ 

    const total=students.reduce((nota,student)=>nota+student.grade,0) 

    const average=total/students.length 

    promedioDiv.innerText=`El promedio del curso o estudiante es: ${average.toFixed(2)}`  

} 

/* 

function calcularPromedio(){ 

    let suma = 0; 

    for (const student of students){ 

    suma += student.grade; 

} 

    const count = students.length; 

    const promedio = suma / count; 

    console.log(promedio); 

    averageDiv.textContent = "Promedio General del Curso :" +promedio; 

  

}*/ 