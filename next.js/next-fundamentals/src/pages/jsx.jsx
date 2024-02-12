import Layout from '../components/Layout'

export default function JSX() {
  const a = 3;
  const b = 3;

  return (
    <Layout title="understand JSX">
      <div>
        <h2>JSX</h2>
        {a * b}
      </div>
    </Layout>
  );
}
