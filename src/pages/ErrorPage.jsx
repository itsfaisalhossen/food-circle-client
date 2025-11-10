import BtnPrimary from "../components/BtnPrimary";
import errorimg from "../assets/illustration.svg";
import Container from "../components/Container";

const ErrorPage = () => {
  return (
    <section className="bg-white">
      <Container>
        <div className="min-h-screen px-6 py-12 lg:flex lg:items-center lg:gap-12">
          <div className="w-full lg:w-1/2">
            <p className="text-xl font-medium text-red-500">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-black md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 text-black">
              Sorry, the page you are looking for doesn't exist. Here are some
              helpful links:
            </p>

            <div className="flex items-center mt-6 gap-x-3">
              <BtnPrimary link={"/"} text={"Take me home"} />
            </div>
          </div>

          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <img
              className="w-full max-w-lg lg:mx-auto"
              src={errorimg}
              alt="Not found illustration"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default ErrorPage;
