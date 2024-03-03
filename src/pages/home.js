import { Avatar, Box, Card, Divider, Typography } from "@mui/joy";
import React from "react";
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Sidebar from '../components/SideBar.tsx';
import { HouseRounded } from "@mui/icons-material";
import { Breadcrumb } from "react-bootstrap";
import "../index.css";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
//import { useNavigate } from "react-router";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
);
export const options = {
  responsive: true,
};
const labels = ['Sections', 'Categories', 'trips', 'Orders'];
const max = 100;
const min = 0;
export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => {
        const minCeiled = Math.ceil(min)
        const maxFloored = Math.floor(max)
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
      }),
      backgroundColor: 'rgba(5, 107, 207,0.7)',
    },
  ],
};
const Home = () => {
  //const x = useNavigate()
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Sidebar />
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: { xs: 2, md: 6 },
            pt: {
              xs: 'calc(12px + var(--Header-height))',
              sm: 'calc(12px + var(--Header-height))',
              md: 3,
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
          }}
        >
          <Breadcrumb>
            <Typography level="text-sm" startDecorator={<HouseRounded />
            } component="p">
              Dashboard
            </Typography>
          </Breadcrumb>
          <Box
            sx={{
              display: 'flex',
              mb: 1,
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'start', sm: 'center' },
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            <Typography level="h2" component="h1">
              Dashboard
            </Typography>
          </Box>

          <Box class="parent d-flex flex-wrap-reverse "  >
            <Box className="LeftSection"  >
              <Box className="row" gap={2}>
                <Card className="div2 position-relative" >
                  <AttachMoneyRoundedIcon sx={{ color: "white", fontSize: "40px" }} />
                  <Typography sx={{ color: "white", fontSize: "40px" }}>
                    $500.00
                  </Typography>
                  <Typography level="title-lg" sx={{ color: "rgba(255, 255, 255,0.4)" }}>
                    Total Earning
                  </Typography>
                </Card>

                <Card className="div3 position-relative">
                  <LocalMallRoundedIcon sx={{ color: "white", fontSize: "40px" }} />
                  <Typography sx={{ color: "white", fontSize: "40px" }}>
                    $961
                  </Typography>
                  <Typography level="title-lg" sx={{ color: "rgba(255, 255, 255,0.7)" }}>
                    Total Order
                  </Typography>
                  <Typography level="title-sm" sx={{ color: "rgba(255, 255, 255,0.7)" }}>
                    per month
                  </Typography>
                </Card>
              </Box>

              <Card className="chart ">
                <Bar options={options} data={data} />
              </Card>
            </Box>

            <Box className="rigthSection">
              <Box className="div4 d-flex" sx={{ flexDirection: "column" }}>
                <Card className="rightRowOne  d-flex flex-wrap ">
                  <StorefrontRoundedIcon sx={{ color: "white", fontSize: "25px" }} />
                  <Typography sx={{ color: "white", fontSize: "20px" }}>
                    $203K
                  </Typography>
                  <Typography sx={{ color: "rgb(255, 255, 255)" }}>
                    total Income
                  </Typography>
                </Card>
                <Card className="rightRowTwo d-flex flex-wrap">
                  <StorefrontRoundedIcon sx={{ color: "#673ab7", fontSize: "25px" }} />
                  <Typography sx={{ fontSize: "20px" }}>
                    $203K
                  </Typography>
                  <Typography>
                    total Income
                  </Typography>
                </Card>
              </Box>
              <Card className="div5 d-flex flex-wrap" >
                <Box className="row">
                  <Avatar
                    size="lg"
                    variant="outlined"
                  ></Avatar>
                  <Box>oh ! hi <b>Siriwat K.</b></Box>
                </Box>
                <Box>
                  <Typography
                    id="ellipsis-list-demo"
                    level="body-xs"
                    textTransform="uppercase"
                    sx={{ letterSpacing: '0.15rem' }}
                  >
                    Inbox
                  </Typography>
                  <List
                    aria-labelledby="ellipsis-list-demo"
                    sx={{ '--ListItemDecorator-size': '56px' }}
                  >
                    <ListItem>
                      <ListItemDecorator>
                        <Avatar src="/static/images/avatar/1.jpg" />
                      </ListItemDecorator>
                      <ListItemContent>
                        <Typography level="title-sm">Brunch this weekend?</Typography>
                        <Typography level="body-sm">
                          I'll be in your neighborhood doing errands this Tuesday.
                        </Typography>
                      </ListItemContent>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemDecorator>
                        <Avatar src="/static/images/avatar/2.jpg" />
                      </ListItemDecorator>
                      <ListItemContent>
                        <Typography level="title-sm">Summer BBQ</Typography>
                        <Typography level="body-sm" >
                          Wish I could come, but I'm out of town this Friday.
                        </Typography>
                      </ListItemContent>
                    </ListItem>
                  </List>
                </Box>

              </Card>
            </Box>
          </Box>
        </Box>
      </Box>

    </CssVarsProvider >
  )
}
export default Home
