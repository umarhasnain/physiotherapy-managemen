"use client";
export default function OutOfStock() {
  const drugs = [
    { id: 1, name: "Vitamin C", expire: "2025-04-13", mfg: "2021-12-13", price: 1500, qty: 150 },
    { id: 2, name: "Paracetamol", expire: "2025-05-13", mfg: "2022-04-04", price: 4500, qty: 225 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="font-bold mb-4">Out of Stock</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Drug Name</th>
              <th className="px-4 py-2">Expire Date</th>
              <th className="px-4 py-2">Manufacture Date</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">QTY</th>
            </tr>
          </thead>
          <tbody>
            {drugs.map((drug) => (
              <tr key={drug.id} className="border-b">
                <td className="px-4 py-2">{drug.id}</td>
                <td className="px-4 py-2">{drug.name}</td>
                <td className="px-4 py-2">{drug.expire}</td>
                <td className="px-4 py-2">{drug.mfg}</td>
                <td className="px-4 py-2">{drug.price}</td>
                <td className="px-4 py-2">{drug.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
