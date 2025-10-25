import React, { useEffect, useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications([
      "New lead: Wedding in Pune",
      "Client viewed your profile",
      "New lead: Corporate event in Delhi",
    ]);
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Notifications</h3>
      <ul className="list-disc pl-6 space-y-2">
        {notifications.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
