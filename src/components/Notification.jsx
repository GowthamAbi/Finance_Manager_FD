const Notification = ({ message, type }) => {
  if (!message) return null;

  return (
      <div className={`p-4 mb-4 rounded ${type === "success" ? "bg-green-500" : "bg-red-500"} text-white`}>
          {message}
      </div>
  );
};

export default Notification;
