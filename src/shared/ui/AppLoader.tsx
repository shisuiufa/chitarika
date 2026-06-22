export default function AppLoader() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <img
        src="./logo.png"
        alt="Читарика"
        className="size-60 object-contain animate-logo-pulse"
      />
    </div>
  );
}
