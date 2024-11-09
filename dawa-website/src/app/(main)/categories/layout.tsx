import Layout from '@/components/layout';
export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
