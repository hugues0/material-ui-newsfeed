import { makeStyles } from "@material-ui/styles";
import Navbar from "./components/Navbar";

const useStyles = makeStyles((theme) => ({}))

const App = () => {
  const classes = useStyles()
  return <div><Navbar/> </div>
  
};

export default App;
