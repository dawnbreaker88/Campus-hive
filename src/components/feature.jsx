const FeatureCard = ({ img, title, description, icon }) => (
    <div className="bg-[#101010] p-4 rounded-lg shadow-md">
      <img src={img} className="rounded-md mb-4 w-full h-40 object-cover" />
      <h3 className="text-lg font-semibold">{icon} {title}</h3>
      <p className="text-gray-400 text-sm mt-1">{description}</p>
    </div>
  );
  
    export default FeatureCard;
  