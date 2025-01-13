// import React from "react";
// import {
//   colors,
//   CssBaseline,
//   ThemeProvider,
//   Typography,
//   Container,
//   createTheme,
//   Box,
//   SvgIcon,
//   Link,
// } from "@mui/material";

// const CustomerLog = () => {
//   return (
//     <>
//       <Container>
//         <Typography sx={{ height: "100vh" }}></Typography>
//       </Container>
//     </>
//   );
// };
// export default CustomerLog;
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
// import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import RememberMeTwoToneIcon from "@mui/icons-material/RememberMeTwoTone";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SearchIcon from "@mui/icons-material/Search";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import profile from "../../Images/profile.png";
import { useNavigate } from "react-router-dom";
import EnhancedTable from "./Customer-log-dashboard";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "products",
    title: "Products",
    icon: <ShoppingCartIcon />,
  },
];

// { componentName: "dashboard", pathname: <EnhancedTable /> },
// { componentName: "orders", pathname: "hello" },

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  // colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  const navigate = useNavigate();
  const componentSwitch = (routerPath) => {
    switch (routerPath) {
      case "/dashboard":
        return <EnhancedTable />;
      case "/products":
        return "products";
      case "/display":
        return (
          <div>
            This Page Contains Clients Info
            <span>
              <DashboardCustomizeRoundedIcon />
            </span>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {componentSwitch(pathname)}
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function ToolbarActionsSearch() {
  return (
    <Stack direction="row">
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{
              display: { xs: "inline", md: "none" },
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Tooltip>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          },
        }}
        sx={{ display: { xs: "none", md: "inline-block" }, mr: 1 }}
      />
    </Stack>
  );
}

function SidebarFooter({ mini }) {
  console.log(mini, "mini");
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: "nowrap", overflow: "hidden" }}
    >
      {mini ? "© MUI" : `© ${new Date().getFullYear()} commodity`}
    </Typography>
  );
}

SidebarFooter.propTypes = {
  mini: PropTypes.bool.isRequired,
};

function CustomAppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <RememberMeTwoToneIcon fontSize="large" color="primary" />
      <Typography variant="h6">CUSTOMER - LOG</Typography>
      <Chip size="small" label="BOARDED" color="info" />
      <Tooltip title="Connected to production">
        <CheckCircleIcon color="success" fontSize="small" />
      </Tooltip>
    </Stack>
  );
}

function CustomerLogAdmin(props) {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("login"));
  // const { window } = props;
  const [session, setSession] = React.useState({
    user: {
      name: userData?.name,
      email: userData?.email,
      image: userData?.img ? userData.img : profile,
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: userData?.name,
            email: userData?.email,
            image: userData?.img ? userData.img : profile,
          },
        });
      },
      signOut: () => {
        setSession(null);
        localStorage.removeItem("login");
        navigate("/");
      },
    };
  }, []);

  const router = useDemoRouter("/display");

  return (
    <>
      <AppProvider
        session={session}
        navigation={NAVIGATION}
        router={router}
        theme={demoTheme}
        authentication={authentication}
      >
        <DashboardLayout
          slots={{
            appTitle: CustomAppTitle,
            // toolbarActions: ToolbarActionsSearch,
            sidebarFooter: SidebarFooter,
          }}
        >
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
    </>
  );
}

export default CustomerLogAdmin;
