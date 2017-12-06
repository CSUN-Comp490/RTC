<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <Panel title="Classes">
            <div v-for="Class in classes" :key="Class.title">
                {{Class.title}} - 
                {{Class.classDesc}} - 
                {{Class.schedule}} - 
            </div>
            </Panel>
        </v-flex>
    </v-layout>
</template>

<script>
import ClassService from '@/services/ClassService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      classes: null
    }
  },
  async mounted () {
    // do a request for all the songs
    this.classes = await ClassService.index()
  }
}
</script>

<style scoped>
</style>