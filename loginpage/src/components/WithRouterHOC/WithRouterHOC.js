import { useNavigate } from 'react-router-dom';

function WithRouterHOC(Component) {
  function ComponentWithRouterProp(props) {
    let navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  }

  return ComponentWithRouterProp;
}

export default WithRouterHOC;
