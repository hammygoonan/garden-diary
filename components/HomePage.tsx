import AddNote from "./AddNote"
import PostList from "./PostList"

type Props = {
  data: {
    id: string,
    body: string,
    date: string,
    createdAt: string,
    updatedAt: string,
  }[]
};

export default function HomePage({ data }: Props) {
  return <>
    <label htmlFor="add-note" className="btn">Add note</label>
    <input type="checkbox" id="add-note" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
        <AddNote id="add-note" />
      </div>
    </div>

    <button className="p-8">Add reminder</button>
    <input placeholder='search' />
    <PostList data={data} />
  </>
}
