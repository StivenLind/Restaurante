// Asignar rutas de imagen y descripciones para cada tarjeta
const cardDetails = {
    "1": { img: "imgModal/modal1.png", desc: "Muestra los platillos del restaurante con precio mayor a 9000" },
    "2": { img: "imgModal/modal2.png", desc: " Muestra los platillos del restaurante con precio mayor a 15000" },
    "3": { img: "imgModal/modal3.png", desc: "Muestra los platillos con un peso igual a 200 gamos" },
    "4": { img: "imgModal/modal4.png", desc: "Muestra los platillos que tienen una calificación de 5 puntos" },
    "5": { img: "imgModal/modal5.png", desc: "Muestra los platillos en el restaurante que tengan 12 o más unidades" },
    "6": { img: "imgModal/modal6.png", desc: "Muestra los platillos que tengan 600 o más calorías" },
    "7": { img: "imgModal/modal7.png", desc: "Muestra los platillos con calorías menores a 500" },
    "8": { img: "imgModal/modal8.png", desc: "Muestra los platillos cuyo precio es 12000 o menor " },
    "9": { img: "imgModal/modal9.png", desc: "Muestra los platillos con calificación diferente de 5 puntos" },
    "10": { img: "imgModal/modal10.png", desc: "Muestra los platillos cuyo precio está en el rango entre 8000 y 11000" },
    "11": { img: "imgModal/modal11.png", desc: "Muestra los platillos cuyo precio sea menor a 20000 o las unidades sean igual a 12" },
    "12": { img: "imgModal/modal12.png", desc: "Muestra los platillos cuyo precio sea menor a 15000 y  tenga 10 unidades " },
    "13": { img: "imgModal/modal13.png", desc: "Muestra los platillos con una calificación de 4 o más" },
    "14": { img: "imgModal/modal14.png", desc: "Muestra los platillos con un precio entre 9000 y 15000" },
    "15": { img: "imgModal/modal15.png", desc: "Muestra los platillos con unidades entre 8 y 15" },
    "16": { img: "imgModal/modal16.png", desc: "Muestra los platillos con peso mayor a 300 gramos" },
    "17": { img: "imgModal/modal17.png", desc: "Muestra los platillos con calorías menores a 400 o calificación de 5" },
    "18": { img: "imgModal/modal18.png", desc: "Muestra los platillos cuyo precio es mayor a 10000 y menor a 20000" },
    "19": { img: "imgModal/modal19.png", desc: "Muestra los platillos cuyo peso es menor a 500 gramos y tienen más de 15 unidades" },
    "20": { img: "imgModal/modal20.png", desc: "Muestra los platillos con unidades mayores a 7 y con un precio menor a 17000" }
};

// Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");
const closeModal = document.querySelector(".close");

// Función para abrir el modal
document.querySelectorAll('.view-more-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const cardId = e.target.getAttribute('data-card');
        
        // Configurar imagen y descripción según la tarjeta
        if (cardId && cardDetails[cardId]) {
            modalImg.src = cardDetails[cardId].img;
            modalDesc.textContent = cardDetails[cardId].desc;
        }
        
        modal.style.display = "block";
    });
});

// Cerrar modal
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});
