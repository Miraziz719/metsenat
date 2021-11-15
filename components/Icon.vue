<template>
   <div :class="{icon: margin}" v-html="src"></div>
</template>
<script>

export default {
    name: 'Icon',
    props: {
        name: {
            type: String,
            required: true
        },
        margin: {type: Boolean}
    },
    computed: {
        src() {
            const src = require(`assets/icons/${this.name}.svg?raw`)
            return src
        }
    }
}
</script>

<style scoped>
.icon {
    margin-right: 4px;
    display: flex;
    align-items: center;
}
</style>