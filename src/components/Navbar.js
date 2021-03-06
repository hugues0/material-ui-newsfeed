import {
    alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width:"70%",
    },
  },
  input: {
    color: "#fff",
    marginLeft: theme.spacing(1),
  },
  cancel:{
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
     display: "none",
    },
  },
  searchIcon: {
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
    cursor: "pointer",
  },
}));

const Navbar = () => {
    const [open,setOpen] = useState(false)
  const classes = useStyles({open});
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Hugues Dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          HUGUES
        </Typography>
        <div className={classes.search}>
          <Search className={classes.searchIcon} />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)}/>
        </div>
        <div className={classes.icons}>
            <Search className={classes.searchButton} onClick={() => setOpen(!open)}/>
          <Badge badgeContent={6} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={5} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="Hugues"
            src="https://cchubnigeria.com/designlab/wp-content/uploads/2020/04/DSC_0020-395x400.jpg"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
