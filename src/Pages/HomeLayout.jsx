import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Navbar";

function HomeLayout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isPageLoading = navigation.state === "loading";
  const random = "newContext";

  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? (
          <div className="loading" />
        ) : (
          <Outlet context={{ random }} />
        )}
      </section>
    </>
  );
}
export default HomeLayout;
