// "use client";
// import React, { useState } from "react";

// // Sample patient data
// const patients = [
//   {
//     name: "Gonzalez Maria",
//     therapist: "Alkhaman M",
//     insurance: "SED",
//     visits: {
//       1: "V",
//       2: "V",
//       4: "E",
//       6: "H",
//     },
//   },
//   {
//     name: "Smith John",
//     therapist: "Alkhaman H",
//     insurance: "WCIP",
//     visits: {
//       2: "V",
//       4: "V",
//       7: "D",
//       10: "N",
//     },
//   },
//   {
//     name: "Ali Khan",
//     therapist: "Alkhaman M",
//     insurance: "SED",
//     visits: {
//       5: "E",
//       8: "V",
//       12: "D",
//     },
//   },
// ];

// // Color map for visit types
// const visitColors = {
//   V: "bg-green-300 text-green-900 font-bold", // Visit
//   E: "bg-yellow-300 text-yellow-900 font-bold", // Evaluation
//   D: "bg-red-300 text-red-900 font-bold", // Discharge
//   H: "bg-orange-300 text-orange-900 font-bold", // Hospitalization
//   N: "bg-gray-300 text-gray-900 font-bold", // Non-Visit
// };

// export default function PT_Dashboard() {
//   const [month, setMonth] = useState(8); // August (default)
//   const [year, setYear] = useState(2025);
//   const [search, setSearch] = useState("");
//   const [therapistFilter, setTherapistFilter] = useState("");

//   // Days in month
//   const daysInMonth = new Date(year, month, 0).getDate();
//   const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

//   // Filters
//   const filteredPatients = patients.filter(
//     (p) =>
//       p.name.toLowerCase().includes(search.toLowerCase()) &&
//       (therapistFilter ? p.therapist === therapistFilter : true)
//   );

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">📅 Physical Therapy Dashboard</h1>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search patient..."
//           className="border rounded p-2 w-64"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select
//           className="border rounded p-2"
//           value={therapistFilter}
//           onChange={(e) => setTherapistFilter(e.target.value)}
//         >
//           <option value="">All Therapists</option>
//           {[...new Set(patients.map((p) => p.therapist))].map((t) => (
//             <option key={t} value={t}>
//               {t}
//             </option>
//           ))}
//         </select>

//         <select
//           className="border rounded p-2"
//           value={month}
//           onChange={(e) => setMonth(Number(e.target.value))}
//         >
//           {Array.from({ length: 12 }, (_, i) => (
//             <option key={i + 1} value={i + 1}>
//               {new Date(0, i).toLocaleString("default", { month: "long" })}
//             </option>
//           ))}
//         </select>

//         <input
//           type="number"
//           className="border rounded p-2 w-28"
//           value={year}
//           onChange={(e) => setYear(Number(e.target.value))}
//         />
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="border-collapse border border-gray-400 text-sm min-w-[1200px]">
//           <thead>
//             <tr>
//               <th className="border p-2 bg-gray-200">Patient</th>
//               <th className="border p-2 bg-gray-200">Therapist</th>
//               <th className="border p-2 bg-gray-200">Insurance</th>
//               {days.map((day) => (
//                 <th
//                   key={day}
//                   className="border p-2 bg-gray-200 text-center min-w-[30px]"
//                 >
//                   {day}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPatients.map((patient, idx) => (
//               <tr key={idx} className="hover:bg-gray-50">
//                 <td className="border p-2 font-medium">{patient.name}</td>
//                 <td className="border p-2">{patient.therapist}</td>
//                 <td className="border p-2">{patient.insurance}</td>
//                 {days.map((day) => {
//                   const type = patient.visits[day];
//                   return (
//                     <td
//                       key={day}
//                       className={`border p-2 text-center ${
//                         type ? visitColors[type] : ""
//                       }`}
//                     >
//                       {type || ""}
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState } from "react";

const visitColors = {
  V: "bg-green-300 text-green-900 font-bold",
  E: "bg-yellow-300 text-yellow-900 font-bold",
  D: "bg-red-300 text-red-900 font-bold",
  H: "bg-orange-300 text-orange-900 font-bold",
  N: "bg-gray-300 text-gray-900 font-bold",
};

const visitTypes = ["V", "E", "D", "H", "N"];

export default function PT_Dashboard() {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Ali Khan",
      therapist: "Dr. Ahmad",
      insurance: "SED",
      visits: {
        "2025-08-15": "V",
        "2025-08-16": "E",
        "2025-08-17": "D",
      },
    },
    {
      id: 2,
      name: "Sara Bano",
      therapist: "Dr. Ayesha",
      insurance: "MED",
      visits: {
        "2025-08-15": "H",
        "2025-08-16": "V",
      },
    },
  ]);

  const year = 2025;
  const month = 8; // August
  const daysInMonth = new Date(year, month, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Function to change visit type on click
  const handleCellClick = (patientId, dateKey) => {
    setPatients((prev) =>
      prev.map((p) =>
        p.id === patientId
          ? {
              ...p,
              visits: {
                ...p.visits,
                [dateKey]: getNextVisitType(p.visits[dateKey]),
              },
            }
          : p
      )
    );
  };

  // Helper: rotate through visit types
  const getNextVisitType = (current) => {
    if (!current) return "V"; // default start with V
    const index = visitTypes.indexOf(current);
    return visitTypes[(index + 1) % visitTypes.length];
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        📅 Physical Therapy Dashboard ({year}-{month})
      </h1>

      <div className="overflow-x-auto">
        <table className="border-collapse border border-gray-400 text-sm min-w-[1200px]">
          <thead>
            <tr>
              <th className="border p-2 bg-gray-200">Patient</th>
              <th className="border p-2 bg-gray-200">Therapist</th>
              <th className="border p-2 bg-gray-200">Insurance</th>
              {days.map((day) => (
                <th key={day} className="border p-2 bg-gray-200 text-center">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className="border p-2">{patient.name}</td>
                <td className="border p-2">{patient.therapist}</td>
                <td className="border p-2">{patient.insurance}</td>
                {days.map((day) => {
                  const dateKey = `${year}-${String(month).padStart(
                    2,
                    "0"
                  )}-${String(day).padStart(2, "0")}`;
                  const type = patient.visits?.[dateKey];
                  return (
                    <td
                      key={day}
                      className={`border p-4 text-center cursor-pointer ${
                        type ? visitColors[type] : ""
                      }`}
                      onClick={() => handleCellClick(patient.id, dateKey)}
                    >
                      {type || ""}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
