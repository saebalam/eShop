import { Grid } from "@mui/material";
import Image from "next/image";

const HomePageBanner = () => {
  return (
    <Grid className="relative">
      <Image
        src="https://plus.unsplash.com/premium_photo-1663957835183-a11d378f63b8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="banner-image"
        width={200}
        height={200}
        style={{ width: "90%", height: "300px", margin: "20px auto" }}
      />
    </Grid>
  );
};

export default HomePageBanner;
