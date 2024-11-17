import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2F45BE",
        color: "white",
        padding: "10px 20px 10px 20px",
      }}
    >
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography>programmed by yoomin (rachel) jung</Typography>

        <Typography>contact: yjung2027@chadwickschool.org</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
