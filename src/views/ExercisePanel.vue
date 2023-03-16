<template>
    <div v-if="exercise">
        <h2>{{ exercise.exercise_id }}. {{ exercise.question }}</h2>
        <p>{{ exercise.option_a }}</p>
        <p>{{ exercise.option_b }}</p>
        <p>{{ exercise.option_c }}</p>
        <p>{{ exercise.option_d }}</p>
        <p>Answer: {{ exercise.correct_ans }}</p>
        <p>{{ exercise.explanation }}</p>
    </div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>Loading...</div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            exercise: null, // 初始化题目为 null
            error: null // 初始化错误信息为 null
        };
    },
    methods: {
        async getExercise() {
            try {
                const response = await axios.get("http://localhost:3000/exercise");
                this.exercise = response.data;
            } catch (error) {
                console.error(error);
                this.error = "Error getting exercise";
            }
        }
    },
    mounted() {
        this.getExercise();
    }
};

</script>
  