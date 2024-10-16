import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectState,setProjectState ] =useState({
    currentAction: 'selected-project',
    selectedProjectId:undefined,
    projects:[],

  });


  function handleStartNewProject(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:null,
      }
    });
  }

  function handleAddProject(projectData){
    setProjectState(prevState=>{
      const newProject = {...projectData, id: Math.random()}
      return {...prevState, projects:[...prevState.projects, newProject], selectedProjectId:undefined}
    });
  }

  function handleCancel(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:undefined,
      }
    });
  }

  let content;

  if (projectState.selectedProjectId === null){
    content = <NewProject onSave={handleAddProject} onCancel={handleCancel}/> ;
  }else if(projectState.selectedProjectId == undefined){
    content = <NoProjectSelected onStartAddProject={handleStartNewProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartNewProject} projects={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
