import { PostData } from "@/types";
import NoteForm from "./NoteForm";

type Props = {
  data: PostData[],
};

export default function PostList({ data }: Props) {
  return (
    <div>
      {data && data.map((post, idx) => (
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box" key={post.id}>
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            {post.date}
          </div>
          <div className="collapse-content">
            {post.body}
          </div>

          <label htmlFor={`edit-note=${idx}`} className="btn">Edit note</label>
          <input type="checkbox" id={`edit-note=${idx}`} className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <NoteForm id={`edit-note=${idx}`} data={post} />
            </div>
          </div>
        </div>
      ))
      }
    </div >
  )
}


