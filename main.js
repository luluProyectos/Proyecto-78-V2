var images = ["Mifamilia.jpg","Abuelo.jpg", "abuela.jpg" , "padre.jpg", "mama.jpg", "hermano.jpg"];
           
var names = ["Libro familiar","Abuelo Pedro", "Abuela Meche", "Papá Christian", "Mamá Lourdes", "YO Emilio"];
          
var i = 0;
function familia()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("foto").src = updatedImage;
     document.getElementById("miembro").innerHTML = updatedName; 
}
