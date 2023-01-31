
type Props = {
  data: {
    id: string,
    body: string,
    date: string,
    createdAt: string,
    updatedAt: string,
  }[]
};

export default function PostList({ data }: Props) {

  return (
    <div>
      {data && data.map((post) => (
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box" key={post.id}>
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            {post.date}
          </div>
          <div className="collapse-content">
            {post.body}
          </div>
        </div>
      ))}
    </div>
  )
}


