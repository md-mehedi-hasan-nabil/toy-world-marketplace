import { useEffect } from "react";
import Layout from "../components/Layout";

export default function Blogs() {
  useEffect(() => {
    document.title = "Blog Page";
  }, []);

  const blogs = [
    {
      id: 1,
      question:
        "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
      answer:
        "Access tokens are used in token-based authentication to allow an application to access an API. The refresh token just helps you to re-authenticate the user without them having to re-enter their credentials again and again. The JWT must be stored in a safe place in the user's browser. If you store it in localStorage, it can be accessed by any script on your web page.",
    },
    {
      id: 2,
      question: "Compare SQL and NoSQL databases?",
      answer:
        "SQL and NoSQL are two different types of database management systems (DBMS). SQL databases are relational, while NoSQL databases are non-relational. This means that SQL databases store data in tables, with each table having a defined schema, while NoSQL databases store data in a more flexible way.",
    },
    {
      id: 3,
      question: "What is express js? What is Nest JS?",
      answer:
        "Express.js is a popular web framework for Node.js that provides a minimal and flexible set of features for web and mobile applications. It is used to build single-page, multi-page, and hybrid web applications.",
      answerTwo:
        "Nest.js is a progressive Node.js framework that combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming). It is built with and fully supports TypeScript.",
    },
    {
      id: 4,
      question: "What is MongoDB aggregate and how does it work?",
      answer:
        "Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.",
      answerTwo:
        "Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages",
    },
  ];
  return (
    <Layout>
      <div className="container py-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="my-5 card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title font-medium">{blog.question}</h2>
              <p>{blog.answer}</p>
              {blog.answerTwo && <p>{blog.answerTwo}</p>}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
