import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { firebase } from '../firebase';
import { useProjectsValue, useSelectedProjectValue } from '../context';

export const IndividualProject = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const {projects, setProjects} = useProjectsValue();
  const { selectedProject, setSelectedProjects } = useSelectedProjectValue();

  const deleteProject = docId => {
    firebase
    .firestore()
    .collection('projects')
    .doc(docId)
    .delete()
    .then(() => {
        setProjects([...projects]);
        setSelectedProjects('INBOX')
      })
  } 

  return (
    <>
      <span className="sidebar__dot">&#8226;</span> 
      <span className="sidebar__project-name">{project.name}</span> 
      <span className="sidebar__project-delete" data-testid="delete-project"
      onClick={() => setShowConfirm(!showConfirm)}
      >
      <FaTrashAlt />
      {showConfirm && (
        <div className="project-delete-modal">
          <div className="project-delete-modal__inner">
            <p>Do you want to delete this project?</p>
            <button
            type="button"
            onClick={() => deleteProject(project.docId)}
            >Delete
            </button>
          <span onClick={() => setShowConfirm(!setShowConfirm)}>Cancel</span>
          </div>
        </div>
      )}            
      </span> 

    </>
  )
}
