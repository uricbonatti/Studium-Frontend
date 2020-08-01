import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import "../../styles/App.css";
import logo from "../../assets/logo.svg";
import allPapers from "../../graphql/Query/allPapers";
import "./styles.css";
import { Link } from "react-router-dom";
import newPaper from "../../graphql/Mutation/newPaper";

interface Tag {
  id: number;
  tech: string;
}

interface Paper {
  id: number;
  author: string;
  name: string;
  tags: Tag[];
}

interface Data {
  papers: Paper[];
}
interface AllPapers {
  loading: boolean;
  data?: Data;
  refetch: any;
}

const Home = () => {
  const { loading, data, refetch }: AllPapers = useQuery(allPapers);
  const [
    genericPaper,
    { loading: mutationLoading, error: mutationError, data: dataMutation },
  ] = useMutation(newPaper);
  if (loading) {
    return <img src={logo} className="App-logo" alt="logo" />;
  }
  if (!data) {
    return <p>Repository is empty</p>;
  }

  const { papers } = data;
  return (
    <div id="page-home">
      {papers.map((paper: Paper) => (
        <Link to={`/paper/${paper.id}`} className="paper" key={paper.id}>
          <p className="title">{paper.name}</p>
          <span className="author">{paper.author}</span>
          <div className="tags">
            {paper.tags.map((tag: Tag) => (
              <span className="tag" key={tag.tech}>
                {tag.tech}
              </span>
            ))}
          </div>
        </Link>
      ))}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          const name = `Let's Go ${papers.length + 1}`;
          const author = "Anyone";
          const text = "aheuaheuhauhsjnen n ienqkwnea";
          genericPaper({
            variables: {
              name,
              author,
              text,
              tags: [{ tech: "valore" }, { tech: "data validation" }],
            },
          });
          refetch();
        }}
      >
        Criar post Generico
      </button>
    </div>
  );
};

export default Home;
