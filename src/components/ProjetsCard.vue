<template>
  <div class="project">
    <h2>{{ project.name }}</h2>
    <div class="project-description">
      <div class="project-context">
        <h2>
          Contexte
        </h2>
        <p>
          {{ project.context }}
        </p>
      </div>
      <div class="project-context">
        <h2>
          Compétences
        </h2>
        <div class="project-skills">
          <div v-for="skill in project.skills" :key="skill" class="project-skill">
            {{skill}}
          </div>

        </div>
      </div>
    </div>
    <div class="project-pictures">
      <img class="project-picture" v-for="picture in project.pictures" :key="picture" :src="picture"/>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'project'
  ]
}
</script>
<style>
  .project {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
  h2{
    margin: 25px;
  }
  .project-description {
    display: flex;
    flex-direction: row;
    gap: 110px;
    padding-bottom: 20px;

  }
  .project-context {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .project-skills {
    display: flex;
    gap: 5px;
  }
  .project-skill {
    border: 2px black solid;
    border-radius: 10px;
    padding: 5px;
  }
  .project-pictures {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .project-picture{
    height: 200px;
    padding-top: 20px;
    padding-right: 20px;
  }
  p{
    text-align: justify;
  }
  @media (max-width: 768px){
  .project-description{
    gap: 50px;
    flex-direction: column;
  }
  .project-picture{
    height: 150px;
  }
  .project-skills{
    flex-wrap: wrap;
  }
 }

</style>