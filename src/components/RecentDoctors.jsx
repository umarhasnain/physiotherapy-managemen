"use client";
export default function RecentDoctors() {
  const doctors = [
    { id: 1, name: "Sam", mobile: "0785553321", address: "Kalutara", charge: 2500, education: "MBBS", dob: "1986-04-13", status: "Online" },
    { id: 2, name: "John", mobile: "0747525190", address: "Kandy", charge: 2500, education: "Phd", dob: "1970-05-13", status: "Offline" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="font-bold mb-4">Recent Doctors</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Mobile</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Charge</th>
              <th className="px-4 py-2">Education</th>
              <th className="px-4 py-2">DOB</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc) => (
              <tr key={doc.id} className="border-b">
                <td className="px-4 py-2">{doc.id}</td>
                <td className="px-4 py-2">{doc.name}</td>
                <td className="px-4 py-2">{doc.mobile}</td>
                <td className="px-4 py-2">{doc.address}</td>
                <td className="px-4 py-2">{doc.charge}</td>
                <td className="px-4 py-2">{doc.education}</td>
                <td className="px-4 py-2">{doc.dob}</td>
                <td className="px-4 py-2">
                  <span className={`px-3 py-1 rounded-full text-xs ${doc.status === "Online" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {doc.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
