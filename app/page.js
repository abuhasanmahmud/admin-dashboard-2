export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "http://admin-dashboard-2-three.vercel.app"
    : "http://localhost:3000";
const Home = () => {
  console.log("url..........", baseUrl, "porcess.env===", process.env.NODE_ENV);
  return (
    <>
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">Dashboard Home</div>
      </main>
    </>
  );
};

export default Home;
