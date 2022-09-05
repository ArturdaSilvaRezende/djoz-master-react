import * as C from "./style";

type Title = {
  title: string;
  description: string;
};

export const GlobalTitle = (props: Title) => {
  return (
    <C.GlobalTitle className="GlobalTitle">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </C.GlobalTitle>
  );
};
