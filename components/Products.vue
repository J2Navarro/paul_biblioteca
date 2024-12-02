<template>
    
    <v-row align="center" justify="center">

    <div>
        <h1>LIBROS</h1>
        
        <div v-if="getProducts.length">
            <ul>
                <li v-for="product in getProducts" :key="product.id">
                    <h2>{{ product.title }}</h2>
                    <p>{{ product.description }}</p>
                    <strong>{{ product.price }} USD</strong>
                </li>
            </ul>
        </div>
 
    </div>  
</v-row>  
</template>

<script setup>
    import { onMounted } from 'vue';
    const productStore = useProductStore();

    // Obtener los productos del store
    const { getProducts, fetchProducts } = productStore;

    // Cargar los productos cuando el componente se monta
    onMounted(() => {
        fetchProducts();  // Llama a la acción para obtener los productos
    });
</script>
