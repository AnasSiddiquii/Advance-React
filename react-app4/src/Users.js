import { withRouter } from "react-router";

const Users = (props) => {
    console.log(props.match.params.id)
  return (
    <div>
      <h3>Hello</h3>
    </div>
  );
};
export default withRouter(Users);
