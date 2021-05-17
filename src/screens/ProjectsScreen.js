import React, { useEffect, useState } from "react";
import ProjectComponent from "../components/ProjectComponent";
import { db } from "../components/Firebase";
import LoadingBox from "../components/LoadingBox";

export default function ProjectsScreen() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("projects")
      .get()
      .then((querySnapshot) => {
        const dat = querySnapshot.docs.map((doc) => doc.data());
        setData(dat);
        setLoading(false);
      });
  }, []);
  console.log(data);
  return (
    <div className="screens">
      <h1>Projects I've Developed</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : (
        data &&
        data.map((project, index) => {
          return (
            <ProjectComponent
              name={project.name}
              image={project.image}
              description={project.description}
              key={index}
            ></ProjectComponent>
          );
        })
      )}
    </div>
  );
}
