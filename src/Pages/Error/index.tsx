export const ErrorPage = () => {
  return (
    <>
      <div className="w-full h-screen bg-jet text-whitesmoke flex flex-col justify-center items-center text-center gap-4">
        <h1 className="text-5xl">404 Not Found</h1>
        <button
          className="py-4 px-6 bg-living-coral text-whitesmoke rounded-lg"
          onClick={() => {
            history.back();
          }}
        >
          &lt; Back
        </button>
      </div>
    </>
  );
};
