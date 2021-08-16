Name_of_the_Student_array=[];
function submit(){
    var name1=document.getElementById("Name_of_the_Student1").value;
    var name2=document.getElementById("Name_of_the_Student2").value;
    var name3=document.getElementById("Name_of_the_Student3").value;
    var name4=document.getElementById("Name_of_the_Student4").value;

    Name_of_the_Student_array.push(name1);
    Name_of_the_Student_array.push(name2);
    Name_of_the_Student_array.push(name3);
    Name_of_the_Student_array.push(name4);

console.log(Name_of_the_Student_array);

document.getElementById("display_name").innerHTML=Name_of_the_Student_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}   


function sorting(){
    Name_of_the_Student_array.sort();
    console.log(Name_of_the_Student_array)
    document.getElementById("display_name").innerHTML=Name_of_the_Student_array;
}
