import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Container,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const earningsData = [
  { day: "الإثنين", earnings: 100 },
  { day: "الثلاثاء", earnings: 150 },
  { day: "الأربعاء", earnings: 120 },
  { day: "الخميس", earnings: 200 },
  { day: "الجمعة", earnings: 180 },
  { day: "السبت", earnings: 220 },
  { day: "الأحد", earnings: 240 },
];

const recentTrips = [
  {
    date: "01 أغسطس 2025",
    pickup: "الجادة الخامسة",
    dropoff: "الشارع العاشر",
    fare: "18.40$",
  },
  {
    date: "02 أغسطس 2025",
    pickup: "الحديقة المركزية",
    dropoff: "شارع وول",
    fare: "22.10$",
  },
  {
    date: "03 أغسطس 2025",
    pickup: "الشارع الرئيسي",
    dropoff: "جسر بروكلين",
    fare: "16.75$",
  },
];

const summary = [
  { label: "رحلات اليوم", value: "6" },
  { label: "أرباح اليوم", value: "135.00$" },
  { label: "رحلات الأسبوع", value: "42" },
  { label: "أرباح الأسبوع", value: "845.50$" },
];

const DriverDashboard = () => {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh", py: 4, direction: "rtl" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          لوحة تحكم السائق
        </Typography>

        {/* Summary Cards using Flexbox */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          {summary.map((item, index) => (
            <Card
              key={index}
              sx={{
                flex: "1 1 200px",
                minWidth: "200px",
              }}
            >
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary" textAlign="right">
                  {item.label}
                </Typography>
                <Typography variant="h5" fontWeight="bold" textAlign="right">
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Main Content Row (Trips & Sidebar) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
          }}
        >
          {/* Recent Trips Table */}
          <Box sx={{ flex: 2 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom textAlign="right">
                  الرحلات الأخيرة
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">التاريخ</TableCell>
                      <TableCell align="right">مكان الانطلاق</TableCell>
                      <TableCell align="right">مكان الوصول</TableCell>
                      <TableCell align="right">الأجرة</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentTrips.map((trip, index) => (
                      <TableRow key={index}>
                        <TableCell align="right">{trip.date}</TableCell>
                        <TableCell align="right">{trip.pickup}</TableCell>
                        <TableCell align="right">{trip.dropoff}</TableCell>
                        <TableCell align="right">{trip.fare}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ mt: 2, cursor: "pointer" }}
                  textAlign="right"
                >
                  عرض جميع الرحلات
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Sidebar (Earnings Chart + Rating) */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Weekly Earnings Chart */}
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom textAlign="right">
                  أرباح الأسبوع
                </Typography>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={earningsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" reversed />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="earnings"
                      stroke="#1976d2"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Driver Rating */}
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom textAlign="right">
                  تقييم السائق
                </Typography>
                <Typography variant="h3" fontWeight="bold" textAlign="right">4.9</Typography>
                <Rating value={4.9} precision={0.1} readOnly size="large" sx={{ justifyContent: 'flex-end', display: 'flex' }} />
                <Typography variant="body2" color="textSecondary" textAlign="right">
                  بناءً على 320 تقييم
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DriverDashboard;
