import React from "react";

type Props = {
  id: string | undefined;
  name: string | undefined;
};

const TenantDetails = ({ id, name }: Props) => {
  if (!id && !name)
    return (
      <div className=" min-h-screen">
        <h1>No Tenant Found</h1>
      </div>
    );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tenant Details</h1>
      <p>
        <strong>ID:</strong> {id}
      </p>
      <p>
        <strong>Name:</strong> {name}
      </p>
    </div>
  );
};

export default TenantDetails;
