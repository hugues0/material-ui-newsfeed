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
import { Mail, Notifications, Search } from "@material-ui/icons";

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
  },
  input: {
    color: "#fff",
    marginLeft: theme.spacing(1),
  },
  searchIcon: {
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
  },
  icons: {
    display: "flex",
    alignItems: "center",
  },
  badge:{
      marginRight:theme.spacing(2),
      cursor:"pointer"
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          lama Dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          LAMA
        </Typography>
        <div className={classes.search}>
          <Search className={classes.searchIcon} />
          <InputBase placeholder="Search..." className={classes.input} />
        </div>
        <div className={classes.icons}>
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
