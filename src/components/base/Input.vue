<script setup>
import { computed } from 'vue'

const props = defineProps(['modelValue', 'title', 'placeholder'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
    <label class="field">
        <span class="field__title">{{ title }}</span>
        <input class="field__input" v-model="value" :placeholder="placeholder"/>
    </label>
  
</template>