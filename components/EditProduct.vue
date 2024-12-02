<template>
    <div>
        <h1>Editar Producto</h1>
        <div v-if="product">
            <form @submit.prevent="saveProduct">
                <div>
                    <label for="title">Título:</label>
                    <input v-model="product.title" id="title" type="text" required />
                </div>
                <div>
                    <label for="description">Descripción:</label>
                    <textarea v-model="product.description" id="description" required></textarea>
                </div>
                <div>
                    <label for="price">Precio:</label>
                    <input v-model.number="product.price" id="price" type="number" required />
                </div>
                
                <!-- Campo para cargar imagen -->
                <div>
                    <label for="image">Imagen:</label>
                    <input type="file" @change="handleImageChange" id="image" />
                    <div v-if="imagePreview">
                        <h3>Vista previa de la imagen:</h3>
                        <img :src="imagePreview" alt="Vista previa de la imagen" width="100" />
                    </div>
                </div>

                <button type="submit">Guardar Cambios</button>
            </form>
        </div>
    </div>    
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    const productStore = useProductStore();

    // Obtenemos el producto desde el store
    const { getProducts, updateProduct, updateProductImage } = productStore;

    // Creamos una referencia al producto que vamos a editar
    const product = ref(null);
    const imagePreview = ref(null);  // Para mostrar la vista previa de la imagen seleccionada
    const selectedImage = ref(null);  // Para guardar la imagen seleccionada

    // Suponemos que tienes el id del producto que quieres editar
    const productId = 1;  // Aquí iría el id del producto que deseas editar

    // Cargar el producto cuando el componente se monte
    onMounted(() => {
        const selectedProduct = getProducts.find(p => p.id === productId);
        if (selectedProduct) {
            product.value = { ...selectedProduct };  // Crear una copia del producto para editar
        }
    });

    // Función para manejar el cambio de la imagen
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Vista previa de la imagen
            imagePreview.value = URL.createObjectURL(file);
            selectedImage.value = file;  // Guardamos la imagen seleccionada
        }
    };

    // Función para guardar el producto y la imagen
    const saveProduct = async () => {
        if (product.value) {
            // Subir la imagen si se ha seleccionado una
            let imageUrl = product.value.imageUrl;  // Usamos la URL actual si no cambiamos la imagen

            if (selectedImage.value) {
                // Aquí puedes agregar el código para subir la imagen al servidor, por ejemplo:
                // Usamos FormData para enviar la imagen al backend
                const formData = new FormData();
                formData.append('image', selectedImage.value);

                // Simulamos una llamada a la API para subir la imagen
                const response = await fetch("/api/upload-image", {
                    method: "POST",
                    body: formData,
                });

                const data = await response.json();
                imageUrl = data.imageUrl;  // Supongamos que el backend devuelve la URL de la imagen subida
            }

            // Actualizamos el producto con la URL de la imagen (si se ha cambiado)
            product.value.imageUrl = imageUrl;
            updateProduct(product.value);

            // Si se subió la imagen, actualizamos la URL en el store
            if (selectedImage.value) {
                updateProductImage(product.value.id, imageUrl);
            }
        }
    };
</script>
