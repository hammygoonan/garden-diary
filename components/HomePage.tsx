import AddNote from "./AddNote"

export default function HomePage() {
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
    List of notes:
    <ul>
      <li>Note</li>
    </ul>
  </>
}
