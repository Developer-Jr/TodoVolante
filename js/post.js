//Post
$(document).ready(function(){
    var posts = [
        {
          title: "¿Que es un Playseat?",
          date:
            "Publicado el día  " +
            moment().format("DD") +
            " de " +
            moment().format("MMMM") +
            " de " +
            moment().format("YYYY"), //moment es una libreria que nos da opción a modificar la fecha
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quo possimus modi nisi eius molestias et,",
        },
        {
          title: "Cupra Playset",
          date:
            "Publicado el día  " +
            moment().format("DD") +
            " de " +
            moment().format("MMMM") +
            " de " +
            moment().format("YYYY"),
          content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quo possimus modi nisi eius molestias et,"
        },
        {
          title: "Gran turismo con Playseat",
          date:
            "Publicado el día  " +
            moment().format("DD") +
            " de " +
            moment().format("MMMM") +
            " de " +
            moment().format("YYYY"),
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quo possimus modi nisi eius molestias et, nesciunt hic veniam voluptate dolorem, eaque sed recusandae libero asperiores vero, rerum porro. Repellat! akjdhfauieibklasdjfhaouiwebtkamdnfiuasytoeiurbnm,asdncviuia7sueytrkjna,sdmfn kjasuyheiurtnbea,msdc kjasikuheritnrasd,fgmáñsodiutro`nrmetgylmnadsñifvuhraesdipurntgf,mfdsghvjk",
        },
        {
          title: "Gran turismo con Playseat 2",
          date:
            "Publicado el día  " +
            moment().format("DD") +
            " de " +
            moment().format("MMMM") +
            " de " +
            moment().format("YYYY"),
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quo possimus modi nisi eius molestias et, nesciunt hic veniam voluptate dolorem, eaque sed recusandae libero asperiores vero, rerum porro. Repellat! akjdhfauieibklasdjfhaouiwebtkamdnfiuasytoeiurbnm,asdncviuia7sueytrkjna,sdmfn kjasuyheiurtnbea,msdc kjasikuheritnrasd,fgmáñsodiutro`nrmetgylmnadsñifvuhraesdipurntgf,mfdsghvjk",
        },
        {
          title: "Gran turismo con Playseat 2",
          date:
            "Publicado el día  " +
            moment().format("DD") +
            " de " +
            moment().format("MMMM") +
            " de " +
            moment().format("YYYY"),
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quo possimus modi nisi eius molestias et, nesciunt hic veniam voluptate dolorem, eaque sed recusandae libero asperiores vero, rerum porro. Repellat! akjdhfauieibklasdjfhaouiwebtkamdnfiuasytoeiurbnm,asdncviuia7sueytrkjna,sdmfn kjasuyheiurtnbea,msdc kjasikuheritnrasd,fgmáñsodiutro`nrmetgylmnadsñifvuhraesdipurntgf,mfdsghvjk",
        },
        {
          title: "Gran turismo con Playseat 2",
          date:
            "Publicado el día  " +
            moment().format("DD") +
            " de " +
            moment().format("MMMM") +
            " de " +
            moment().format("YYYY"),
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quo possimus modi nisi eius molestias et, nesciunt hic veniam voluptate dolorem, eaque sed recusandae libero asperiores vero, rerum porro. Repellat! akjdhfauieibklasdjfhaouiwebtkamdnfiuasytoeiurbnm,asdncviuia7sueytrkjna,sdmfn kjasuyheiurtnbea,msdc kjasikuheritnrasd,fgmáñsodiutro`nrmetgylmnadsñifvuhraesdipurntgf,mfdsghvjk",
        },
      ];
      //Generamos un bucle de nuestros json para posteriormente añadirlos a nuestro html post
      posts.forEach((item) => { //recorreremos el indice 
        var post = `
          <article class="post">
          <h2 id="tituloPost">${item.title} </h2>
          <span class="date">${item.date}</span>
          <p id="parrafoPost">${item.content}</p>
          <button class="buttom-more"><a href="#" >Leer más</a></button>
          </article>
       `;
        $("#post").append(post); // con append añadimos esta iteración a la anterior
      });
});
