import TenantDetails from "@/components/dashboard/super-admin/tenants/TenantDetails";

type Props = {
  params: {
    id: string;
  };
};

async function getTenantById(id: string) {
  const mockTenants = [
    { id: "uhqy92292828", name: "Tenant A" },
    { id: "hds8723872", name: "Tenant B" },
  ];

  const tenant: { id: string; name: string } | undefined = mockTenants?.find(
    (t) => t.id === id
  );

  if (!tenant) {
    return null;
  }

  return tenant;
}

export async function generateMetadata({ params }: Props) {
  const tenant = await getTenantById(params?.id);

  if (!tenant)
    return {
      title: `Tenant not found`,
      description: `Details for Tenant not found`,
    };

  return {
    title: `${tenant.name} | Super Admin Dashboard`,
    description: `Details for ${tenant.name}`,
  };
}

export default async function TenantDetailsPage({ params }: Props) {
  const tenant = await getTenantById(params?.id);

  return <TenantDetails id={tenant?.id} name={tenant?.name} />;
}
