<template>
    <div class="home">
        <h2>Lista gier</h2>

        <div v-if="loading">Ładowanie...</div>
        <div v-else-if="error" class="error">{{ error }}</div>

        <ul v-else>
            <li v-for="game in games" :key="game.id">
                {{ game.id }}. {{ game.title }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HomeView',
        data() {
            return {
                games: [],
                loading: true,
                error: null
            }
        },
        async mounted() {
            try {
                const response = await fetch('http://localhost:3000/api/games');
                if (!response.ok) throw new Error('Błąd podczas pobierania danych');
                this.games = await response.json();
            } catch (err) {
                this.error = 'Nie udało się pobrać listy gier';
                console.error(err);
            } finally {
                this.loading = false;
            }
        }
    }
</script>

<style scoped>
    .home {
        max-width: 600px;
        margin: 40px auto;
        font-family: Arial, sans-serif;
    }

    h2 {
        text-align: center;
        color: #333;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        padding: 8px 12px;
        border-bottom: 1px solid #ddd;
    }

    .error {
        color: red;
        text-align: center;
    }
</style>
