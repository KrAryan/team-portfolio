let app = Vue.createApp({
  data () {
    return {
      about: [
        "I'm actually extremely useless, so have some lorem ipsum instead.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed fringilla libero. Nulla placerat non orci in rhoncus. Nunc justo est, fermentum vitae fringilla ornare, dictum vel turpis. Donec facilisis dolor in dui bibendum tempor. Aliquam tristique diam ac risus porta convallis. Fusce feugiat posuere ornare.",
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse a suscipit mi. Morbi imperdiet nunc dui, ut fermentum lacus tincidunt vitae. Mauris a tincidunt nisi."
      ],
      skills: [
        { name: 'Python', colour: 'blue' },
        { name: 'Djano', colour: 'blue' },
        { name: 'scikit-learn', colour: 'purple' },
        { name: 'Server Side Development', colour: 'blue' },
        { name: 'javascript', colour: 'red' },
        { name: 'Vue.js', colour: 'green' },
        { name: 'Front End Development', colour: 'red' },
        { name: 'Machine Learning', colour: 'purple' },
        { name: 'HTML/CSS', colour: 'red' },
        { name: 'Pandas', colour: 'purple' },
      ],
      projects: [
        { name: 'spaceQuery', colour: 'green' },
        { name: 'Trinity Number', colour: 'red' },
        { name: 'Channels Chat', colour: 'blue' },
        { name: 'ML Models', colour: 'purple' },
        { name: 'Future Projects', colour: 'grey' },
        { name: 'Flexbox Demo', colour: 'red' },
        { name: 'Phonebook API', colour: 'blue' }
      ],
      selectedProject: { name: 'Well, go on, select one.', colour: 'grey' }
    }
  },
  methods: {
    selProj (index) {
      this.selectedProject = this.projects[index]
    }
  }
})

app.mount("#app")