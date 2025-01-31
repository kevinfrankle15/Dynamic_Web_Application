import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "../Utils/global.css";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
const Modules = () => {
  const [selectedCard, setSelectedCard] = React.useState(0);
  const cards = [
    {
      id: 1,
      title: "Planning & Production",
      description: [
        "Material Requirement Planning",
        "Master Production Scheduling",
        "Production Process Defination",
      ],
      icon: <ProductionQuantityLimitsIcon />,
    },
    {
      id: 2,
      title: "Production & Configuration",
      description: [
        "Bill Of Material",
        "Engineering Change Request",
        "Engineering Change Note",
      ],
      icon: <DescriptionOutlinedIcon />,
    },
    {
      id: 3,
      title: "Total Quality Management",
      description: [
        "Process Quality Check",
        "Finish Goods Quality Check",
        "Material Inward Quality Check",
      ],
      icon: <SearchOutlinedIcon />,
    },
    {
      id: 4,
      title: "Dashboard and Alerts",
      description: [
        "Department-wise Dashboard",
        "Business Intelligence Tool",
        "Document Management System",
      ],
      icon: <DashboardOutlinedIcon />,
    },
    {
      id: 5,
      title: "CRM & Order Processing",
      description: [
        "Lead Management",
        "Opportunity Management",
        "Order Management",
      ],
      icon: <HandshakeOutlinedIcon />,
    },
    {
      id: 6,
      title: "Finance Management",
      description: [
        "Compliance with Sch VI & IFRS",
        "Automatic TDS & Tax Calculation",
        "Multi- Dimensional Reporting",
      ],
      icon: <MonetizationOnOutlinedIcon />,
    },
    {
      id: 7,
      title: "Purchase Management",
      description: [
        "Supplier Evaluation",
        "Request for Quote",
        "Quote Comparison",
      ],
      icon: <ShoppingCartOutlinedIcon />,
    },
    {
      id: 8,
      title: "Inventory Management",
      description: [
        "Inventory Planning",
        "Warehouse Management",
        "Bin Management",
      ],
      icon: <PrecisionManufacturingOutlinedIcon />,
    },
  ];
  return (
    <>
      <div
        style={{
          maxWidth: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h1 className="text-modules">Easy-to-integrate Modules</h1>
        <h4>Never before has software customization been so easy!</h4>
      </div>
      <div style={{ margin: "5%" }}>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(250px, 100%),1fr))",
            gap: 4,
          }}
        >
          {cards.map((card, index) => (
            <Card className="card">
              <CardActionArea
                onClick={() => setSelectedCard(index)}
                data-active={selectedCard === index ? "" : undefined}
                sx={{
                  height: "100%",
                  "&[data-active]": {
                    backgroundColor: "action.selected",
                    "&:hover": {
                      backgroundColor: "action.selectedHover",
                    },
                  },
                }}
              >
                <CardContent sx={{ height: "100%" }}>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ color: "#EB6767" }}
                  >
                    {card.title} {card.icon}
                  </Typography>
                  <br />
                  <ul>
                    {card.description.map((val, id) => {
                      return (
                        <Typography variant="body2" color="text.secondary">
                          <li key={id}>{val}</li>
                        </Typography>
                      );
                    })}
                  </ul>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </div>
    </>
  );
};
export default Modules;
