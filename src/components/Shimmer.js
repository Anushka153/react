const Shimmer = () => {
  return (
   
    <div className="shimmer-container">
       {[... new Array(15).keys()].map((item, index) => (
      <div className="shimmer-card"></div>
    ))}
    </div>
  );
};

export default Shimmer;