import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { LanguageSharp } from "@mui/icons-material";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import images from "../assets";
import { useTranslation } from "react-i18next";
import { signOut } from "firebase/auth";
import { auth, provider } from "../configs/firebase";
import { saveUserData, loadUserData, clearUserData } from "../utils/storage";
import { Stack } from "@mui/material";

const drawerWidth = 240;

function HomeAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageText, setLanguageText] = useState("EN");
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const navItems = [
    {
      title: "logout",
      path: "/intro",
      onClick: () => {
        signOut(auth, provider)
          .then(() => {
            clearUserData();
            navigate("/intro");
          })
          .catch((err) => {
            console.error("Error signing in with Google:", err);
          });
      },
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const onLanguageButtonClick = (event) => {
    if (languageText === "EN") {
      setLanguageText("KR");
      i18n.changeLanguage("ko");
    } else {
      setLanguageText("EN");
      i18n.changeLanguage("en");
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
            }}
          >
            <img style={{ width: "50px" }} src={images.ppLogoWhite} />
            <Box sx={{ marginLeft: "50px" }}>
              <Typography>{loadUserData().email}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
            >
              <Typography
                marginRight="25px"
                fontWeight="bold"
                fontSize="1.2rem"
              >
                Unit Name
              </Typography>
              <span style={{ marginRight: "20px" }}>
                <img style={{ width: "130px" }} src={images.train} />
              </span>
              <Stack flexDirection="row" marginRight="20px">
                <img style={{ width: "25px" }} src={images.iconBadge} />
                <Typography fontWeight="bold">4</Typography>
              </Stack>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  sx={{
                    color: "#fff",
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                  onClick={item.onClick}
                >
                  {t(item.title)}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                marginLeft: "25px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LanguageSharp />
              <Button
                sx={{ color: "#fff", minWidth: "10px", fontSize: "0.9rem" }}
                onClick={onLanguageButtonClick}
              >
                {languageText}
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box sx={{ width: "100%", height: "95vh" }} component="main">
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default HomeAppBar;