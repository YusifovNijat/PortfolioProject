  import React from 'react';
import { useParams } from "react-router-dom";
import "./info.css";
import InfoHome from '../infoHome/InfoHome';
import InfoText from '../info-text/InfoText';
import InfoFooter from '../info-footer/InfoFooter';

const Info = ({ lists }) => {
  const { id } = useParams();
  const project = lists.find(item => item.id === Number(id));

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className='info'>
      <InfoHome project={project}/>
      <InfoText project={project}/>
      <InfoFooter project={project}/>
    </div>
  );
}

export default Info;


