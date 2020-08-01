import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import getPaper from "../../graphql/Query/getPaper";

import logo from "../../assets/logo.svg";
import DeletePaper from "../../graphql/Mutation/deletePaper";

interface Tag {
  id: number;
  tech: string;
}

interface Paper {
  id: number;
  author: string;
  name: string;
  text: string;
  tags: Tag[];
}

interface Data {
  paper: Paper[];
}
interface AllPapers {
  loading: boolean;
  data?: Data;
}

const Paper = () => {
  let { id } = useParams();
  let aux = parseInt(id);
  id = aux;
  const { loading: queryLoading, data }: AllPapers = useQuery(getPaper, {
    variables: { id },
  });
  const [
    deletePaper,
    { loading: mutationLoading, error: mutationError, data: dataMutation },
  ] = useMutation(DeletePaper);
  if (queryLoading) {
    return <img src={logo} className="App-logo" alt="logo" />;
  }

  if (!data) {
    return <p>Repository is empty{id}</p>;
  }
  const { paper } = data;
  return (
    <div>
      <h1>{paper[0].name}</h1>
      <h3>{paper[0].author}</h3>
      <div className="tags">
        {paper[0].tags.map((tag: Tag) => (
          <span className="tag" key={tag.tech}>
            {tag.tech}
          </span>
        ))}
      </div>
      <p>{paper[0].text}</p>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          deletePaper({ variables: { id } });
        }}
      >
        Deletar
      </button>
    </div>
  );
};

export default Paper;
