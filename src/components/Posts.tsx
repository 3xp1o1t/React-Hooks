import useApiHook from '../hooks/useApiHook';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const { data, loading, error } = useApiHook<Posts[]>(
    'https://jsonplaceholder.typicode.com/posts',
  );

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  if (data) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxHeight: 150,
          overflow: 'scroll',
          overflowX: 'hidden',
          maxWidth: '100%',
          border: '1px solid black',
          padding: '10px',
        }}
      >
        {data.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }

  return <div>No data.</div>;
};

export default Posts;
