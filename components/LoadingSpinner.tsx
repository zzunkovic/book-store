interface LoadingSpinnerProps {
  fullscreen: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ fullscreen }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${
        fullscreen ? "h-screen" : "h-full"
      }`}
    >
      <div className="animate-spin rounded-full border-t-4 border-black border-solid h-16 w-16"></div>
    </div>
  );
};

export default LoadingSpinner;
