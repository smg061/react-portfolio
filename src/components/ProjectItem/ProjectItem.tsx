import React from "react";
import "./ProjectItem.scss";

interface Props {
   projectTitle: string;
   projectDescription: string;
   image: string;
   technologies: string[];
   githubLink: string;
   deployedLink: string;
}

const ProjectItem: React.FC<Props> = ({
   projectTitle,
   projectDescription,
   image,
   technologies,
   githubLink,
   deployedLink,
}) => {
   return (
      <div className="projectBody">
         <article className="postcard dark blue">
            <a className="postcard__img_link" href="#">
               <img className="postcard__img" src={image} alt="Image Title" />
            </a>
            <div className="postcard__text">
               <h1 className="postcard__title blue">
                  {projectTitle}
               </h1>
               <div className="postcard__subtitle small">
               </div>
               <div className="postcard__bar"></div>
               <div className="postcard__preview-txt">{projectDescription}</div>
               <ul className="postcard__tagbox">
                  {/*loop through each of the technologies used in the project and make a badge */}
                  {technologies.map((item) => (
                     <li key={item + projectTitle} className="tag__item">
                        {item}
                     </li>
                  ))}
               </ul>
               {/*link for github and heroku */}
               <ul className="postcard__codelinks">
                  <li className="tag__item play blue">
                     <a href={githubLink}>
                        <i className="fa fa-github"></i>Source Code
                     </a>
                  </li>
                  <li className="tag__item play blue">
                     <a href={deployedLink}>
                        <i className="fa fa-play"></i> Deployed App
                     </a>
                  </li>
               </ul>
            </div>
         </article>
      </div>
   );
};

export default ProjectItem;
