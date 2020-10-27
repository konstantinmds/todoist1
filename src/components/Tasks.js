import React, { useEffect } from 'react';
import { Checkbox } from './Checkbox';
import { useTasks } from '../hooks';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import { collatedTasksExist, getCollatedTitle, getTitle } from '../helpers';
import { collatedTasks } from '../constants';


export const Tasks = () => {

    const { selectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const { tasks } = useTasks(selectedProject);

    var projectName = '';

    if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
        projectName = getTitle(projects, selectedProject).name;
        console.log('project name 1: ', projectName);
    }
    
    if (collatedTasksExist(selectedProject) && selectedProject) {
      projectName = getCollatedTitle(collatedTasks, selectedProject).name;
      console.log('project name 2: ', projectName);
    }

    useEffect(() => {
      document.title = `${projectName}: Todoist`;
    });

    return (
        <div className="tasks" data-testid="tasks">
          <h2 data-testid="project-name">{projectName}</h2>
          
          <ul className="tasks__list">
            {tasks.map(task => (
              <li key={`${task.id}`}>
                <Checkbox id={task.id} />
                <span>{task.task}</span>
              </li>
            ))}
          </ul>
            
        </div>
    )
}

