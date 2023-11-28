export function EntryForm() {
  return (
    <form>
      <h2> NEW ENTRY </h2>
      <label htmlFor="motto">Motto</label>
      <input type="text" name="motto" id="motto" />

      <label htmlFor="notes">Notes</label>
      <textarea name="notes" id="notes" />

      <button type="submit">Create</button>
    </form>
  );
}
