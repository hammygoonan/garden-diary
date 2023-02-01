import { PostData } from "@/types";
import NoteForm from "./NoteForm"
import PostList from "./PostList"

type Props = {
  data: PostData[]
};

export default function HomePage({ data }: Props) {
  return <>
    <label htmlFor="add-note" className="btn">Add note</label>
    <input type="checkbox" id="add-note" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
        <NoteForm id="add-note" />
      </div>
    </div>

    <button className="p-8">Add reminder</button>
    <input placeholder='search' />
    <PostList data={data} />
  </>
}
